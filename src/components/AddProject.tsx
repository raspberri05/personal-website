"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  date: z.string(),
  icons: z.string(),
  link: z.string(),
  custom_text: z.string(),
  custom_link: z.string(),
});

export function AddProject(props: { email: string }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  if (props.email !== "naya.singhania@gmail.com") {
    return <></>;
  }

  return (
    <Form {...form}>
      <form className="space-y-8" action="/api/data/projects" method="post">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="icons"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icons</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="custom_text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Custom Text (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="custom_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Custom Link (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        <br />
      </form>
      <br />
    </Form>
  );
}
