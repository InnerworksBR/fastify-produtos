import {FastifyReply, FastifyRequest } from "fastify";
import { ProdutoBody } from "../types/produto.types";
import { atualizarProduto, buscarProdutoPorId, criarProduto, deletarProduto, listarProdutos } from "../services/produto.service";

export async function listarProdutosController(
    request: FastifyRequest,
    reply: FastifyReply
){
    return await listarProdutos()
}

export async function criarProdutoController(
    request: FastifyRequest<{Body: ProdutoBody}>,
    reply: FastifyReply
){

    const produto = await criarProduto(request.body)
    
    reply.code(201)
    return produto
}

export async function buscarProdutoPorIdController(
    request: FastifyRequest<{Params: {id: string}}>,
    reply: FastifyReply
){
    const id = request.params.id
    const produto =  await buscarProdutoPorId(id)

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
    const produto = await atualizarProduto(id, request.body)

    return produto
}

export async function deletarProdutoController(
    request: FastifyRequest<{ Params: {id: string}}>,
    reply: FastifyReply
){
    const id = request.params.id
    
    await deletarProduto(id)

    return {message: 'Produto deletado'}
}