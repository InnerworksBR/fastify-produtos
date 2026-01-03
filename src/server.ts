import fastify from 'fastify'
import { produtoRoutes } from './routes/produto.routes'
import 'dotenv/config'
import { errorHandler } from './errors/errorHandler'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

const app = fastify({ logger:true })

app.register(swagger,{
    swagger: {
        info: {
            title: 'API de Produtos',
            description: 'API Construída com Fastify + Prisma',
            version: '1.0.0'
        },
        consumes: ['application/json'],
        produces: ['application/json']
    }
})

app.register(swaggerUI, {
    routePrefix: '/docs'
})

app.get('/health', async() => {
    return {status: 'ok'}
})
app.setErrorHandler(errorHandler)

app.register(produtoRoutes)

app.listen({ port: 3000 })