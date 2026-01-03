import fastify from 'fastify'
import { produtoRoutes } from './routes/produto.routes'
import 'dotenv/config'
import { errorHandler } from './errors/errorHandler'

const app = fastify({ logger:true })

app.get('/health', async() => {
    return {status: 'ok'}
})
app.setErrorHandler(errorHandler)

app.register(produtoRoutes)

app.listen({ port: 3000 })