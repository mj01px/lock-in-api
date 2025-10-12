import { Request, Response } from "express";
import { ListProfileService } from "../services/profile/ListProfileService";

export class ListProfileController {
    async handle(request: Request, response: Response) {
        const listProfileService = new ListProfileService();
        const ret = await listProfileService.execute();
        return response.json(ret);
    }

    async findById(request: Request, response: Response) {
        const id = request.params.id;
        const listProfileService = new ListProfileService();
        const ret = await listProfileService.findByID(id);
        return response.json(ret);
    }
}