import { Request, Response } from "express";
import { CreateProfilesService } from "../../services/profiles/CreateProfilesService";

export class CreateProfilesController {
    async handle(request: Request, response: Response) {

        const { profile } = request.body;

        const newProfile = {
            profile: profile
        }

        const createProfileService = new CreateProfilesService();
        const ret = await createProfileService.execute(newProfile);
        return response.json(ret);
    }
}