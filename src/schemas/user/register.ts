import { Role } from "@prisma/client";
import { z } from "zod";

const roleEnum = z.enum([Role.USER, Role.ORGANIZER]);

export const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: roleEnum.default(Role.USER),
});
