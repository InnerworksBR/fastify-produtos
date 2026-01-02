import { Produto } from "../types/produto.types"

const produtos: Produto[] = []

export async function listarProdutos(){
    return produtos
}


export async function criarProduto(nome: string, preco: number){

    const id = String(produtos.length + 1)

    const produto: Produto = {
        id: id,
        nome: nome,
        preco: preco
    }

    produtos.push(produto)

    return produto
}

export async function buscarProdutoPorId(id: string){

    const produto = produtos.find(p => p.id === id)

    if(!produto){
        return null
    }
    return produto
}

export async function atualizarProduto(id: string, nome: string, preco: number){

    const produto = await buscarProdutoPorId(id)
    if(!produto){
        return null
    }

    produto.nome = nome
    produto.preco = preco

    return produto
}