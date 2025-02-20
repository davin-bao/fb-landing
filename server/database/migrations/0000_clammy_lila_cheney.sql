CREATE TABLE IF NOT EXISTS "subscribe_user" (
	"id" varchar PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"name" varchar,
	CONSTRAINT "subscribe_user_email_unique" UNIQUE("email")
);
