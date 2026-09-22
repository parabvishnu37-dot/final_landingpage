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

export const SoloLearnerCompanion: React.FC = () => {
  const [activeState, setActiveState] = useState<SoloCharacterState>('starting');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Check if user has scrolled past hero into the journey
      const resumeSection = document.getElementById('resume-import');
      if (resumeSection) {
        const rect = resumeSection.getBoundingClientRect();
        // Become visible slightly before reaching resume-import
        if (rect.top <= windowHeight * 0.85) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      // Check if user has reached the footer (fade out to prevent overlap)
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= windowHeight * 0.9) {
          setIsVisible(false);
          return;
        }
      }

      // Find the currently active section
      // Check from bottom to top so the lowest visible section takes precedence
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

  // Handle clicking on progress dots to jump to section
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
    <aside
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ease-out select-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label="SOLO Learner Journey Companion"
    >
      {/* Minimized Floating Avatar */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="group relative flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-full shadow-lg border border-slate-200/80 hover:border-[#FD4322]/40 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FD4322]/50"
          title="Expand SOLO Learner Companion"
        >
          {/* Miniature Character Head Crop */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#F8F9FA] border border-slate-200 flex-shrink-0">
            <img
              src={currentMeta.image1x}
              alt={currentMeta.label}
              className="w-full h-full object-cover object-top scale-[2.2] translate-y-1"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold text-[#FD4322] uppercase tracking-wider flex items-center gap-1">
              Step 0{currentMeta.stepNumber}
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
            </span>
            <span className="text-xs font-semibold text-[#14243D]">
              {currentMeta.label}
            </span>
          </div>

          <span className="text-slate-400 group-hover:text-[#FD4322] text-xs font-bold pl-1 transition-colors">
            ↑
          </span>
        </button>
      ) : (
        /* Full Companion Card */
        <div className="relative flex flex-col items-center bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 p-3.5 pt-2.5 max-w-[210px] sm:max-w-[230px] hover:shadow-2xl transition-all duration-300">
          {/* Header Bar with Step Badge and Minimize Toggle */}
          <div className="w-full flex items-center justify-between pb-2 mb-1 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-sm"
                style={{ backgroundColor: CHARACTER_PALETTE.accentOrange }}
              >
                {currentMeta.stepNumber}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Learner Journey
              </span>
            </div>

            <button
              onClick={() => setIsMinimized(true)}
              className="w-5 h-5 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors text-xs"
              title="Minimize companion"
              aria-label="Minimize companion"
            >
              −
            </button>
          </div>

          {/* Character Illustration Frame */}
          <div className="my-1">
            <SoloLearnerCharacter
              state={activeState}
              size="sm"
              glow
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Narrative Speech / Thought Bubble */}
          <div className="w-full text-center mt-2 bg-slate-50/80 rounded-xl p-2 border border-slate-100/90">
            <div className="flex items-center justify-center gap-1.5 mb-0.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14243D]">
                {currentMeta.label}
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-600 leading-snug">
              “{currentMeta.tagline}”
            </p>
          </div>

          {/* 7-Step Interactive Journey Progress Rail */}
          <div className="w-full flex items-center justify-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100">
            {CHARACTER_ORDER.map((stateKey, index) => {
              const isActive = stateKey === activeState;
              const isPast =
                CHARACTER_ORDER.indexOf(stateKey) <
                CHARACTER_ORDER.indexOf(activeState);

              return (
                <button
                  key={stateKey}
                  onClick={() => handleJumpToState(stateKey)}
                  className={`transition-all duration-300 rounded-full focus:outline-none ${
                    isActive
                      ? 'w-4 h-1.5 bg-[#FD4322] shadow-sm'
                      : isPast
                      ? 'w-1.5 h-1.5 bg-[#14243D]/60 hover:bg-[#FD4322]'
                      : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  title={`Step 0${index + 1}: ${CHARACTER_STATES[stateKey].label}`}
                  aria-label={`Jump to Step 0${index + 1}: ${CHARACTER_STATES[stateKey].label}`}
                />
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};

export default SoloLearnerCompanion;
