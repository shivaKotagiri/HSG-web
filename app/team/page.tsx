"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Mail, Twitter, Award, Sparkles } from "lucide-react";

// --- Data ---
const FACULTY = {
  name: "Dr. Faculty Name",
  role: "Faculty Coordinator",
  description: "Guiding the vision and ensuring the highest standards of excellence for HSGA CMRIT.",
  tags: ["Leadership", "Mentorship", "Vision"],
  imageSeed: "Felix"
};

const STUDENTS = [
  { 
    name: "Student Lead", 
    role: "Rovers Mate", 
    desc: "Leading the Rovers with discipline and courage.",
    tags: ["Strategy", "Field Work"],
    imageSeed: "Jack"
  },
  { 
    name: "Student Lead", 
    role: "Rangers Mate", 
    desc: "Empowering Rangers to achieve new heights.",
    tags: ["Community", "Management"],
    imageSeed: "Aneka"
  },
  { 
    name: "Secretary", 
    role: "General Secretary", 
    desc: "Orchestrating operations and maintaining cohesion.",
    tags: ["Operations", "Logistics"],
    imageSeed: "Bella"
  },
];

// --- Components ---

const SocialButton = ({ icon: Icon }: { icon: any }) => (
  <button className="p-2 rounded-full bg-zinc-50 text-zinc-500 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
    <Icon size={16} />
  </button>
);

const Badge = ({ text }: { text: string }) => (
  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-zinc-100 text-zinc-600 border border-zinc-200">
    {text}
  </span>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-900 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        
        {/* --- Header Section --- */}
        <div className="mb-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 mb-6">
              <Sparkles size={12} />
              HSGA CMRIT
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Architects</span><br /> of Change.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-500 leading-relaxed">
              Meet the visionaries, the coordinators, and the student leaders driving the mission forward. Dedicated to service, leadership, and community impact.
            </p>
          </motion.div>
        </div>

        {/* --- Faculty Spotlight (Hero Card) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:border-blue-300 transition-colors duration-500">
            {/* Gradient Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl group-hover:bg-blue-200/50 transition-all duration-500" />
            
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="h-40 w-40 md:h-48 md:w-48 rounded-full p-2 border-2 border-dashed border-zinc-200 group-hover:border-blue-400 group-hover:rotate-12 transition-all duration-700">
                <img 
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${FACULTY.imageSeed}&backgroundColor=e0e7ff`}
                  alt="Faculty"
                  className="h-full w-full rounded-full object-cover bg-blue-50"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                <Award size={20} />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left z-10">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {FACULTY.tags.map(tag => <Badge key={tag} text={tag} />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">{FACULTY.name}</h2>
              <p className="text-blue-600 font-medium text-lg mb-4">{FACULTY.role}</p>
              <p className="text-zinc-500 leading-relaxed max-w-lg mb-6">
                {FACULTY.description}
              </p>
              <div className="flex justify-center md:justify-start gap-3">
                <SocialButton icon={Linkedin} />
                <SocialButton icon={Twitter} />
                <SocialButton icon={Mail} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Student Council Grid --- */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-2">
            <span className="h-8 w-1 bg-blue-600 rounded-full block"></span>
            Student Council
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENTS.map((member, idx) => (
              <motion.div
                key={member.name + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="group relative bg-zinc-50/50 hover:bg-white rounded-2xl p-6 border border-zinc-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-zinc-100 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.imageSeed}`}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                     <SocialButton icon={Linkedin} />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xl font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mt-1">
                    {member.role}
                  </p>
                </div>

                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {member.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                   {member.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-white border border-zinc-200 rounded text-zinc-500">
                       {tag}
                     </span>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Footer / Navigation --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-zinc-100 flex justify-between items-center"
        >
          <p className="text-zinc-400 text-sm">© 2024 HSGA CMRIT</p>
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
}