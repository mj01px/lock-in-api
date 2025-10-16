import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteUsersService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Invalid id");
        }

        const usersRepository = getCustomRepository(UsersRepository);
        const userAlreadyExist = await usersRepository.findOne(id);

        if (!userAlreadyExist) {
            throw new Error("User not found");
        }

        await usersRepository.delete(id);

        return {
            message: `User ${userAlreadyExist.username} deleted`,
        };
    }
}