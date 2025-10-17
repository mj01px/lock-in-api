/**
 * CreateProfilesController
 *
 * Handles profile creation requests.
 *
 * Behavior:
 * - Reads the `profile` field from the request body
 * - Calls CreateProfilesService to create a new profile in the database
 * - Returns the created profile as JSON
 *
 * Example:
 * POST /profiles
 * { "profile": "admin" }
 *
 * Response 201:
 * { "id": "...", "profile": "admin", "created_at": "...", "updated_at": "..." }
 */

import { Request, Response } from "express";
import { CreateProfilesService } from "../../services/profiles/CreateProfilesService";

export class CreateProfilesController {
    async handle(request: Request, response: Response) {
        // Get the 'profile' field from the request body
        const { profile } = request.body;

        // Prepare data for the service
        const newProfile = { profile };

        // Call service to create the profile
        const createProfileService = new CreateProfilesService();
        const ret = await createProfileService.execute(newProfile);

        // Return the created profile
        return response.json(ret);
    }
}
