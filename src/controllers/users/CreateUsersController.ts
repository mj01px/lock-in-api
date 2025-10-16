import { Request, Response } from 'express';
import { CreateUsersService } from "../../services/users/CreateUsersService";

export class CreateUsersController {
    async handle(request: Request, response: Response) {
        const { username, email, password, birthdate, profile} = request.body;

        if (!username || !email || !password || !birthdate) {
            throw new Error('Please fill in all fields');
          }

        const user = {
            username: username,
            email: email,
            password: password,
            birthdate: birthdate,
            profile: profile
        }

        const createUserService = new CreateUsersService();
        const ret = await createUserService.execute(user);

        return response.json(ret);
    }
}