"use client";

import { Check, X, Search, Save, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { saveAttendance } from "@/actions/save-attendance"; 


interface Student {
  id: string;
  name: string;
  roll: string;
  status: string;
}

interface ManagerProps {
  students: Student[];
}

export default function AttendanceManager({ students: initialStudents }: ManagerProps) {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSaving, setIsSaving] = useState(false);

  const toggleStatus = (id: string, newStatus: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const markAll = (status: string) => {
    setStudents((prev) => prev.map((s) => ({ ...s, status })));
  };

    const handleSave = async () => {
        try {
            setIsSaving(true);

            await saveAttendance(
            selectedDate,
            students.map((s) => ({
                studentId: s.id,
                status: s.status as "PRESENT" | "ABSENT",
            }))
            );
        } catch (err) {
            console.error(err);
            alert("Failed to save attendance");
        } finally {
            setIsSaving(false);
        }
    };


  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 bg-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Mark Attendance</h3>
            <p className="text-slate-500 text-sm">Manage daily student records</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-indigo-200 active:scale-95 disabled:active:scale-100"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or roll no..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button 
              onClick={() => markAll("PRESENT")}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-100 transition-colors"
            >
              Mark All Present
            </button>
            <button 
              onClick={() => markAll("ABSENT")}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-100 transition-colors"
            >
              Mark All Absent
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-600">Student Info</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{student.name}</p>
                      <p className="text-xs font-medium text-slate-500 bg-slate-100 inline-block px-1.5 py-0.5 rounded mt-0.5">
                        {student.roll}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => toggleStatus(student.id, "PRESENT")}
                      className={`relative flex-1 max-w-25 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border transition-all duration-200 overflow-hidden ${
                        student.status === "PRESENT"
                          ? "bg-emerald-500 border-emerald-600 text-white shadow-md shadow-emerald-200 scale-105 z-10"
                          : "bg-white border-gray-200 text-gray-400 hover:border-emerald-200 hover:text-emerald-500"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span className="font-semibold text-xs">Present</span>
                    </button>
                    
                    <button
                      onClick={() => toggleStatus(student.id, "ABSENT")}
                      className={`relative flex-1 max-w-25 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border transition-all duration-200 overflow-hidden ${
                        student.status === "ABSENT"
                          ? "bg-rose-500 border-rose-600 text-white shadow-md shadow-rose-200 scale-105 z-10"
                          : "bg-white border-gray-200 text-gray-400 hover:border-rose-200 hover:text-rose-500"
                      }`}
                    >
                      <X className="w-4 h-4" />
                      <span className="font-semibold text-xs">Absent</span>
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