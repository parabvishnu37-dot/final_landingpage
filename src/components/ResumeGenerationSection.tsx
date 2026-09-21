import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Download, 
  Layers, 
  ShieldCheck, 
  Briefcase, 
  Trophy 
} from 'lucide-react';

export const ResumeGenerationSection: React.FC = () => {
  // Interactive view modes: 'both' (side-by-side on desktop, stacked on mobile), 'profile', 'templates'
  const [activeView, setActiveView] = useState<'both' | 'profile' | 'templates'>('both');

  // Supporting 4-step flow
  const steps = [
    {
      step: 'PROFILE',
      num: '01',
      title: 'Profile Data',
      desc: 'Information from your SOLO learner profile is automatically organized.',
    },
    {
      step: 'SELECT',
      num: '02',
      title: 'Template & Sections',
      desc: 'Choose an ATS-ready template and select which sections to include.',
    },
    {
      step: 'PREVIEW',
      num: '03',
      title: 'Live Preview',
      desc: 'Review formatted layout with clickable verified credential links.',
    },
    {
      step: 'DOWNLOAD',
      num: '04',
      title: 'Export & Apply',
      desc: 'Download your ATS-ready resume or apply directly to opportunities.',
    },
  ];

  // Feature row communicating source of truth
  const profileSources = [
    {
      name: 'Skills',
      desc: 'Acquired & matched technical skills',
      icon: Sparkles,
    },
    {
      name: 'Credentials',
      desc: 'Verified Open Badges with clickable links',
      icon: ShieldCheck,
    },
    {
      name: 'Experience',
      desc: 'Work experience & live project roles',
      icon: Briefcase,
    },
    {
      name: 'Achievements',
      desc: 'Education, hackathons & milestones',
      icon: Trophy,
    },
  ];

  return (
    <section 
      id="resume"
      className="relative bg-[#F7F8FA] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#E3EAF1]"
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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>RESUME GENERATION</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-[#14243D] mb-5">
            Your profile. <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">Ready for the next opportunity.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Turn your SOLO profile into a professional, ATS-ready resume using your skills, credentials, experience, education, and achievements.
          </p>
        </div>

        {/* ======================================================== */}
        {/* View Mode Toggle Controls */}
        {/* ======================================================== */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 max-w-md mx-auto p-1 rounded-2xl bg-white border border-[#DBE6F1] shadow-xs">
          <button
            type="button"
            onClick={() => setActiveView('both')}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all duration-150 cursor-pointer ${
              activeView === 'both'
                ? 'bg-[#FFF0EB] text-[#FD4322] shadow-xs'
                : 'text-[#5A6B82] hover:text-[#14243D]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Side by Side</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('profile')}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all duration-150 cursor-pointer ${
              activeView === 'profile'
                ? 'bg-[#FFF0EB] text-[#FD4322] shadow-xs'
                : 'text-[#5A6B82] hover:text-[#14243D]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>01 Profile View</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('templates')}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[12px] sm:text-[13px] font-bold transition-all duration-150 cursor-pointer ${
              activeView === 'templates'
                ? 'bg-[#FFF0EB] text-[#FD4322] shadow-xs'
                : 'text-[#5A6B82] hover:text-[#14243D]'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>02 Template Modal</span>
          </button>
        </div>

        {/* ======================================================== */}
        {/* Product Showcase Area (Actual SOLO UI Screenshots) */}
        {/* ======================================================== */}
        <div className="mb-14 sm:mb-16">
          
          {/* VIEW 1: Side by Side (Default Desktop 2-Column, Mobile Stacked) */}
          {activeView === 'both' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1240px] mx-auto">
              
              {/* Card 1: Resume Generation on Profile (PDF Page 26) */}
              <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-5 shadow-[0_24px_60px_rgba(20,36,61,0.08)] flex flex-col justify-between">
                <div>
                  {/* Screenshot Container with Responsive Horizontal Scrolling on Mobile */}
                  <div className="w-full overflow-x-auto scrollbar-thin rounded-xl bg-white border border-[#E5E7EB] p-1.5 sm:p-2">
                    <div className="min-w-[500px] sm:min-w-0">
                      <img 
                        src="/resume/resume_generation.png" 
                        alt="SOLO Resume Generation Interface - PDF Page 26"
                        className="w-full h-auto block rounded-lg shadow-2xs"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                {/* Sub-caption */}
                <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] text-[#64748B] px-1">
                  <span className="italic">PDF Page 26: Generate Resume from learner profile</span>
                  <span className="font-semibold text-[#14243D]">Profile Trigger</span>
                </div>
              </div>

              {/* Card 2: Resume Template Selection (PDF Page 27) */}
              <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-5 shadow-[0_24px_60px_rgba(20,36,61,0.08)] flex flex-col justify-between">
                <div>
                  {/* Screenshot Container with Responsive Horizontal Scrolling on Mobile */}
                  <div className="w-full overflow-x-auto scrollbar-thin rounded-xl bg-white border border-[#E5E7EB] p-1.5 sm:p-2">
                    <div className="min-w-[500px] sm:min-w-0">
                      <img 
                        src="/resume/resume_templates.png" 
                        alt="SOLO Resume Template Selection - PDF Page 27"
                        className="w-full h-auto block rounded-lg shadow-2xs"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                {/* Sub-caption */}
                <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] text-[#64748B] px-1">
                  <span className="italic">PDF Page 27: Professionally designed ATS-ready templates</span>
                  <span className="font-semibold text-[#14243D]">Template Modal</span>
                </div>
              </div>

            </div>
          )}

          {/* VIEW 2: Full-Width Profile View (PDF Page 26) */}
          {activeView === 'profile' && (
            <div className="max-w-[1140px] mx-auto rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-6 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">
              {/* Full-width Screenshot Container */}
              <div className="w-full overflow-x-auto scrollbar-thin rounded-xl bg-white border border-[#E5E7EB] p-2 sm:p-4">
                <div className="min-w-[720px] sm:min-w-0 flex flex-col items-center justify-center">
                  <img 
                    src="/resume/resume_generation.png" 
                    alt="SOLO Resume Generation Interface - PDF Page 26"
                    className="w-full h-auto block rounded-lg"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#64748B] gap-1 px-1">
                <span className="italic">
                  The Resume Generation feature on SOLO automatically creates a professional resume using the information available in your learner profile.
                </span>
                <span className="font-semibold text-[#14243D]">
                  SOLO Profile Infrastructure
                </span>
              </div>
            </div>
          )}

          {/* VIEW 3: Full-Width Template Selection (PDF Page 27) */}
          {activeView === 'templates' && (
            <div className="max-w-[1140px] mx-auto rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-6 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">
              {/* Full-width Screenshot Container */}
              <div className="w-full overflow-x-auto scrollbar-thin rounded-xl bg-white border border-[#E5E7EB] p-2 sm:p-4">
                <div className="min-w-[720px] sm:min-w-0 flex flex-col items-center justify-center">
                  <img 
                    src="/resume/resume_templates.png" 
                    alt="SOLO Resume Template Selection - PDF Page 27"
                    className="w-full h-auto block rounded-lg"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#64748B] gap-1 px-1">
                <span className="italic">
                  Professionally designed, ATS-ready resume templates with clickable credential links.
                </span>
                <span className="font-semibold text-[#14243D]">
                  SOLO Template Engine
                </span>
              </div>
            </div>
          )}

        </div>

        {/* ======================================================== */}
        {/* Supporting Flow: PROFILE → SELECT → PREVIEW → DOWNLOAD */}
        {/* ======================================================== */}
        <div className="max-w-[1140px] mx-auto mb-12 sm:mb-14">
          <div className="text-center mb-6">
            <h3 className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-[#FD4322]">
              HOW RESUME GENERATION WORKS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {steps.map((item, idx) => (
              <div 
                key={item.step}
                className="rounded-2xl border border-[#E3EAF1] bg-white p-5 sm:p-6 shadow-xs relative flex flex-col justify-between hover:border-[#FD4322]/40 transition-all duration-150"
              >
                {/* Step Pill & Connector Line */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#FD4322] bg-[#FFF0EB] border border-[#f8d1c6] px-2 py-0.5 rounded-md">
                      {item.num}
                    </span>
                    <span className="font-mono text-xs font-extrabold text-[#14243D] tracking-wider">
                      {item.step}
                    </span>
                  </div>
                  
                  {/* Subtle connecting line for non-last items */}
                  {idx < steps.length - 1 && (
                    <div 
                      className="hidden lg:block absolute -right-3 top-9 w-6 h-px bg-gradient-to-r from-[#FD4322]/40 to-[#DBE6F1] z-10" 
                      aria-hidden="true" 
                    />
                  )}

                  <span className="w-2 h-2 rounded-full bg-[#FD4322]/30" />
                </div>

                {/* Title & Description */}
                <div>
                  <h4 className="text-[15px] font-black text-[#14243D] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[12.5px] text-[#5A6B82] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* Short Feature Row: Skills · Credentials · Experience · Achievements */}
        {/* ======================================================== */}
        <div className="max-w-[1140px] mx-auto mb-12 sm:mb-14 rounded-2xl border border-[#E3EAF1] bg-white p-6 sm:p-8 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h4 className="text-base sm:text-lg font-black text-[#14243D] mb-1.5">
              Generated from information already in your SOLO profile
            </h4>
            <p className="text-[13px] text-[#5A6B82]">
              No manual retyping. SOLO automatically populates and formats your resume from verified profile data:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profileSources.map((source) => {
              const IconComp = source.icon;
              return (
                <div 
                  key={source.name}
                  className="rounded-xl border border-[#EEF2F6] bg-[#FAFBFC] p-4 flex items-start gap-3.5 hover:border-[#FD4322]/30 transition-all duration-150"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FFF0EB] border border-[#f8d1c6] flex items-center justify-center shrink-0 text-[#FD4322]">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[14px] font-black text-[#14243D] mb-0.5">
                      {source.name}
                    </div>
                    <p className="text-[12px] text-[#5A6B82] leading-snug">
                      {source.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* Supporting Statement & CTA */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-4">
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6B82] font-medium leading-relaxed">
            Create an ATS-friendly resume with clickable links that let employers instantly verify your credentials.
          </p>

          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FD4322] hover:bg-[#E03719] text-white font-bold px-7 py-3.5 text-[14px] shadow-[0_8px_20px_rgba(253,67,34,0.22)] transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
          >
            <span>Create Your Resume</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
