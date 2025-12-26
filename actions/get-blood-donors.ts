"use server";

import { PrismaClient } from "@/app/generated/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { adapter } from "next/dist/server/web/adapter";
import { log } from "console";
import prisma from "@/lib/prisma";

export async function getBloodDonors() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const data = await prisma.bloodDonation.findMany({
    orderBy: { createdAt: "desc"}
  })

  return data
}


