import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="top" 
      className="relative overflow-hidden bg-white min-h-[640px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] flex items-center bg-no-repeat bg-cover sm:bg-[length:auto_100%] md:bg-[length:auto_92%] lg:bg-[length:auto_96%] xl:bg-[length:auto_100%] bg-[position:calc(50%+60px)_bottom] sm:bg-[position:calc(100%+160px)_center] lg:bg-[position:right_center]"
      style={{
        backgroundImage: `url('/solo-assets/images/solo-hero-showcase.png')`,
      }}
    >
      {/* Responsive readability gradient: Left-to-right on desktop/tablet, Top-to-bottom on mobile */}
      <div 
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/95 via-60% to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/95 sm:via-48% sm:to-transparent sm:to-72% lg:via-white/80 lg:via-35% lg:to-48% z-0" 
        aria-hidden="true" 
      />

      {/* Main Container - Left-aligned text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-18 lg:py-24">
        <div className="w-full sm:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] flex flex-col items-start text-left">
          
          {/* Eyebrow Badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>THE SKILLS-FIRST CAREER PLATFORM</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-black leading-[1.08] tracking-[-0.03em] uppercase font-heading text-[#FD4322] mb-5 sm:mb-6">
            <span className="block text-[#FD4322]">YOUR SKILLS.</span>
            <span className="block text-[#FD4322]">YOUR PROOF.</span>
            <span className="block text-[#FD4322]">YOUR NEXT MOVE.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-[17px] leading-[1.7] text-[#5A6B82] font-normal mb-8 max-w-lg">
            SOLO connects what you learn, the skills you build, the credentials you earn, and the opportunities ahead.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            {/* Primary CTA */}
            <a
              href="#get-started"
              className="btn-primary-solo inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-[14px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#opportunities"
              className="btn-secondary-solo inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-[14px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2"
            >
              <Compass className="w-4 h-4 text-[#FD4322]" />
              <span>Explore SOLO</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
