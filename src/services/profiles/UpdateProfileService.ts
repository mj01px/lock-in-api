import { getCustomRepository } from "typeorm";
import { ProfileRepository } from "../../repositories/ProfileRepository";
import { ProfileInterface } from "../../interfaces/ProfileInterface";

export class UpdateProfileService {
    async execute({ id, profile }: ProfileInterface) {
        if (!id) throw new Error("Invalid ID");

        const profileRepository = getCustomRepository(ProfileRepository);

        const profileExist = await profileRepository.findOne(id);
        if (!profileExist) throw new Error("Profile not found");

        profileExist.profile = profile;

        await profileRepository.save(profileExist);

        return {
            message: `Profile "${profileExist.profile}" updated successfully`,
            updatedProfile: profileExist,
        };
    }
}
