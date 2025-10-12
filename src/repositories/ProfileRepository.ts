import { EntityRepository, Repository } from "typeorm";
import { ProfileEntity} from "../entities/ProfileEntity";

@EntityRepository(ProfileEntity)
export class ProfileRepository extends Repository<ProfileEntity> {
    static createQueryBuilder(arg0: string) {
        throw new Error('Method not implemented.');
    }
}