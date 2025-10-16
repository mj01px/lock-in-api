import {MigrationInterface, QueryRunner} from "typeorm";

export class orm1760404262562 implements MigrationInterface {
    name = 'orm1760404262562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `username` varchar(100) NOT NULL, `email` varchar(100) NOT NULL, `password` varchar(100) NOT NULL, `birthdate` date NOT NULL, `profile_id` varchar(36) NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_23371445bd80cb3e413089551bf` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_23371445bd80cb3e413089551bf`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
