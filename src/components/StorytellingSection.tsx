import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, Hammer, Award } from 'lucide-react';

interface ShowcaseState {
  id: string;
  stepNumber: string;
  tabTitle: string;
  tabCaption: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  screenshot: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const StorytellingSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const userInteractedRef = useRef<boolean>(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (userInteractedRef.current) return;
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        // Only progress when section is in active view range
        if (rect.top <= vh * 0.75 && rect.bottom >= vh * 0.25) {
          const totalDistance = rect.height + vh * 0.5;
          const currentDistance = vh * 0.75 - rect.top;
          const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);

          if (progress < 0.35) {
            setActiveStepIndex(0);
          } else if (progress < 0.7) {
            setActiveStepIndex(1);
          } else {
            setActiveStepIndex(2);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const states: ShowcaseState[] = [
    {
      id: 'explore',
      stepNumber: '01',
      tabTitle: '01 — EXPLORE',
      tabCaption: "Discover what's next.",
      heading: "Discover what's next.",
      description: 'Explore courses, internships, projects, hackathons and opportunities that match where you want to go.',
      ctaText: 'Explore opportunities',
      ctaHref: '#opportunities',
      screenshot: '/screenshots/stage-01-explore.png',
      icon: Compass,
    },
    {
      id: 'build',
      stepNumber: '02',
      tabTitle: '02 — BUILD',
      tabCaption: 'Build with real experience.',
      heading: 'Build with real experience.',
      description: 'Apply what you learn through live projects and practical experiences.',
      ctaText: 'Explore live projects',
      ctaHref: '#opportunities',
      screenshot: '/screenshots/stage-02-build.png',
      icon: Hammer,
    },
    {
      id: 'prove',
      stepNumber: '03',
      tabTitle: '03 — PROVE',
      tabCaption: 'Prove what you can do.',
      heading: 'Prove what you can do.',
      description: "Build a record of verified credentials and achievements that showcase the skills you've developed.",
      ctaText: 'View credential',
      ctaHref: '#credential-wallet',
      screenshot: '/screenshots/stage-03-prove.png',
      icon: Award,
    },
  ];

  const currentState = states[activeStepIndex];

  return (
    <section 
      ref={sectionRef}
      id="how-it-works"
      className="relative bg-[#FFF9F6] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>FROM LEARNING TO VERIFIED PROOF</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322]">
            Turn what you learn <br className="hidden sm:inline" />
            into something <span className="text-[#FD4322]">you can prove.</span>
          </h2>
        </div>

        {/* ======================================================== */}
        {/* Three Equal Interactive Step Tabs */}
        {/* ======================================================== */}
        <div className="max-w-[960px] mx-auto mb-8">
          <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-4 overflow-x-auto whitespace-nowrap md:whitespace-normal scrollbar-none pb-2 md:pb-0">
            {states.map((state, index) => {
              const isActive = activeStepIndex === index;
              const Icon = state.icon;

              return (
                <button
                  key={state.id}
                  type="button"
                  onClick={() => {
                    userInteractedRef.current = true;
                    setActiveStepIndex(index);
                  }}
                  className={`flex-1 min-w-[240px] md:min-w-0 text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#FD4322] shadow-[0_12px_28px_rgba(253,67,34,0.12)] ring-1 ring-[#FD4322]'
                      : 'bg-white/80 border-[#E3EAF1] hover:bg-white hover:border-[#DBE6F1] shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span 
                      className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg text-xs font-black transition-colors ${
                        isActive
                          ? 'bg-[#FD4322] text-white'
                          : 'bg-[#E8EEF3] text-[#64748B]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span 
                      className={`text-[11px] sm:text-xs font-black tracking-wider uppercase ${
                        isActive ? 'text-[#FD4322]' : 'text-[#64748B]'
                      }`}
                    >
                      {state.tabTitle}
                    </span>
                  </div>

                  <p 
                    className={`text-[13px] sm:text-[15px] font-bold tracking-tight ${
                      isActive ? 'text-[#14243D]' : 'text-[#5A6B82]'
                    }`}
                  >
                    {state.tabCaption}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* ONE Sized Product Screenshot Container (~87% size, no upscaling) */}
        {/* ======================================================== */}
        <div className="max-w-[960px] mx-auto mb-6">
          <div className="relative rounded-[20px] border border-[#DBE6F1] bg-white p-3 sm:p-4 shadow-[0_24px_60px_rgba(20,36,61,0.08)] overflow-hidden">

            {/* Centered Screenshot Display Area with Sharp Containment */}
            <div className="relative w-full aspect-[16/10] max-h-[500px] rounded-[14px] bg-[#F7F9FC] border border-slate-100 overflow-hidden flex items-center justify-center p-2">
              {states.map((state, idx) => {
                const isSelected = activeStepIndex === idx;

                return (
                  <img
                    key={state.id}
                    src={state.screenshot}
                    alt={`SOLO ${state.tabTitle} - ${state.heading}`}
                    className={`absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-200 ease-in-out ${
                      isSelected 
                        ? 'opacity-100 z-10 pointer-events-auto' 
                        : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  />
                );
              })}
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* Explanatory Content Below the Screenshot (Visually Stable) */}
        {/* ======================================================== */}
        <div className="max-w-[960px] mx-auto">
          <div className="rounded-2xl border border-[#E3EAF1] bg-white p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FD4322]">
                  {currentState.tabTitle}
                </span>
                <span className="text-slate-300">•</span>
                <h3 className="text-base sm:text-lg font-black text-[#14243D]">
                  {currentState.heading}
                </h3>
              </div>
              <p className="text-sm text-[#5A6B82] leading-relaxed font-normal">
                {currentState.description}
              </p>
            </div>

            <div className="flex-shrink-0 self-start sm:self-center">
              <a
                href={currentState.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FD4322] hover:bg-[#e83b1c] px-5 py-2.5 text-[13px] font-extrabold text-white shadow-[0_4px_14px_rgba(253,67,34,0.22)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] focus-visible:ring-offset-2"
              >
                <span>{currentState.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
