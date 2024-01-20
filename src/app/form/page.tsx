"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function SignUpForm() {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nuejyix",
        "template_j4kdmth",
        e.currentTarget,
        "XMR3CYBYU0zrPKVfL",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-black ">
      <div className="w-full m-auto lg:max-w-lg text-gray-400 ">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Contact Me</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea placeholder="Enter your message" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col bg-black text-xl">
            <Button className="w-full bg-black text-xl uppercase">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
