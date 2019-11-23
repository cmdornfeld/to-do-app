CREATE TABLE tasks (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"status" VARCHAR (20) DEFAULT 'Incomplete'
);

INSERT INTO "tasks" ("task") VALUES ('Test 1');
INSERT INTO "tasks" ("task") VALUES ('Test 2');
INSERT INTO "tasks" ("task") VALUES ('Test 3');
INSERT INTO "tasks" ("task") VALUES ('Test 4');