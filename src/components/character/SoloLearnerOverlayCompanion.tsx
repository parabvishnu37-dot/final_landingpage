import React, { useState, useEffect, useMemo, useRef } from 'react';
import { SoloLearnerCharacter } from './SoloLearnerCharacter';
import type { SoloCharacterState } from '../../types/character';
import {
  CHARACTER_STATES,
  CHARACTER_ORDER,
  CHARACTER_PALETTE,
} from '../../types/character';

interface SectionMapping {
  sectionId: string;
  state: SoloCharacterState;
}

const SECTION_TRIGGERS: SectionMapping[] = [
  { sectionId: 'resume-import', state: 'starting' },
  { sectionId: 'profile', state: 'profile' },
  { sectionId: 'how-it-works', state: 'explore' },
  { sectionId: 'opportunities', state: 'explore' },
  { sectionId: 'skill-match', state: 'build' },
  { sectionId: 'career-pathways', state: 'build' },
  { sectionId: 'credentials', state: 'prove' },
  { sectionId: 'credential-sharing', state: 'share' },
  { sectionId: 'resume', state: 'ready' },
  { sectionId: 'job-search-skill-match', state: 'ready' },
  { sectionId: 'credential-wallet', state: 'ready' },
];

export const SoloLearnerOverlayCompanion: React.FC = () => {
  const [activeState, setActiveState] = useState<SoloCharacterState>('starting');
  const [journeyPhase, setJourneyPhase] = useState<'pre-journey' | 'in-journey' | 'post-journey'>('pre-journey');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const rafRef = useRef<number | null>(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Reliable scroll & IntersectionObserver detection
  useEffect(() => {
    const checkScrollState = () => {
      const windowHeight = window.innerHeight;
      const triggerY = windowHeight * 0.52; // Character center-left anchor line (~52% of viewport)

      const resumeEl = document.getElementById('resume-import');
      const walletEl = document.getElementById('credential-wallet');

      if (!resumeEl || !walletEl) return;

      const resumeRect = resumeEl.getBoundingClientRect();
      const walletRect = walletEl.getBoundingClientRect();

      // 1. Check if BEFORE journey (Hero or Before/After sections)
      // When Resume Import has not begun entering viewport (top > 80% of windowHeight)
      if (resumeRect.top > windowHeight * 0.8) {
        setJourneyPhase('pre-journey');
        setActiveState('starting');
        return;
      }

      // 2. Check if AFTER journey (after Credential Wallet ends)
      // When the bottom of Credential Wallet has scrolled past the trigger line
      if (walletRect.bottom < triggerY) {
        setJourneyPhase('post-journey');
        return;
      }

      // 3. In-journey: active and visible
      setJourneyPhase('in-journey');

      // Find the currently active section from bottom to top
      for (let i = SECTION_TRIGGERS.length - 1; i >= 0; i--) {
        const { sectionId, state } = SECTION_TRIGGERS[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            setActiveState(state);
            break;
          }
        }
      }
    };

    // IntersectionObserver to observe sections
    const observer = new IntersectionObserver(
      () => {
        checkScrollState();
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const allObservedIds = [
      'top',
      'before-after',
      ...SECTION_TRIGGERS.map((t) => t.sectionId),
      'social-platform',
      'get-started',
    ];

    allObservedIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Throttled scroll listener using requestAnimationFrame for smooth bidirectional tracking
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        checkScrollState();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check on mount
    checkScrollState();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const currentMeta = useMemo(() => {
    return CHARACTER_STATES[activeState] || CHARACTER_STATES.starting;
  }, [activeState]);

  // Jump smoothly to the corresponding section when clicking a progress node
  const handleJumpToState = (stateKey: SoloCharacterState) => {
    const mapping = SECTION_TRIGGERS.find((m) => m.state === stateKey);
    if (mapping) {
      const targetEl = document.getElementById(mapping.sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Phase classes for entrance, active, and exit animations
  const getPhaseClasses = () => {
    if (reducedMotion) {
      switch (journeyPhase) {
        case 'pre-journey':
        case 'post-journey':
          return 'opacity-0 invisible pointer-events-none';
        case 'in-journey':
          return 'opacity-100 visible pointer-events-none';
      }
    }

    switch (journeyPhase) {
      case 'pre-journey':
        // Hidden during Hero: opacity 0, translated left, scaled down slightly
        return 'opacity-0 invisible pointer-events-none -translate-x-[25px] scale-[0.96]';
      case 'in-journey':
        // Active floating companion in center-left whitespace
        return 'opacity-100 visible pointer-events-none translate-x-0 scale-100';
      case 'post-journey':
        // Smoothly exit after Credential Wallet ends: opacity 0, translated left
        return 'opacity-0 invisible pointer-events-none -translate-x-[20px] scale-[0.98]';
    }
  };

  return (
    <aside
      aria-label="SOLO Learner Journey Companion"
      className={`fixed left-4 md:left-5 lg:left-6 top-[52%] -translate-y-1/2 z-40 select-none hidden md:flex items-start transition-all duration-800 ease-out ${getPhaseClasses()}`}
    >
      {/* ======================================================== */}
      {/* MINIMIZED STATE (Tiny retro companion pill)             */}
      {/* ======================================================== */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="pointer-events-auto group flex items-center gap-2 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-md hover:border-[#FD4322]/40 hover:shadow-lg transition-all"
          title="Expand SOLO Learner Companion"
          aria-label="Expand SOLO Learner Companion"
        >
          <span className="w-2 h-2 rounded-full bg-[#FD4322] animate-pulse" />
          <span className="text-[11px] font-bold text-[#14243D] tracking-tight">
            SOLO 0{currentMeta.stepNumber}
          </span>
          <span className="text-[10px] text-[#5A6B82] font-medium hidden lg:inline">
            “{currentMeta.label}”
          </span>
          <svg
            className="w-3 h-3 text-[#5A6B82] group-hover:text-[#FD4322] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ) : (
        /* ======================================================== */
        /* EXPANDED FLOATING COMPANION (50% Scaled, Center-Left)   */
        /* ======================================================== */
        <div className="flex items-start gap-2.5 lg:gap-3">
          {/* ---------------------------------------------------- */}
          {/* 1. Subtle Vertical Progress Nodes                    */}
          {/* Sits to the far left of the character                */}
          {/* ---------------------------------------------------- */}
          <div className="flex flex-col items-center pt-1 shrink-0 pointer-events-auto">
            <div className="relative flex flex-col items-center gap-2 lg:gap-2.5">
              {/* Continuous subtle vertical line */}
              <div className="absolute top-1 bottom-1 w-[1.5px] bg-[#E2E8F0] -z-10" />

              {/* 7 Circular Nodes */}
              {CHARACTER_ORDER.map((stateKey, index) => {
                const isActive = stateKey === activeState;
                const isPast =
                  CHARACTER_ORDER.indexOf(stateKey) <
                  CHARACTER_ORDER.indexOf(activeState);

                return (
                  <button
                    key={stateKey}
                    onClick={() => handleJumpToState(stateKey)}
                    className="group relative flex items-center justify-center p-0.5 focus:outline-hidden"
                    title={`Step 0${index + 1}: ${CHARACTER_STATES[stateKey].label}`}
                    aria-label={`Jump to Step 0${index + 1}: ${CHARACTER_STATES[stateKey].label}`}
                  >
                    {/* Outer ring for active state */}
                    <span
                      className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'ring-1.5 ring-[#FD4322]/30 bg-white'
                          : 'bg-transparent'
                      }`}
                    >
                      {/* Inner Node Dot */}
                      <span
                        className={`rounded-full transition-all duration-300 ${
                          isActive
                            ? 'w-1.5 h-1.5 bg-[#FD4322]'
                            : isPast
                            ? 'w-1 h-1 bg-[#14243D]/60 group-hover:bg-[#FD4322]'
                            : 'w-1 h-1 bg-[#CBD5E1] group-hover:bg-slate-400'
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 2. Character & Lightweight Storytelling Caption      */}
          {/* ---------------------------------------------------- */}
          <div className="flex flex-col items-start max-w-[125px] lg:max-w-[145px] xl:max-w-[160px]">
            {/* Header row: Minimal state label & tiny unobtrusive minimize toggle */}
            <div className="mb-1 w-full flex items-start justify-between gap-1">
              <div className="space-y-0.5 pointer-events-none">
                <div className="flex items-center gap-1">
                  <span
                    className="text-[9px] lg:text-[10px] font-black tracking-wider uppercase"
                    style={{ color: CHARACTER_PALETTE.darkNavy }}
                  >
                    0{currentMeta.stepNumber} — {currentMeta.label.toUpperCase()}
                  </span>
                </div>

                <p className="text-[10px] lg:text-[11px] font-medium text-[#5A6B82] italic leading-tight">
                  “{currentMeta.tagline}”
                </p>
              </div>

              {/* Tiny minimize control */}
              <button
                onClick={() => setIsMinimized(true)}
                className="pointer-events-auto shrink-0 w-3.5 h-3.5 rounded flex items-center justify-center text-[#94A3B8] hover:text-[#FD4322] hover:bg-slate-100/80 transition-colors focus:outline-hidden"
                title="Minimize companion"
                aria-label="Minimize companion"
              >
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 12H5" />
                </svg>
              </button>
            </div>

            {/* Floating Character with Idle Hover & Grounding Shadow (50% Rendered Size) */}
            <div className="relative pointer-events-none">
              {/* Character Illustration with gentle float */}
              <div className="animate-companion-float">
                <SoloLearnerCharacter
                  state={activeState}
                  size="auto"
                  frameless
                  className="w-[80px] md:w-[90px] lg:w-[105px] xl:w-[115px] 2xl:w-[125px] aspect-[28/43]"
                />
              </div>

              {/* Subtle Grounding Shadow below feet */}
              <div className="w-14 md:w-16 lg:w-20 xl:w-22 h-1.5 bg-[#14243D]/15 rounded-full blur-[2px] mx-auto mt-0.5 animate-shadow-pulse pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default SoloLearnerOverlayCompanion;
