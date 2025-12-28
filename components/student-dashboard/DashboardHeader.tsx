"use client";

import { LogOut, Settings, Bell, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface HeaderProps {
  identity: {
    fullName: string;
    rollNumber: string;
    email: string;
    avatar: string;
  };
}

export default function DashboardHeader({ identity }: HeaderProps) {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LEFT: Identity */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 hover:opacity-100 transition duration-500 blur-sm"></div>
              <div className="relative h-12 w-12 rounded-full ring-2 ring-white shadow-lg">
                <Image
                  src={identity.avatar}
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                {identity.fullName}
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
              </h1>
              <div className="flex items-center gap-3 text-sm mt-0.5">
                <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-xs border border-indigo-100">
                  {identity.rollNumber}
                </span>
                <span className="text-gray-500 font-medium">
                  {identity.email}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications (future use) */}
            {/* <button
              type="button"
              aria-label="Notifications"
              className="relative p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-3 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </button> */}

            {/* /* Settings */ }
            {/* <Link
              href="/student/settings"
              className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
            >
              <Settings className="w-5 h-5" />
            </Link>

            <div className="h-6 w-px bg-gray-200 mx-2"></div> */}

            {/* Logout */}
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-200 transition-all active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
