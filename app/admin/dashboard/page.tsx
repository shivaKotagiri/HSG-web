import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

import AdminHeader from "@/components/admin-dashboard/AdminHeader";
import StatsOverview from "@/components/admin-dashboard/StatsOverview";
import AttendanceManager from "@/components/admin-dashboard/AttendanceManager";
import StudentDirectory from "@/components/admin-dashboard/StudentDirectory";
import BloodDonorTable from "@/components/admin-dashboard/BloodDonorTable";

import { LayoutGrid, Users, Droplets } from "lucide-react";
import { getBloodDonors } from "@/actions/get-blood-donors"; 

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  const students = await prisma.student.findMany({
    orderBy: { fullName: "asc" },
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const attendanceToday = await prisma.attendance.findMany({
    where: { date: today },
  });

  const presentToday = attendanceToday.filter(
    (a) => a.status === "PRESENT"
  ).length;

  const totalStudents = students.length;
  const absentToday = totalStudents - presentToday;

  const bloodDonors = await getBloodDonors();
  
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100">
      <AdminHeader
        admin={{
          email: session.user.email!,
          role: "ADMIN",
          avatar: "/user.png",
        }}
      />

      <main className="relative max-w-7xl mx-auto px-6 py-10 space-y-10">
        <StatsOverview
          stats={{
            totalStudents,
            presentToday,
            absentToday,
            percentage:
              totalStudents === 0
                ? 0
                : Math.round((presentToday / totalStudents) * 100),
          }}
        />

        <div className="flex gap-3">
          <a href="#attendance" className="admin-tab">
            <LayoutGrid className="w-4 h-4" />
            Attendance
          </a>
          <a href="#students" className="admin-tab">
            <Users className="w-4 h-4" />
            Students
          </a>
          <a href="#donors" className="admin-tab">
            <Droplets className="w-4 h-4" />
            Blood Donors
          </a>
        </div>

        <section id="attendance">
          <AttendanceManager
            students={students.map((s) => ({
              id: s.id,
              name: s.fullName,
              roll: s.username,
              status:
                attendanceToday.find((a) => a.studentId === s.id)?.status ??
                "ABSENT",
            }))}
          />
        </section>

        <section id="students">
          <StudentDirectory
            students={students.map((s) => ({
              id: s.id,
              name: s.fullName,
              roll: s.username,
              email: s.email,
              phone: s.mobileNumber,
              bloodGroup: s.bloodGroup,
              healthIssues: s.healthIssues === "YES",
            }))}
          />
        </section>

        <section id="donors">
          <BloodDonorTable donors={bloodDonors} />
        </section>
      </main>
    </div>
  );
}
