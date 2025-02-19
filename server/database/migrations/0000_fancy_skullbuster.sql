CREATE TABLE IF NOT EXISTS "auth_user" (
	"id" varchar PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "auth_user_email_unique" UNIQUE("email")
);
