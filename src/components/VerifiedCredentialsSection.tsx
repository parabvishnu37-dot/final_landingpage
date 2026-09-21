import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const VerifiedCredentialsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Complete',
      description: 'Finish courses, live projects, or internships',
    },
    {
      num: '02',
      title: 'Get Assessed',
      description: 'Submit evidence for mentor & partner review',
    },
    {
      num: '03',
      title: 'Get Credential',
      description: 'Receive verifiable, tamper-evident Open Badges',
    },
    {
      num: '04',
      title: 'Share & Showcase',
      description: 'Add to LinkedIn and your professional network',
    },
  ];

  return (
    <section 
      id="credentials"
      className="relative bg-[#F7F8FA] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#E3EAF1]"
    >
      {/* Subtle ambient backglows */}
      <div 
        className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[#FD4322]/5 blur-[120px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-20 bottom-1/3 h-96 w-96 rounded-full bg-[#1255FF]/5 blur-[120px]" 
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
            <span>VERIFIED CREDENTIALS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-[#14243D] mb-5">
            Turn your achievements <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">into verified proof.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Complete learning and experiences, get assessed, and receive verified credentials you can showcase.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main Product Showcase Frame with Actual SOLO Screenshot */}
        {/* ======================================================== */}
        <div className="relative max-w-[1140px] mx-auto mb-12 sm:mb-16">
          
          {/* Clean White Product/Browser Frame */}
          <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-3 sm:p-6 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">
            
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#E8EEF3] mb-4 sm:mb-6 bg-[#FAFBFC] rounded-t-[14px]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Bar */}
              <div className="rounded-lg bg-white border border-[#E3EAF1] px-4 py-1 text-[11px] font-mono text-[#5A6B82] shadow-2xs flex items-center gap-2 max-w-[380px] w-full justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a36a]" />
                <span className="truncate">app.solonetwork.org/credentials/reactjs-certification</span>
              </div>

              {/* Status Badge */}
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#eaf8f1] border border-[#c9ead9] px-2.5 py-0.5 text-[10px] font-extrabold text-[#16a36a]">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Open Badge</span>
              </span>
            </div>

            {/* Screenshot Container with Responsive Horizontal Scrolling on Mobile */}
            <div className="w-full overflow-x-auto scrollbar-thin rounded-xl bg-white border border-[#E5E7EB] p-2 sm:p-4">
              <div className="min-w-[720px] sm:min-w-0 flex flex-col items-center justify-center">
                <img 
                  src="/credentials/credential_verified_clean.png" 
                  alt="SOLO Verified Credential - Actual Product UI from Learner Guide"
                  className="w-full h-auto block rounded-lg"
                  loading="eager"
                />
              </div>
            </div>

            {/* Sub-caption matching PDF Learner Guide */}
            <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#64748B] gap-1 px-1">
              <span className="italic">
                (Credential sharing and endorsement features to showcase verified achievements, skills, and recommendations)
              </span>
              <span className="font-semibold text-[#14243D]">
                SOLO Credential Infrastructure
              </span>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* Simple 4-Step Flow */}
        {/* ======================================================== */}
        <div className="max-w-[1100px] mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="rounded-2xl border border-[#E3EAF1] bg-white p-5 sm:p-6 shadow-xs relative flex flex-col justify-between hover:border-[#FD4322]/40 transition-all duration-150"
              >
                {/* Step Number & Connector Line */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xl sm:text-2xl font-black text-[#FD4322]">
                    {step.num}
                  </span>
                  
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
                  <h4 className="text-[16px] font-black text-[#14243D] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[12.5px] text-[#5A6B82] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* Supporting Statement & CTA */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-4">
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6B82] font-medium leading-relaxed">
            Your verified credentials can be shared with peers, institutions, and professional networks.
          </p>

          <a
            href="#credentials"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FD4322] hover:bg-[#E03719] text-white font-bold px-7 py-3.5 text-[14px] shadow-[0_8px_20px_rgba(253,67,34,0.22)] transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
          >
            <span>Explore Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
