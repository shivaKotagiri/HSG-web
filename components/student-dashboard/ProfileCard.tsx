import { Activity, Droplets, MapPin, Phone, User } from "lucide-react";

interface ProfileProps {
  profile: {
    mobile: string;
    age: number;
    bloodGroup: string;
    healthIssues: boolean;
  };
  address: {
    present: string;
    permanent: string;
  };
}

export default function ProfileCard({ profile, address }: ProfileProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-indigo-500" />
          Personal Snapshot
        </h3>
        
        <div className="grid grid-cols-2 gap-y-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Phone Number</p>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              {profile.mobile}
            </div>
          </div>
          
          <div>
            <p className="text-xs text-gray-500 mb-1">Age</p>
            <p className="text-sm font-medium text-gray-900">{profile.age} Years</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Blood Group</p>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
              <Droplets className="w-3.5 h-3.5 text-rose-500" />
              {profile.bloodGroup}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Health Status</p>
            {profile.healthIssues ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded border border-amber-200">
                <Activity className="w-3 h-3" />
                Attention
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded border border-emerald-200">
                <Activity className="w-3 h-3" />
                Fit
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 grow">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-indigo-500" />
          Address Details
        </h3>
        
        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xs text-indigo-600 font-semibold mb-1 uppercase tracking-wide">Present Address</p>
            <p className="text-sm text-gray-700 leading-relaxed">{address.present}</p>
          </div>
          
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xs text-indigo-600 font-semibold mb-1 uppercase tracking-wide">Permanent Address</p>
            <p className="text-sm text-gray-700 leading-relaxed">{address.permanent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}