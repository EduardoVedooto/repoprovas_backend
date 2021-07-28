CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"subject" integer NOT NULL,
	"category" integer NOT NULL,
	"pdf" TEXT NOT NULL,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professors_subjects" (
	"id" serial NOT NULL,
	"subjectId" integer NOT NULL,
	"professorId" integer NOT NULL,
	CONSTRAINT "professors_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("subject") REFERENCES "subjects"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("category") REFERENCES "categories"("id");



ALTER TABLE "professors_subjects" ADD CONSTRAINT "professors_subjects_fk0" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id");
ALTER TABLE "professors_subjects" ADD CONSTRAINT "professors_subjects_fk1" FOREIGN KEY ("professorId") REFERENCES "professors"("id");







