import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeTestColumnFromCategories1627736475690 implements MigrationInterface {
  name = 'removeTestColumnFromCategories1627736475690';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."categories" DROP COLUMN "test"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."categories" ADD "test" character varying NOT NULL`);
  }
}
