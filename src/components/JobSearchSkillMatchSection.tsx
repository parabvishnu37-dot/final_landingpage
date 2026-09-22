import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Sparkles, 
  ArrowDown
} from 'lucide-react';
import { 
  OpportunityCard, 
  type OpportunityCardData, 
  opportunitiesByCategory 
} from './OpportunitiesSection';

export const JobSearchSkillMatchSection: React.FC = () => {
  // Active selected skill category to highlight in the explanation
  const [activeCategory, setActiveCategory] = useState<'matched' | 'partial' | 'missing'>('missing');

  // Skill Match breakdown data matching PDF Page 29 (Junior Developer role)
  const analysisCategories = [
    {
      id: 'matched' as const,
      name: 'Matched Skills',
      count: '4 Skills',
      statusColor: 'text-[#16a36a] bg-[#eaf8f1] border-[#c9ead9]',
      icon: CheckCircle2,
      desc: 'Skills you already have that meet the role requirements.',
      sampleSkills: ['Java Software Development', 'Oracle JDeveloper', 'Midrange Software', 'Go'],
    },
    {
      id: 'partial' as const,
      name: 'Partially Matched',
      count: '2 Skills',
      statusColor: 'text-[#d97706] bg-[#fef3c7] border-[#fde68a]',
      icon: AlertCircle,
      desc: 'Skills where you have relevant knowledge but need further development.',
      sampleSkills: ['Midrange Software XpertHire', 'Oracle JDeveloper Tools'],
    },
    {
      id: 'missing' as const,
      name: 'Missing Skills',
      count: '4 Skills',
      statusColor: 'text-[#dc2626] bg-[#fee2e2] border-[#fecaca]',
      icon: XCircle,
      desc: 'Skills required for the role that are not currently present in your profile.',
      sampleSkills: ['Web Application Software', 'Programming Languages', 'Software Development', 'JDeveloper'],
    },
  ];

  // Flow steps: JOB ROLE ↓ SKILL MATCH ↓ MATCHED / PARTIAL / MISSING ↓ RECOMMENDED OPPORTUNITY
  const flowSteps = [
    { name: 'JOB ROLE', label: 'Junior Developer' },
    { name: 'SKILL MATCH', label: '52.26% Match Score' },
    { name: 'MATCHED / PARTIAL / MISSING', label: 'Identified Skill Gaps' },
    { name: 'RECOMMENDED OPPORTUNITY', label: 'Bridging Course / Internship' },
  ];

  // Recommended course/opportunity matching the gap using existing Opportunities data
  // For Web Application Software / Software Development, recommend the Software & AI Product Development Intern
  // or HR / Tech courses from opportunitiesByCategory
  const recommendedOpportunity: OpportunityCardData = 
    opportunitiesByCategory.Internships?.[0] || opportunitiesByCategory.Courses[0];

  return (
    <section 
      id="job-search-skill-match"
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
            <span>JOB SEARCH + SKILL MATCH</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Know how your skills <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">match the role.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Before you apply, see how your current skills compare with the requirements of the opportunity.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main 2-Column Layout */}
        {/* Left Side: Actual SOLO Skill Match Screenshot (PDF Page 29) */}
        {/* Right Side: Concise Explanation + Flow + What's Next Recommendation */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-[1240px] mx-auto mb-16">
          
          {/* -------------------------------------------------------- */}
          {/* LEFT SIDE: Actual SOLO Skill Match Screenshot Card */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-6 rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-5 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">

            {/* Scrollable Container with Custom Scrollbar */}
            <div className="relative rounded-xl border border-[#E5E7EB] bg-white overflow-hidden">
              <div className="max-h-[580px] sm:max-h-[640px] lg:max-h-[700px] overflow-y-auto scrollbar-thin p-1 sm:p-2 bg-[#FAFBFC]">
                <img 
                  src="/job-search/skill_match_analysis.png" 
                  alt="SOLO Skill Match Analysis UI from Learner Guide PDF Page 29"
                  className="w-full h-auto block rounded-lg shadow-2xs"
                  loading="eager"
                />
              </div>

              {/* Subtle bottom scroll hint */}
              <div className="p-2.5 bg-white/95 backdrop-blur-xs border-t border-[#EEF2F6] flex items-center justify-between text-[11.5px] text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FD4322]" />
                  <span>PDF Page 29: Actual SOLO Skill Match UI</span>
                </span>
                <span className="text-[11px] font-medium text-[#5A6B82]">
                  Scroll to view readiness trend &amp; gap
                </span>
              </div>
            </div>

            {/* Sub-caption */}
            <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#64748B] gap-1 px-1">
              <span className="italic">
                (Skill Match Analysis showing matched, partially matched, and missing skills for a job role)
              </span>
              <span className="font-semibold text-[#14243D]">
                SOLO Job Match Engine
              </span>
            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* RIGHT SIDE: Explanation + Flow + "What's next?" */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Box 1: Skill Match Analysis Breakdown */}
            <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-6 sm:p-8 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">
              
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#14243D]">
                    Skill Match Analysis
                  </h3>
                  <p className="text-[13px] text-[#5A6B82] mt-0.5">
                    Real-time comparison between your learner profile and the job role.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] border border-[#f8d1c6] flex items-center justify-center text-[#FD4322] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* 3 Categories: Matched, Partially Matched, Missing Skills */}
              <div className="space-y-3.5 mb-6">
                {analysisCategories.map((cat) => {
                  const IconComp = cat.icon;
                  const isSelected = activeCategory === cat.id;

                  return (
                    <div 
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`rounded-xl border p-4 transition-all duration-150 cursor-pointer ${
                        isSelected 
                          ? 'border-[#FD4322]/50 bg-[#FFFDFD] shadow-xs' 
                          : 'border-[#E3EAF1] bg-[#FAFBFC] hover:border-[#DBE6F1] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <IconComp className={`w-4 h-4 ${
                            cat.id === 'matched' ? 'text-[#16a36a]' :
                            cat.id === 'partial' ? 'text-[#d97706]' : 'text-[#dc2626]'
                          }`} />
                          <span className="text-[15px] font-black text-[#14243D]">
                            {cat.name}
                          </span>
                        </div>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${cat.statusColor}`}>
                          {cat.count}
                        </span>
                      </div>

                      <p className="text-[12.5px] text-[#5A6B82] leading-relaxed mb-2.5">
                        {cat.desc}
                      </p>

                      {/* Sample skill pills from the actual screenshot */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cat.sampleSkills.map((skill) => (
                          <span 
                            key={skill}
                            className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                              cat.id === 'matched' ? 'bg-[#eaf8f1] text-[#166534]' :
                              cat.id === 'partial' ? 'bg-[#fef3c7] text-[#92400e]' : 'bg-[#fee2e2] text-[#991b1b]'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Flow Sequence: JOB ROLE ↓ SKILL MATCH ↓ MATCHED / PARTIAL / MISSING ↓ RECOMMENDED OPPORTUNITY */}
              <div className="pt-4 border-t border-[#EEF2F6]">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#FD4322] mb-3">
                  ANALYSIS &amp; RECOMMENDATION FLOW
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-3 rounded-xl bg-[#FAFBFC] border border-[#E3EAF1]">
                  {flowSteps.map((step, idx) => (
                    <React.Fragment key={step.name}>
                      <div className="flex flex-col items-center text-center">
                        <span className="font-mono text-[10px] font-black text-[#FD4322]">
                          {step.name}
                        </span>
                        <span className="text-[11px] font-bold text-[#14243D]">
                          {step.label}
                        </span>
                      </div>

                      {idx < flowSteps.length - 1 && (
                        <div className="text-[#FD4322] hidden sm:block">
                          <ArrowRight className="w-3.5 h-3.5 text-[#FD4322]" />
                        </div>
                      )}

                      {idx < flowSteps.length - 1 && (
                        <div className="text-[#FD4322] sm:hidden">
                          <ArrowDown className="w-3 h-3 text-[#FD4322]" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>

            {/* Box 2: "What's next?" with Reused Opportunities Course/Opportunity Card */}
            <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-6 sm:p-8 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <img 
                      src="/solo-assets/images/aipowered.png" 
                      alt="AI Powered" 
                      className="h-5 sm:h-6 w-auto object-contain"
                    />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                      SKILL MATCH AI
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#14243D]">
                    What&apos;s next?
                  </h3>
                </div>

                <span className="rounded-full bg-[#fff1ec] border border-[#f8d1c6] px-3 py-1 text-[11px] font-bold text-[#FD4322]">
                  Gap Identified: Web Application Software
                </span>
              </div>

              <p className="text-[13px] text-[#5A6B82] leading-relaxed mb-5">
                The Skill Match AI identifies missing skills required for the <strong className="text-[#14243D]">Junior Developer</strong> role and directly recommends opportunities from SOLO to bridge your readiness gap:
              </p>

              {/* Exact Reused Opportunity Card Component without duplication */}
              <div className="max-w-md mx-auto sm:max-w-none">
                <OpportunityCard item={recommendedOpportunity} />
              </div>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* Supporting Statement & CTA */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-4">
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6B82] font-medium leading-relaxed">
            Search roles, discover skill gaps, and take actionable steps toward your career goals.
          </p>

          <a
            href="#job-search-skill-match"
            className="btn-primary-solo inline-flex items-center gap-2 rounded-xl px-7 h-11 text-[14px] font-bold text-white"
          >
            <span>Explore Job Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
