CREATE TABLE IF NOT EXISTS "subscribe_user" (
	"id" varchar PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "subscribe_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DROP TABLE "auth_user";