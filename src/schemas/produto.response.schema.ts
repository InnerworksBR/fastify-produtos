export const produtoResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    nome: { type: 'string' },
    preco: { type: 'number' }
  }
}