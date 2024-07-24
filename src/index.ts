import fastify from "fastify";
import 'dotenv/config'

import { envServerSchema } from "./env";

const server = fastify();

server.get("/ping", async (request, reply) => {
    return "pong\n";
});

server.listen({ port: envServerSchema.PORT }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
