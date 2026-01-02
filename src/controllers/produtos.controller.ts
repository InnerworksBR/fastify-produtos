import { FastifyReply, FastifyRequest } from "fastify";
import { listarProdutos } from "../services/produto.service";

export async function listarProdutosController(
    reply: FastifyReply
){
    reply.code(200)
    return await listarProdutos()
}