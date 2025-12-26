"use client";

import { CheckCircle2, XCircle, CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface HistoryProps {
  history: {
    date: string;
    status: string;
  }[];
}

export default function AttendanceTable({ history }: HistoryProps) {
  const [showAll, setShowAll] = useState(false);
  
  // Default to showing only the first 5 records unless expanded
  const displayedHistory = showAll ? history : history.slice(0, 5);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-50 rounded text-indigo-600">
            <CalendarDays className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-gray-900">Attendance History</h3>
        </div>
        
        {history.length > 5 && (
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-indigo-600 font-medium hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-3 h-3" /></>
            ) : (
              <>View All <ChevronDown className="w-3 h-3" /></>
            )}
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium uppercase tracking-wider text-xs">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Day</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {displayedHistory.map((record, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors group">
                <td className="px-6 py-4 font-medium text-gray-900 group-hover:text-indigo-900">
                  {new Date(record.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4">
                  {record.status === "PRESENT" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Present
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60">
                      <XCircle className="w-3.5 h-3.5" />
                      Absent
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right text-gray-500 font-mono text-xs">
                  {new Date(record.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {displayedHistory.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No attendance records found.
          </div>
        )}
      </div>
      
      {/* Footer hint for UX */}
      {!showAll && history.length > 5 && (
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-2 text-center">
          <p className="text-xs text-gray-400">
            Showing recent 5 of {history.length} records
          </p>
        </div>
      )}
    </div>
  );
}