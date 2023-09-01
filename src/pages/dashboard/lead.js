"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { CardHeader, CardTitle } from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

import { Textarea } from "../../components/ui/textarea";
import { toast } from "../../components/ui/use-toast";

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "First Name must be at least 2 characters.",
    })
    .max(30, {
      message: "First Name must not be longer than 30 characters.",
    }),
    lastName: z
    .string()
    .min(2, {
      message: "Last Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Last Name must not be longer than 30 characters.",
    }),
    address: z
    .string()
    .min(2, {
      message: "Address must be at least 2 characters.",
    })
    .max(30, {
      message: "Address must not be longer than 30 characters.",
    }),
    city: z
    .string()
    .min(2, {
      message: "City must be at least 2 characters.",
    })
    .max(30, {
      message: "City must not be longer than 30 characters.",
    }),
    state: z
    .string()
    .min(2, {
      message: "State must be at least 2 characters.",
    })
    .max(30, {
      message: "State must not be longer than 30 characters.",
    }),
    zip: z
    .string()
    .min(2, {
      message: "Zip Code must be at least 2 characters.",
    })
    .max(30, {
      message: "Zip Code must not be longer than 30 characters.",
    }),
    phone: z
    .number()
    .min(2, {
      message: "Phone Number must be at least 2 characters.",
    })
    .max(30, {
      message: "Phone Number must not be longer than 30 characters.",
    }),
    
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

// type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues = {
  // bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
};

export default function Lead() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="w-full pt-16 pl-64 pr-4 ">
      <div className="flex items-center pt-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full pl-2 pr-4 py-6  rounded-lg border	"
          >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  // <div className="flex justify-center gap-x-4" >
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  // <div className="flex justify-center gap-x-4" >
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  // <div className="flex justify-center gap-x-4" >
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  // <div className="flex justify-center gap-x-4" >
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

            {/* <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <Button type="submit">Create Lead</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
