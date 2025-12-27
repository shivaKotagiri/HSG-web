"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function saveAttendance(
  date: string,
  records: {
    studentId: string;
    status: "PRESENT" | "ABSENT";
  }[]
) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const adminId = session.user.id;
  if (!adminId) throw new Error("Invalid admin session");

  const attendanceDate = new Date(date);
  attendanceDate.setHours(0, 0, 0, 0);

  await prisma.$transaction(
    records.map((record) =>
      prisma.attendance.upsert({
        where: {
          studentId_date: {
            studentId: record.studentId,
            date: attendanceDate,
          },
        },
        update: {
          status: record.status,
          adminId,
        },
        create: {
          studentId: record.studentId,
          date: attendanceDate,
          status: record.status,
          adminId,
        },
      })
    )
  );
}
