import type { APIRoute } from "astro";
import { db } from "../../../db";
import { projects, type InsertProject } from "../../../db/schema";
import { desc } from "drizzle-orm";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const data: InsertProject = {
    name: formData.get("name")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    date: formData.get("date")?.toString() || "",
    icons: formData.get("icons")?.toString() || "",
    link: formData.get("link")?.toString() || "",
    custom_text: formData.get("custom_text")?.toString() || "",
    custom_link: formData.get("custom_link")?.toString() || "",
  };
  return db
    .insert(projects)
    .values(data)
    .then((_) => {
      return redirect("/projects");
    })
    .catch((e) => {
      return redirect("/projects");
    });
};

export const GET: APIRoute = async () => {
  return db
    .select()
    .from(projects)
    .orderBy(desc(projects.date))
    .then((s) => {
      return new Response(JSON.stringify(s), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    })
    .catch((e) => {
      return new Response(e);
    });
};
