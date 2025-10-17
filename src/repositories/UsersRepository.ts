/**
 * UsersRepository
 *
 * Custom repository for the UsersEntity.
 *
 * Behavior:
 * - Extends TypeORM's base Repository for UsersEntity
 * - Can include custom queries or helper methods for user operations
 *
 * Example:
 * const repo = getCustomRepository(UsersRepository);
 * const users = await repo.find();
 */

import { EntityRepository, Repository } from "typeorm";
import { UsersEntity } from "../entities/UsersEntity";

@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {
    // Placeholder for custom query methods (optional)
    static createQueryBuilder(arg0: string) {
        throw new Error("Method not implemented.");
    }
}
