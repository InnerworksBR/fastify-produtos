import { FastifyInstance } from "fastify"
import { produtoSchema } from "../schemas/produto.schemas"
import { listarProdutosController } from "../controllers/produtos.controller"

export async function produtoRoutes(app: FastifyInstance){

    app.get('/produtos', listarProdutosController)

}