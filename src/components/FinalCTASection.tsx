import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const progression = ['PROFILE', 'SKILLS', 'OPPORTUNITIES', 'PROOF', 'CAREER'];

  return (
    <section 
      id="get-started"
      className="relative bg-white py-24 sm:py-28 lg:py-32 overflow-hidden border-t border-[#E3EAF1]"
    >
      {/* Subtle ambient backglows */}
      <div 
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#FD4322]/5 blur-[130px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#1255FF]/5 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Minimal Visual Connection Above CTA: PROFILE → SKILLS → OPPORTUNITIES → PROOF → CAREER */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-[#E3EAF1] bg-[#FAFBFC] px-5 py-2 mb-10 shadow-2xs">
          {progression.map((item, idx) => (
            <React.Fragment key={item}>
              <span className={`font-mono text-[11px] sm:text-[12px] font-extrabold tracking-wider ${
                item === 'PROOF' || item === 'CAREER' ? 'text-[#FD4322]' : 'text-[#5A6B82]'
              }`}>
                {item}
              </span>
              {idx < progression.length - 1 && (
                <span className="text-[#94A3B8] text-xs select-none">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Large Centered Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-[#14243D] mb-6">
          Build your skills. <br className="hidden sm:inline" />
          <span className="text-[#FD4322]">Prove what you can do.</span>
        </h2>

        {/* Short Supporting Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Create your SOLO profile, discover opportunities, build verified skills, and take your next step.
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#FD4322] hover:bg-[#E03719] text-white font-bold px-8 py-4 text-[15px] shadow-[0_8px_20px_rgba(253,67,34,0.22)] transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#opportunities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#DBE6F1] bg-white hover:bg-[#F8FAFC] text-[#14243D] font-bold px-8 py-4 text-[15px] shadow-2xs transition-all duration-150 hover:border-[#CBD5E1] cursor-pointer"
          >
            <span>Explore SOLO</span>
          </a>
        </div>

      </div>
    </section>
  );
};
