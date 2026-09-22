import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const ResumeImportSection: React.FC = () => {
  return (
    <section 
      id="resume-import" 
      className="relative bg-[#FFF9F6] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>IMPORT RESUME</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Already have a resume? <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">Start here.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Upload your existing resume and let SOLO turn your experience, education, projects, and skills into structured profile information.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Two Large Side-by-Side Screenshots with Orange Directional Connector */}
        {/* ======================================================== */}
        <div className="relative max-w-[1360px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            
            {/* -------------------------------------------------------- */}
            {/* LEFT: 01 — UPLOAD RESUME */}
            {/* -------------------------------------------------------- */}
            <div className="rounded-[22px] border border-[#DBE6F1] bg-white p-4 sm:p-5 shadow-[0_16px_40px_rgba(20,36,61,0.06)] flex flex-col justify-between group hover:border-[#FD4322]/40 transition-colors">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#F3F4F6]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#F8D1C6] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                    01 — UPLOAD RESUME
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#5A6B82]">Supports PDF &amp; DOCX</span>
              </div>

              {/* Large Screenshot Frame (95-100% width, ~280-330px height on desktop) */}
              <div className="w-full flex-1 rounded-xl overflow-hidden bg-[#FAFBFC] border border-[#E5E7EB] p-1 flex items-center justify-center">
                <img 
                  src="/resume-import/p10_img2.png" 
                  alt="01 Upload Resume - Actual SOLO UI"
                  className="w-full h-auto max-h-[330px] object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              {/* Caption */}
              <div className="mt-3.5 text-xs text-[#5A6B82]">
                <span className="font-medium">Upload your existing resume to start</span>
              </div>
            </div>

            {/* Mobile-only connector between cards */}
            <div className="flex lg:hidden flex-col items-center justify-center py-1">
              <div className="w-10 h-10 rounded-full bg-[#FFF0EB] border-2 border-[#F8D1C6] flex items-center justify-center text-[#FD4322] shadow-xs">
                <ArrowDown className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322] mt-1">
                Upload → Extract
              </span>
            </div>

            {/* -------------------------------------------------------- */}
            {/* RIGHT: 02 — EXTRACTED DATA */}
            {/* -------------------------------------------------------- */}
            <div className="rounded-[22px] border border-[#DBE6F1] bg-white p-4 sm:p-5 shadow-[0_16px_40px_rgba(20,36,61,0.06)] flex flex-col justify-between group hover:border-[#FD4322]/40 transition-colors">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#F3F4F6]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#F8D1C6] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                    02 — EXTRACTED DATA
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#5A6B82]">Auto-grouped skills &amp; experience</span>
              </div>

              {/* Large Screenshot Frame (95-100% width, ~280-330px height on desktop) */}
              <div className="w-full flex-1 rounded-xl overflow-hidden bg-[#FAFBFC] border border-[#E5E7EB] p-1 flex items-center justify-center">
                <img 
                  src="/resume-import/p10_img3.png" 
                  alt="02 Extracted Data - Actual SOLO UI"
                  className="w-full h-auto max-h-[330px] object-contain rounded-lg block"
                  loading="eager"
                />
              </div>

              {/* Caption */}
              <div className="mt-3.5 text-xs text-[#5A6B82]">
                <span className="font-medium">Key details structured into profile sections</span>
              </div>
            </div>

          </div>

          {/* Desktop Floating Center Connector */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#FFF0EB] border-2 border-[#F8D1C6] flex items-center justify-center text-[#FD4322] shadow-[0_4px_16px_rgba(253,67,34,0.2)]">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
