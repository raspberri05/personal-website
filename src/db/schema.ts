import { pgTable, text } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  name: text("name").notNull().primaryKey(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  icons: text("icons").notNull(),
  link: text("link").notNull(),
  custom_text: text("custom_text"),
  custom_link: text("custom_link"),
});

export type InsertProject = typeof projects.$inferInsert;
