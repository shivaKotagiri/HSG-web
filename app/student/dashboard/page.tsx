import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; 
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

import DashboardHeader from "@/components/student-dashboard/DashboardHeader";
import AttendanceStats from "@/components/student-dashboard/AttendanceStats";
import AttendanceTable from "@/components/student-dashboard/AttendanceTable";
import ProfileCard from "@/components/student-dashboard/ProfileCard";

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "student") {
    redirect("/login");
  }

  const student = await prisma.student.findUnique({
    where: { id: session.user.id },
    include: {
      attendances: {
        orderBy: { date: "desc" },
      },
    },
  });

  if (!student) redirect("/login");

  const totalDays = student.attendances.length;
  const present = student.attendances.filter(a => a.status === "PRESENT").length;
  const absent = totalDays - present;

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100">
      <DashboardHeader
        identity={{
          fullName: student.fullName,
          rollNumber: student.username,
          email: student.email,
          avatar: "/user.png",
        }}
      />

      <main className="relative max-w-7xl mx-auto px-4 py-10">
        <AttendanceStats
          data={{ totalDays, present, absent }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <AttendanceTable
            history={student.attendances.map(a => ({
              date: a.date.toISOString(),
              status: a.status,
            }))}
          />

          <ProfileCard
            profile={{
              mobile: student.mobileNumber,
              age: student.age,
              bloodGroup: student.bloodGroup,
              healthIssues: student.healthIssues === "YES",
            }}
            address={{
              present: student.presentAddress,
              permanent: student.permanentAddress,
            }}
          />
        </div>
      </main>
    </div>
  );
}
