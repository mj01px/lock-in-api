import { UsersInterface } from "../../interfaces/UsersInterface";
import { UsersRepository} from "../../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";
import { hash } from 'bcryptjs';

export class CreateUsersService {
    async execute({ username, email, password, birthdate, profile }: UsersInterface) {

        if (!email) { throw new Error('Email incorrect'); }
        if (!password) { throw new Error('Password incorrect'); }

        const passwordHash = await hash(password, 8);
        const userRepository = getCustomRepository(UsersRepository);
        const userAlreadyExists = await userRepository.findOne({ email });

        if (userAlreadyExists) { throw new Error('User already exists'); }

        const user = userRepository.create({
            username,
            email,
            password: passwordHash,
            birthdate,
            profile: {
                id: profile.id
            }
        });

        await userRepository.save(user);
        return user;
    }
}