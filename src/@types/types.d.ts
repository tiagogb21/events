import "@fastify/jwt";

declare module "@fastify/jwt" {
    export interface FastifyJWT {
        user: {
            role: "ORGANIZER" | "MEMBER";
            sub: string;
        };
    }
}
