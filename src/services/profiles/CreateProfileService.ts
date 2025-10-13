import { ProfileInterface } from "../../interfaces/ProfileInterface";
import { ProfileRepository} from "../../repositories/ProfileRepository";
import { getCustomRepository } from "typeorm";

export class CreateProfileService {
    async execute({ profile }: ProfileInterface) {
        const profileRepository = getCustomRepository(ProfileRepository);

        const profileAlreadyExists = await profileRepository.findOne({ profile });

        if (profileAlreadyExists) { throw new Error('Profile already exists'); }

        const newProfile = profileRepository.create({
            profile
        });

        await profileRepository.save(newProfile);

        return newProfile;
    }
}