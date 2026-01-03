import { Produto, ProdutoBody } from "../types/produto.types"
import { prisma } from "../lib/prisma"
import { AppError } from "../errors/AppError"


export async function listarProdutos(): Promise <Produto[]>{
    return prisma.produto.findMany()
}


export async function criarProduto(body: ProdutoBody): Promise<Produto>{
    
    const PRECO_MAXIMO = 100
    const existe = await produtoJaExiste(body.nome)

    if(existe){
        throw new AppError('Produto com este nome ja existe', 409)
    }

    if(body.preco > PRECO_MAXIMO){
        throw new AppError('Preço acima do permitido', 400)
    }
    
    return await prisma.produto.create({
        data: {
            nome: body.nome,
            preco: body.preco
        }
    })
}

export async function buscarProdutoPorId(id: string): Promise<Produto>{

    const produto = await prisma.produto.findUnique({ where: {id}})

    if (!produto) {
        throw new AppError('Produto não encontrado', 404)
    }
    return produto
}

export async function atualizarProduto(id: string, body: ProdutoBody): Promise <Produto>{

    const produto = await buscarProdutoPorId(id)

     if (!produto) {
        throw new AppError('Produto não encontrado', 404)
    }

    const produtoAtualizado = await prisma.produto.update({
        where: { id },
        data: {
            nome: body.nome,
            preco: body.preco
        }
    })

    return produtoAtualizado
}

export async function deletarProduto(id: string): Promise<void>{

    const produto = await buscarProdutoPorId(id)

    if (!produto) {
        throw new AppError('Produto não encontrado', 404)
    }

    const emUso = false//Simulação

    if(emUso){
        throw new AppError('Produto não pode ser removido', 409)
    }

    await prisma.produto.delete({ where: {id}})


}

async function produtoJaExiste(nome: string): Promise<boolean>{
    const produto = await prisma.produto.findFirst({
        where: {nome: nome}
    })

    return !!produto
}