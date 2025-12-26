import { CalendarCheck, CalendarX, PieChart, TrendingUp } from "lucide-react";

interface StatsProps {
  data: {
    totalDays: number;
    present: number;
    absent: number;
  };
}

export default function AttendanceStats({ data }: StatsProps) {
  const percentage = Math.round((data.present / data.totalDays) * 100);

  const stats = [
    {
      label: "Total Days",
      value: data.totalDays,
      icon: CalendarCheck,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Present",
      value: data.present,
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Absent",
      value: data.absent,
      icon: CalendarX,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      label: "Percentage",
      value: `${percentage}%`,
      icon: PieChart,
      color: percentage > 75 ? "text-indigo-600" : "text-amber-600",
      bg: percentage > 75 ? "bg-indigo-50" : "bg-amber-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {stat.value}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}