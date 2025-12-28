/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  User, Mail, Lock, ArrowRight, ChevronLeft, 
  Phone, MapPin, HeartPulse, Droplet, Calendar, Users, 
  ShieldCheck, Loader2, Command, FileBadge
} from "lucide-react";
import { registerStudent } from "@/actions/addStudents"; 

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    phn: "",             
    fatherName: "",
    motherName: "",
    age: "",
    bloodGroup: "",
    presentAddress: "",
    permanentAddress: "",
    email: "",
    phone: "",            
    password: "",
    confirmPassword: "",
    healthIssues: false,
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const id = target.id;
    const isCheckbox = (target as HTMLInputElement).type === "checkbox";
    const nextValue = isCheckbox ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({
      ...prev,
      [id]: nextValue,
    }));
  };

  function mapBloodGroup(value: string) {
    const map: Record<string, any> = {
      "A+": "A_POS",
      "A-": "A_NEG",
      "B+": "B_POS",
      "B-": "B_NEG",
      "AB+": "AB_POS",
      "AB-": "AB_NEG",
      "O+": "O_POS",
      "O-": "O_NEG",
    };
    return map[value];
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    const result = await registerStudent({
      fullName: formData.fullName,
      username: formData.phn,
      email: formData.email,
      phone: formData.phone,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      presentAddress: formData.presentAddress,
      permanentAddress: formData.permanentAddress,
      age: Number(formData.age),
      bloodGroup: mapBloodGroup(formData.bloodGroup),
      healthIssues: formData.healthIssues,
      password: formData.password,
    });

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
      return;
    }

    // success
    router.push("/login");
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* ==============================================
          LEFT SIDE: Branding (Sticky Sidebar)
          ============================================== */}
      <div className="hidden lg:flex w-5/12 fixed left-0 top-0 h-full bg-zinc-950 text-white flex-col justify-between p-12 z-10 overflow-hidden border-r border-zinc-800">
        
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
               <circle cx="50" cy="50" r="40" stroke="url(#grad1)" strokeWidth="0.2" fill="none" opacity="0.5" />
               <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'rgb(59, 130, 246)', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'rgb(147, 51, 234)', stopOpacity:1}} />
                  </linearGradient>
               </defs>
            </svg>
            <div className="absolute top-0 right-0 w-100 h-100 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-75 h-75 bg-indigo-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 flex flex-col leading-none">
          <span className="text-3xl font-black tracking-tight">CMRIT HSG</span>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1">Portal Registration</span>
          <h1 className="mt-6 text-5xl font-black tracking-tighter leading-[1.1]">
            Fill the form <br />
            to add the students.
          </h1>
        </div>

        {/* Motivational Quote */}
        <div className="relative z-10 border-l-2 border-zinc-800 pl-6 py-2">
           <p className="text-lg text-zinc-300 font-medium italic leading-relaxed">
             &quot;A Scout smiles and whistles under all circumstances.&quot;
           </p>
           <p className="mt-3 text-xs font-bold text-zinc-500 uppercase tracking-widest">— Lord Baden-Powell</p>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex justify-between items-end text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
          <p>HSG CMRIT Unit</p>
          <p>Est. 2024</p>
        </div>
      </div>

      {/* ==============================================
          RIGHT SIDE: Scrollable Form
          ============================================== */}
      <div className="w-full lg:w-7/12 ml-auto bg-white min-h-screen flex flex-col items-center">
        
        <div className="w-full max-w-2xl px-6 py-12 lg:px-16 lg:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="lg:hidden flex items-center gap-2 mb-8 text-zinc-900">
             <div className="h-8 w-8 bg-zinc-900 rounded flex items-center justify-center text-white"><Command size={16}/></div>
             <span className="font-bold">CMRIT HSG</span>
          </div>

          {/* Back Navigation */}
          <span onClick={() => router.back()} className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-zinc-900 transition-colors mb-10 group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Dashboard
          </span>

          {/* Form Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Student Application</h2>
            <p className="mt-2 text-zinc-500">
              Please complete all fields accurately for official records.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* --- SECTION 1: Personal Details --- */}
            <div className="space-y-6">
              <SectionHeader title="01. Personal Identity" icon={<User size={14}/>} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup 
                  id="fullName" label="Full Name" icon={<User size={18} />} 
                  placeholder="John Doe" value={formData.fullName} onChange={handleChange} 
                />
                <InputGroup 
                  id="phn" label="USERNAME" icon={<FileBadge size={18} />} 
                  placeholder="1CR22..." value={formData.phn} onChange={handleChange} 
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <InputGroup 
                  id="age" type="number" label="Age" icon={<Calendar size={18} />} 
                  placeholder="18" value={formData.age} onChange={handleChange} 
                />
                 <div className="group relative w-full">
                   <label 
                     htmlFor="bloodGroup" 
                     className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 group-focus-within:text-blue-600 transition-colors"
                   >
                     Blood Group
                   </label>
                   <div className="relative flex items-center">
                     <div className="absolute left-0 text-zinc-400 group-focus-within:text-blue-600 transition-colors pointer-events-none">
                       <Droplet size={18} />
                     </div>
                     <select
                       id="bloodGroup"
                       className="w-full bg-transparent border-b-2 border-zinc-200 py-3 pl-8 text-zinc-900 focus:outline-none focus:border-blue-600 transition-all font-medium"
                       value={formData.bloodGroup}
                       onChange={handleChange}
                       required
                     >
                       <option value="" disabled>Select</option>
                       <option value="A+">A+</option>
                       <option value="A-">A-</option>
                       <option value="B+">B+</option>
                       <option value="B-">B-</option>
                       <option value="O+">O+</option>
                       <option value="O-">O-</option>
                       <option value="AB+">AB+</option>
                       <option value="AB-">AB-</option>
                     </select>
                   </div>
                 </div>
              </div>
            </div>

            {/* --- SECTION 2: Family Details --- */}
            <div className="space-y-6">
              <SectionHeader title="02. Family Details" icon={<Users size={14}/>} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <InputGroup 
                  id="fatherName" label="Father's Name" icon={<Users size={18} />} 
                  placeholder="Father Name" value={formData.fatherName} onChange={handleChange} 
                />
                 <InputGroup 
                  id="motherName" label="Mother's Name" icon={<Users size={18} />} 
                  placeholder="Mother Name" value={formData.motherName} onChange={handleChange} 
                />
              </div>
            </div>

            {/* --- SECTION 3: Contact & Address --- */}
            <div className="space-y-6">
              <SectionHeader title="03. Contact Info" icon={<MapPin size={14}/>} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup 
                  id="email" type="email" label="Email Address" icon={<Mail size={18} />} 
                  placeholder="you@cmrit.ac.in" value={formData.email} onChange={handleChange} 
                />
                <InputGroup 
                  id="phone" label="Phone Number" icon={<Phone size={18} />} 
                  placeholder="98765 43210" value={formData.phone} onChange={handleChange} 
                />
              </div>

              <div className="space-y-6">
                <InputGroup 
                    id="presentAddress" label="Present Address" icon={<MapPin size={18} />} 
                    placeholder="Current Hostel / PG / Flat Address" value={formData.presentAddress} onChange={handleChange} 
                />
                <InputGroup 
                    id="permanentAddress" label="Permanent Address" icon={<MapPin size={18} />} 
                    placeholder="Native / Home Address" value={formData.permanentAddress} onChange={handleChange} 
                />
              </div>
            </div>

            {/* --- SECTION 4: Health & Security --- */}
            <div className="space-y-6">
              <SectionHeader title="04. Health & Security" icon={<ShieldCheck size={14}/>} />

              {/* Health Checkbox Card */}
              <div 
                onClick={() => setFormData(prev => ({...prev, healthIssues: !prev.healthIssues}))}
                className={`group flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-all duration-200 ${formData.healthIssues ? 'bg-red-50 border-red-200 ring-1 ring-red-200' : 'bg-white border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'}`}
              >
                <div className={`mt-0.5 shrink-0 flex items-center justify-center h-5 w-5 rounded border transition-colors ${formData.healthIssues ? 'bg-red-500 border-red-500 text-white' : 'bg-white border-zinc-300 group-hover:border-zinc-400'}`}>
                   {formData.healthIssues && <span className="text-xs">✓</span>}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <HeartPulse size={16} className={formData.healthIssues ? "text-red-500" : "text-zinc-400"} />
                    <span className={`text-sm font-bold ${formData.healthIssues ? 'text-red-700' : 'text-zinc-900'}`}>
                        I have existing health issues
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Check this box if you have chronic conditions (Asthma, Allergies, etc.) that we should be aware of for outdoor activities.
                  </p>
                </div>
                <input type="checkbox" className="hidden" id="healthIssues" checked={formData.healthIssues} readOnly />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup 
                  id="password" type="password" label="Create Password" icon={<Lock size={18} />} 
                  placeholder="••••••••" value={formData.password} onChange={handleChange} 
                />
                <InputGroup 
                  id="confirmPassword" type="password" label="Confirm Password" icon={<Lock size={18} />} 
                  placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} 
                />
              </div>
            </div>

            {/* Error & Submit */}
            <div className="pt-6 pb-12">
              {error && (
                <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-100 flex items-center gap-2 animate-in slide-in-from-top-2">
                  <ShieldCheck size={16} /> {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="group w-full cursor-pointer rounded-full bg-zinc-900 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-zinc-900/20 hover:bg-blue-600 hover:shadow-blue-600/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <span>Add the Student</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}

// --- Reusable Sub Components ---

const SectionHeader = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
    <div className="text-zinc-400">{icon}</div>
    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
      {title}
    </h3>
  </div>
);

const InputGroup = ({ id, label, icon, placeholder, type="text", value, onChange }: any) => (
  <div className="group relative w-full">
    <label 
      htmlFor={id} 
      className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 group-focus-within:text-blue-600 transition-colors"
    >
      {label}
    </label>
    <div className="relative flex items-center">
      <div className="absolute left-0 text-zinc-400 group-focus-within:text-blue-600 transition-colors pointer-events-none">
        {icon}
      </div>
      <input
        id={id}
        type={type}
        className="w-full bg-transparent border-b-2 border-zinc-200 py-3 pl-8 text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-blue-600 transition-all font-medium"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
    </div>
  </div>
);
