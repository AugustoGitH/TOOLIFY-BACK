import './env';
import fastify from 'fastify';
import fastifyMultipart from '@fastify/multipart';
import { converterRoutes } from './routes';

const server = fastify({ logger: true });

server.register(fastifyMultipart);
server.register(converterRoutes);

server.listen(
  {
    port: process.env.PORT,
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    server.log.info(`server running in ${address}`);
  },
);
