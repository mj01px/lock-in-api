import { Request, Response } from "express";
import { CreateProfileService } from "../../services/profiles/CreateProfileService";

export class CreateProfileController {
    async handle(request: Request, response: Response) {

        const { profile } = request.body;

        const newProfile = {
            profile: profile
        }

        const createProfileService = new CreateProfileService();
        const ret = await createProfileService.execute(newProfile);
        return response.json(ret);
    }
}