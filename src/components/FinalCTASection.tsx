import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const progression = ['PROFILE', 'SKILLS', 'OPPORTUNITIES', 'PROOF', 'CAREER'];

  return (
    <section 
      id="get-started"
      className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Authentic SOLO Wordmark */}
        <div className="flex justify-center mb-6">
          <img
            src="/solo-assets/images/solo.png"
            alt="SOLO"
            className="h-8 w-auto object-contain opacity-90"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Minimal Visual Connection Above CTA: PROFILE → SKILLS → OPPORTUNITIES → PROOF → CAREER */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-[#E3EAF1] bg-[#FAFBFC] px-5 py-2 mb-8 shadow-2xs">
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
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.15] text-[#FD4322] mb-5">
          Build your skills. <br className="hidden sm:inline" />
          <span className="text-[#FD4322]">Prove what you can do.</span>
        </h2>

        {/* Short Supporting Paragraph */}
        <p className="text-base sm:text-lg md:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          Create your SOLO profile, discover opportunities, build verified skills, and take your next step.
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="https://app.thesolo.network/signin"
            className="btn-primary-solo w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 h-11 text-[14px] font-bold text-white"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#opportunities"
            className="btn-secondary-solo w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 h-11 text-[14px] font-bold"
          >
            <span>Explore MORE</span>
          </a>
        </div>

      </div>
    </section>
  );
};
