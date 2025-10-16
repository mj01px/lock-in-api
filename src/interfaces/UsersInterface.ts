import { ProfilesInterface } from "./ProfilesInterface";

export interface UsersInterface {
    id?: string;
    username: string;
    email: string;
    password: string;
    birthdate: Date
    profile: ProfilesInterface
}