import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface JourneyConnectorProps {
  stepNumber?: string;
  label: string;
  targetId?: string;
}

export const JourneyConnector: React.FC<JourneyConnectorProps> = ({
  stepNumber,
  label,
  targetId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPassed, setIsPassed] = useState<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check if prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPassed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight * 0.75) {
          setIsPassed(true);
        }
      },
      {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.1
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const content = (
    <div 
      ref={containerRef}
      className="relative z-20 flex flex-col items-center justify-center my-2 sm:my-3 pointer-events-auto"
    >
      {/* Upper subtle guide line (desktop only to preserve generous mobile whitespace) */}
      <div 
        className={`hidden sm:block w-[1.5px] h-6 transition-colors duration-500 ${
          isPassed ? 'bg-gradient-to-b from-transparent to-[#FD4322]/50' : 'bg-gradient-to-b from-transparent to-[#E2E8F0]'
        }`} 
      />

      {/* Subtle Micro-Transition Pill */}
      <div 
        className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
          isPassed 
            ? 'bg-white border-[#FD4322]/40 text-[#FD4322] shadow-[0_2px_10px_rgba(253,67,34,0.08)]' 
            : 'bg-white/90 border-[#E2E8F0] text-[#64748B] shadow-2xs'
        }`}
      >
        {/* Node: Inactive (○) vs Current/Completed (●) */}
        <span 
          className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-black transition-all duration-300 ${
            isPassed 
              ? 'bg-[#FD4322] text-white' 
              : 'border border-[#CBD5E1] bg-white text-[#94A3B8]'
          }`}
          aria-hidden="true"
        >
          {isPassed ? '●' : '○'}
        </span>

        {stepNumber && (
          <span 
            className={`text-[10px] font-black font-mono px-1.5 py-0.5 rounded transition-colors duration-300 ${
              isPassed ? 'bg-[#FFF0EB] text-[#FD4322]' : 'bg-[#F1F5F9] text-[#64748B]'
            }`}
          >
            {stepNumber}
          </span>
        )}

        <span className="text-[11px] font-bold tracking-wider uppercase text-[#14243D] group-hover:text-[#FD4322] transition-colors">
          {label}
        </span>

        <ArrowRight 
          className={`w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 ${
            isPassed ? 'text-[#FD4322]' : 'text-[#94A3B8]'
          }`} 
        />
      </div>

      {/* Lower subtle guide line */}
      <div 
        className={`hidden sm:block w-[1.5px] h-6 transition-colors duration-500 ${
          isPassed ? 'bg-gradient-to-b from-[#FD4322]/50 to-transparent' : 'bg-gradient-to-b from-[#E2E8F0] to-transparent'
        }`} 
      />
    </div>
  );

  if (targetId) {
    return (
      <a href={`#${targetId}`} className="block focus:outline-none select-none">
        {content}
      </a>
    );
  }

  return content;
};
