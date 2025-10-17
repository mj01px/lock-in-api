/**
 * CreateProfilesService
 *
 * Handles profile creation logic.
 *
 * Behavior:
 * - Checks if a profile with the same name already exists
 * - Creates and saves a new profile in the database
 * - Returns the created profile
 *
 * Example:
 * Input:
 * { "profile": "admin" }
 *
 * Response:
 * { "id": "uuid", "profile": "admin", "created_at": "...", "updated_at": "..." }
 */

import { ProfilesInterface } from "../../interfaces/ProfilesInterface";
import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { getCustomRepository } from "typeorm";

export class CreateProfilesService {
    async execute({ profile }: ProfilesInterface) {
        // Get the repository for ProfilesEntity
        const profileRepository = getCustomRepository(ProfilesRepository);

        // Check if profile already exists
        const profileAlreadyExists = await profileRepository.findOne({ profile });
        if (profileAlreadyExists) {
            throw new Error("Profile already exists");
        }

        // Create a new profile instance
        const newProfile = profileRepository.create({ profile });

        // Save it to the database
        await profileRepository.save(newProfile);

        // Return the created profile
        return newProfile;
    }
}
