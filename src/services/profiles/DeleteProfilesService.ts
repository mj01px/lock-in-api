import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { getCustomRepository } from "typeorm";

export class DeleteProfilesService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Invalid id");
        }

        const profileRepository = getCustomRepository(ProfilesRepository);

        const profileAlreadyExist = await profileRepository.findOne(id);

        if (!profileAlreadyExist) {
            throw new Error("Profile not found");
        }

        const deleteByID = await profileRepository.delete(id);

        return {
            message: `Profile ${profileAlreadyExist.profile} deleted`,
        };
    }
}