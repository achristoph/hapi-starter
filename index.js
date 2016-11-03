const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3000, host: '127.0.0.1' });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => reply('Hello World\n'),
}
);

server.start(() => {
  console.log(`Server running at ${server.info.uri}`);
});
