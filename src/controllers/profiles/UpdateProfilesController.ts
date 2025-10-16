import { Request, Response } from "express";
import { UpdateProfilesService } from "../../services/profiles/UpdateProfilesService";

export class UpdateProfilesController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { profile } = request.body;

        const newProfile = {
            id: id,
            profile: profile };

        const updateProfileService = new UpdateProfilesService();
        const ret = await updateProfileService.execute({ id, profile })
        return response.json(ret);
    }
}