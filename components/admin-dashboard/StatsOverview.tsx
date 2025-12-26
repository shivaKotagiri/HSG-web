import { Users, UserCheck, UserX, BarChart3 } from "lucide-react";

interface StatsProps {
  stats: {
    totalStudents: number;
    presentToday: number;
    absentToday: number;
    percentage: number;
  };
}

export default function StatsOverview({ stats }: StatsProps) {
  const safePercentage =
    Number.isFinite(stats.percentage) ? stats.percentage : 0;

  const cards = [
    {
      label: "Total Students",
      value: stats.totalStudents,
      icon: Users,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
    },
    {
      label: "Present Today",
      value: stats.presentToday,
      icon: UserCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      label: "Absent Today",
      value: stats.absentToday,
      icon: UserX,
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
    {
      label: "Attendance Rate",
      value: `${safePercentage}%`,
      icon: BarChart3,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`bg-white p-6 rounded-2xl border ${card.border} shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">
                {card.label}
              </p>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                {card.value}
              </h3>
            </div>
            <div className={`p-3 rounded-xl ${card.bg}`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
