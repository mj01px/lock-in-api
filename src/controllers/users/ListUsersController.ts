import { Request, Response } from 'express';
import { ListUsersService } from "../../services/users/ListUsersService";

export class ListUsersController {
    async handle(request: Request, response: Response) {
        const listUsersService = new ListUsersService();

        const ret = await listUsersService.execute();
        return response.json(ret);
    }

    async findByID(request: Request, response: Response) {
        const id = request.params.id;
        const listUsersService = new ListUsersService();
        const ret = await listUsersService.findByID(id);
        return response.json(ret);
    }
}