/**
 * CreateUsersController
 *
 * Handles user creation requests.
 *
 * Behavior:
 * - Reads user data from the request body
 * - Validates required fields
 * - Calls CreateUsersService to insert a new user into the database
 * - Returns the created user as JSON
 *
 * Example:
 * POST /users
 * {
 *   "username": "john_doe",
 *   "email": "john@example.com",
 *   "password": "123456",
 *   "birthdate": "2000-01-01",
 *   "profile": "user"
 * }
 *
 * Response 201:
 * { "id": "...", "username": "john_doe", "email": "john@example.com", ... }
 */

import { Request, Response } from "express";
import { CreateUsersService } from "../../services/users/CreateUsersService";

export class CreateUsersController {
    async handle(request: Request, response: Response) {
        // Extract fields from request body
        const { username, email, password, birthdate, profile } = request.body;

        // Simple validation for missing fields
        if (!username || !email || !password || !birthdate) {
            throw new Error("Please fill in all fields");
        }

        // Prepare user data
        const user = { username, email, password, birthdate, profile };

        // Call service to create the user
        const createUserService = new CreateUsersService();
        const ret = await createUserService.execute(user);

        // Return the created user
        return response.json(ret);
    }
}
