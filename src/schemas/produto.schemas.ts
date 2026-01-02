export const produtoSchema = {
    body: {
        type: 'object',
        required: ['nome', 'preco'],
        properties: {
            nome: {type: 'string'},
            preco: {type: 'number'}
        }
    }
}