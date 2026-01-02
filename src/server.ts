import fastify from 'fastify'
import { produtoRoutes } from './routes/produto.routes'

const app = fastify({ logger:true })

app.get('/health', async() => {
    return {status: 'ok'}
})

app.register(produtoRoutes)

app.listen({ port: 3000 })