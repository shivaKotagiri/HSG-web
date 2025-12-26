import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; 
import { redirect } from "next/navigation";

export default async function DashboardRedirect() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if (session.user.role === "admin") {
    redirect("/admin/dashboard");
  }

  redirect("/student/dashboard");
}
