import { Request, Response } from "express";
import { DeleteProfilesService } from "../../services/profiles/DeleteProfilesService";

export class DeleteProfilesController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const deleteProfileService = new DeleteProfilesService();

        const ret = await deleteProfileService.execute(id);

        return response.json(ret);
    }
}