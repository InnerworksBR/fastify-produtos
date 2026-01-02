export const produtoSchema = {
    body: {
        type: 'object',
        required: ['nome', 'preco'],
        properties: {
            nome: {type: 'string', minLength: 1},
            preco: {type: 'number', exclusiveMinimum: 0}
        }
    }
}