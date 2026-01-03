import { Produto, ProdutoBody } from "../types/produto.types"
import { prisma } from "../lib/prisma"


export async function listarProdutos(): Promise <Produto[]>{
    return prisma.produto.findMany()
}


export async function criarProduto(body: ProdutoBody): Promise<Produto>{
    return await prisma.produto.create({
        data: {
            nome: body.nome,
            preco: body.preco
        }
    })
}

export async function buscarProdutoPorId(id: string): Promise<Produto | null>{

    const produto = await prisma.produto.findUnique({ where: {id}})

    if(!produto){
        return null
    }
    return produto
}

export async function atualizarProduto(id: string, body: ProdutoBody): Promise <Produto | null>{

    const produto = await buscarProdutoPorId(id)

    if(!produto){
        return null
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

export async function deletarProduto(id: string): Promise<boolean>{

    const produto = buscarProdutoPorId(id)
    if (!produto) {
        return false
    }

    await prisma.produto.delete({ where: {id}})

    return true

}