import { Request, Response } from "express";
import { ListProfilesService } from "../../services/profiles/ListProfilesService";

export class ListProfilesController {
    async handle(request: Request, response: Response) {
        const listProfileService = new ListProfilesService();
        const ret = await listProfileService.execute();
        return response.json(ret);
    }

    async findByID(request: Request, response: Response) {
        const id = request.params.id;
        const listProfileService = new ListProfilesService();
        const ret = await listProfileService.findByID(id);
        return response.json(ret);
    }
}