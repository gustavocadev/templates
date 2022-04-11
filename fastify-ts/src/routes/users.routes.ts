import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions, // type for options,
} from "fastify"

const UserRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  app.get("/api/users", async (request, reply) => {
    return { message: "Hello world from fastify :D" }
  })
}

export default UserRoutes
