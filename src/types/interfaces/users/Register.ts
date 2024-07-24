import { Role, User } from "@prisma/client";

export interface RegisterUseCaseRequest {
    name: string;
    email: string;
    password: string;
    role: Role;
}

export interface RegisterUseCaseResponse {
    user: User;
}
