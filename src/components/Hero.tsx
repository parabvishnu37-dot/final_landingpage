import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { ProductDashboard } from './ProductDashboard';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-[#F7F8FA] min-h-[calc(100vh-68px)] flex items-center py-10 sm:py-12 lg:py-8">
      {/* Background Graphic / Overlay if available */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#dbe6f1_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Subtle Glows */}
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-[#1255FF]/6 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-12 h-80 w-80 rounded-full bg-[#FD4322]/6 blur-[100px]"
        aria-hidden="true"
      />

      {/* Main Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT SIDE: Typography, Supporting Text & CTAs */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl">
            
            {/* Eyebrow Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
              <span>THE SKILLS-FIRST CAREER PLATFORM</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.05] tracking-[-0.04em] text-[#14243D] uppercase font-sans mb-6">
              <span className="block text-[#14243D]">YOUR SKILLS.</span>
              <span className="block text-[#FD4322]">YOUR PROOF.</span>
              <span className="block text-[#14243D]">YOUR NEXT MOVE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[17px] leading-[1.7] text-[#5A6B82] font-normal mb-8 max-w-lg">
              SOLO connects what you learn, the skills you build, the credentials you earn, and the opportunities ahead.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9">
              {/* Primary CTA */}
              <a
                href="#get-started"
                className="btn-primary-solo inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-[14px] font-extrabold text-white shadow-[0_6px_18px_rgba(253,67,34,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#e83b1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#explore"
                className="btn-secondary-solo inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#d7e3f0] bg-white px-7 text-[14px] font-bold text-[#14243D] shadow-xs transition-all hover:-translate-y-0.5 hover:border-[#FD4322] hover:text-[#FD4322] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF] focus-visible:ring-offset-2"
              >
                <Compass className="w-4 h-4 text-[#FD4322]" />
                <span>Explore SOLO</span>
              </a>
            </div>

            {/* Subtle Supporting Line Below */}
            <div className="pt-4 border-t border-[#E3EAF1] w-full max-w-lg">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#64748B] flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span>Skills</span>
                <span className="text-[#FD4322]">·</span>
                <span>Learning</span>
                <span className="text-[#FD4322]">·</span>
                <span>Credentials</span>
                <span className="text-[#FD4322]">·</span>
                <span>Opportunities</span>
                <span className="text-[#FD4322]">·</span>
                <span>Career</span>
              </p>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: Real SOLO Product Dashboard Mockup */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 w-full mt-4 lg:mt-0 flex items-center justify-center">
            <ProductDashboard />
          </div>

        </div>
      </div>
    </section>
  );
};
