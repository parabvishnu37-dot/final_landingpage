import React from 'react';
import { ShieldCheck, ThumbsUp, Share2 } from 'lucide-react';

export const CredentialSharingSection: React.FC = () => {
  return (
    <section 
      id="credential-sharing" 
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
            <span>SHARE YOUR PROOF</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Earn it. Share it. <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">Get recognized.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Share your verified credentials with employers, institutions, and professional networks — and showcase the skills you've earned.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main 2-Column Product Layout */}
        {/* Left: Large Actual SOLO Credential Sharing Screenshot */}
        {/* Right: 3 Clear Steps (01 Verified → 02 Endorsed → 03 Shared) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-[1240px] mx-auto">
          
          {/* -------------------------------------------------------- */}
          {/* LEFT: Actual SOLO Credential Sharing Screenshot */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-7 rounded-[22px] border border-[#DBE6F1] bg-white p-3.5 sm:p-5 shadow-[0_16px_40px_rgba(20,36,61,0.06)] flex flex-col justify-between group hover:border-[#FD4322]/40 transition-colors">
            
            {/* Top Bar with Label */}
            <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[#F3F4F6]">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EB] border border-[#F8D1C6] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                  CREDENTIAL SHARING &amp; VERIFICATION
                </span>
              </div>
              <span className="text-xs font-semibold text-[#5A6B82]">Open Badge Standard</span>
            </div>

            {/* Screenshot Frame with Natural Aspect Ratio Preserved */}
            <div className="w-full flex-1 rounded-xl overflow-hidden bg-[#FAFBFC] border border-[#E5E7EB] p-1.5 flex items-center justify-center">
              <img 
                src="/credentials/credential_sharing_page23.png" 
                alt="SOLO Credential Sharing & Verification - Actual Product UI"
                className="w-full h-auto max-h-[420px] object-contain rounded-lg block"
                loading="eager"
              />
            </div>

            {/* Caption */}
            <div className="mt-3.5 text-xs text-[#5A6B82]">
              <span className="italic">
                (Credential sharing and endorsement features to showcase verified achievements)
              </span>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* RIGHT: Three Concise Steps */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            
            {/* Step 1: VERIFIED */}
            <div className="bg-white rounded-2xl border border-[#E3EAF1] p-5 sm:p-6 shadow-xs flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:border-[#FD4322]/40 hover:shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] border border-[#F8D1C6] flex items-center justify-center text-[#FD4322] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FD4322]">
                      01 — VERIFIED
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#14243D] mb-1">
                    Backed by a verified credential
                  </h3>
                  <p className="text-[13.5px] text-[#5A6B82] leading-relaxed">
                    Your achievement is backed by a verified credential with tamper-proof verification status, issuer details, and validity.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: ENDORSED */}
            <div className="bg-white rounded-2xl border border-[#E3EAF1] p-5 sm:p-6 shadow-xs flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:border-[#FD4322]/40 hover:shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] border border-[#F8D1C6] flex items-center justify-center text-[#FD4322] shrink-0">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FD4322]">
                      02 — ENDORSED
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#14243D] mb-1">
                    Request endorsements
                  </h3>
                  <p className="text-[13.5px] text-[#5A6B82] leading-relaxed">
                    Request endorsements from teammates, mentors, and peers to strengthen your professional profile and credibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: SHARED */}
            <div className="bg-white rounded-2xl border border-[#E3EAF1] p-5 sm:p-6 shadow-xs flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:border-[#FD4322]/40 hover:shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] border border-[#F8D1C6] flex items-center justify-center text-[#FD4322] shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FD4322]">
                      03 — SHARED
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#14243D] mb-1">
                    Share across networks
                  </h3>
                  <p className="text-[13.5px] text-[#5A6B82] leading-relaxed">
                    Add directly to your LinkedIn Certifications, share across social networks, or send secure credential links to employers.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
