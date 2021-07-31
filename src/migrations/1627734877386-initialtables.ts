import {MigrationInterface, QueryRunner} from "typeorm";

export class initialtables1627734877386 implements MigrationInterface {
    name = 'initialtables1627734877386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exams" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "subject" character varying NOT NULL, "pdf" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "test" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_professors_professors" ("subjectsId" uuid NOT NULL, "professorsId" uuid NOT NULL, CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("subjectsId", "professorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e34e39105e2fb3d152831bd174" ON "subjects_professors_professors" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a951cc9c4c6c77d1c7de8ae883" ON "subjects_professors_professors" ("professorsId") `);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_e34e39105e2fb3d152831bd1742" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836"`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_e34e39105e2fb3d152831bd1742"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`DROP INDEX "IDX_a951cc9c4c6c77d1c7de8ae883"`);
        await queryRunner.query(`DROP INDEX "IDX_e34e39105e2fb3d152831bd174"`);
        await queryRunner.query(`DROP TABLE "subjects_professors_professors"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "exams"`);
    }

}
