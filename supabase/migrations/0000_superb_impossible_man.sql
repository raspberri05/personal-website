CREATE TABLE IF NOT EXISTS "projects" (
	"name" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"date" text NOT NULL,
	"icons" text NOT NULL,
	"link" text NOT NULL,
	"custom_text" text,
	"custom_link" text
);
