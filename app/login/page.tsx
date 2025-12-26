"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  User, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Mail, 
  CreditCard,
  ChevronLeft
} from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [loginType, setLoginType] = useState<"student" | "admin">("student");
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!identity || !password) {
      alert("Please enter all fields");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false, 
      email: identity,
      password,
    });

    if (result?.error) {
      alert("Invalid credentials");
      return;
    }

    // Successful login → go to dashboard redirect handler
    router.push("/dashboard");
  }


  return (
    <div className="min-h-screen w-full flex bg-white">
      
      {/* --- Left Side: Visual Branding (Hidden on mobile) --- */}
      <div className="hidden lg:flex w-1/2 bg-zinc-950 relative overflow-hidden flex-col justify-between p-12 text-white">
        
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
               <path d="M0 100 C 50 20 80 20 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-indigo-600/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Brand Text Only */}
        <div className="relative z-10 flex flex-col leading-none">
            <span className="text-3xl font-black tracking-tight">CMRIT HSG</span>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1">Portal Access</span>
        </div>

        {/* Quote/Message */}
        <div className="relative z-10 max-w-md">
           <h2 className="text-4xl font-bold mb-6 leading-tight">
             {loginType === 'student' ? "Ready to Serve.\nReady to Lead." : "Managing the\nFuture Leaders."}
           </h2>
           <p className="text-zinc-400 text-lg">
             {loginType === 'student' 
               ? "Log in to access your activity logs, camp registrations, and certification progress."
               : "Secure access for Faculty Coordinators and Unit Leaders to manage unit data."}
           </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-xs text-zinc-500">
          © 2024 Hindustan Scouts and Guides CMRIT.
        </div>
      </div>

      {/* --- Right Side: Login Form --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white relative">
        
        {/* Back Button */}
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
           <ChevronLeft size={16} /> Back to Home
        </Link>

        <div className="w-full max-w-sm space-y-10">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Welcome Back</h1>
            <p className="mt-2 text-zinc-500">Please enter your credentials to continue.</p>
          </div>

          {/* Toggle Switch */}
          <div className="p-1 bg-zinc-100 rounded-full flex relative">
             <button 
               onClick={() => setLoginType("student")}
               className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 z-10 ${loginType === 'student' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
             >
               <User size={16} /> Student
             </button>
             <button 
               onClick={() => setLoginType("admin")}
               className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 z-10 ${loginType === 'admin' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
             >
               <ShieldCheck size={16} /> Admin
             </button>
          </div>

          {/* Form */}
          <form
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            
            {/* Input 1: Identity */}
            <div className="group relative">
               <label 
                 htmlFor="identity" 
                 className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 group-focus-within:text-blue-600 transition-colors"
               >
                 {loginType === 'student' ? 'PHN / Email Address' : 'Admin ID / Email'}
               </label>
               <div className="relative flex items-center">
                 <div className="absolute left-0 text-zinc-400 group-focus-within:text-blue-600 transition-colors">
                    {loginType === 'student' ? <CreditCard size={20} /> : <Mail size={20} />}
                 </div>
                 <input
                   id="identity"
                   type="text"
                   className="w-full bg-transparent border-b-2 border-zinc-200 py-3 pl-8 text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-blue-600 transition-all font-medium"
                   placeholder={loginType === 'student' ? "22R01...." : "admin@cmrit.ac.in"}
                   value={identity}
                   onChange={(e) => setIdentity(e.target.value)}
                 />
               </div>
            </div>

            {/* Input 2: Password */}
            <div className="group relative">
               <div className="flex items-center mb-2">
                 <label 
                   htmlFor="password" 
                   className="block text-xs font-bold uppercase tracking-wider text-zinc-500 group-focus-within:text-blue-600 transition-colors"
                 >
                   Password
                 </label>
               </div>
               <div className="relative flex items-center">
                 <div className="absolute left-0 text-zinc-400 group-focus-within:text-blue-600 transition-colors">
                    <Lock size={20} />
                 </div>
                 <input
                   id="password"
                   type="password"
                   className="w-full bg-transparent border-b-2 border-zinc-200 py-3 pl-8 text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-blue-600 transition-all font-medium"
                   placeholder="••••••••"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                 />
               </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full rounded-full bg-zinc-900 px-4 py-4 text-sm font-bold text-white shadow-lg shadow-zinc-900/20 hover:bg-blue-600 hover:shadow-blue-600/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Sign In as {loginType === 'student' ? 'Student' : 'Admin'}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Help Text */}
          {loginType === 'student' && (
            <p className="text-center text-xs text-zinc-500">
              New to HSG? <Link href="/register" className="text-zinc-900 font-bold hover:underline">Create your account</Link>
            </p>
          )}
          {loginType === 'admin' && (
            <p className="text-center text-xs text-zinc-500">
              Need access? <Link href="#" className="text-zinc-900 font-bold hover:underline">Contact System Administrator</Link>
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
