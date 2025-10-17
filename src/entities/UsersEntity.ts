/**
 * UsersEntity
 *
 * Represents an application user.
 *
 * Behavior:
 * - Maps to the "users" table in the database
 * - Links each user to a profile (admin, user, etc.)
 * - Automatically tracks creation and update timestamps
 *
 * Example record:
 * {
 *   "id": "uuid",
 *   "username": "john_doe",
 *   "email": "john@example.com",
 *   "birthdate": "2000-05-20",
 *   "profile_id": "uuid",
 *   "created_at": "2025-10-17T18:00:00Z",
 *   "updated_at": "2025-10-17T18:00:00Z"
 * }
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { ProfilesEntity } from "./ProfilesEntity";

@Entity("users")
export class UsersEntity {
    // Primary key (UUID)
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    // Username
    @Column({ type: "varchar", length: 100 })
    username!: string;

    // User email
    @Column({ type: "varchar", length: 100 })
    email!: string;

    // Hashed password
    @Column({ type: "varchar", length: 100 })
    password!: string;

    // Date of birth
    @Column({ type: "date" })
    birthdate!: Date;

    // Foreign key to profile
    @Column({ type: "char", length: 36, nullable: true })
    profile_id!: string;

    // Relationship to ProfilesEntity
    @ManyToOne(() => ProfilesEntity, { onDelete: "SET NULL" })
    @JoinColumn({ name: "profile_id" })
    profile!: ProfilesEntity;

    // Record creation timestamp
    @CreateDateColumn({
        type: "timestamp",
        precision: 6,
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    created_at!: Date;

    // Record last update timestamp
    @UpdateDateColumn({
        type: "timestamp",
        precision: 6,
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    })
    updated_at!: Date;
}
