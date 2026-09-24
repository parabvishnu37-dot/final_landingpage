import React from 'react';
import { ArrowRight, ArrowDown, Globe, GitBranch, Sparkles, CheckCircle2 } from 'lucide-react';

const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const GitHubIntegrationSection: React.FC = () => {
  const extractedDetails = [
    'Project name',
    'README',
    'Repository activity',
    'Commits',
    'Contributors',
    'Skills',
  ];

  return (
    <section
      id="github-integration"
      className="relative bg-[#FFF9F6] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>GITHUB INTEGRATION</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Your work is part of your story.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Connect GitHub and bring your public projects, repository activity, and skills into your SOLO profile.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2-Card Row: Step 01 Connect & Step 02 Import             */}
        {/* ======================================================== */}
        <div className="relative max-w-[1360px] mx-auto mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            {/* ---------------------------------------------------- */}
            {/* LEFT: 01 — CONNECT GITHUB                           */}
            {/* ---------------------------------------------------- */}
            <div className="rounded-[22px] border border-[#DBE6F1] bg-white p-4 sm:p-6 shadow-[0_16px_40px_rgba(20,36,61,0.06)] flex flex-col justify-between group hover:border-[#FD4322]/40 transition-colors">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#F3F4F6]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#F8D1C6] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                    01 — CONNECT GITHUB
                  </span>
                  <span className="text-xs font-semibold text-[#5A6B82]">OAuth Integration</span>
                </div>

                {/* Screenshot Frame with Subtle Visual Callout */}
                <div className="w-full rounded-xl overflow-hidden bg-[#FAFBFC] border border-[#E5E7EB] p-1.5 flex items-center justify-center">
                  <div className="relative w-full overflow-hidden rounded-lg">
                    <img
                      src="/github/01_connect_github.png"
                      alt="01 Connect GitHub - Profile showing Connect GitHub button"
                      className="w-full h-auto block"
                      loading="eager"
                    />

                    {/* Subtle thin SOLO-orange outline & soft highlight around Connect GitHub button */}
                    <div
                      className="absolute rounded-full border sm:border-2 border-[#FD4322] bg-[#FD4322]/10 pointer-events-none shadow-[0_0_0_2px_rgba(253,67,34,0.15)]"
                      style={{
                        left: '39.8%',
                        top: '67.6%',
                        width: '9.6%',
                        height: '6.0%',
                      }}
                      aria-hidden="true"
                    />

                    {/* Small, clean orange callout label pointing toward the button */}
                    <div
                      className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
                      style={{
                        left: '44.6%',
                        bottom: '33.2%',
                      }}
                      aria-hidden="true"
                    >
                      <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-[#FD4322] text-white text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-wider shadow-[0_2px_8px_rgba(253,67,34,0.3)]">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
                        <span>Connect GitHub</span>
                      </div>
                      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] sm:border-t-[5px] border-t-[#FD4322]" />
                    </div>
                  </div>
                </div>

                {/* Card Body Copy */}
                <div className="mt-4">
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#14243D] leading-snug mb-1">
                    Connect your GitHub account
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#5A6B82] leading-relaxed">
                    Connect GitHub from My Profile or Settings → Security &amp; Sign-up.
                  </p>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-4 pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs text-[#5A6B82]">
                <span className="font-medium text-[#14243D] flex items-center gap-1.5">
                  <GitHubIcon className="w-3.5 h-3.5 text-[#FD4322]" />
                  Direct GitHub connection
                </span>
                <span className="text-[11px] font-semibold text-[#FD4322] bg-[#FFF0EB] px-2.5 py-0.5 rounded-md">
                  Account Link
                </span>
              </div>
            </div>

            {/* Mobile-only connector between Step 01 & Step 02 */}
            <div className="flex lg:hidden flex-col items-center justify-center py-1">
              <div className="w-10 h-10 rounded-full bg-[#FFF0EB] border-2 border-[#F8D1C6] flex items-center justify-center text-[#FD4322] shadow-xs">
                <ArrowDown className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322] mt-1">
                Connect → Import
              </span>
            </div>

            {/* ---------------------------------------------------- */}
            {/* RIGHT: 02 — IMPORT YOUR PROJECTS                    */}
            {/* ---------------------------------------------------- */}
            <div className="rounded-[22px] border border-[#DBE6F1] bg-white p-4 sm:p-6 shadow-[0_16px_40px_rgba(20,36,61,0.06)] flex flex-col justify-between group hover:border-[#FD4322]/40 transition-colors">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#F3F4F6]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#F8D1C6] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                    02 — IMPORT YOUR PROJECTS
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] px-2.5 py-0.5 text-[11px] font-semibold text-[#475569]">
                    Public repositories only
                  </span>
                </div>

                {/* Screenshot Frame */}
                <div className="w-full rounded-xl overflow-hidden bg-[#FAFBFC] border border-[#E5E7EB] p-1.5 flex items-center justify-center">
                  <img
                    src="/github/02_import_projects.png"
                    alt="02 Import Your Projects - GitHub Projects modal"
                    className="w-full h-auto max-h-[310px] object-contain rounded-lg block"
                    loading="eager"
                  />
                </div>

                {/* Card Body Copy */}
                <div className="mt-4">
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#14243D] leading-snug mb-1">
                    Import your public repositories
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#5A6B82] leading-relaxed">
                    Select your public repositories and review the project information before adding them to your Live Projects.
                  </p>

                  {/* Extracted Details Tags */}
                  <div className="mt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-1.5">
                      Extracted Information:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {extractedDetails.map((detail) => (
                        <span
                          key={detail}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[11.5px] font-medium text-[#334155]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#FD4322]" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-4 pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs text-[#5A6B82]">
                <span className="text-[11.5px] font-medium text-[#64748B]">
                  Public repositories only
                </span>
                <span className="text-[11px] font-semibold text-[#5A6B82] bg-[#F1F5F9] px-2.5 py-0.5 rounded-md">
                  Select &amp; Add
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Floating Center Connector */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-[#FFF0EB] border-2 border-[#F8D1C6] flex items-center justify-center text-[#FD4322] shadow-[0_4px_16px_rgba(253,67,34,0.2)]">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Downward Transition Connector to Result                  */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center my-6 sm:my-8 pointer-events-none">
          <div className="h-5 w-[1.5px] bg-gradient-to-b from-transparent to-[#FD4322]/50" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0EB] border border-[#F8D1C6] text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322] my-1 shadow-2xs">
            <span>BRINGS EVIDENCE TO YOUR PROFILE</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
          <div className="h-5 w-[1.5px] bg-gradient-to-b from-[#FD4322]/50 to-transparent" />
        </div>

        {/* ======================================================== */}
        {/* Step 03 / Result: Project Evidence                       */}
        {/* ======================================================== */}
        <div className="relative max-w-[1360px] mx-auto">
          <div className="rounded-[22px] border border-[#DBE6F1] bg-white p-5 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(20,36,61,0.06)] group hover:border-[#FD4322]/40 transition-colors">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-[#F3F4F6]">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#F8D1C6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                  RESULT — PROJECT EVIDENCE
                </span>
              </div>
              <span className="text-xs font-semibold text-[#5A6B82]">
                Live Projects Showcase
              </span>
            </div>

            {/* Large Screenshot Frame */}
            <div className="w-full rounded-xl overflow-hidden bg-[#FAFBFC] border border-[#E5E7EB] p-2 sm:p-3 flex items-center justify-center">
              <img
                src="/github/03_project_evidence.png"
                alt="Result: Project Evidence - Live Projects with repository and deployed links"
                className="w-full h-auto max-h-[460px] object-contain rounded-lg block"
                loading="eager"
              />
            </div>

            {/* Highlight Banner with Clean Factual Statement */}
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#FFF9F6] border border-[#F8D1C6]/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFF0EB] border border-[#F8D1C6] flex items-center justify-center shrink-0 text-[#FD4322] mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14243D] mb-1">
                    Add project evidence to your profile
                  </h4>
                  <p className="text-xs sm:text-[14px] text-[#5A6B82] leading-relaxed max-w-2xl">
                    Repository and deployed links provide project references, while contributors, activity, recent commits, and other project details add context.
                  </p>
                </div>
              </div>

              {/* Simple Supporting Pills */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#14243D] shadow-2xs">
                  <GitHubIcon className="w-3.5 h-3.5 text-[#24292F]" />
                  Repository Link
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#14243D] shadow-2xs">
                  <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
                  Deployed Link
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#14243D] shadow-2xs">
                  <GitBranch className="w-3.5 h-3.5 text-[#FD4322]" />
                  Project Activity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
