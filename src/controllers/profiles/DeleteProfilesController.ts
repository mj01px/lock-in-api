/**
 * DeleteProfilesController
 *
 * Handles deleting a profile by its ID.
 *
 * Behavior:
 * - Reads the profile ID from the request params
 * - Calls DeleteProfilesService to remove it from the database
 * - Returns a JSON response with the result
 *
 * Example:
 * DELETE /profiles/:id
 * Response 200:
 * { "message": "Profile deleted successfully" }
 */

import { Request, Response } from "express";
import { DeleteProfilesService } from "../../services/profiles/DeleteProfilesService";

export class DeleteProfilesController {
    async handle(request: Request, response: Response) {
        // Get profile ID from URL params
        const id = request.params.id;

        // Call service to delete the profile
        const deleteProfileService = new DeleteProfilesService();
        const ret = await deleteProfileService.execute(id);

        // Return the result as JSON
        return response.json(ret);
    }
}
