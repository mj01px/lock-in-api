import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";

export class ListUsersService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepository);

        return await usersRepository.createQueryBuilder("user").leftJoinAndSelect("user.profile", "profile").getMany();
    }

    async findByID(id: any) {
        const usersRepository = getCustomRepository(UsersRepository);

        return await usersRepository.createQueryBuilder("user")
            .leftJoinAndSelect("user.profile", "profile")
            .where("user.id = :id", { id })
            .getOne();
    }
}