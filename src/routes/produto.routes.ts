import { FastifyInstance } from "fastify"
import { produtoSchema } from "../schemas/produto.schemas"
import { buscarProdutoPorIdController, criarProdutoController, listarProdutosController } from "../controllers/produtos.controller"


export async function produtoRoutes(app: FastifyInstance){

    app.get('/produtos', listarProdutosController)
    app.get('/produtos/:id', buscarProdutoPorIdController)
    app.post('/produtos', {schema: produtoSchema}, criarProdutoController)
}