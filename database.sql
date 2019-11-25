CREATE TABLE tasks (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"status" VARCHAR (20) DEFAULT 'Incomplete'
);

INSERT INTO "tasks" ("task") VALUES ('Test 1');
INSERT INTO "tasks" ("task") VALUES ('Test 2');
INSERT INTO "tasks" ("task") VALUES ('Test 3');
INSERT INTO "tasks" ("task") VALUES ('Test 4');
INSERT INTO "tasks" ("task") VALUES ('Test 5');
INSERT INTO "tasks" ("task") VALUES ('Laundry');
INSERT INTO "tasks" ("task") VALUES ('Dishes');
INSERT INTO "tasks" ("task") VALUES ('Take out the trash');
INSERT INTO "tasks" ("task") VALUES ('Sweep floors');
INSERT INTO "tasks" ("task") VALUES ('Dust');
INSERT INTO "tasks" ("task") VALUES ('Vacuum');