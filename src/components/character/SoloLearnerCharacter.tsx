import React, { useEffect, useState } from 'react';
import type { SoloCharacterState } from '../../types/character';
import {
  CHARACTER_STATES,
  CHARACTER_ORDER,
  CHARACTER_PALETTE,
} from '../../types/character';

export interface SoloLearnerCharacterProps {
  /** The current journey state of the character */
  state: SoloCharacterState;
  /** Size preset or responsive mode */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'auto';
  /** Optional custom class name for the wrapper */
  className?: string;
  /** When true, removes card borders, backgrounds and shadows so the character stands naturally */
  frameless?: boolean;
  /** Show the step badge (e.g. 01, 02) */
  showBadge?: boolean;
  /** Show the state label and tagline */
  showCaption?: boolean;
  /** Caption placement relative to the character */
  captionPosition?: 'bottom' | 'top' | 'side';
  /** Display a subtle brand-orange glow behind the character */
  glow?: boolean;
  /** Allow clicking on the character to cycle through states (useful for testing/previews) */
  interactive?: boolean;
  /** Callback fired when the character state changes (in interactive mode) */
  onStateChange?: (nextState: SoloCharacterState) => void;
}

const SIZE_CLASSES = {
  sm: 'w-[90px] h-[138px]',
  md: 'w-[140px] h-[215px]',
  lg: 'w-[200px] h-[307px]',
  xl: 'w-[240px] h-[368px]',
  '2xl': 'w-[260px] h-[400px]',
  auto: 'w-full h-full aspect-[28/43]',
};

export const SoloLearnerCharacter: React.FC<SoloLearnerCharacterProps> = ({
  state = 'starting',
  size = 'md',
  className = '',
  frameless = false,
  showBadge = false,
  showCaption = false,
  captionPosition = 'bottom',
  glow = false,
  interactive = false,
  onStateChange,
}) => {
  const [activeState, setActiveState] = useState<SoloCharacterState>(state);

  // Synchronize internal state with prop
  useEffect(() => {
    setActiveState(state);
  }, [state]);

  // Preload all 7 character state images on mount for instant, flicker-free crossfades
  useEffect(() => {
    const preloadList = Object.values(CHARACTER_STATES).flatMap((meta) => [
      meta.image1x,
      meta.image2x,
    ]);

    preloadList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleCharacterClick = () => {
    if (!interactive) return;
    const currentIndex = CHARACTER_ORDER.indexOf(activeState);
    const nextIndex = (currentIndex + 1) % CHARACTER_ORDER.length;
    const nextState = CHARACTER_ORDER[nextIndex];
    setActiveState(nextState);
    if (onStateChange) {
      onStateChange(nextState);
    }
  };

  const currentMeta = CHARACTER_STATES[activeState] || CHARACTER_STATES.starting;

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${
        interactive ? 'cursor-pointer group' : ''
      } ${className}`}
      onClick={handleCharacterClick}
      role={interactive ? 'button' : 'img'}
      aria-label={`SOLO Learner Character: ${currentMeta.label} - ${currentMeta.tagline}`}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleCharacterClick();
        }
      }}
    >
      {/* Top Caption */}
      {showCaption && captionPosition === 'top' && (
        <div className="mb-3 text-center transition-all duration-300">
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            {showBadge && (
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                style={{ backgroundColor: CHARACTER_PALETTE.accentOrange }}
              >
                {currentMeta.stepNumber}
              </span>
            )}
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: CHARACTER_PALETTE.darkNavy }}
            >
              {currentMeta.label}
            </span>
          </div>
          <p className="text-[11px] font-medium text-slate-500 max-w-[180px] leading-tight">
            {currentMeta.tagline}
          </p>
        </div>
      )}

      {/* Character Visual Frame */}
      <div
        className={`relative overflow-hidden transition-all duration-500 ${
          SIZE_CLASSES[size]
        } ${
          frameless
            ? 'bg-transparent'
            : `rounded-2xl ${
                glow
                  ? 'shadow-[0_8px_30px_rgba(253,67,34,0.18)] ring-1 ring-[#FD4322]/20'
                  : ''
              }`
        }`}
        style={{
          backgroundColor: frameless ? 'transparent' : '#F8F9FA',
        }}
      >
        {/* Subtle Ambient Backdrop Glow */}
        {!frameless && (
          <div
            className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(ellipse at 50% 60%, rgba(253, 67, 34, 0.12) 0%, transparent 70%)',
            }}
          />
        )}

        {/* Stack of all 7 character state images for seamless crossfade */}
        {CHARACTER_ORDER.map((stateKey) => {
          const meta = CHARACTER_STATES[stateKey];
          const isActive = stateKey === activeState;

          return (
            <img
              key={meta.id}
              src={meta.image1x}
              srcSet={`${meta.image1x} 1x, ${meta.image2x} 2x`}
              alt={meta.narrative}
              draggable={false}
              className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-all duration-500 ease-out ${
                isActive
                  ? 'opacity-100 scale-100 translate-y-0 z-10 filter-none'
                  : 'opacity-0 scale-[0.98] translate-y-1 z-0'
              }`}
            />
          );
        })}

        {/* Subtle Interactive Hint */}
        {interactive && (
          <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-sm border border-slate-200">
            <svg
              className="w-3 h-3 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Bottom Caption */}
      {showCaption && captionPosition === 'bottom' && (
        <div className="mt-3 text-center transition-all duration-300">
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            {showBadge && (
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                style={{ backgroundColor: CHARACTER_PALETTE.accentOrange }}
              >
                {currentMeta.stepNumber}
              </span>
            )}
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: CHARACTER_PALETTE.darkNavy }}
            >
              {currentMeta.label}
            </span>
          </div>
          <p className="text-[11px] font-medium text-slate-500 max-w-[180px] leading-tight">
            {currentMeta.tagline}
          </p>
        </div>
      )}
    </div>
  );
};

export default SoloLearnerCharacter;
