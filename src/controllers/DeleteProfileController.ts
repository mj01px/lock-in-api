import { Request, Response } from "express";
import { DeleteProfileService } from "../services/profile/DeleteProfileService";

export class DeleteProfileController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const deleteProfileService = new DeleteProfileService();

        const del = await deleteProfileService.execute(id);

        return response.json(del);
    }
}