import React from 'react';
import { ArrowRight } from 'lucide-react';

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
      className="relative bg-[#FFF9F6] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>VERIFIED CREDENTIALS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Turn your achievements <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">into verified proof.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Complete learning and experiences, get assessed, and receive verified credentials you can showcase.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main Product Showcase Frame with Actual SOLO Screenshot */}
        {/* ======================================================== */}
        <div className="relative max-w-[1140px] mx-auto mb-12 sm:mb-16">
          
          {/* Clean White Product Showcase Container */}
          <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-6 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">

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
            className="btn-primary-solo inline-flex items-center gap-2 rounded-xl px-7 h-11 text-[14px] font-bold text-white"
          >
            <span>Explore Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
