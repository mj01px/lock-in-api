/**
 * AuthService
 *
 * Handles user authentication and JWT generation.
 *
 * Behavior:
 * - Validates user credentials (email + password)
 * - Verifies password using bcrypt
 * - Generates a JWT token with user info (email, role, id)
 *
 * Example:
 * Input:
 * { "email": "user@example.com", "password": "123456" }
 *
 * Response:
 * { "token": "jwt_token_here" }
 */

import { getRepository } from "typeorm";
import { UsersEntity } from "../../entities/UsersEntity";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

type LoginDTO = { email: string; password: string };

export class AuthService {
    async execute({ email, password }: LoginDTO) {
        // Get the user repository
        const usersRepo = getRepository(UsersEntity);

        // Find user by email and include their profile relation
        const user = await usersRepo.findOne({
            where: { email },
            relations: ["profile"],
        });

        // If user not found
        if (!user) throw new Error("Invalid credentials");

        // Compare entered password with hashed password
        const ok = await compare(password, user.password);
        if (!ok) throw new Error("Invalid credentials");

        // Extract role from user's profile
        const role = user.profile?.profile as "admin" | "user" | undefined;
        if (!role) throw new Error("User without profile");

        // Get JWT secret
        const secret = process.env.JWT_SECRET!;
        if (!secret) throw new Error("Missing JWT secret");

        // Generate token with payload
        const token = sign(
            { email: user.email, role }, // payload
            secret,
            {
                subject: user.id,
                expiresIn: "1d", // token valid for 1 day
            }
        );

        // Return the generated token
        return { token };
    }
}
