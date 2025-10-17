/**
 * UpdateProfilesController
 *
 * Handles updating an existing profile.
 *
 * Behavior:
 * - Reads the profile ID from request params
 * - Reads the updated data from request body
 * - Calls UpdateProfilesService to update the record in the database
 * - Returns the updated profile as JSON
 *
 * Example:
 * PUT /profiles/:id
 * { "profile": "manager" }
 *
 * Response 200:
 * { "id": "...", "profile": "manager", "updated_at": "..." }
 */

import { Request, Response } from "express";
import { UpdateProfilesService } from "../../services/profiles/UpdateProfilesService";

export class UpdateProfilesController {
    async handle(request: Request, response: Response) {
        // Get profile ID from URL params
        const { id } = request.params;

        // Get new profile data from request body
        const { profile } = request.body;

        // Call service to update the profile
        const updateProfileService = new UpdateProfilesService();
        const ret = await updateProfileService.execute({ id, profile });

        // Return the updated profile
        return response.json(ret);
    }
}
