/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Check,
  X,
  Search,
  Save,
  Calendar as CalendarIcon,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { saveAttendance } from "@/actions/save-attendance";
import { useRouter } from "next/navigation";

interface Student {
  id: string;
  name: string;
  roll: string;
  status: "PRESENT" | "ABSENT";
}

interface ManagerProps {
  students: Student[];
}

export default function AttendanceManager({
  students: initialStudents,
}: ManagerProps) {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  /* ---------- helpers ---------- */

  const toggleStatus = (id: string, status: "PRESENT" | "ABSENT") => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const markAll = (status: "PRESENT" | "ABSENT") => {
    setStudents((prev) => prev.map((s) => ({ ...s, status })));
  };

  /* ---------- save ---------- */

  const handleSave = async () => {
    setIsSaving(true);

    try {
      await saveAttendance(
        selectedDate,
        students.map((s) => ({
          studentId: s.id,
          status: s.status,
        }))
      );

      router.refresh(); // 🔥 IMPORTANT
      alert("Attendance saved successfully");
    } catch (error) {
      alert("Failed to save attendance");
    } finally {
      setIsSaving(false);
    }
  };


  /* ---------- filters ---------- */

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* ---------- UI ---------- */

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Mark Attendance
            </h3>
            <p className="text-sm text-slate-500">
              Manage daily student records
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 pr-4 py-2 text-slate-600 border rounded-xl text-sm"
              />
            </div>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold disabled:opacity-60"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save
                </>
              )}
            </button>
          </div>
        </div>

        {/* Search + bulk */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800" />
            <input
              type="text"
              placeholder="Search name / roll"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 text-slate-600 py-2 rounded-xl bg-slate-50"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => markAll("PRESENT")}
              className="px-4 py-2 text-xs font-bold bg-emerald-50 text-emerald-700 rounded-lg"
            >
              Mark All Present
            </button>
            <button
              onClick={() => markAll("ABSENT")}
              className="px-4 py-2 text-xs font-bold bg-rose-50 text-rose-700 rounded-lg"
            >
              Mark All Absent
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto text-background">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-b-neutral-50">
            <tr>
              <th className="px-6 py-4 text-left">Student</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id} className="border-b border-b-neutral-50 hover:bg-slate-50">
                <td className="px-6 py-4">
                  <p className="font-bold">{s.name}</p>
                  <p className="text-xs text-slate-500">{s.roll}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => toggleStatus(s.id, "PRESENT")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold ${
                        s.status === "PRESENT"
                          ? "bg-emerald-500 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Check className="inline w-4 h-4" /> Present
                    </button>
                    <button
                      onClick={() => toggleStatus(s.id, "ABSENT")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold ${
                        s.status === "ABSENT"
                          ? "bg-rose-500 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <X className="inline w-4 h-4" /> Absent
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
