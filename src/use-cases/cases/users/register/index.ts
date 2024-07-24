import { User } from "@prisma/client";
import { hash } from "bcryptjs";

import { UsersRepository } from "@/repositories/users-repository";
import { RegisterUseCaseRequest, RegisterUseCaseResponse } from "@/types/interfaces/users/Register";
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error";

export class RegisterUseCase {
    constructor(private usersRepository: UsersRepository) {}

    async execute({
        name,
        email,
        password,
        role,
    }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
        const password_hash = await hash(password, 6);

        const userWithSameEmail = await this.usersRepository.findByEmail(email);

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError();
        }

        const user = await this.usersRepository.create({
            name,
            email,
            password_hash,
            role,
        });

        return {
            user,
        };
    }
}
