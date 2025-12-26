"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";

const registerSchema = z.object({
  fullName: z.string(),
  username: z.string(),
  email: z
    .string()
    .email()
    .regex(/@cmrithyderabad\.edu\.in$/, "Only college email allowed"),
  phone: z.string(),
  fatherName: z.string(),
  motherName: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  age: z.number(),
  bloodGroup: z.enum([
    "A_POS","A_NEG","B_POS","B_NEG","AB_POS","AB_NEG","O_POS","O_NEG"
  ]),
  healthIssues: z.boolean(),
  password: z.string().min(6),
});

export async function registerStudent(data: unknown) {
  const parsed = registerSchema.safeParse(data);

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const student = parsed.data;

  const exists = await prisma.student.findUnique({
    where: { email: student.email },
  });

  if (exists) {
    return { error: "Student already registered" };
  }

  const hashedPassword = await bcrypt.hash(student.password, 10);

  await prisma.student.create({
    data: {
      fullName: student.fullName,
      username: student.username,
      email: student.email,
      mobileNumber: student.phone,
      fatherName: student.fatherName,
      motherName: student.motherName,
      presentAddress: student.presentAddress,
      permanentAddress: student.permanentAddress,
      age: student.age,
      bloodGroup: student.bloodGroup,
      healthIssues: student.healthIssues ? "YES" : "NO",
      password: hashedPassword,
    },
  });

  return { success: true };
}
