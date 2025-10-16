import { ProfilesInterface } from "../../interfaces/ProfilesInterface";
import { ProfilesRepository} from "../../repositories/ProfilesRepository";
import { getCustomRepository } from "typeorm";

export class CreateProfilesService {
    async execute({ profile }: ProfilesInterface) {
        const profileRepository = getCustomRepository(ProfilesRepository);

        const profileAlreadyExists = await profileRepository.findOne({ profile });

        if (profileAlreadyExists) { throw new Error('Profile already exists'); }

        const newProfile = profileRepository.create({
            profile
        });

        await profileRepository.save(newProfile);

        return newProfile;
    }
}