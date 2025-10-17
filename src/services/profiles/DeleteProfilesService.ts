/**
 * DeleteProfilesService
 *
 * Handles deleting a profile by its ID.
 *
 * Behavior:
 * - Validates if the provided ID is valid
 * - Checks if the profile exists
 * - Deletes the profile from the database
 * - Returns a confirmation message
 *
 * Example:
 * Input: id = "uuid"
 * Response:
 * { "message": "Profile admin deleted" }
 */

import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { getCustomRepository } from "typeorm";

export class DeleteProfilesService {
    async execute(id: any) {
        // Validate ID
        if (!id) {
            throw new Error("Invalid id");
        }

        // Get the repository for ProfilesEntity
        const profileRepository = getCustomRepository(ProfilesRepository);

        // Check if profile exists
        const profileAlreadyExist = await profileRepository.findOne(id);
        if (!profileAlreadyExist) {
            throw new Error("Profile not found");
        }

        // Delete profile by ID
        await profileRepository.delete(id);

        // Return confirmation message
        return {
            message: `Profile ${profileAlreadyExist.profile} deleted`,
        };
    }
}
