import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  FolderGit2, 
  Award, 
  Sparkles 
} from 'lucide-react';

export const TopMatchingJobsSection: React.FC = () => {
  const improveSteps = [
    {
      num: '01',
      title: 'Take relevant courses',
      description: 'Learn the skills employers look for',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Complete projects',
      description: 'Build real-world experience',
      icon: FolderGit2,
    },
    {
      num: '03',
      title: 'Earn credentials',
      description: 'Showcase your achievements',
      icon: Award,
    },
  ];

  return (
    <section 
      id="skill-match" 
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
            <span>OPPORTUNITIES</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Opportunities that <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">match your skills.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Discover internships, projects and job opportunities that align with what you've learned and built on SOLO.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main Product Showcase + Right-Side Supporting Panel */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch max-w-[1240px] mx-auto">
          
          {/* ======================================================== */}
          {/* LEFT / MAIN: Top Matching Jobs Showcase (Uploaded Image) */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 xl:col-span-8 rounded-[22px] border border-[#DBE6F1] bg-white p-3 sm:p-5 shadow-[0_24px_60px_rgba(20,36,61,0.08)] flex flex-col justify-between">
            
            <div className="w-full overflow-x-auto scrollbar-thin rounded-xl">
              <div className="min-w-[560px] lg:min-w-0">
                <img 
                  src="/opportunities/top_matching_jobs.png" 
                  alt="SOLO Top Matching Jobs - Opportunities that match your skills" 
                  className="w-full h-auto block rounded-xl"
                  loading="eager"
                />
              </div>
            </div>

            {/* Subtle Footer Note inside Showcase */}
            <div className="pt-4 mt-4 border-t border-[#F3F4F6] flex items-center justify-between text-[11.5px] text-[#64748B]">
              <span className="italic">
                (Personalized match scores calculated from your verified SOLO profile skills)
              </span>
              <span className="font-semibold text-[#14243D]">
                SOLO Opportunity Match Engine
              </span>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT: "Improve your matches" Supporting Panel */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 rounded-[22px] border border-[#DBE6F1] bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(20,36,61,0.06)] flex flex-col justify-between">
            
            <div>
              {/* Header */}
              <div className="pb-4 border-b border-[#F3F4F6] mb-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#f8d1c6] px-2.5 py-0.5 text-[10.5px] font-bold text-[#FD4322] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>ACTION PLAN</span>
                </div>
                <h3 className="text-xl font-bold text-[#14243D]">
                  Improve your matches
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5A6B82] mt-1 font-normal">
                  Build more skills to unlock better opportunities.
                </p>
              </div>

              {/* Three Concise Actions */}
              <div className="space-y-4">
                {improveSteps.map((step) => {
                  const IconComp = step.icon;
                  return (
                    <div 
                      key={step.num}
                      className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:border-[#CBD5E1] transition-colors flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FFF0EB] border border-[#f8d1c6] text-[#FD4322] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {step.num}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[14px] font-bold text-[#14243D] leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-[12px] text-[#5A6B82] mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <IconComp className="w-4 h-4 text-[#94A3B8] shrink-0 mt-1" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Callout in Panel */}
            <div className="mt-6 pt-5 border-t border-[#F3F4F6]">
              <div className="rounded-xl bg-[#FFF8F5] border border-[#FFE0D6] p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                  <h4 className="text-[13.5px] font-bold text-[#14243D]">
                    Higher skills. Higher opportunities.
                  </h4>
                </div>
                <p className="text-[12px] text-[#5A6B82] leading-relaxed">
                  The more you learn and build on SOLO, the better your opportunities can become.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* Bottom CTA */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mt-12 sm:mt-14 space-y-4">
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6B82] font-medium leading-relaxed">
            Connect your verified proof directly with real employer opportunities.
          </p>

          <a
            href="#opportunities"
            className="btn-primary-solo inline-flex items-center gap-2 rounded-xl px-7 h-11 text-[14px] font-bold text-white"
          >
            <span>Explore Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
