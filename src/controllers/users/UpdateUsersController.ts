/**
 * UpdateUsersController
 *
 * Handles updating an existing user.
 *
 * Behavior:
 * - Reads user ID from request params
 * - Reads updated fields from request body
 * - Calls UpdateUsersService to update the user in the database
 * - Returns the updated user as JSON
 *
 * Example:
 * PUT /users/:id
 * {
 *   "username": "new_name",
 *   "email": "new_email@example.com",
 *   "password": "new_password",
 *   "birthdate": "2001-02-10",
 *   "profile": "admin"
 * }
 *
 * Response 200:
 * { "id": "...", "username": "new_name", "email": "new_email@example.com", ... }
 */

import { Request, Response } from "express";
import { UpdateUsersService } from "../../services/users/UpdateUsersService";

export class UpdateUsersController {
    async handle(request: Request, response: Response) {
        // Get user ID from URL params
        const { id } = request.params;

        // Extract updated data from the request body
        const { username, email, password, birthdate, profile } = request.body;

        // Create the service instance
        const service = new UpdateUsersService();

        // Call service to update the user
        const user = await service.execute({
            id,
            username,
            email,
            password,
            birthdate,
            profile: profile ?? undefined, // optional field
        });

        // Return the updated user
        return response.json(user);
    }
}
