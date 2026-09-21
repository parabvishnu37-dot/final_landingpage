import React, { useState } from 'react';
import { ArrowRight, Layers, Award } from 'lucide-react';

export const CareerPathwaysSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'pathways' | 'sequence'>('pathways');

  return (
    <section 
      id="career-pathways"
      className="relative bg-[#F7F8FA] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#E3EAF1]"
    >
      {/* Subtle ambient backglows */}
      <div 
        className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[#FD4322]/5 blur-[120px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-20 bottom-1/3 h-96 w-96 rounded-full bg-[#1255FF]/5 blur-[120px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>CAREER PATHWAYS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-[#14243D] mb-5">
            See where your skills <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">can take you.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Build skills in a structured way and progress toward your long-term career goals.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Product Showcase Frame with Actual SOLO Screenshots */}
        {/* ======================================================== */}
        <div className="relative max-w-[1140px] mx-auto mb-10">
          
          {/* Clean White Product/Browser Frame */}
          <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-3 sm:p-6 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">
            
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#E8EEF3] mb-4 sm:mb-6 bg-[#FAFBFC] rounded-t-[14px]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Bar */}
              <div className="rounded-lg bg-white border border-[#E3EAF1] px-4 py-1 text-[11px] font-mono text-[#5A6B82] shadow-2xs flex items-center gap-2 max-w-[380px] w-full justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a36a]" />
                <span className="truncate">app.solonetwork.org/manage/my-career-pathways</span>
              </div>

              {/* Status Badge */}
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#fff1ec] border border-[#f8d1c6] px-2.5 py-0.5 text-[10px] font-extrabold text-[#FD4322]">
                <span>SOLO Pathways</span>
              </span>
            </div>

            {/* View Selector Tabs (My Career Pathways vs. Pathway Progression) */}
            <div className="flex items-center justify-center gap-2 mb-6 border-b border-[#E5E7EB] pb-3">
              <button
                type="button"
                onClick={() => setActiveView('pathways')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-[13px] font-bold transition-all duration-150 cursor-pointer ${
                  activeView === 'pathways'
                    ? 'bg-[#FFF0EB] text-[#FD4322] shadow-xs'
                    : 'text-[#5A6B82] hover:text-[#14243D] hover:bg-[#F8FAFC]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>My Career Pathways (Overview)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveView('sequence')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-[13px] font-bold transition-all duration-150 cursor-pointer ${
                  activeView === 'sequence'
                    ? 'bg-[#FFF0EB] text-[#FD4322] shadow-xs'
                    : 'text-[#5A6B82] hover:text-[#14243D] hover:bg-[#F8FAFC]'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Pathway View (Earned Badges)</span>
              </button>
            </div>

            {/* Screenshot Container with Responsive Horizontal Scrolling on Mobile */}
            <div className="w-full overflow-x-auto scrollbar-thin rounded-xl bg-[#F8FAFC] p-2 sm:p-4 border border-[#E8EEF3]">
              
              {/* VIEW 1: My Career Pathways (PDF Page 17) */}
              {activeView === 'pathways' && (
                <div className="min-w-[680px] sm:min-w-0 flex flex-col items-center justify-center animate-fadeIn">
                  <div className="w-full max-w-[940px] rounded-xl overflow-hidden bg-white shadow-xs border border-[#E5E7EB]">
                    <img 
                      src="/career-pathways/my_career_pathways.png" 
                      alt="SOLO My Career Pathways - Actual Product UI"
                      className="w-full h-auto block"
                      loading="eager"
                    />
                  </div>
                  <p className="text-[11.5px] text-[#64748B] mt-3 italic text-center">
                    (My Career Pathways — search, track badge progress, and view pathway status)
                  </p>
                </div>
              )}

              {/* VIEW 2: Pathway View — Interlinked Course Badges (PDF Page 18) */}
              {activeView === 'sequence' && (
                <div className="min-w-[640px] sm:min-w-0 flex flex-col items-center justify-center py-4 sm:py-8 animate-fadeIn">
                  <div className="w-full max-w-[840px] rounded-xl overflow-hidden bg-white shadow-xs border border-[#E5E7EB] p-3 sm:p-6">
                    <div className="text-[12px] font-bold text-[#14243D] mb-3 px-1 flex items-center justify-between border-b border-[#F1F5F9] pb-2">
                      <span>React JS Developer Pathway · Structured Progression</span>
                      <span className="text-[#16a36a] text-[11px] font-extrabold bg-[#eaf8f1] px-2 py-0.5 rounded-full border border-[#c9ead9]">
                        All 5 Badges Earned
                      </span>
                    </div>
                    <img 
                      src="/career-pathways/pathway_badges_earned.png" 
                      alt="SOLO Pathway View - Interlinked course badges marked Earned"
                      className="w-full h-auto block"
                      loading="eager"
                    />
                  </div>
                  <p className="text-[11.5px] text-[#64748B] mt-3 italic text-center">
                    (Pathway view — interlinked course badges marked &quot;Earned&quot; as you complete them)
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* Explanation & CTA Below Screenshot */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-4">
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6B82] font-medium leading-relaxed">
            Career Pathways connect a structured sequence of courses and skills to a specific role or domain.
          </p>

          <a
            href="#career-pathways"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FD4322] hover:bg-[#E03719] text-white font-bold px-7 py-3.5 text-[14px] shadow-[0_8px_20px_rgba(253,67,34,0.22)] transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
          >
            <span>Explore Career Pathways</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
