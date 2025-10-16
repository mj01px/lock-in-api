import { EntityRepository, Repository } from "typeorm";
import { ProfilesEntity } from "../entities/ProfilesEntity";

@EntityRepository(ProfilesEntity)
export class ProfilesRepository extends Repository<ProfilesEntity> {
    static createQueryBuilder(arg0: string) {
        throw new Error('Method not implemented.');
    }
}