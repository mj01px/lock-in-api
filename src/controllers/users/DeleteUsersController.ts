import { Request, Response } from 'express';
import { DeleteUsersService } from "../../services/users/DeleteUsersService";

export class DeleteUsersController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const deleteUsersService = new DeleteUsersService();
        const ret = await deleteUsersService.execute(id);

        return response.json(ret);
    }
}