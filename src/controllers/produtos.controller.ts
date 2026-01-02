import { FastifyReply, FastifyRequest } from "fastify";
import { Produto, ProdutoBody } from "../types/produto.types";
import { criarProduto, listarProdutos } from "../services/produto.service";

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