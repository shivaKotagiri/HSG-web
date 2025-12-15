"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Menu, X, ArrowRight, Heart, Users, 
  Target, Shield, Zap, MapPin, Mail, Phone, ChevronRight,
  LogIn, Eye, Flag, 
  Footprints, Compass, MountainSnow, ShieldCheck, Crown, 
  HeartPulse, Search, Globe, Terminal, 
  Sparkles, Briefcase, GraduationCap, Ticket, 
  Landmark, Trophy, Facebook, Instagram, Twitter, Linkedin,
  Hand // <--- Added Hand icon
} from "lucide-react";

// --- Helper Component for the About Section ---
const InfoCard = ({ title, subTitle, content, icon: Icon }: { title: string, subTitle?: string, content: string, icon: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Logic to determine if text should be truncated
  const limit = 150;
  const shouldTruncate = content.length > limit;
  const displayContent = isExpanded || !shouldTruncate ? content : content.slice(0, limit) + "...";

  return (
    <div className="relative group h-full">
      {/* Card Background & Hover Effect */}
      <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 relative overflow-hidden z-10 flex flex-col">
        
        {/* Decorative Gradient Blob on Hover */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

        {/* Icon & Title */}
        <div className="relative z-10 mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
             <Icon size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-serif font-bold text-zinc-900 mb-2 tracking-tight">
            {title}
          </h3>
          {subTitle && (
            <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-2 border border-blue-100">
              {subTitle}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex-grow">
          <p className="text-zinc-600 leading-relaxed text-base font-light">
            {displayContent}
          </p>
        </div>

        {/* Read More Toggle */}
        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative z-10 mt-8 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors self-start focus:outline-none group/btn"
          >
            {isExpanded ? "Read less" : "Read full description"}
            <ArrowRight size={16} className={`transition-transform duration-300 ${isExpanded ? "-rotate-90" : "group-hover/btn:translate-x-1"}`} />
          </button>
        )}
      </div>
    </div>
  );
};

// --- Mock Data ---
const NAV_LINKS = [
  { name: "History", href: "#history" },
  { name: "About", href: "#about" },
  { name: "Levels", href: "#levels" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroImages = [
    "https://i.ibb.co/s9yvNfxg/CMR-INSTITUTE-OF-TECHNOLOGY.png",
    "https://i.ibb.co/mFzQQ6B4/CMR-INSTITUTE-OF-TECHNOLOGY.png",
    "https://i.ibb.co/1DFyvTX/CMR-INSTITUTE-OF-TECHNOLOGY-1.png",
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [historyExpanded, setHistoryExpanded] = useState(false);
  
  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100">
      
      {/* --- 1. Dual Header / Navigation --- */}
      <div className="sticky top-0 z-50 w-full">
        
        {/* Top Utility Bar */}
        <div className="bg-zinc-900 text-zinc-400 text-xs py-2 px-6 hidden md:block">
          <div className="mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex items-center gap-6">
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                 <Phone size={12} /> +91 9951040546
               </span>
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                 <Mail size={12} /> hindustanscoutsandguides.cmrit@gmail.com
               </span>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex gap-3 pr-4 border-r border-zinc-700">
                  <Facebook size={14} className="hover:text-blue-500 cursor-pointer transition-colors" />
                  <Twitter size={14} className="hover:text-sky-400 cursor-pointer transition-colors" />
                  <Instagram size={14} className="hover:text-pink-500 cursor-pointer transition-colors" />
                  <Linkedin size={14} className="hover:text-blue-700 cursor-pointer transition-colors" />
               </div>
               <Link 
                 href="/login" 
                 className="flex items-center gap-2 rounded-none bg-blue-600 px-3 py-1 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors"
               >
                 <LogIn size={12} /> Portal Login
               </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <header className="border-b border-zinc-200 bg-white shadow-sm">
          <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
            
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
               {/* HSG Logo */}
               <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0">
                  <Image 
                    src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg" 
                    alt="HSG Logo" 
                    fill 
                    className="object-contain" 
                 />
               </div>

               {/* Brand Text (Hidden on small mobile) */}
               <div className="hidden sm:flex flex-col leading-tight ml-2">
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">CMRIT Chapter</span>
                 <span className="text-sm md:text-lg font-bold text-zinc-900 tracking-tight">Hindustan Scouts & Guides Association</span>
               </div>
            </Link>

            {/* Center: Desktop Nav */}
            <nav className="hidden xl:flex gap-1">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-semibold text-zinc-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-full transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right: CTA */}
            <div className="hidden md:flex items-center gap-4">
               <Link 
                 href="#contact" 
                 className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all"
               >
                 Join Now
               </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMobileMenuOpen && (
            <div className="xl:hidden border-t border-zinc-200 bg-white px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 rounded-lg border-b border-zinc-50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-zinc-100 pt-4 flex flex-col gap-3">
                <Link 
                   href="/login" 
                   className="flex items-center justify-center gap-2 w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   <LogIn size={18} /> Portal Login
                 </Link>
                <Link 
                   href="#contact" 
                   className="block w-full text-center rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Join Now
                 </Link>
              </div>
            </div>
          )}
        </header>
      </div>

     {/* --- 2. Hero Section --- */}
      <section className="relative w-full min-h-[450px] md:min-h-[520px] bg-black">
        <div className="relative h-[450px] md:h-[520px] overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-700"
            style={{ transform: `translateX(-${heroIndex * 100}%)` }}
          >
            {heroImages.map((src, i) => (
              <div key={i} className="relative min-w-full h-full">
                <Image src={src} alt={`Banner ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="m-4 bg-white/20 hover:bg-white/40 text-white px-3 py-2"
              onClick={() => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)}
            >
              Prev
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="m-4 bg-white/20 hover:bg-white/40 text-white px-3 py-2"
              onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
            >
              Next
            </button>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 ${heroIndex === i ? "bg-white" : "bg-white/40"}`}
                onClick={() => setHeroIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. History Section --- */}
      <section id="history" className="w-full py-20 bg-zinc-50 border-b border-zinc-200 relative">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-6">
            <div>
               <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  History
               </div>
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                The Origins & Evolution
              </h2>
            </div>
            <p className="md:max-w-md text-right text-zinc-500 mt-4 md:mt-0 italic font-serif">
              "From the battlefields of 1857 to a global movement."
            </p>
          </div>
          
          <div className={historyExpanded ? "" : "relative max-h-[520px] md:max-h-[600px] overflow-hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 text-zinc-700 text-sm leading-relaxed text-justify">
              <div className="space-y-4 relative">
                 <p>
                   The name 'Scouting' seems to have been inspired by the important and romantic role played by military scouts performing reconnaissance in the times of wars. This idea to Robert Baden-Powell was derived from his senior officer Captain Sessile during his young age while posted in British ruled India as captain in Scout unit of English Military. Robert has assigned to dig out the source of Heavy Armed force and inestimable Hindustani warriors during First Independent Movement 1857 sway. Both of them used to visit in Indian social sector and therefore came to learn about the life style and discovered that Gurukul system of education pattern and learned that students do acquire academic and non-academic ken simultaneous during the learning tenure.
                 </p>
                 <p>
                   <strong>Scouting History in the World:</strong> Robert began coined the word Scouting under influenced from Indian Culture and Indian ancient system of education. The syllabus and teaching topics covered in this, actually were very much inherited in the culture of Indian Civilisation. Even the saying goes that Beden Powel got this idea by understanding teaching pattern adopted by Hindu Gurukul. He was also inspired by childhood teaching activities of Lord Shri Ram Chandra and Shri Laxman as depicted in Ramayana and added a Jungle Visit in syllabus. With the life of Balak Shri Krishana he remained astonished to know that the audacious in adolescent age.
                 </p>
                 <div className="hidden lg:block absolute right-[-2rem] top-0 bottom-0 w-px bg-zinc-200"></div>
              </div>
              <div className="space-y-4 relative">
                 <p>
                   <strong>Origin:</strong> Scouting is stated as aim of supporting young people in their physical, mental and spiritual development, that they may play constructive roles in society. During the first half of the 20th century, the movement grew to encompass three major age groups each for boys (Cub Scout, Boy Scout, Rover Scout) and, in 1910, a new organization, Girl Guides, was created for girls (Brownie Guide, Girl Guide and Girl Scout, Ranger Guide).
                 </p>
                 <p>
                   As a military officer, Robert Baden-Powell was stationed in British India and Africa in the 1880s and 1890s. Since his youth, in military scouting and as part of their training—he showed his men how to survive in the wilderness. He noticed that it helped the soldiers to develop independence rather than just blindly follow officers' orders. In 1896, Baden-Powell was assigned to the Matabeleland region in Southern Rhodesia (now Zimbabwe) as Chief of Staff to Gen. Frederick Carrington during the Second Matabele War, and it was here that he first met and began a lifelong friendship with Frederick Russell Burnham, the American born Chief of Scouts for the British.
                 </p>
                 <div className="hidden lg:block absolute right-[-2rem] top-0 bottom-0 w-px bg-zinc-200"></div>
              </div>
              <div className="space-y-4">
                 <p>
                   The need for the improved training of British military-enlisted scouts, particularly in initiative, self-reliance, and observational skills. Each member received a badge that illustrated a combined compass point and spearhead. The badge's logo was similar to the fleur-de-lis that scouting later adopted as its international symbol. In the United Kingdom, the public followed Powell's struggle to hold Mafeking through newspapers, and when the siege was broken, he had become a national hero.
                 </p>
                 <p>
                   <strong>Scouting in India:</strong> Although, Scouting came in India solitary for European and Anglo Indian boys and girls under the banner of English by the name of 'Boys Scouts of India' in 1909 and same with Girl Guiding in 1913. However, Powel kept closed scouting doors for Indians. There was resentment in Indians for it and 1921, when World Chief Scout Lord Baden Powell came to India, under the Leadership of Pt. Madan Mohan Malviya, a Great Leader of India, Baden Powell was requested to open the doors for Indians but he refused brutally.
                 </p>
              </div>
            </div>
            
            {!historyExpanded && (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-4">
                <button
                  onClick={() => setHistoryExpanded(true)}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-6 py-3 text-sm font-bold hover:bg-blue-700 transition-colors"
                >
                  Read Full History
                </button>
              </div>
            )}
          </div>
          
          {historyExpanded && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setHistoryExpanded(false)}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
              >
                Collapse
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- 4. About HSGA (Redesigned: Content Focused) --- */}
      <section id="about" className="relative py-12 bg-slate-50 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="w-full mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                About HSGA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Who We Are
              </h2>
            </div>
            <p className="md:max-w-md text-right text-zinc-500 mt-4 md:mt-0 italic font-serif">
              Building character, serving society, leading by example.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 text-zinc-700 text-sm leading-relaxed text-justify">
            <div className="space-y-4 relative">
              <p>
                The Hindustan Scouts and Guides Association at CMRIT is a student chapter aligned to a national movement dedicated to holistic youth development. With a focus on service, discipline, and leadership, HSGA nurtures responsible citizens who contribute meaningfully to their communities.
              </p>
              <p>
                Our activities combine physical endurance, outdoor skills, teamwork, and social responsibility. Students participate in camps, disaster management training, first aid, and community service initiatives that cultivate confidence, empathy, and resilience.
              </p>
              <div className="hidden lg:block absolute right-[-2rem] top-0 bottom-0 w-px bg-zinc-200"></div>
            </div>

            <div className="space-y-4 relative">
              <p>
                Mission: To educate young people through a value system based on the Scout Promise and Law, helping build a better world where individuals are self‑fulfilled and play constructive roles in society.
              </p>
              <p>
                Vision: To empower youth across diverse backgrounds through structured programs that develop physical, mental, and moral strength. We collaborate with institutions and associations to broaden access and opportunities for growth.
              </p>
              <div className="hidden lg:block absolute right-[-2rem] top-0 bottom-0 w-px bg-zinc-200"></div>
            </div>

            <div className="space-y-4">
              <p>
                Motto: Serve Man to Reach God. We believe selfless service is a direct path to purpose and dignity. By helping those in need and acting with compassion, students learn that true leadership begins with responsibility and kindness.
              </p>
              <p>
                Values: Integrity, courage, perseverance, and community. These principles guide every activity, ensuring that achievements reflect character as much as skills. HSGA strives to create leaders who elevate others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. Levels of Achievement (Clean Cards) --- */}
      <section id="levels" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Levels
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                The Levels of Leadership
              </h2>
            </div>
            <p className="md:max-w-md text-right text-zinc-500 mt-4 md:mt-0 italic font-serif">
              "From entry to excellence — earn, lead, inspire."
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Level 1 */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Footprints size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Praveshika</h3>
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3">Entry Level</p>
              <p className="text-zinc-600 leading-relaxed">
                The foundation. Designed to assess core knowledge and essential survival skills for new recruits.
              </p>
            </div>

            {/* Level 2 */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Komalpad</h3>
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3">Basic Skills</p>
              <p className="text-zinc-600 leading-relaxed">
                Focuses on developing proficiency in field craft and deepening the understanding of scouting principles.
              </p>
            </div>

            {/* Level 3 */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MountainSnow size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Dhruvpadh</h3>
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3">Intermediate</p>
              <p className="text-zinc-600 leading-relaxed">
                A stage for showcasing advancing proficiency, consistency, and a deeper commitment to the troop.
              </p>
            </div>

            {/* Level 4 */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Gurupadh</h3>
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3">Advanced Leadership</p>
              <p className="text-zinc-600 leading-relaxed">
                Emphasizes mentorship and the ability to guide others. The transition from learner to leader.
              </p>
            </div>

            {/* Level 5 */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Crown size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Rajyapuraskar</h3>
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3">State Level Award</p>
              <p className="text-zinc-600 leading-relaxed">
                The pinnacle of the scouting journey. A prestigious state-level award that honors exceptional achievement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 7. Blood Donor Wing (Compact & Direct) --- */}
      <section id="blood-donor" className="relative py-16 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white overflow-hidden">
        
        {/* Background Element: ECG Heartbeat Line */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,160L48,160L80,64L112,256L144,160L192,160L240,160L272,64L304,256L336,160L1440,160" />
           </svg>
        </div>
        
        {/* Background Element: Floating Particles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-950/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-end">
            
            {/* Content Wrapper */}
            <div className="lg:w-1/2 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/40 border border-red-500/50 text-red-100 text-xs md:text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Emergency Response Network
               </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4 leading-tight">
                Your Blood Can Be Someone&apos;s <span className="text-red-200 border-b-4 border-red-500/50">Second Chance</span>
              </h2>
               
              <p className="text-base md:text-lg text-red-100 mb-8 leading-relaxed font-light">
                The CMRIT HSG Blood Donor wing bridges the gap between donors and those in critical need. We maintain a real-time database of student volunteers ready to respond to emergencies in Hyderabad.
              </p>

               {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                 <Link 
                    href="/blood-donor" 
                    className="flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-full font-bold tracking-wide shadow-lg shadow-red-900/20 hover:bg-red-50 hover:scale-105 transition-all"
                  >
                    <HeartPulse size={18} />
                    Register as Donor
                  </Link>
                  <Link 
                    href="/blood-availability" 
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold tracking-wide border border-red-300/50 bg-red-900/10 hover:bg-red-900/30 hover:border-red-200 transition-all backdrop-blur-sm"
                  >
                    <Search size={18} />
                    Find a Donor
                  </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="benefits" className="py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Benefits
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Why Join the HSGA Wing
              </h2>
            </div>
            <p className="md:max-w-md text-right text-zinc-500 mt-4 md:mt-0 italic font-serif">
              Make impact. Earn recognition. Grow leadership.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Government Jobs</h3>
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3">Scout Quota</p>
              <p className="text-zinc-600 leading-relaxed">
                Access reserved opportunities across Railways and Central sectors.
              </p>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Higher Education</h3>
              <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wide mb-3">Admissions Advantage</p>
              <p className="text-zinc-600 leading-relaxed">
                Leverage recognition to strengthen applications and placements.
              </p>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Ticket size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Travel Perks</h3>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-3">Fare Concession</p>
              <p className="text-zinc-600 leading-relaxed">
                Reduced fares for official activities and recognized service.
              </p>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Medals of Honor</h3>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-3">Formal Recognition</p>
              <p className="text-zinc-600 leading-relaxed">
                Eligibility for high honors from state and national leadership.
              </p>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">National Exposure</h3>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">Leadership Forums</p>
              <p className="text-zinc-600 leading-relaxed">
                Participate in national programs and connect with decision makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 11. Footer (The "Flash" & Grid Edition) --- */}
      <footer className="relative bg-zinc-950 pt-20 pb-10 overflow-hidden font-sans border-t border-white/5">
        
        {/* --- 1. Background Effects (Grid & Flash) --- */}
        <div className="absolute inset-0 -z-10">
           {/* The "Blue Flash" (Spotlight from bottom) */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none opacity-60"></div>
           
           {/* The Tech Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            
            {/* Brand Area */}
            <div className="flex items-center gap-4">
               <div className="relative h-14 w-14 rounded-2xl overflow-hidden shadow-lg shadow-blue-900/20 ring-1 ring-white/10 bg-black">
                 <Image
                   src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
                   alt="HSG Logo"
                   fill
                   className="object-contain p-1"
                 />
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tight leading-none">CMRIT HSG</span>
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-[0.2em] mt-1">Rover & Ranger Unit</span>
               </div>
            </div>

            {/* Socials (Glassmorphism) */}
            <div className="flex items-center gap-4">
               <a href="#" className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all hover:bg-blue-600 hover:border-blue-500 hover:scale-110">
                  <Instagram size={18} className="text-zinc-400 group-hover:text-white" />
               </a>
               <a href="#" className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all hover:bg-sky-500 hover:border-sky-400 hover:scale-110">
                  <Twitter size={18} className="text-zinc-400 group-hover:text-white" />
               </a>
               <a href="#" className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all hover:bg-blue-700 hover:border-blue-600 hover:scale-110">
                  <Linkedin size={18} className="text-zinc-400 group-hover:text-white" />
               </a>
            </div>

          </div>

          {/* Divider Line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
             
             {/* Copyright */}
             <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-center md:text-left">
               <span>&copy; 2024 Hindustan Scouts & Guides CMRIT.</span>
               <span className="hidden md:inline text-zinc-700">|</span>
               <span>
                 Designed by <span className="text-zinc-300 font-semibold hover:text-blue-400 cursor-pointer transition-colors">Redline.Inc</span>
               </span>
             </div>
             
             {/* Direct Contact Links */}
             <div className="flex gap-6 font-medium">
               <a href="mailto:hindustanscoutsandguides.cmrit@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                 <Mail size={14} />
                 <span>Email Us</span>
               </a>
               <a href="tel:+919951040546" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                 <Phone size={14} />
                 <span>Call Now</span>
               </a>
             </div>

          </div>

        </div>
      </footer>
    </div>
  );
}
