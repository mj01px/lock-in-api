/**
 * UpdateProfilesService
 *
 * Handles updating an existing profile.
 *
 * Behavior:
 * - Validates if the given ID exists
 * - Updates the profile name in the database
 * - Returns a success message with the updated profile
 *
 * Example:
 * Input:
 * { "id": "uuid", "profile": "manager" }
 *
 * Response:
 * {
 *   "message": "Profile 'manager' updated successfully",
 *   "updatedProfile": { "id": "uuid", "profile": "manager", ... }
 * }
 */

import { getCustomRepository } from "typeorm";
import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { ProfilesInterface } from "../../interfaces/ProfilesInterface";

export class UpdateProfilesService {
    async execute({ id, profile }: ProfilesInterface) {
        // Validate ID
        if (!id) throw new Error("Invalid ID");

        // Get the repository for ProfilesEntity
        const profileRepository = getCustomRepository(ProfilesRepository);

        // Check if the profile exists
        const profileAlreadyExist = await profileRepository.findOne(id);
        if (!profileAlreadyExist) throw new Error("Profile not found");

        // Update the profile name
        profileAlreadyExist.profile = profile;

        // Save the updated profile to the database
        await profileRepository.save(profileAlreadyExist);

        // Return confirmation message and updated data
        return {
            message: `Profile "${profileAlreadyExist.profile}" updated successfully`,
            updatedProfile: profileAlreadyExist,
        };
    }
}
