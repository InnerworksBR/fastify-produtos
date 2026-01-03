import { FastifyInstance } from "fastify"
import { produtoSchema } from "../schemas/produto.schemas"
import { atualizarProdutoController, buscarProdutoPorIdController, criarProdutoController, deletarProdutoController, listarProdutosController } from "../controllers/produtos.controller"
import { produtoResponseSchema } from "../schemas/produto.response.schema"


export async function produtoRoutes(app: FastifyInstance){

    app.post('/produtos', {
        schema: {
            description: 'Cria um novo Produto',
            tags: ['Produtos'],
            body: produtoSchema.body,
            response: {
                201: produtoResponseSchema,
                400: {
                    type: 'object',
                    properties: {
                        error: {type: 'string'}
                    }
                },
                409: {
                    type: 'object',
                    propeties: {
                        error: {type:'string'}
                    }
                }
            }
        }
    }, criarProdutoController)

    app.get('/produtos',{
        schema: {
            description: 'Lista todos os produtos',
            tags: ['Produtos'],
            response: {
                200:  produtoResponseSchema
            }
        }
    }, listarProdutosController)

    app.get('/produtos/:id',{
        schema:{
            description: 'Busca produto pelo ID',
            tags: ['Produtos'],
            response: {
                200: produtoResponseSchema
            }
        }
    }, buscarProdutoPorIdController)

    app.put('/produtos/:id', {
        schema: {
            description: 'Atualiza um produto',
            tags: ['Produtos'],
            body: produtoSchema.body,
            response: {
                200: produtoResponseSchema
            }
        }
    }, atualizarProdutoController)
    
    app.delete('/produtos/:id',{
        schema: {
            description: 'Deleta um produto',
            tags: ['Produtos'],
            response: {
                200: {}
            }
        }
    }, deletarProdutoController)
}