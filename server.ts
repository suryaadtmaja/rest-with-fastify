const fastify = require("fastify");
const path = require("path");
const autoload = require("fastify-autoload");
const { v4: uuidv4 } = require("uuid");
const createRequestId = () => uuidv4();

const server = fastify({
  ignoreTrailingSlash: true,
  logger: {
    genReqId: createRequestId,
    level: "info",
  },
});

server.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

server.listen(3000, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`server listening on ${address}`);
});
