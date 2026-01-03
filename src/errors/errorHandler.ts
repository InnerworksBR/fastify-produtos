import { FastifyError, FastifyReply, FastifyRequest } from "fastify"
import { AppError } from "./AppError"

export function errorHandler(
    error: FastifyError | Error,
    request: FastifyRequest,
    reply: FastifyReply
){
    if (error instanceof AppError){
        return reply.status(error.statusCode).send({
            error: error.message,
        })
    }

    console.error(error)
    return reply.status(500).send({
        error: 'Erro interno do servidor'
    })
}