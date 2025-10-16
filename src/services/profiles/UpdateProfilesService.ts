import { getCustomRepository } from "typeorm";
import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { ProfilesInterface } from "../../interfaces/ProfilesInterface";

export class UpdateProfilesService {
    async execute({ id, profile }: ProfilesInterface) {
        if (!id) throw new Error("Invalid ID");

        const profileRepository = getCustomRepository(ProfilesRepository);

        const profileAlreadyExist = await profileRepository.findOne(id);
        if (!profileAlreadyExist) throw new Error("Profile not found");

        profileAlreadyExist.profile = profile;

        await profileRepository.save(profileAlreadyExist);

        return {
            message: `Profile "${profileAlreadyExist.profile}" updated successfully`,
            updatedProfile: profileAlreadyExist,
        };
    }
}
