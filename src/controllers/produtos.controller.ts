import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { Produto, ProdutoBody } from "../types/produto.types";
import { atualizarProduto, buscarProdutoPorId, criarProduto, deletarProduto, listarProdutos } from "../services/produto.service";

export async function listarProdutosController(
    request: FastifyRequest,
    reply: FastifyReply
){
    reply.code(200)
    return await listarProdutos()
}

export async function criarProdutoController(
    request: FastifyRequest<{Body: ProdutoBody}>,
    reply: FastifyReply
){

    
    const nome = request.body.nome
    const preco = request.body.preco

    const produto = await criarProduto(nome, preco)
    
    reply.code(201)
    return produto
}

export async function buscarProdutoPorIdController(
    request: FastifyRequest<{Params: {id: string}}>,
    reply: FastifyReply
){
    const id = request.params.id

    const produto =  await buscarProdutoPorId(id)
    if(!produto){
        reply.code(404)
        return { error: 'Produto não encontrado'}
    }

    reply.code(200)
    return produto
}

export async function atualizarProdutoController(
    request: FastifyRequest<{
        Params: {id: string},
        Body: ProdutoBody
    }>,
    reply: FastifyReply
){
    const id = request.params.id
    const nome = request.body.nome
    const preco = request.body.preco

    const produto = await atualizarProduto(id, nome, preco)

    if(!produto){
        reply.code(404)
        return { error: 'Produto não encontrado'}
    }

    reply.code(200)
    return produto
}

export async function deletarProdutoController(
    request: FastifyRequest<{ Params: {id: string}}>,
    reply: FastifyReply
){
    const id = request.params.id
    const produto = await deletarProduto(id)

    if(produto === false){
        reply.code(404)
        return { error: 'Produto não encontrado'}
    }

    reply.code(200)
    return {message: 'Produto deletado'}
}