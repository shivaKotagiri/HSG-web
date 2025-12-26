"use client";

import { LogOut, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { signOut } from "next-auth/react";

interface AdminHeaderProps {
  admin: {
    email: string;
    role: string;
    avatar: string;
  };
}

export default function AdminHeader({ admin }: AdminHeaderProps) {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LEFT: Admin Identity */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                Admin Console
              </h1>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {admin.role}
              </p>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-sm font-semibold text-slate-900">
                {admin.email}
              </span>
              <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                System Active
              </span>
            </div>

            <div className="relative h-10 w-10 rounded-full ring-2 ring-white shadow-md">
              <Image
                src={admin.avatar}
                alt="Admin"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="h-8 w-px bg-slate-200 mx-1" />

            {/* LOGOUT */}
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              aria-label="Logout"
              className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
