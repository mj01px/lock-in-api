import { Request, Response } from "express";
import { UpdateProfileService } from "../../services/profiles/UpdateProfileService";

export class UpdateProfileController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { profile } = request.body;

        const newProfile = {
            id: id,
            profile: profile };

        const updateProfileService = new UpdateProfileService();
        const ret = await updateProfileService.execute({ id, profile })
        return response.json(ret);
    }
}