import * as z from "zod";

const passswordSchema = z.string()
    .min(8)
    .max(30)
    .regex(/[A-Z]/, "Your password must have atleast one capital letter")
    .regex(/[a-z]/, "Your password must have atleast one small letter")
    .regex(/[0-9]/, "Your password should contain atleast one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Your password should have atleast one specail charachter",
    ),

export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Minimum length should be 3")
    .max(30, "Maximum length should be 30"),

  age: z
    .number()
    .min(10, "minimum age should be 10")
    .max(100, "Maximum age should be 100")
    .optional(),

  email: z.preprocess(
    (value) => (typeof value == "string" ? value.trim().toLowerCase() : ""),
    z.string().email("Email must be valid"),
  ),

  password: passswordSchema
});

export const loginSchema = z.object({
  email: z.preprocess(
    (value) => (typeof value == "string" ? value.trim().toLowerCase() : ""),
    z.string().email("Email must be valid"),
  ),

  password: passswordSchema
});
