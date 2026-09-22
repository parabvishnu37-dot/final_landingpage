import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  FolderGit2, 
  Award, 
  FileText, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ArrowDown
} from 'lucide-react';

export const BeforeAfterSoloSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="before-after" 
      className="relative bg-[#FFF9F6] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>THE SOLO DIFFERENCE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Your career shouldn't live in <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">scattered pieces.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Courses, projects, certificates, skills and opportunities can exist in different places. SOLO brings them together into one connected career profile.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Three-Column Transformation Layout                       */}
        {/* BEFORE SOLO (5 cols) → TRANSITION (2 cols) → WITH SOLO (5 cols) */}
        {/* ======================================================== */}
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-stretch">
          
          {/* ======================================================== */}
          {/* LEFT: BEFORE SOLO (Scattered & Unconnected)              */}
          {/* ======================================================== */}
          <div 
            className={`lg:col-span-5 rounded-[22px] border border-[#DBE6F1] bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(20,36,61,0.05)] flex flex-col justify-between relative overflow-hidden transition-all duration-700 ease-out ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Top Label & Caption */}
            <div className="mb-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
                  BEFORE SOLO
                </span>
                <span className="text-[11px] font-medium text-[#94A3B8]">
                  Scattered storage
                </span>
              </div>
              <p className="text-[13.5px] text-[#64748B] italic font-medium leading-snug">
                “Your skills, experiences and achievements are scattered.”
              </p>
            </div>

            {/* Visual Fragments (Separate & Unconnected) */}
            <div className="relative py-2 px-1 min-h-[350px] flex flex-col justify-center gap-3">
              
              {/* Fragment 1: Resume (Slightly tilted left) */}
              <div 
                className={`rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-3 shadow-2xs transition-all duration-700 ease-out ${
                  isRevealed ? 'opacity-100 -rotate-1.5 translate-x-[-2px]' : 'opacity-0 translate-y-2'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">Resume</span>
                      <p className="text-[12.5px] font-bold text-[#1F2937] leading-tight">Resume_v3_final.pdf</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#94A3B8] font-medium bg-[#F1F5F9] px-2 py-0.5 rounded">
                    Static file
                  </span>
                </div>
              </div>

              {/* Fragment 2 & 3: Skills & Projects (Side by Side, Tilted) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Fragment 2: Skills */}
                <div 
                  className={`rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-3 shadow-2xs transition-all duration-700 delay-100 ease-out ${
                    isRevealed ? 'opacity-100 rotate-1 translate-x-[2px]' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-md bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0">
                      <Code2 className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Skills</span>
                  </div>
                  <p className="text-[12px] font-bold text-[#1F2937] truncate">React, Python, SQL</p>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">Listed on a doc</p>
                </div>

                {/* Fragment 3: Projects */}
                <div 
                  className={`rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-3 shadow-2xs transition-all duration-700 delay-150 ease-out ${
                    isRevealed ? 'opacity-100 -rotate-1 translate-x-[-1px]' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-md bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center shrink-0">
                      <FolderGit2 className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Projects</span>
                  </div>
                  <p className="text-[12px] font-bold text-[#1F2937] truncate">AI Career Assistant</p>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">Unverified repo link</p>
                </div>
              </div>

              {/* Fragment 4 & 5: Certificates & Experiences (Side by Side, Tilted) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Fragment 4: Certificates */}
                <div 
                  className={`rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-3 shadow-2xs transition-all duration-700 delay-200 ease-out ${
                    isRevealed ? 'opacity-100 rotate-1.5 translate-x-[3px]' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-md bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center shrink-0">
                      <Award className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Certificates</span>
                  </div>
                  <p className="text-[12px] font-bold text-[#1F2937] truncate">Certificate.pdf</p>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">Saved on hard drive</p>
                </div>

                {/* Fragment 5: Experiences */}
                <div 
                  className={`rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-3 shadow-2xs transition-all duration-700 delay-250 ease-out ${
                    isRevealed ? 'opacity-100 -rotate-1.5 translate-x-[-2px]' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-md bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                      <Briefcase className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Experiences</span>
                  </div>
                  <p className="text-[12px] font-bold text-[#1F2937] truncate">Web Intern / Freelance</p>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">Scattered across docs</p>
                </div>
              </div>

            </div>

            {/* Bottom Status Note */}
            <div className="pt-4 border-t border-[#F1F5F9] text-center">
              <span className="text-[12px] text-[#94A3B8] font-medium">
                No single source of truth for your professional journey
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CENTER: TRANSITION CUE (SCATTERED → CONNECTED)           */}
          {/* ======================================================== */}
          <div 
            className={`lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0 transition-all duration-800 delay-300 ease-out ${
              isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Desktop Vertical Stems */}
            <div className="hidden lg:flex flex-col items-center mb-2">
              <div className="w-[1.5px] h-10 bg-gradient-to-b from-transparent via-[#FFE0D6] to-[#FD4322]/50" />
            </div>

            {/* Central Badge */}
            <div className="flex flex-col items-center text-center gap-2 px-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1.5 text-[10.5px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-[#FD4322] shadow-xs">
                <span>SCATTERED</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FD4322] shrink-0" />
                <span>CONNECTED</span>
              </div>
              
              <span className="text-[11px] font-semibold text-[#5A6B82] leading-tight max-w-[140px]">
                SOLO connects the pieces
              </span>
            </div>

            {/* Desktop Vertical Stems */}
            <div className="hidden lg:flex flex-col items-center mt-2">
              <div className="w-[1.5px] h-10 bg-gradient-to-t from-transparent via-[#FFE0D6] to-[#FD4322]/50" />
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT: WITH SOLO (Connected & Verified Ecosystem)        */}
          {/* ======================================================== */}
          <div 
            className={`lg:col-span-5 rounded-[22px] border-2 border-[#FFE0D6] bg-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(253,67,34,0.08)] flex flex-col justify-between relative overflow-hidden transition-all duration-700 delay-200 ease-out ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Top Label & Caption */}
            <div className="mb-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#f8d1c6] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322] shadow-2xs">
                  <Sparkles className="w-3 h-3 text-[#FD4322]" />
                  WITH SOLO
                </span>
                <span className="text-[11px] font-semibold text-[#16A34A] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Connected ecosystem
                </span>
              </div>
              <p className="text-[13.5px] text-[#14243D] font-medium leading-snug">
                “One profile connects your skills, proof and opportunities.”
              </p>
            </div>

            {/* Connected SOLO Ecosystem Structure */}
            <div className="py-2 flex flex-col items-center">
              
              {/* 1. TOP NODE: SOLO PROFILE */}
              <div className="w-full max-w-[320px] rounded-xl border border-[#FFE0D6] bg-[#FFF8F5] p-3 shadow-xs text-center relative z-10 hover:border-[#FD4322]/40 transition-colors">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FD4322] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                    AJ
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13px] font-bold text-[#14243D]">Alex Johnson</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                    </div>
                    <span className="text-[10.5px] text-[#64748B] block">IT / Software Learner · Verified SOLO Profile</span>
                  </div>
                </div>
              </div>

              {/* Vertical Connector Line from Profile */}
              <div className="w-[1.5px] h-4 bg-[#FFE0D6]" />

              {/* Horizontal Branch Connector to 3 Sub-Nodes */}
              <div className="w-full max-w-[380px] relative">
                {/* Horizontal line spanning 3 columns */}
                <div className="absolute top-0 left-[16.6%] right-[16.6%] h-[1.5px] bg-[#FFE0D6]" />
                
                {/* 3 Child Cards: SKILLS, PROJECTS, CREDENTIALS */}
                <div className="grid grid-cols-3 gap-2 pt-2.5">
                  
                  {/* SKILLS */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -top-2.5 w-[1.5px] h-2.5 bg-[#FFE0D6]" />
                    <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2 text-center shadow-2xs hover:border-[#FD4322]/40 transition-colors">
                      <span className="text-[9.5px] font-extrabold text-[#FD4322] uppercase tracking-wider block mb-0.5">
                        SKILLS
                      </span>
                      <p className="text-[10.5px] font-bold text-[#14243D] leading-tight">
                        React, Python
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-1.5 py-0.2 rounded">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* PROJECTS */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -top-2.5 w-[1.5px] h-2.5 bg-[#FFE0D6]" />
                    <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2 text-center shadow-2xs hover:border-[#FD4322]/40 transition-colors">
                      <span className="text-[9.5px] font-extrabold text-[#1255FF] uppercase tracking-wider block mb-0.5">
                        PROJECTS
                      </span>
                      <p className="text-[10.5px] font-bold text-[#14243D] leading-tight">
                        Career Assistant
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-semibold text-[#2563EB] bg-[#EFF6FF] px-1.5 py-0.2 rounded">
                        Evidence
                      </span>
                    </div>
                  </div>

                  {/* CREDENTIALS */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -top-2.5 w-[1.5px] h-2.5 bg-[#FFE0D6]" />
                    <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2 text-center shadow-2xs hover:border-[#FD4322]/40 transition-colors">
                      <span className="text-[9.5px] font-extrabold text-[#16A34A] uppercase tracking-wider block mb-0.5">
                        CREDENTIALS
                      </span>
                      <p className="text-[10.5px] font-bold text-[#14243D] leading-tight">
                        OpenBadges
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-semibold text-[#0D9488] bg-[#CCFBF1] px-1.5 py-0.2 rounded">
                        Signed
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Vertical Connector Down to OPPORTUNITIES */}
              <div className="flex flex-col items-center my-1">
                <div className="w-[1.5px] h-3.5 bg-[#FFE0D6]" />
                <ArrowDown className="w-3.5 h-3.5 text-[#FD4322] -mt-1" />
              </div>

              {/* 3. BOTTOM NODE: OPPORTUNITIES */}
              <div className="w-full max-w-[340px] rounded-xl border border-[#C7D2FE] bg-[#F8FAFF] p-2.5 shadow-xs text-center hover:border-[#FD4322]/30 transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-6 h-6 rounded-lg bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
                      <Briefcase className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-[9.5px] font-extrabold text-[#4F46E5] uppercase tracking-wider block">
                        OPPORTUNITIES
                      </span>
                      <p className="text-[11.5px] font-bold text-[#14243D]">
                        Junior Full-Stack Developer
                      </p>
                    </div>
                  </div>
                  <span className="text-[9.5px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-md shrink-0">
                    92% Match
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Proof Note */}
            <div className="pt-4 border-t border-[#F3F4F6] text-center">
              <span className="text-[12px] text-[#5A6B82] font-semibold flex items-center justify-center gap-1.5">
                <span>Everything verified and connected in your lifelong SOLO profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FD4322]" />
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSoloSection;
