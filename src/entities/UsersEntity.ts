import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ManyToOne, JoinColumn } from "typeorm";
import {ProfilesEntity} from "./ProfilesEntity";

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100 })
    username: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;

    @Column({ type: 'date' })
    birthdate: Date;

    // foreign key
    @Column({ type: 'char', length: 36, nullable: true })
    profile_id: string;

    // relationship
    @ManyToOne(() => ProfilesEntity, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'profile_id' })
    profile: ProfilesEntity;

    @CreateDateColumn({
        type: 'timestamp',
        precision: 6,
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 6,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updated_at: Date;
}