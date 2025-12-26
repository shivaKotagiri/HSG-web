"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function saveAttendance(date: string, attendance: {
  studentId: string;
  status: "PRESENT" | "ABSENT";
}[]) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }

  await prisma.attendance.deleteMany({
    where: { date: new Date(date) },
  });

  await prisma.attendance.createMany({
    data: attendance.map(a => ({
      date: new Date(date),
      status: a.status,
      studentId: a.studentId,
      adminId: session.user.id,
    })),
  });
}
