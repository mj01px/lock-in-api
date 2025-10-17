/**
 * DeleteUsersService
 *
 * Handles deleting a user by ID.
 *
 * Behavior:
 * - Validates if the given ID is valid
 * - Checks if the user exists
 * - Deletes the user from the database
 * - Returns a confirmation message
 *
 * Example:
 * Input: id = "uuid"
 * Response:
 * { "message": "User john_doe deleted" }
 */

import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteUsersService {
    async execute(id: any) {
        // Validate ID
        if (!id) {
            throw new Error("Invalid id");
        }

        // Get the repository for UsersEntity
        const usersRepository = getCustomRepository(UsersRepository);

        // Check if user exists
        const userAlreadyExist = await usersRepository.findOne(id);
        if (!userAlreadyExist) {
            throw new Error("User not found");
        }

        // Delete user by ID
        await usersRepository.delete(id);

        // Return confirmation message
        return {
            message: `User ${userAlreadyExist.username} deleted`,
        };
    }
}
