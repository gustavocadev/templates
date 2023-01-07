import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions, // type for options,
  FastifyReply,
  FastifyRequest,
} from 'fastify';

const helloRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  app.get(
    '/api/hello',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { message: 'Hello world from fastify!' };
    }
  );
};

export default helloRoutes;
