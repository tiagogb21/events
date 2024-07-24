import z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .default("development"),
    DATABASE_URL: z.string().trim().min(1),
});

const envServer = envSchema.safeParse({
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
});

if (!envServer.success) {
    console.error(envServer.error.issues);
    throw new Error("There is an error with the server environment variables");
}

export const envServerSchema = envServer.data;