"use client";

import Link from "next/link";
import { Droplet, Activity, CheckCircle } from "lucide-react";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function BloodAvailabilityPage() {
  return (
    <div className="min-h-screen bg-red-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900">Blood Availability</h1>
          <p className="mt-2 text-zinc-600">
            Live overview of available blood groups from registered donors.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-zinc-800 font-semibold">
              <Activity className="text-red-600" size={18} />
              Live Availability
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded border border-green-200">
              Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {BLOOD_TYPES.map((type) => (
              <div
                key={type}
                className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-red-300 hover:bg-red-50 transition-all"
              >
                <Droplet size={26} className="text-red-600" />
                <span className="mt-2 text-lg font-bold text-zinc-900">{type}</span>
                <span className="text-[10px] text-zinc-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">
                  Select
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <CheckCircle size={18} className="text-green-600" />
            <div className="text-sm text-zinc-700">
              Recent requirement met: 3 units of B+ arranged within 45 minutes.
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="inline-block text-sm font-medium text-blue-700 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
