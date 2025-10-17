/**
 * ListProfilesService
 *
 * Handles fetching profile data.
 *
 * Behavior:
 * - `execute()` → returns all profiles
 * - `findByID()` → returns one profile by its ID
 *
 * Example:
 * GET /profiles
 * Response:
 * [ { "id": "uuid", "profile": "admin" }, { "id": "uuid", "profile": "user" } ]
 */

import { ProfilesRepository } from "../../repositories/ProfilesRepository";
import { getCustomRepository } from "typeorm";

export class ListProfilesService {
    // Get all profiles
    async execute() {
        const profileRepository = getCustomRepository(ProfilesRepository);
        return await profileRepository.createQueryBuilder("profile").getMany();
    }

    // Get one profile by ID
    async findByID(id: any) {
        const profileRepository = getCustomRepository(ProfilesRepository);
        return await profileRepository.findOne({ id: id });
    }
}
