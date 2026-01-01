import fastify from 'fastify'

const app = fastify({ logger:true })

app.get('/health', async() => {
    return {status: 'ok'}
})
app.listen({ port: 3000 })