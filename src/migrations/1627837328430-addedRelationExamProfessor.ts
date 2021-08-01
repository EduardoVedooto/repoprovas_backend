import { MigrationInterface, QueryRunner } from 'typeorm';

export class addedRelationExamProfessor1627837328430 implements MigrationInterface {
  name = 'addedRelationExamProfessor1627837328430';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."exams" ADD "professorId" integer`);
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "FK_e34e39105e2fb3d152831bd1742"`
    );
    await queryRunner.query(`ALTER TABLE "public"."subjects" DROP CONSTRAINT "PK_1a023685ac2b051b4e557b0b280"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "public"."subjects" ADD CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836"`
    );
    await queryRunner.query(`ALTER TABLE "public"."professors" DROP CONSTRAINT "PK_6b249c6363a154820c909c45e27"`);
    await queryRunner.query(`ALTER TABLE "public"."professors" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."professors" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "public"."professors" ADD CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id")`
    );
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP CONSTRAINT "PK_b43159ee3efa440952794b4f53e"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "public"."exams" ADD CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id")`
    );
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP COLUMN "categoryId"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" ADD "categoryId" integer`);
    await queryRunner.query(`ALTER TABLE "public"."categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
    await queryRunner.query(`ALTER TABLE "public"."categories" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."categories" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "public"."categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_a951cc9c4c6c77d1c7de8ae8836" PRIMARY KEY ("professorsId")`
    );
    await queryRunner.query(`DROP INDEX "public"."IDX_e34e39105e2fb3d152831bd174"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects_professors_professors" DROP COLUMN "subjectsId"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects_professors_professors" ADD "subjectsId" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_a951cc9c4c6c77d1c7de8ae8836"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("professorsId", "subjectsId")`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_e34e39105e2fb3d152831bd1742" PRIMARY KEY ("subjectsId")`
    );
    await queryRunner.query(`DROP INDEX "public"."IDX_a951cc9c4c6c77d1c7de8ae883"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects_professors_professors" DROP COLUMN "professorsId"`);
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD "professorsId" integer NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_e34e39105e2fb3d152831bd1742"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("subjectsId", "professorsId")`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e34e39105e2fb3d152831bd174" ON "public"."subjects_professors_professors" ("subjectsId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a951cc9c4c6c77d1c7de8ae883" ON "public"."subjects_professors_professors" ("professorsId") `
    );
    await queryRunner.query(
      `ALTER TABLE "public"."exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "FK_e34e39105e2fb3d152831bd1742" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "FK_e34e39105e2fb3d152831bd1742"`
    );
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_a951cc9c4c6c77d1c7de8ae883"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_e34e39105e2fb3d152831bd174"`);
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_e34e39105e2fb3d152831bd1742" PRIMARY KEY ("subjectsId")`
    );
    await queryRunner.query(`ALTER TABLE "public"."subjects_professors_professors" DROP COLUMN "professorsId"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects_professors_professors" ADD "professorsId" uuid NOT NULL`);
    await queryRunner.query(
      `CREATE INDEX "IDX_a951cc9c4c6c77d1c7de8ae883" ON "public"."subjects_professors_professors" ("professorsId") `
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_e34e39105e2fb3d152831bd1742"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("professorsId", "subjectsId")`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_a951cc9c4c6c77d1c7de8ae8836" PRIMARY KEY ("professorsId")`
    );
    await queryRunner.query(`ALTER TABLE "public"."subjects_professors_professors" DROP COLUMN "subjectsId"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects_professors_professors" ADD "subjectsId" uuid NOT NULL`);
    await queryRunner.query(
      `CREATE INDEX "IDX_e34e39105e2fb3d152831bd174" ON "public"."subjects_professors_professors" ("subjectsId") `
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" DROP CONSTRAINT "PK_a951cc9c4c6c77d1c7de8ae8836"`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("subjectsId", "professorsId")`
    );
    await queryRunner.query(`ALTER TABLE "public"."categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
    await queryRunner.query(`ALTER TABLE "public"."categories" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."categories" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
    await queryRunner.query(
      `ALTER TABLE "public"."categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`
    );
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP COLUMN "categoryId"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" ADD "categoryId" uuid`);
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP CONSTRAINT "PK_b43159ee3efa440952794b4f53e"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."exams" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
    await queryRunner.query(
      `ALTER TABLE "public"."exams" ADD CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(`ALTER TABLE "public"."professors" DROP CONSTRAINT "PK_6b249c6363a154820c909c45e27"`);
    await queryRunner.query(`ALTER TABLE "public"."professors" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."professors" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
    await queryRunner.query(
      `ALTER TABLE "public"."professors" ADD CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(`ALTER TABLE "public"."subjects" DROP CONSTRAINT "PK_1a023685ac2b051b4e557b0b280"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "public"."subjects" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
    await queryRunner.query(
      `ALTER TABLE "public"."subjects" ADD CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."subjects_professors_professors" ADD CONSTRAINT "FK_e34e39105e2fb3d152831bd1742" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(`ALTER TABLE "public"."exams" DROP COLUMN "professorId"`);
  }
}
