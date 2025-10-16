import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { getCustomRepository } from "typeorm";

export class ListProfilesService {
    async execute() {
        const profileRepository = getCustomRepository(ProfilesRepository);

        return await profileRepository.createQueryBuilder("profile").getMany();
    }

    async findByID(id: any) {
        const profileRepository = getCustomRepository(ProfilesRepository);

        return await profileRepository.findOne({id: id});
    }
}