import { AlertCircle, Droplets, Mail, Phone } from "lucide-react";

interface Student {
  id: string;
  name: string;
  roll: string;
  email: string;
  phone: string;
  bloodGroup: string;
  healthIssues: boolean;
  healthDetails?: string;
}

interface DirectoryProps {
  students: Student[];
}

export default function StudentDirectory({ students }: DirectoryProps) {
  const hasStudents = students.length > 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 bg-white">
        <h3 className="text-lg font-bold text-slate-900">Student Directory</h3>
        <p className="text-slate-500 text-sm">Contact and health information</p>
      </div>

      {!hasStudents ? (
        <div className="py-16 text-center text-slate-400 text-sm">
          No students found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-gray-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Identity</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Medical</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  {/* Identity */}
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">
                      {student.name}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {student.roll}
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5">
                      <a
                        href={`mailto:${student.email}`}
                        className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-indigo-400" />
                        {student.email}
                      </a>
                      <a
                        href={`tel:${student.phone}`}
                        className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-indigo-400" />
                        {student.phone}
                      </a>
                    </div>
                  </td>

                  {/* Medical */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                        <Droplets className="w-3 h-3 text-rose-500" />
                        {student.bloodGroup}
                      </span>

                      {student.healthIssues && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                          <AlertCircle className="w-3 h-3" />
                          {student.healthDetails || "Health Issue"}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
