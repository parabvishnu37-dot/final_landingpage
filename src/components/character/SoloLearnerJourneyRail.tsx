import React, { useState, useEffect, useMemo } from 'react';
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

const SECTION_MAPPINGS: SectionMapping[] = [
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
  { sectionId: 'social-platform', state: 'ready' },
  { sectionId: 'get-started', state: 'ready' },
];

export const SoloLearnerJourneyRail: React.FC = () => {
  const [activeState, setActiveState] = useState<SoloCharacterState>('starting');

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Find the currently active section from bottom to top
      for (let i = SECTION_MAPPINGS.length - 1; i >= 0; i--) {
        const { sectionId, state } = SECTION_MAPPINGS[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Trigger when section top is above 60% of viewport
          if (rect.top <= windowHeight * 0.6) {
            setActiveState(state);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentMeta = useMemo(() => {
    return CHARACTER_STATES[activeState] || CHARACTER_STATES.starting;
  }, [activeState]);

  // Jump to corresponding section when an indicator node is clicked
  const handleJumpToState = (stateKey: SoloCharacterState) => {
    const mapping = SECTION_MAPPINGS.find((m) => m.state === stateKey);
    if (mapping) {
      const targetEl = document.getElementById(mapping.sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="flex items-start gap-4 select-none">
      {/* ======================================================== */}
      {/* 1. Subtle Journey Indicator (Thin Vertical Line + Nodes) */}
      {/* Sits beside the character on the far left, NOT between    */}
      {/* character and main SOLO content                           */}
      {/* ======================================================== */}
      <div className="flex flex-col items-center pt-2 shrink-0">
        <div className="relative flex flex-col items-center gap-4">
          {/* Continuous subtle vertical line */}
          <div className="absolute top-2 bottom-2 w-[1.5px] bg-[#E2E8F0] -z-10" />

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
                className="group relative flex items-center justify-center p-0.5 focus:outline-none"
                title={`Step 0${index + 1}: ${CHARACTER_STATES[stateKey].label}`}
                aria-label={`Jump to Step 0${index + 1}: ${CHARACTER_STATES[stateKey].label}`}
              >
                {/* Outer active ring */}
                <span
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-[#FD4322]/30 bg-white'
                      : 'bg-transparent'
                  }`}
                >
                  {/* Inner Node Dot */}
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-2 h-2 bg-[#FD4322] shadow-sm'
                        : isPast
                        ? 'w-1.5 h-1.5 bg-[#14243D]/60 group-hover:bg-[#FD4322]'
                        : 'w-1.5 h-1.5 bg-[#CBD5E1] group-hover:bg-slate-400'
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. Character & Narrative Storytelling Block              */}
      {/* ======================================================== */}
      <div className="flex flex-col items-start min-w-0">
        {/* Storytelling Text (Simple, close to character, no card) */}
        <div className="mb-3 space-y-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-black uppercase tracking-[0.16em]"
              style={{ color: CHARACTER_PALETTE.accentOrange }}
            >
              LEARNER JOURNEY
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-black tracking-tight text-[#14243D] leading-tight">
            0{currentMeta.stepNumber} — {currentMeta.label.toUpperCase()}
          </h3>

          <p className="text-sm font-medium text-[#5A6B82] italic leading-relaxed">
            “{currentMeta.tagline}”
          </p>
        </div>

        {/* Substantially Larger Frameless Character */}
        <div className="relative pt-1">
          <SoloLearnerCharacter
            state={activeState}
            size="2xl"
            frameless
            className="transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
};

export default SoloLearnerJourneyRail;
