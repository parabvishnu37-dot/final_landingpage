import React from 'react';
import { 
  BookOpen, 
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
  return (
    <section 
      id="before-after" 
      className="relative bg-[#F8F9FA] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#E3EAF1]"
    >
      {/* Subtle ambient backglows */}
      <div 
        className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[#FD4322]/5 blur-[120px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-[#1255FF]/5 blur-[120px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>THE SOLO DIFFERENCE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-[#14243D] mb-5">
            Your career shouldn't live in <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">scattered pieces.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Courses, projects, certificates, skills and opportunities can exist in different places. SOLO brings them together into one connected career profile.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Two-Part Comparison: BEFORE SOLO vs. WITH SOLO */}
        {/* ======================================================== */}
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ======================================================== */}
          {/* LEFT: BEFORE SOLO (Scattered & Disconnected) */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 rounded-[22px] border border-[#DBE6F1] bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(20,36,61,0.05)] flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Label & Caption */}
            <div className="mb-6">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
                  BEFORE SOLO
                </span>
                <span className="text-[11px] font-medium text-[#94A3B8]">
                  Scattered storage
                </span>
              </div>
              <p className="text-[13.5px] text-[#64748B] italic font-medium">
                Scattered. Disconnected. Hard to showcase.
              </p>
            </div>

            {/* Scattered Cards Representation */}
            <div className="relative py-4 sm:py-6 px-2 min-h-[340px] flex flex-col justify-center gap-3.5">
              
              {/* Row 1: Courses & Skills (Offset & slightly rotated) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Card 1: Courses */}
                <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-3.5 shadow-2xs transform -rotate-1 hover:rotate-0 transition-transform duration-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Courses</span>
                  </div>
                  <p className="text-[13px] font-bold text-[#1F2937] truncate">Web Dev Course</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5">Platform A · Unlinked</p>
                </div>

                {/* Card 2: Skills */}
                <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-3.5 shadow-2xs transform rotate-1 hover:rotate-0 transition-transform duration-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Skills</span>
                  </div>
                  <p className="text-[13px] font-bold text-[#1F2937] truncate">React, Python, SQL</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5">Listed on a static doc</p>
                </div>
              </div>

              {/* Row 2: Projects & Certificates (Offset) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Card 3: Projects */}
                <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-3.5 shadow-2xs transform rotate-2 hover:rotate-0 transition-transform duration-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center">
                      <FolderGit2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Projects</span>
                  </div>
                  <p className="text-[13px] font-bold text-[#1F2937] truncate">AI Career Assistant</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5">Repo link · No verified proof</p>
                </div>

                {/* Card 4: Certificates */}
                <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-3.5 shadow-2xs transform -rotate-2 hover:rotate-0 transition-transform duration-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Certificates</span>
                  </div>
                  <p className="text-[13px] font-bold text-[#1F2937] truncate">Certificate.pdf</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5">Saved on local hard drive</p>
                </div>
              </div>

              {/* Row 3: Resume & Opportunities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Card 5: Resume */}
                <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-3.5 shadow-2xs transform -rotate-1 hover:rotate-0 transition-transform duration-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Resume</span>
                  </div>
                  <p className="text-[13px] font-bold text-[#1F2937] truncate">Resume_v3_final.pdf</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5">Static file · Often outdated</p>
                </div>

                {/* Card 6: Opportunities */}
                <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-3.5 shadow-2xs transform rotate-1 hover:rotate-0 transition-transform duration-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Opportunities</span>
                  </div>
                  <p className="text-[13px] font-bold text-[#1F2937] truncate">Bookmarked Jobs</p>
                  <p className="text-[11px] text-[#9CA3AF] mt-0.5">Manual search across sites</p>
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
          {/* RIGHT: WITH SOLO (Connected & Verified Ecosystem) */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 rounded-[22px] border-2 border-[#FFE0D6] bg-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(253,67,34,0.08)] flex flex-col justify-between relative overflow-hidden">
            
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
              <p className="text-[13.5px] text-[#14243D] font-medium">
                One verified profile connecting your skills to real opportunities.
              </p>
            </div>

            {/* Connected Tree Representation */}
            <div className="py-2 flex flex-col items-center">
              
              {/* 1. TOP NODE: SOLO PROFILE */}
              <div className="w-full max-w-[320px] rounded-xl border border-[#FFE0D6] bg-[#FFF8F5] p-3 sm:p-3.5 shadow-xs text-center relative z-10">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#FD4322] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                    AJ
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13.5px] font-bold text-[#14243D]">Alex Johnson</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                    </div>
                    <span className="text-[11px] text-[#64748B] block">IT / Software Learner · SOLO Profile</span>
                  </div>
                </div>
              </div>

              {/* Vertical Connector Line */}
              <div className="w-0.5 h-5 bg-[#FFE0D6]" />

              {/* Horizontal Branch Connector */}
              <div className="w-full max-w-[420px] relative">
                {/* Horizontal line spanning 3 columns */}
                <div className="absolute top-0 left-[16.6%] right-[16.6%] h-0.5 bg-[#FFE0D6]" />
                
                {/* 3 Child Cards */}
                <div className="grid grid-cols-3 gap-2.5 pt-3">
                  
                  {/* SKILLS */}
                  <div className="relative flex flex-col items-center">
                    {/* Tiny connector stem */}
                    <div className="absolute -top-3 w-0.5 h-3 bg-[#FFE0D6]" />
                    <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2.5 text-center shadow-2xs hover:border-[#FD4322]/40 transition-colors">
                      <span className="text-[10px] font-extrabold text-[#FD4322] uppercase tracking-wider block mb-1">
                        SKILLS
                      </span>
                      <p className="text-[11.5px] font-bold text-[#14243D] leading-tight">
                        AI, React, Python
                      </p>
                      <span className="inline-block mt-1 text-[9.5px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-1.5 py-0.5 rounded">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* PROJECTS */}
                  <div className="relative flex flex-col items-center">
                    {/* Tiny connector stem */}
                    <div className="absolute -top-3 w-0.5 h-3 bg-[#FFE0D6]" />
                    <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2.5 text-center shadow-2xs hover:border-[#FD4322]/40 transition-colors">
                      <span className="text-[10px] font-extrabold text-[#1255FF] uppercase tracking-wider block mb-1">
                        PROJECTS
                      </span>
                      <p className="text-[11.5px] font-bold text-[#14243D] leading-tight">
                        Career Assistant
                      </p>
                      <span className="inline-block mt-1 text-[9.5px] font-semibold text-[#2563EB] bg-[#EFF6FF] px-1.5 py-0.5 rounded">
                        Portfolio Proof
                      </span>
                    </div>
                  </div>

                  {/* CREDENTIALS */}
                  <div className="relative flex flex-col items-center">
                    {/* Tiny connector stem */}
                    <div className="absolute -top-3 w-0.5 h-3 bg-[#FFE0D6]" />
                    <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2.5 text-center shadow-2xs hover:border-[#FD4322]/40 transition-colors">
                      <span className="text-[10px] font-extrabold text-[#16A34A] uppercase tracking-wider block mb-1">
                        CREDENTIALS
                      </span>
                      <p className="text-[11.5px] font-bold text-[#14243D] leading-tight">
                        OpenBadges
                      </p>
                      <span className="inline-block mt-1 text-[9.5px] font-semibold text-[#0D9488] bg-[#CCFBF1] px-1.5 py-0.5 rounded">
                        Issuer Signed
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Vertical Connector Down to OPPORTUNITIES */}
              <div className="flex flex-col items-center my-1">
                <div className="w-0.5 h-4 bg-[#FFE0D6]" />
                <ArrowDown className="w-3.5 h-3.5 text-[#FD4322] -mt-1" />
              </div>

              {/* 3. BOTTOM NODE: OPPORTUNITIES */}
              <div className="w-full max-w-[340px] rounded-xl border border-[#C7D2FE] bg-[#F8FAFF] p-3 shadow-xs text-center">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-[#4F46E5] uppercase tracking-wider block">
                        OPPORTUNITIES
                      </span>
                      <p className="text-[12px] font-bold text-[#14243D]">
                        Junior Full-Stack Developer
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-1 rounded-md shrink-0">
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
