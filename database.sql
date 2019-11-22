CREATE TABLE tasks (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"status" VARCHAR (20) DEFAULT 'Incomplete'
);