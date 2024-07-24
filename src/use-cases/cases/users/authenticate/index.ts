import { compare } from "bcryptjs";

import { UsersRepository } from "@/repositories/users-repository";
import { AuthenticateUseCaseRequest, AuthenticateUseCaseResponse } from "@/types/interfaces/users/Authenticate";
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";

export class AuthenticateUseCase {
    constructor(private usersRepository: UsersRepository) {}

    async execute({
        email,
        password,
    }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) throw new InvalidCredentialsError();

        const doestPasswordMatches = await compare(
            password,
            user.password_hash
        );

        if (!doestPasswordMatches) throw new InvalidCredentialsError();

        return {
            user,
        };
    }
}
