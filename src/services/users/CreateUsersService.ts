/**
 * CreateUsersService
 *
 * Handles creating a new user.
 *
 * Behavior:
 * - Validates required fields (email, password)
 * - Hashes the password using bcrypt
 * - Checks if the email is already registered
 * - Creates and saves the user in the database
 *
 * Example:
 * Input:
 * {
 *   "username": "john_doe",
 *   "email": "john@example.com",
 *   "password": "123456",
 *   "birthdate": "2000-01-01",
 *   "profile": { "id": "uuid" }
 * }
 *
 * Response:
 * {
 *   "id": "uuid",
 *   "username": "john_doe",
 *   "email": "john@example.com",
 *   "birthdate": "2000-01-01",
 *   "profile": { "id": "uuid" },
 *   ...
 * }
 */

import { UsersInterface } from "../../interfaces/UsersInterface";
import { UsersRepository } from "../../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

export class CreateUsersService {
    async execute({ username, email, password, birthdate, profile }: UsersInterface) {
        // Validate email and password
        if (!email) throw new Error("Email incorrect");
        if (!password) throw new Error("Password incorrect");

        // Hash password before saving
        const passwordHash = await hash(password, 8);

        // Get the repository for UsersEntity
        const userRepository = getCustomRepository(UsersRepository);

        // Check if email already exists
        const userAlreadyExists = await userRepository.findOne({ email });
        if (userAlreadyExists) throw new Error("User already exists");

        // Create user instance
        const user = userRepository.create({
            username,
            email,
            password: passwordHash,
            birthdate,
            profile: { id: profile.id },
        });

        // Save new user to database
        await userRepository.save(user);

        // Return created user
        return user;
    }
}
