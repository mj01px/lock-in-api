import {hash} from 'bcryptjs';
import {getCustomRepository} from 'typeorm';
import {UsersRepository} from "../../repositories/UsersRepository";
import {UsersInterface} from "../../interfaces/UsersInterface";
import {ProfilesEntity} from "../../entities/ProfilesEntity";

export class UpdateUsersService {
    async execute({ id, username, email, password, birthdate, profile }: UsersInterface) {
        if (!id) throw new Error('Invalid ID');

        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findOne(id, { relations: ['profile'] });
        if (!user) throw new Error('User not found');

        if (username !== undefined) user.username = username;
        if (email !== undefined) user.email = email;

        if (password) {
            user.password = await hash(password, 8);
        }

        if (birthdate !== undefined) {
            (user as any).birthdate = birthdate;
        }

        if (profile !== undefined) {
            if (profile === null) {
                user.profile = null as any;
                (user as any).profile_id = null;
            } else {
                user.profile = { id: profile.id } as ProfilesEntity;
            }
        }

        return await usersRepository.save(user);
    }
}