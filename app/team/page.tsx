"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Award, Sparkles, Hash, Shield } from "lucide-react";

// --- Data Configuration ---

const FACULTY = {
  name: "Dr. Putta Praveen Reddy",
  role: "HSGA Coordinator",
  id: "FAC-001",
  imageSeed: "Praveen", 
  color: "blue"
};

const BATCH_2020_2021 = [
  { name: "Ch. Ravi Kiran", role: "Student Coordinator", id: "20-001" },
  { name: "B. Sai Siddhartha", role: "Student Coordinator", id: "20-002" },
  { name: "Kartan Shiva Shenkar", role: "Student Coordinator", id: "20-003" },
  { name: "Tarun Koduru", role: "Student Coordinator", id: "20-004" },
];

const BATCH_2022_2023 = [
  { name: "Sri Bhavith Bodike", role: "Student Coordinator", id: "22-001" },
  { name: "V. Uthej Reddy", role: "Student Coordinator", id: "22-002" },
  { name: "Thimmishetty Varshini", role: "Student Coordinator", id: "22-003" },
  { name: "Janavi", role: "Student Coordinator", id: "22-004" },
  { name: "K. Sumith", role: "Student Coordinator", id: "22-005" },
  { name: "Adepu Ruthvik Chandran", role: "Student Coordinator", id: "22-006" },
  { name: "Nithin N", role: "Student Coordinator", id: "22-007" },
  { name: "Mrinal Devi", role: "Student Coordinator", id: "22-008" },
  { name: "Mengarthi Udaycharan", role: "Student Coordinator", id: "22-009" },
  { name: "T. Vishnuvardhan Reddy", role: "Student Coordinator", id: "22-010" },
  { name: "Voorukonda Shiva Reddy", role: "Student Coordinator", id: "22-011" },
];

const BATCH_2024_2025 = [
  { name: "M. Shiva Kumar", role: "Student Coordinator", id: "24-001" },
  { name: "Pavan Bantu", role: "Student Coordinator", id: "24-002" },
  { name: "Abhinav Karthik", role: "Student Coordinator", id: "24-003" },
  { name: "Yogeeshwara Pavan Kumar", role: "Student Coordinator", id: "24-004" },
  { name: "Varala Jaya Prakash", role: "Student Coordinator", id: "24-005" },
  { name: "Mallesh", role: "Student Coordinator", id: "24-006" },
  { name: "Sri Vardhan", role: "Student Coordinator", id: "24-007" },
  { name: "Sathwika Golanakonda", role: "Student Coordinator", id: "24-008" },
  { name: "Sritha Nallamala", role: "Student Coordinator", id: "24-009" },
  { name: "Sai Sree Mallempati", role: "Student Coordinator", id: "24-010" },
];

type Member = {
  name: string;
  role: string;
  id: string;
};

// --- Animation Variants ---
const containerVar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVar: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 50, damping: 15 } }
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-zinc-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden pb-20">
      
      {/* --- Abstract Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
             <div className="flex items-center gap-2 mb-3">
               <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
               <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Team Roster • 2024</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 tracking-tight mb-4">
               The Squad.
             </h1>
             <p className="text-zinc-500 text-lg font-light max-w-lg">
               Meet the visionaries and the boots on the ground making the mission possible.
             </p>
          </motion.div>

          {/* Styled Back Button */}
          <div className="absolute top-0 right-0 md:relative mt-4 md:mt-0">
            <Link 
              href="/" 
              className="group flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-white border border-zinc-200 shadow-sm hover:shadow-lg hover:border-zinc-300 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-zinc-600 group-hover:text-zinc-900">Back Home</span>
              <span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>

        {/* --- Faculty Hero Card --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] text-white p-8 md:p-12 shadow-2xl">
            {/* Glossy Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] z-10"></div>
            
            <div className="relative z-20 flex flex-col md:flex-row items-center gap-10">
               
               {/* Faculty Image */}
               <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-blue-500 blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="h-44 w-44 md:h-52 md:w-52 rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden relative shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${FACULTY.imageSeed}&backgroundColor=1e293b`} 
                        alt={FACULTY.name}
                        className="h-full w-full object-cover"
                      />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-2xl shadow-lg border-4 border-[#0A0A0A]">
                    <Award size={24} />
                  </div>
               </div>

               {/* Faculty Info */}
               <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                     <span className="px-3 py-1 rounded-md bg-white/10 border border-white/10 text-xs font-mono text-blue-300">
                       {FACULTY.id}
                     </span>
                     <span className="h-px w-8 bg-white/20"></span>
                     <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Unit Head</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-serif font-medium mb-3 group-hover:text-blue-200 transition-colors">{FACULTY.name}</h2>
                  <p className="text-xl text-zinc-400 mb-6">{FACULTY.role}</p>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <p className="text-zinc-400 text-sm leading-relaxed italic">
                      &quot;Guiding the vision and ensuring the highest standards of excellence for HSGA CMRIT through unwavering mentorship.&quot;
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- Student Batches --- */}
        <div className="space-y-32">
          
          <BatchSection 
            title="Current Leadership" 
            subtitle="2024 - 2025 Batch" 
            members={BATCH_2024_2025} 
            theme="blue" 
          />
          
          <BatchSection 
            title="Senior Council" 
            subtitle="2022 - 2023 Batch" 
            members={BATCH_2022_2023} 
            theme="indigo" 
          />
          
          <BatchSection 
            title="Founding Members" 
            subtitle="2020 - 2021 Batch" 
            members={BATCH_2020_2021} 
            theme="zinc" 
          />

        </div>
      </div>
    </div>
  );
}

// --- Components ---

function BatchSection({ title, subtitle, members, theme }: { title: string, subtitle: string, members: Member[], theme: string }) {
  
  const themeColors: Record<string, string> = {
    blue: "from-blue-100/50 to-blue-50/10 border-blue-100 text-blue-600",
    indigo: "from-indigo-100/50 to-indigo-50/10 border-indigo-100 text-indigo-600",
    zinc: "from-zinc-100/50 to-zinc-50/10 border-zinc-200 text-zinc-600",
  };

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-12 border-b border-zinc-200 pb-6">
        <div>
          <h2 className="text-3xl font-serif text-zinc-900">{title}</h2>
          <p className="text-zinc-400 font-mono text-sm mt-1">{subtitle}</p>
        </div>
        <div className="hidden md:block text-xs font-bold uppercase tracking-wider text-zinc-300">
          {members.length} Members
        </div>
      </div>

      <motion.div 
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10"
      >
        {members.map((member, idx) => (
          <motion.div key={idx} variants={cardVar}>
             <CreativeProfileCard member={member} theme={themeColors[theme]} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function CreativeProfileCard({ member, theme }: { member: Member, theme: string }) {
  return (
    <div className="group relative w-full perspective-1000">
       
       {/* Card Container */}
       <div className="relative bg-white rounded-2xl p-3 shadow-sm border border-zinc-100 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-zinc-200/50 group-hover:-translate-y-2 group-hover:border-zinc-200">
          
          {/* Header ID */}
          <div className="flex justify-between items-center px-2 py-1 mb-2">
            <span className="text-[10px] font-mono text-zinc-300 group-hover:text-blue-400 transition-colors">
              <Hash size={10} className="inline mr-0.5" />{member.id || "000"}
            </span>
            <Sparkles size={12} className="text-zinc-200 group-hover:text-yellow-400 transition-colors opacity-0 group-hover:opacity-100" />
          </div>

          {/* Image Area */}
          <div className={`relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-br ${theme} mb-4 transition-all duration-500`}>
             <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
             
             {/* Illustrated Avatar */}
             <img 
               src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.name}&backgroundColor=transparent`} 
               alt={member.name}
               className="h-full w-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:translate-y-1"
             />

             {/* Hover Overlay */}
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-white/30 backdrop-blur-md">
                   View Profile
                </span>
             </div>
          </div>

          {/* Details */}
          <div className="text-center px-1 pb-2">
             <h3 className="font-bold text-sm text-zinc-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
               {member.name}
             </h3>
             <div className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-50 text-zinc-500 uppercase tracking-wide group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
               {member.role.replace("Student Coordinator", "Coordinator")}
             </div>
          </div>

          {/* Decorative Bottom Bar */}
          <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-zinc-100 rounded-full overflow-hidden">
             <div className="h-full w-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
          </div>

       </div>
    </div>
  );
}
