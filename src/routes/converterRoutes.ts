import { FastifyInstance } from 'fastify';

export const converterRoutes = (
  server: FastifyInstance,
  _: any,
  done: () => void,
) => {
  server.get('/v1/converter/image', (req, res) => {
    console.log(req.parts());
    res.send({
      teste: 'teste',
    });
  });

  done();
};
