import { ProfileRepository } from "../../repositories/ProfileRepository";
import { getCustomRepository } from "typeorm";

export class DeleteProfileService {
    async execute(id: any) {
        if (!id) {
            throw new Error("Invalid id");
        }

        const profileRepository = getCustomRepository(ProfileRepository);

        const profileNotExist = await profileRepository.findOne(id);

        if (!profileNotExist) {
            throw new Error("Profile not found");
        }

        const deleteByID = await profileRepository.delete(id);

        return {
            message: `Profile ${profileNotExist.profile} deleted`,
        };
    }
}