import { User } from "@prisma/client";

export interface AuthenticateUseCaseRequest {
    email: string;
    password: string;
}

export interface AuthenticateUseCaseResponse {
    user: User;
}
