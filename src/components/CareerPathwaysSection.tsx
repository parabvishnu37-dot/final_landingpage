import React, { useState } from 'react';
import { ArrowRight, Layers, Award } from 'lucide-react';

export const CareerPathwaysSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'pathways' | 'sequence'>('pathways');

  return (
    <section 
      id="career-pathways"
      className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>CAREER PATHWAYS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            See where your skills <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">can take you.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Build skills in a structured way and progress toward your long-term career goals.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Product Showcase Frame with Actual SOLO Screenshots */}
        {/* ======================================================== */}
        <div className="relative max-w-[1140px] mx-auto mb-10">
          
          {/* Clean White Product Showcase Container */}
          <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-6 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">

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
            className="btn-primary-solo inline-flex items-center gap-2 rounded-xl px-7 h-11 text-[14px] font-bold text-white"
          >
            <span>Explore Career Pathways</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
