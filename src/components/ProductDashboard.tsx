import React from 'react';
import { 
  CheckCircle2, 
  Award, 
  ArrowRight
} from 'lucide-react';

interface SkillTagProps {
  children: React.ReactNode;
  tone?: 'blue' | 'orange' | 'green' | 'gold';
}

const SkillTag: React.FC<SkillTagProps> = ({ children, tone = 'blue' }) => {
  const styles = {
    blue: 'border border-[#cfe0fb] bg-[#eef5ff] text-[#1255FF]',
    orange: 'border border-[#f8d1c6] bg-[#fff1ec] text-[#FD4322]',
    gold: 'border border-[#f5dfb0] bg-[#fff8dd] text-[#b65d00]',
    green: 'border border-[#c9ead9] bg-[#eaf8f1] text-[#16a36a]',
  };
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold ${styles[tone]}`}>
      {children}
    </span>
  );
};

export const ProductDashboard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[580px] select-none mx-auto lg:mr-0 pt-3">
      {/* Subtle ambient backglows */}
      <div 
        className="pointer-events-none absolute -right-4 -top-2 h-40 w-40 rounded-full bg-[#FD4322]/10 blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -left-4 -bottom-2 h-40 w-40 rounded-full bg-[#1255FF]/10 blur-3xl" 
        aria-hidden="true" 
      />

      {/* ======================================================== */}
      {/* Floating Card 1: Skill Verified (Partially overlapping top-left) */}
      {/* ======================================================== */}
      <div className="hidden sm:flex absolute -top-2 left-6 z-30 animate-float-slow">
        <div className="solo-floating-card px-3 py-1.5 bg-white flex items-center gap-2.5 shadow-[0_12px_24px_-4px_rgba(20,36,61,0.12),0_0_0_1px_rgba(227,234,241,0.9)]">
          <div className="w-6 h-6 rounded-lg bg-[#eef5ff] text-[#1255FF] flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-extrabold text-[#14243D]">Skill Verified</span>
              <span className="rounded-full bg-[#eaf8f1] px-1.5 py-0.2 text-[9px] font-bold text-[#16a36a]">Top 5%</span>
            </div>
            <p className="text-[10px] font-semibold text-[#64748B]">Design Systems & UI</p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Floating Card 2: Credential Earned (Partially overlapping top-right) */}
      {/* ======================================================== */}
      <div className="hidden sm:flex absolute -top-2 right-6 z-30 animate-float-delayed">
        <div className="solo-floating-card px-3 py-1.5 bg-white flex items-center gap-2.5 shadow-[0_12px_24px_-4px_rgba(20,36,61,0.12),0_0_0_1px_rgba(227,234,241,0.9)]">
          <div className="w-6 h-6 rounded-lg bg-[#fff1ec] text-[#FD4322] flex items-center justify-center flex-shrink-0">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-extrabold text-[#14243D]">Credential Earned</span>
              <span className="rounded-full bg-[#fff8dd] px-1.5 py-0.2 text-[9px] font-bold text-[#b65d00]">Verified</span>
            </div>
            <p className="text-[10px] font-semibold text-[#64748B]">AI Product Architecture</p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Main Product Dashboard Preview Card (Compact Landscape Snapshot) */}
      {/* ======================================================== */}
      <div className="relative overflow-hidden rounded-[22px] border border-[#dbe6f1] bg-white p-4 sm:p-5 shadow-[0_20px_50px_rgba(20,36,61,0.08)] transition-all">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between border-b border-[#e8eef3] pb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
            <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
            <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[11px] font-bold text-[#64748B]">
              SOLO Platform
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf8f1] px-2 py-0.5 text-[10px] font-extrabold text-[#128455]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a36a]" />
            Active Track
          </span>
        </div>

        {/* Dashboard Body Content: Exactly the 3 requested sections */}
        <div className="mt-3.5 space-y-3">
          
          {/* 1. Current Pathway with Compact Horizontal Progress Indicator */}
          <div className="rounded-xl border border-[#e3eaf1] bg-[#F7F9FC] p-3.5 sm:p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#64748B]">
                  Current Pathway
                </p>
                <h3 className="mt-0.5 text-[15px] sm:text-[16px] font-black tracking-tight text-[#14243D]">
                  Product Design & AI
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-[12px] text-[#64748B]">
                  Learning · Projects · Verified Credentials
                </p>
              </div>
              <div className="text-right">
                <span className="text-[13px] font-black text-[#14243D]">86%</span>
                <span className="text-[11px] font-bold text-[#16a36a] ml-1">Complete</span>
              </div>
            </div>

            {/* Thin orange progress bar */}
            <div className="mt-2.5 w-full bg-[#E3EAF1] h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#FD4322] h-full rounded-full transition-all duration-700 ease-out" 
                style={{ width: '86%' }}
              />
            </div>
          </div>

          {/* 2. Verified Skills & Evidence */}
          <div className="rounded-xl border border-[#e3eaf1] bg-white p-3 sm:p-3.5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#64748B]">
                Verified Skills & Evidence
              </p>
              <span className="text-[10px] font-bold text-[#1255FF]">4 Skills Proven</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <SkillTag tone="blue">UX Research</SkillTag>
              <SkillTag tone="orange">Design Systems</SkillTag>
              <SkillTag tone="green">Interactive Prototyping</SkillTag>
              <SkillTag tone="gold">AI Integration</SkillTag>
            </div>
          </div>

          {/* 3. Opportunities & Internships */}
          <div className="flex items-center justify-between rounded-xl border border-[#f8d1c6] bg-[#fff8f5] px-3.5 py-2.5 sm:px-4 sm:py-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#FD4322]">
                  Opportunities & Internships
                </span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#FD4322]" />
              </div>
              <div className="mt-0.5 flex items-center gap-2">
                <p className="text-[12px] sm:text-[13px] font-bold text-[#14243D]">
                  Associate Product Designer
                </p>
                <span className="rounded-full bg-[#fff1ec] border border-[#f8d1c6] px-1.5 py-0.2 text-[9px] sm:text-[10px] font-extrabold text-[#FD4322]">
                  94% Match
                </span>
              </div>
            </div>
            <a 
              href="#opportunities"
              className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#FD4322] hover:bg-[#e83b1c] text-white shadow-xs transition-transform hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD4322] flex-shrink-0"
              aria-label="View Associate Product Designer opportunity"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
