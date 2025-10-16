import { EntityRepository, Repository } from "typeorm";
import { UsersEntity } from "../entities/UsersEntity";

@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {
    static createQueryBuilder(arg0: string) {
        throw new Error('Method not implemented.');
    }
}