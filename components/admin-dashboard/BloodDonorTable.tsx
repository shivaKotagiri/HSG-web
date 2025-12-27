import { Droplets, Phone, Mail } from "lucide-react";

interface Donor {
  id: string;
  fullName: string;
  studentId?: string | null;
  phoneNumber: string;
  email: string;
  bloodGroup: string;
  lastDonationAt?: Date | null;
}

export default function BloodDonorTable({ donors }: { donors: Donor[] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-lg font-bold text-slate-900">Blood Donors</h3>
        <p className="text-slate-500 text-sm">
          Emergency donor directory
        </p>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-xs font-bold uppercase text-slate-500">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Blood</th>
            <th className="px-6 py-4">Contact</th>
            <th className="px-6 py-4">Last Donation</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="px-6 py-4 font-bold text-center text-slate-800">
                {d.fullName}
                {d.studentId && (
                  <div className="text-xs text-slate-500">
                    {d.studentId}
                  </div>
                )}
              </td>

              <td className="px-6 py-4 text-center">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-rose-50 text-rose-600 text-xs font-bold">
                  <Droplets className="w-3 h-3" />
                  {d.bloodGroup}
                </span>
              </td>

              <td className="px-6 py-4 text-slate-600 ">
                <div className="flex flex-col text-xs justify-center items-center">
                  <span className="flex items-center gap-1 ">
                    <Phone className="w-3 h-3" /> {d.phoneNumber}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {d.email}
                  </span>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-slate-600 text-center">
                {d.lastDonationAt
                  ? new Date(d.lastDonationAt).toLocaleDateString()
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
