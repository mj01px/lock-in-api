/**
 * ListProfilesController
 *
 * Handles listing profiles and finding profiles by ID.
 *
 * Behavior:
 * - `handle()` → returns all profiles
 * - `findByID()` → returns a specific profile by its ID
 *
 * Example:
 * GET /profiles
 * Response 200:
 * [ { "id": "...", "profile": "admin" }, { "id": "...", "profile": "user" } ]
 *
 * GET /profiles/:id
 * Response 200:
 * { "id": "...", "profile": "admin" }
 */

import { Request, Response } from "express";
import { ListProfilesService } from "../../services/profiles/ListProfilesService";

export class ListProfilesController {
    // Get all profiles
    async handle(request: Request, response: Response) {
        const listProfileService = new ListProfilesService();
        const ret = await listProfileService.execute();
        return response.json(ret);
    }

    // Get a specific profile by ID
    async findByID(request: Request, response: Response) {
        const id = request.params.id;
        const listProfileService = new ListProfilesService();
        const ret = await listProfileService.findByID(id);
        return response.json(ret);
    }
}
