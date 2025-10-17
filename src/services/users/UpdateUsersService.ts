/**
 * UpdateUsersService
 *
 * Handles updating an existing user.
 *
 * Behavior:
 * - Validates if the user ID exists
 * - Updates only the provided fields
 * - Hashes the password if a new one is provided
 * - Updates or removes the user’s profile relation
 *
 * Example:
 * Input:
 * {
 *   "id": "uuid",
 *   "username": "new_name",
 *   "password": "new_pass",
 *   "profile": { "id": "uuid" }
 * }
 *
 * Response:
 * { "id": "uuid", "username": "new_name", ... }
 */

import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";
import { UsersInterface } from "../../interfaces/UsersInterface";
import { ProfilesEntity } from "../../entities/ProfilesEntity";

export class UpdateUsersService {
    async execute({ id, username, email, password, birthdate, profile }: UsersInterface) {
        // Validate ID
        if (!id) throw new Error("Invalid ID");

        // Get repository and find the user (with profile)
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findOne(id, { relations: ["profile"] });
        if (!user) throw new Error("User not found");

        // Update only provided fields
        if (username !== undefined) user.username = username;
        if (email !== undefined) user.email = email;

        // If password provided, hash it before saving
        if (password) {
            user.password = await hash(password, 8);
        }

        // Update birthdate if provided
        if (birthdate !== undefined) {
            (user as any).birthdate = birthdate;
        }

        // Handle profile relation (update or remove)
        if (profile !== undefined) {
            if (profile === null) {
                // Remove profile relation
                user.profile = null as any;
                (user as any).profile_id = null;
            } else {
                // Assign new profile
                user.profile = { id: profile.id } as ProfilesEntity;
            }
        }

        // Save updated user
        return await usersRepository.save(user);
    }
}
