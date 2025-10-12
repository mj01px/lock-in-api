import { ProfileRepository } from "../../repositories/ProfileRepository";
import { getCustomRepository } from "typeorm";

export class ListProfileService {
    async execute() {
        const profileRepository = getCustomRepository(ProfileRepository);

        return await profileRepository.createQueryBuilder("profile").getMany();
    }

    async findByID(id: any) {
        const profileRepository = getCustomRepository(ProfileRepository);

        return await profileRepository.findOne({id: id});
    }
}