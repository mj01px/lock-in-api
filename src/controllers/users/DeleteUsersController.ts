/**
 * DeleteUsersController
 *
 * Handles deleting a user by ID.
 *
 * Behavior:
 * - Reads the user ID from request params
 * - Calls DeleteUsersService to remove the user from the database
 * - Returns a confirmation message as JSON
 *
 * Example:
 * DELETE /users/:id
 * Response 200:
 * { "message": "User deleted successfully" }
 */

import { Request, Response } from "express";
import { DeleteUsersService } from "../../services/users/DeleteUsersService";

export class DeleteUsersController {
    async handle(request: Request, response: Response) {
        // Get user ID from URL params
        const id = request.params.id;

        // Call service to delete the user
        const deleteUsersService = new DeleteUsersService();
        const ret = await deleteUsersService.execute(id);

        // Return the result as JSON
        return response.json(ret);
    }
}
