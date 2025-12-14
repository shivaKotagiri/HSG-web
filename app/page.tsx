"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Menu, X, Calendar, ArrowRight, Heart, Users, 
  Target, Award, Droplet, MapPin, Mail, Phone, ChevronRight,
  LogIn, ScrollText, Eye, Flag, 
  Footprints, Compass, MountainSnow, ShieldCheck, Crown, 
  HeartPulse, Search, Globe, Terminal, 
  Sparkles, Briefcase, GraduationCap, Ticket, 
  Landmark, Trophy, Facebook, Instagram, Twitter, Linkedin
} from "lucide-react";

// --- Mock Data ---
const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Objectives", href: "#objectives" },
  { name: "Levels", href: "#levels" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Blood Donor", href: "#blood-donor" },
  { name: "Gallery", href: "#gallery" },
];

const OBJECTIVES = [
  { title: "Service", icon: Heart, desc: "Serving the community with dedication and selflessness." },
  { title: "Discipline", icon: Target, desc: "Instilling core values of discipline and integrity." },
  { title: "Leadership", icon: Users, desc: "Fostering the next generation of capable leaders." },
  { title: "Skill", icon: Award, desc: "Developing survival and life skills through practical training." },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100">
      
      {/* --- 1. Dual Header / Navigation --- */}
      <div className="sticky top-0 z-50 w-full">
        
        {/* Top Utility Bar */}
        <div className="bg-zinc-900 text-zinc-400 text-xs py-2 px-6 hidden md:block">
          <div className="mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex items-center gap-6">
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                 <Phone size={12} /> +91 98765 43210
               </span>
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                 <Mail size={12} /> hsg@cmrit.ac.in
               </span>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex gap-3 pr-4 border-r border-zinc-700">
                  <Facebook size={14} className="hover:text-blue-500 cursor-pointer transition-colors" />
                  <Twitter size={14} className="hover:text-sky-400 cursor-pointer transition-colors" />
                  <Instagram size={14} className="hover:text-pink-500 cursor-pointer transition-colors" />
                  <Linkedin size={14} className="hover:text-blue-700 cursor-pointer transition-colors" />
               </div>
               <Link href="/login" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                 <LogIn size={12} /> Portal Login
               </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <header className="border-b border-zinc-200 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-sm">
          <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
            
            {/* Left: Dual Logos & Brand */}
            <Link href="/" className="flex items-center gap-4 group">
               
               {/* 1. CMRIT Logo */}
               <div className="relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
                  <Image 
                    src="https://avatars.githubusercontent.com/u/65121137?s=280&v=4" 
                    alt="CMRIT Logo" 
                    fill 
                    className="object-contain" 
                  /> 
               </div>

               {/* Divider */}
               <div className="h-10 w-[1px] bg-zinc-300"></div>

               {/* 2. HSG Logo */}
               <div className="relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0">
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
                 <span className="text-sm md:text-lg font-bold text-zinc-900 tracking-tight">Hindustan Scouts & Guides</span>
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

     {/* --- 2. Hero Section (Left Aligned, Taller Height) --- */}
      <section className="relative isolate w-full min-h-[800px] flex flex-col justify-center overflow-hidden bg-zinc-950 py-32">
        
        {/* --- BACKGROUND ELEMENTS --- */}
        <div className="absolute inset-0 -z-10 h-full w-full">
            {/* 1. Base Dark Background */}
            <div className="absolute inset-0 bg-zinc-950" />
            
            {/* 2. The Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* 3. Ambient Glows (Shifted slightly for left alignment) */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 opacity-50 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-20%] w-[600px] h-[400px] bg-indigo-600/10 opacity-30 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        {/* --- MAIN CONTENT (Left Aligned) --- */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
             
             {/* Content Wrapper */}
             <div className="max-w-2xl flex flex-col items-start text-left">
                
                {/* Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md text-xs font-medium text-blue-300 hover:bg-blue-500/10 transition-colors">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Admissions Open for 2024 Batch
                </div>

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                  Ready to <span className="text-zinc-500">Serve.</span> <br />
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-500">Lead.</span>
                </h1>
                
                {/* Description */}
                <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl">
                  Join the <strong className="text-white">Hindustan Scouts and Guides</strong> (CMRIT Chapter). We don't just build tents; we build character, discipline, and the leaders of tomorrow through service and adventure.
                </p>

                {/* Buttons (Left Aligned) */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#contact"
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-zinc-950 transition-all duration-300 hover:bg-blue-50 hover:scale-105"
                  >
                    <span className="mr-2">Start Journey</span>
                    <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#events"
                    className="group inline-flex h-12 items-center justify-center px-6 text-sm font-medium text-zinc-400 transition-colors hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-full"
                  >
                    View upcoming events
                  </Link>
                </div>

                {/* Stats Strip (Left Aligned) */}
                <div className="mt-16 pt-8 border-t border-white/5 flex items-start gap-12 w-full">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-3xl font-light text-white tracking-tight">120+</span>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Volunteers</span>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-3xl font-light text-white tracking-tight">500+</span>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Hours Served</span>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-3xl font-light text-white tracking-tight">15+</span>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Awards Won</span>
                  </div>
                </div>

             </div>

        </div>
      </section>

      {/* --- 3. About HSGA (Dark Mode) --- */}
      <section id="about" className="relative py-24 bg-zinc-950 overflow-hidden isolate">
        
        {/* Ambient Background Glow (Bottom Left Only) */}
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] -z-10"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Image Composition */}
            <div className="relative">
              {/* Main Image Base */}
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-zinc-900 shadow-2xl overflow-hidden border border-white/5">
                {/* TODO: Replace with Main Group Photo */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-medium bg-zinc-900">
                  Main Group Photo
                </div>
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-video rounded-xl bg-zinc-900 shadow-2xl ring-1 ring-white/10 overflow-hidden hidden sm:block backdrop-blur-sm">
                 {/* TODO: Replace with Activity/Camp Photo */}
                 <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-sm bg-zinc-900/50">
                   Camp Activity Photo
                 </div>
              </div>

              {/* Decorative Dot Pattern */}
              <div className="absolute -top-4 -left-4 -z-10 opacity-10">
                <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                  <pattern id="dots-dark" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" className="text-white" fill="currentColor" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots-dark)" />
                </svg>
              </div>
            </div>

            {/* Right: Content */}
            <div className="mt-10 lg:mt-0">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></span>
                Who We Are
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Molding the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Leaders</span> of Tomorrow
              </h2>
              
              <p className="text-lg leading-8 text-zinc-400 mb-6">
                The <strong className="text-white">Hindustan Scouts and Guides Association</strong> at CMRIT is more than just a club; it is a movement dedicated to the holistic development of youth. We operate under the guidance of the institute to construct a better society by transforming students into responsible, disciplined, and empathetic citizens.
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-8">
                {[
                  "Community Service & Disaster Management",
                  "Physical Endurance & Adventure Camps",
                  "Leadership Workshops & Skill Development"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0 shadow-lg shadow-blue-900/50">
                       <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Quote Block */}
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-white/5 rounded-r-lg backdrop-blur-sm">
                <p className="italic text-zinc-300">
                  &quot;To serve God, to serve the nation, and to help others at all times.&quot;
                </p>
                <p className="text-sm font-bold text-white mt-2">— The Scout Promise</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Objectives & Foundation --- */}
      <section id="objectives" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Our Foundation & Focus
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Built on a legacy of service, driven by a vision for the future.
            </p>
          </div>

          {/* Part 1: History, Mission, Vision (Bento Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            
            {/* History Card (Wide) */}
            <div className="md:col-span-3 lg:col-span-1 bg-zinc-50 rounded-3xl p-8 border border-zinc-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                <ScrollText size={140} className="text-blue-900" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-blue-700 mb-6 border border-zinc-100">
                   <ScrollText size={28} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our History</h3>
                <p className="text-zinc-600 leading-relaxed">
                  The Hindustan Scouts and Guides Association was established to revive the true spirit of scouting in India. At CMRIT, our chapter carries forward this legacy, blending traditional scouting values with modern technical education.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
               <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Flag size={150} className="text-blue-900" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-blue-700 mb-6 border border-zinc-100">
                   <Flag size={28} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h3>
                <p className="text-zinc-600">
                  To educate young people through a value system based on the Scout Promise and Law, building a better world where people are self-fulfilled.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 relative overflow-hidden group shadow-2xl">
               {/* Dark card for contrast */}
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <Eye size={120} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/50">
                   <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-zinc-400">
                  To be a leading youth movement at CMRIT, empowering students to become global citizens who are physically strong and mentally awake.
                </p>
              </div>
            </div>
          </div>

          {/* Part 2: Core Objectives (Redesigned) */}
          <div className="relative mb-12">
            <div className="flex items-center gap-4">
               <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
               <span className="whitespace-nowrap rounded-full border border-zinc-200 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-widest text-zinc-500 shadow-sm">
                 Core Objectives
               </span>
               <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OBJECTIVES.map((obj, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-[2rem] bg-zinc-50 border border-zinc-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                {/* Decorative Circle (Background) */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/50 blur-3xl transition-all duration-500 group-hover:bg-white/20"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white group-hover:backdrop-blur-sm">
                    <obj.icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-zinc-900 transition-colors duration-300 group-hover:text-white">
                    {obj.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500 transition-colors duration-300 group-hover:text-blue-100">
                    {obj.desc}
                  </p>

                  {/* Arrow Interaction */}
                  <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-bold text-white opacity-0 transition-all duration-300 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- 5. Levels of Achievement (Grid & Animation) --- */}
      <section id="levels" className="py-24 bg-zinc-50 relative overflow-hidden">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
          <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              The Ladder of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Leadership</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Ascend through the five stages of excellence. Each step builds the character required to lead.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Level 1 */}
            <div className="group relative h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-blue-300 overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl font-bold text-zinc-50 transition-colors group-hover:text-blue-50/50">1</div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Footprints size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Praveshika</h3>
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-4">Entry Level</p>
                <p className="text-zinc-600 leading-relaxed">
                  The foundation. Designed to assess core knowledge and essential survival skills for new recruits.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Level 2 */}
            <div className="group relative h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-blue-300 overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl font-bold text-zinc-50 transition-colors group-hover:text-blue-50/50">2</div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Komalpad</h3>
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-4">Basic Skills</p>
                <p className="text-zinc-600 leading-relaxed">
                  Focuses on developing proficiency in field craft and deepening the understanding of scouting principles.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Level 3 */}
            <div className="group relative h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-blue-300 overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl font-bold text-zinc-50 transition-colors group-hover:text-blue-50/50">3</div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MountainSnow size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Dhruvpadh</h3>
                <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-4">Intermediate</p>
                <p className="text-zinc-600 leading-relaxed">
                  A stage for showcasing advancing proficiency, consistency, and a deeper commitment to the troop.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Level 4 */}
            <div className="group relative h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-indigo-300 overflow-hidden md:col-span-1">
              <div className="absolute -right-6 -top-6 text-9xl font-bold text-zinc-50 transition-colors group-hover:text-indigo-50/50">4</div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Gurupadh</h3>
                <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wide mb-4">Advanced Leadership</p>
                <p className="text-zinc-600 leading-relaxed">
                  Emphasizes mentorship and the ability to guide others. The transition from learner to leader.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-600 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Level 5 */}
            <div className="group relative h-full rounded-3xl bg-zinc-900 p-8 shadow-xl ring-1 ring-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-yellow-500/20 overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-amber-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute -right-12 -top-12 text-[10rem] font-bold text-zinc-800 transition-colors group-hover:text-yellow-500/10">5</div>
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                 <div className="flex-shrink-0">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-white shadow-lg shadow-amber-900/50 group-hover:scale-110 transition-transform duration-500">
                      <Crown size={40} fill="currentColor" className="text-white/90" />
                    </div>
                 </div>
                 <div>
                   <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Rajyapuraskar</h3>
                   <div className="inline-block rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400 ring-1 ring-yellow-400/50 mb-4">
                      State Level Award
                   </div>
                   <p className="text-zinc-400 leading-relaxed max-w-lg group-hover:text-zinc-300">
                     The pinnacle of the scouting journey. A prestigious state-level award that honors exceptional achievement.
                   </p>
                 </div>
              </div>
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
            </div>

          </div>
        </div>
      </section>

      {/* --- 6. Blood Donor Wing (Right Aligned & Linked) --- */}
      <section id="blood-donor" className="relative py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white overflow-hidden">
        
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
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/40 border border-red-500/50 text-red-100 text-sm font-semibold mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Emergency Response Network
               </div>

               <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 leading-tight">
                 Your Blood Can Be Someone&apos;s <span className="text-red-200 border-b-4 border-red-500/50">Second Chance</span>
               </h2>
               
               <p className="text-lg text-red-100 mb-8 leading-relaxed">
                 The CMRIT HSG Blood Donor wing bridges the gap between donors and those in critical need. We maintain a real-time database of student volunteers ready to respond to emergencies in Bangalore.
               </p>

               {/* Action Buttons */}
               <div className="flex flex-wrap gap-4 mb-12">
                  <Link 
                    href="/blood-donor" 
                    className="flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold shadow-lg shadow-red-900/20 hover:bg-red-50 hover:scale-105 transition-all"
                  >
                    <HeartPulse size={20} />
                    Register as Donor
                  </Link>
                  <Link 
                    href="/blood-availability" 
                    className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-red-300/50 bg-red-900/10 hover:bg-red-900/30 hover:border-red-200 transition-all backdrop-blur-sm"
                  >
                    <Search size={20} />
                    Find a Donor
                  </Link>
               </div>

               {/* Impact Stats */}
               <div className="grid grid-cols-3 gap-6 border-t border-red-500/30 pt-8">
                  <div>
                    <div className="text-3xl font-bold">1,200+</div>
                    <div className="text-sm text-red-200">Registered Donors</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">850+</div>
                    <div className="text-sm text-red-200">Units Collected</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2,500+</div>
                    <div className="text-sm text-red-200">Lives Impacted</div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 7. Events & News --- */}
      <section id="events" className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">Latest Updates</h2>
              <p className="mt-2 text-zinc-600">Major announcements and upcoming milestones.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl ring-1 ring-white/10">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[100px]"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12 items-center">
              
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400 mb-6">
                  <Sparkles size={14} />
                  <span>Official Launch</span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  Welcome to the <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">New Era</span> of HSG CMRIT
                </h3>
                
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  We are proud to unveil our brand new digital presence. A centralized platform to connect our scouts, showcase our achievements, and drive the movement forward.
                </p>

                <div className="w-full bg-black/40 rounded-xl p-4 border border-white/10 mb-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-2">
                    <Terminal size={12} />
                    <span>System_Credits.log</span>
                  </div>
                  <div className="font-mono text-sm text-green-400">
                    <span className="text-zinc-500">{`>`} </span> 
                    Designed & Developed by <span className="font-bold text-white border-b border-green-400/30 pb-0.5">Redline.Inc</span>
                  </div>
                </div>

                <button className="group flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                  Explore Platform
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative h-full min-h-[300px] w-full flex items-center justify-center">
                 <div className="relative w-full max-w-sm aspect-square bg-zinc-800/50 rounded-2xl border border-white/10 p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-4 opacity-50">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       <div className="w-full h-2 bg-zinc-700 rounded-full ml-2"></div>
                    </div>
                    <div className="space-y-3">
                       <div className="h-32 w-full bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-lg border border-white/5 flex items-center justify-center">
                          <Globe className="text-blue-400 opacity-50" size={48} />
                       </div>
                       <div className="h-4 w-3/4 bg-zinc-700 rounded animate-pulse"></div>
                       <div className="h-4 w-1/2 bg-zinc-700 rounded animate-pulse"></div>
                       <div className="h-4 w-full bg-zinc-700 rounded animate-pulse"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg border border-white/10 flex items-center gap-3">
                       <Globe size={24} />
                       <div>
                         <div className="text-xs font-medium text-blue-200">Status</div>
                         <div className="font-bold">Online</div>
                       </div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 8. Benefits & Team CTA --- */}
      <section id="team" className="relative py-24 bg-zinc-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
               <Users size={16} />
               <span>Membership Perks</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
              Why Join the <span className="text-blue-600">Squad?</span>
            </h2>
            <p className="text-lg text-zinc-600">
              Beyond the adventure, becoming a member opens doors to exclusive career and educational opportunities authorized by the Government of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-6 right-6 text-4xl font-bold text-zinc-100 group-hover:text-blue-50 transition-colors">01</div>
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Government Jobs</h3>
              <p className="text-zinc-600 leading-relaxed">
                Eligible for a <span className="font-semibold text-blue-600">2% Scout Quota</span> reservation in Indian Railways and various Central Government sectors.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-6 right-6 text-4xl font-bold text-zinc-100 group-hover:text-blue-50 transition-colors">02</div>
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Higher Education</h3>
              <p className="text-zinc-600 leading-relaxed">
                Secure admission in prestigious colleges and universities through the special <span className="font-semibold text-indigo-600">Scout Quota</span>.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-6 right-6 text-4xl font-bold text-zinc-100 group-hover:text-blue-50 transition-colors">03</div>
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Ticket size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Travel Perks</h3>
              <p className="text-zinc-600 leading-relaxed">
                Enjoy <span className="font-semibold text-emerald-600">50% Fare Concession</span> on railways and public transport for all scouting activities.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 lg:col-start-1 lg:col-end-2">
              <div className="absolute top-6 right-6 text-4xl font-bold text-zinc-100 group-hover:text-blue-50 transition-colors">04</div>
              <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Trophy size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Medals of Honor</h3>
              <p className="text-zinc-600 leading-relaxed">
                Eligibility for prestigious <span className="font-semibold text-amber-600">Governor&apos;s & President&apos;s Medals</span> recognizing exceptional service.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div className="absolute top-6 right-6 text-4xl font-bold text-zinc-100 group-hover:text-blue-50 transition-colors">05</div>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                 <div className="w-14 h-14 rounded-xl bg-purple-50 flex flex-shrink-0 items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                    <Landmark size={28} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">National Exposure</h3>
                    <p className="text-zinc-600 leading-relaxed max-w-lg">
                      Gain the unique privilege to participate in the <span className="font-semibold text-purple-600">National Scouting Program at New Delhi</span>, networking with leaders from across the nation.
                    </p>
                 </div>
              </div>
            </div>

          </div>

          <div className="relative rounded-3xl bg-zinc-900 px-6 py-12 md:px-12 md:py-16 text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to meet the people making it happen?
              </h3>
              <p className="text-zinc-400 mb-10 text-lg">
                Our team is composed of dedicated Faculty Coordinators, Rovers, Rangers, and Student Leads working together to build a legacy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/team-list" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-900 hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
                  View Full Team List
                  <ArrowRight size={18} />
                </Link>
                <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-zinc-700 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-800 transition-colors">
                  Contact Coordinator
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 9. Gallery --- */}
      <section id="gallery" className="py-24 bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
            {/* Masonry-style Grid Layout */}
            <div className="col-span-2 row-span-2 bg-zinc-800 rounded-2xl overflow-hidden relative group">
               <div className="absolute inset-0 flex items-center justify-center text-zinc-600">Main Highlight Photo</div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
            </div>
            <div className="bg-zinc-800 rounded-2xl overflow-hidden relative"></div>
            <div className="bg-zinc-800 rounded-2xl overflow-hidden relative"></div>
            <div className="col-span-2 bg-zinc-800 rounded-2xl overflow-hidden relative"></div>
          </div>
        </div>
      </section>

      {/* --- 10. Call to Action (Updated: Clean & Impactful) --- */}
      <section id="contact" className="relative py-24 overflow-hidden bg-slate-900 isolate">
        
        {/* 1. Background: Abstract Map Topography */}
        <div className="absolute inset-0 -z-10 opacity-20 mix-blend-soft-light">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
             <path d="M0 100 C 50 20 80 20 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
             <path d="M0 100 C 30 40 60 40 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>

        {/* 2. Background: Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Your Journey Begins <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Here.</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't just watch history happen—be a part of it. Join the CMRIT Hindustan Scouts and Guides today to build character, serve the nation, and create a legacy of adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
               <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold shadow-xl shadow-blue-900/20 hover:bg-blue-50 hover:scale-105 transition-all w-full sm:w-auto overflow-hidden">
                 <span className="relative z-10 flex items-center justify-center gap-2">
                   Register Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                 </span>
               </button>
               
               <button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-bold hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto">
                 Contact Coordinator
               </button>
            </div>

            <p className="mt-8 text-xs text-slate-500 font-medium">
              * Registration is open for 2024-25 Batch. Limited spots available.
            </p>
        </div>
      </section>

      {/* --- 11. Footer (Redesigned: The Professional Finish) --- */}
      <footer className="bg-zinc-950 pt-20 pb-10 text-zinc-400 border-t border-zinc-800 font-sans">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand & Address */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                 <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-900/20">H</div>
                 <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold">CMRIT HSG</span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Rover & Ranger Unit</span>
                 </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500">
                Empowering youth to become global citizens through service, discipline, and adventure. Join the movement today.
              </p>
              <div className="flex items-start gap-3 text-sm">
                 <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                 <span>
                   CMR Institute of Technology,<br/>
                   ITPL Main Road, Bangalore,<br/>
                   Karnataka 560037.
                 </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
               <h4 className="text-white font-bold mb-6">Explore</h4>
               <ul className="space-y-4 text-sm">
                  <li><Link href="#about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> About Us</Link></li>
                  <li><Link href="#objectives" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Our Objectives</Link></li>
                  <li><Link href="#events" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Upcoming Events</Link></li>
                  <li><Link href="#gallery" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Photo Gallery</Link></li>
               </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
               <h4 className="text-white font-bold mb-6">Resources</h4>
               <ul className="space-y-4 text-sm">
                  <li><Link href="#blood-donor" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Blood Donor Wing</Link></li>
                  <li><Link href="/login" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Student Portal</Link></li>
                  <li><Link href="/team-list" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Team Roster</Link></li>
                  <li><Link href="#contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight size={14}/> Support</Link></li>
               </ul>
            </div>

            {/* Column 4: Newsletter & Contact */}
            <div>
               <h4 className="text-white font-bold mb-6">Stay Connected</h4>
               <p className="text-sm text-zinc-500 mb-4">Subscribe to get updates on camps and events.</p>
               
               <div className="flex gap-2 mb-8">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 transition-colors">
                    <ArrowRight size={18} />
                  </button>
               </div>

               <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                       <Mail size={14} className="text-zinc-400 group-hover:text-white" />
                     </div>
                     <span className="group-hover:text-white transition-colors">hsg@cmrit.ac.in</span>
                  </div>
                  <div className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                       <Phone size={14} className="text-zinc-400 group-hover:text-white" />
                     </div>
                     <span className="group-hover:text-white transition-colors">+91 98765 43210</span>
                  </div>
               </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-xs text-zinc-600 text-center md:text-left">
               <p>© 2024 Hindustan Scouts and Guides CMRIT. All rights reserved.</p>
               <p className="mt-1">Developed by <span className="text-zinc-400">Redline.Inc</span></p>
             </div>
             
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-zinc-400">
                   <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-zinc-400">
                   <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all text-zinc-400">
                   <Linkedin size={18} />
                </a>
             </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
