/**
 * ListUsersService
 *
 * Handles fetching user data.
 *
 * Behavior:
 * - `execute()` → returns all users with their profiles
 * - `findByID()` → returns one user by ID with their profile
 *
 * Example:
 * GET /users
 * Response:
 * [
 *   {
 *     "id": "uuid",
 *     "username": "john_doe",
 *     "email": "john@example.com",
 *     "profile": { "id": "uuid", "profile": "admin" }
 *   }
 * ]
 */

import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";

export class ListUsersService {
    // Get all users with their profiles
    async execute() {
        const usersRepository = getCustomRepository(UsersRepository);
        return await usersRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.profile", "profile")
            .getMany();
    }

    // Get one user by ID (with profile)
    async findByID(id: any) {
        const usersRepository = getCustomRepository(UsersRepository);
        return await usersRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.profile", "profile")
            .where("user.id = :id", { id })
            .getOne();
    }
}
