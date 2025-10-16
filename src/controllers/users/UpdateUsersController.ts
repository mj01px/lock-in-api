import { Request, Response } from "express";
import { UpdateUsersService } from "../../services/users/UpdateUsersService";

export class UpdateUsersController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { username, email, password, birthdate, profile } = request.body;

        const service = new UpdateUsersService();

        const user = await service.execute({
            id,
            username,
            email,
            password,
            birthdate,
            profile: profile ?? undefined
        });

        return response.json(user);
    }
}