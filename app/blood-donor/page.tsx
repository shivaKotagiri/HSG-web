"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Heart, 
  Droplet, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Search,
  ArrowRight
} from "lucide-react";

export default function BloodDonorPage() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBloodGroup) return; // Basic validation
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-sans">
      
      {/* --- Left Side: Visual & Stats (Sticky on Desktop) --- */}
      <div className="lg:w-5/12 relative bg-gradient-to-br from-red-700 via-red-800 to-red-950 text-white p-8 lg:p-12 flex flex-col justify-between overflow-hidden lg:h-screen lg:sticky lg:top-0">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
             <path d="M0 100 C 50 20 80 20 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>
        
        {/* Decorative Floating Drops */}
        <div className="absolute top-20 right-10 text-red-500/20 animate-pulse">
           <Droplet size={300} fill="currentColor" />
        </div>

        {/* Brand / Back Link */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-red-200 hover:text-white transition-colors text-sm font-medium mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Main Text */}
        <div className="relative z-10 mt-8 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Be the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-400">Lifeline.</span>
          </h1>
          <p className="text-lg text-red-100/80 leading-relaxed max-w-md mb-8">
            Your registration adds you to our emergency response network. You will only be contacted when there is a critical need for your specific blood type.
          </p>

          {/* New Button to Availability Page */}
          <Link 
            href="/blood-availability" 
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white hover:text-red-900 transition-all font-semibold"
          >
            <Search size={18} />
            Check Blood Availability
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="relative z-10 mt-12 grid grid-cols-2 gap-4">
           <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">1.2k+</div>
              <div className="text-xs text-red-200 uppercase tracking-wide">Active Donors</div>
           </div>
           <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">45min</div>
              <div className="text-xs text-red-200 uppercase tracking-wide">Avg. Response Time</div>
           </div>
        </div>
      </div>

      {/* --- Right Side: The Form --- */}
      <div className="lg:w-7/12 p-8 lg:p-16 overflow-y-auto">
        <div className="max-w-xl mx-auto">
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-zinc-900">Donor Registration</h2>
            <p className="text-zinc-500 mt-2">Fields marked with (<span className="text-red-600">*</span>) are mandatory.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Section 1: Personal Details */}
            <div className="space-y-8">
               <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 flex items-center gap-2">
                 <User size={16} /> Personal Information
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="group relative">
                    <label className="block text-xs font-medium text-zinc-500 mb-1 group-focus-within:text-red-600 transition-colors">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <div className="relative flex items-center">
                       <User size={18} className="absolute left-0 text-zinc-400 group-focus-within:text-red-600 transition-colors" />
                       <input 
                         type="text" 
                         required
                         className="w-full bg-transparent border-b-2 border-zinc-200 py-2 pl-7 text-zinc-900 focus:outline-none focus:border-red-600 transition-all font-medium placeholder-zinc-300"
                         placeholder="John Doe"
                       />
                    </div>
                  </div>

                  {/* USN Input */}
                  <div className="group relative">
                    <label className="block text-xs font-medium text-zinc-500 mb-1 group-focus-within:text-red-600 transition-colors">
                      USN (Student ID) <span className="text-red-600">*</span>
                    </label>
                    <div className="relative flex items-center">
                       <span className="absolute left-0 text-zinc-400 font-bold text-xs group-focus-within:text-red-600 transition-colors">ID</span>
                       <input 
                         type="text" 
                         required
                         className="w-full bg-transparent border-b-2 border-zinc-200 py-2 pl-7 text-zinc-900 focus:outline-none focus:border-red-600 transition-all font-medium placeholder-zinc-300 uppercase"
                         placeholder="1CR..."
                       />
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Input */}
                  <div className="group relative">
                    <label className="block text-xs font-medium text-zinc-500 mb-1 group-focus-within:text-red-600 transition-colors">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <div className="relative flex items-center">
                       <Phone size={18} className="absolute left-0 text-zinc-400 group-focus-within:text-red-600 transition-colors" />
                       <input 
                         type="tel" 
                         required
                         className="w-full bg-transparent border-b-2 border-zinc-200 py-2 pl-7 text-zinc-900 focus:outline-none focus:border-red-600 transition-all font-medium placeholder-zinc-300"
                         placeholder="+91 98765 43210"
                       />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group relative">
                    <label className="block text-xs font-medium text-zinc-500 mb-1 group-focus-within:text-red-600 transition-colors">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <div className="relative flex items-center">
                       <Mail size={18} className="absolute left-0 text-zinc-400 group-focus-within:text-red-600 transition-colors" />
                       <input 
                         type="email" 
                         required
                         className="w-full bg-transparent border-b-2 border-zinc-200 py-2 pl-7 text-zinc-900 focus:outline-none focus:border-red-600 transition-all font-medium placeholder-zinc-300"
                         placeholder="you@cmrit.ac.in"
                       />
                    </div>
                  </div>
               </div>
            </div>

            {/* Section 2: Medical Details */}
            <div className="space-y-8">
               <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 flex items-center gap-2">
                 <Heart size={16} /> Medical Details
               </h3>

               {/* Blood Group Selection Grid */}
               <div>
                 <label className="block text-xs font-medium text-zinc-500 mb-4">
                   Select Blood Group <span className="text-red-600">*</span>
                 </label>
                 <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                    {bloodGroups.map((bg) => (
                      <button
                        key={bg}
                        type="button"
                        onClick={() => setSelectedBloodGroup(bg)}
                        className={`aspect-square rounded-xl border flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                          selectedBloodGroup === bg 
                            ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30 scale-110" 
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-red-300 hover:bg-red-50"
                        }`}
                      >
                        {bg}
                      </button>
                    ))}
                 </div>
                 {!selectedBloodGroup && <p className="text-[10px] text-red-500 mt-2">Please select a blood group to proceed.</p>}
               </div>

               {/* Last Donated Date (NO Asterisk) */}
               <div className="group relative max-w-xs">
                  <label className="block text-xs font-medium text-zinc-500 mb-1 group-focus-within:text-red-600 transition-colors">
                    Last Date of Donation
                  </label>
                  <div className="relative flex items-center">
                      <Calendar size={18} className="absolute left-0 text-zinc-400 group-focus-within:text-red-600 transition-colors" />
                      <input 
                        type="date" 
                        className="w-full bg-transparent border-b-2 border-zinc-200 py-2 pl-7 text-zinc-900 focus:outline-none focus:border-red-600 transition-all font-medium placeholder-zinc-300"
                      />
                  </div>
                  <p className="text-[10px] text-zinc-400 mt-1">Leave blank if you have never donated before.</p>
               </div>

               {/* Health Declaration */}
               <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-red-800">
                    <p className="font-semibold mb-1">Health Declaration</p>
                    <p>By submitting this form, I confirm that I do not have any chronic illnesses (Diabetes, HIV, Hepatitis) and weigh above 50kg.</p>
                  </div>
               </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-700 py-4 text-white font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    Complete Registration <CheckCircle size={18} />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-zinc-400 mt-4">
                Your data is secure and will only be used for emergency blood requirements.
              </p>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}
