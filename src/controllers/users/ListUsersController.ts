/**
 * ListUsersController
 *
 * Handles listing all users and finding a specific user by ID.
 *
 * Behavior:
 * - `handle()` → returns all users
 * - `findByID()` → returns one user by ID
 *
 * Example:
 * GET /users
 * Response 200:
 * [ { "id": "...", "username": "john_doe", "email": "john@example.com" }, ... ]
 *
 * GET /users/:id
 * Response 200:
 * { "id": "...", "username": "john_doe", "email": "john@example.com" }
 */

import { Request, Response } from "express";
import { ListUsersService } from "../../services/users/ListUsersService";

export class ListUsersController {
    // Get all users
    async handle(request: Request, response: Response) {
        const listUsersService = new ListUsersService();
        const ret = await listUsersService.execute();
        return response.json(ret);
    }

    // Get a single user by ID
    async findByID(request: Request, response: Response) {
        const id = request.params.id;
        const listUsersService = new ListUsersService();
        const ret = await listUsersService.findByID(id);
        return response.json(ret);
    }
}
