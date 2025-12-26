"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const bloodDonationSchema = z.object({
  fullName: z.string().min(3),
  studentId: z.string().optional(),
  phoneNumber: z.string().min(10),
  email: z.string().email(),
  bloodGroup: z.enum([
    "A_POS",
    "A_NEG",
    "B_POS",
    "B_NEG",
    "O_POS",
    "O_NEG",
    "AB_POS",
    "AB_NEG",
  ]),
  lastDonationAt: z.string().optional(),
});

export async function submitBloodDonation(data: unknown) {
  const parsed = bloodDonationSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid data");
  }

  const {
    fullName,
    studentId,
    phoneNumber,
    email,
    bloodGroup,
    lastDonationAt,
  } = parsed.data;

  return await prisma.bloodDonation.create({
    data: {
      fullName,
      studentId,
      phoneNumber,
      email,
      bloodGroup,
      lastDonationAt: lastDonationAt ? new Date(lastDonationAt) : null,
    },
  });
}
