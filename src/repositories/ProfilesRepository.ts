/**
 * ProfilesRepository
 *
 * Custom repository for the ProfilesEntity.
 *
 * Behavior:
 * - Extends TypeORM's base Repository for ProfilesEntity
 * - Can be used to define custom queries or overrides for profiles
 *
 * Example:
 * const repo = getCustomRepository(ProfilesRepository);
 * const profiles = await repo.find();
 */

import { EntityRepository, Repository } from "typeorm";
import { ProfilesEntity } from "../entities/ProfilesEntity";

@EntityRepository(ProfilesEntity)
export class ProfilesRepository extends Repository<ProfilesEntity> {
    // Placeholder for custom query methods (if needed later)
    static createQueryBuilder(arg0: string) {
        throw new Error("Method not implemented.");
    }
}
