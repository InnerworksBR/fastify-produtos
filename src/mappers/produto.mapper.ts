import { Produto } from "../types/produto.entity"
import { ProdutoResponse } from "../types/produto.response"

export function mapProdutoToResponse(produto: Produto): ProdutoResponse{
    return{
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco
    }
}