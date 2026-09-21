import React from 'react';
import { 
  ArrowRight, 
  Eye, 
  ShieldCheck, 
  Layers, 
  Share2 
} from 'lucide-react';

export const CredentialWalletSection: React.FC = () => {
  // Four simple capabilities from the Learner Guide PDF page 30
  const capabilities = [
    {
      step: 'VIEW',
      num: '01',
      title: 'View Credentials',
      description: 'Access your earned credentials and badges.',
      icon: Eye,
    },
    {
      step: 'VERIFY',
      num: '02',
      title: 'Verify Details',
      description: 'See issuer, skills, and verification details.',
      icon: ShieldCheck,
    },
    {
      step: 'MANAGE',
      num: '03',
      title: 'Manage in One Place',
      description: 'Keep your verified achievements in one place.',
      icon: Layers,
    },
    {
      step: 'SHARE',
      num: '04',
      title: 'Share Anywhere',
      description: 'Share credentials with employers, institutions, and professional networks.',
      icon: Share2,
    },
  ];

  return (
    <section 
      id="credential-wallet"
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>CREDENTIAL WALLET</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-[#14243D] mb-5">
            Your credentials. <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">Always with you.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Keep your verified skills and achievements accessible, manageable, and ready to share.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main Product Showcase Area & Capabilities */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-[1140px] mx-auto mb-14 sm:mb-16">
          
          {/* LEFT: Actual SOLO Credential Wallet Screenshot Container */}
          <div className="lg:col-span-6 rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-5 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">

            {/* Screenshot Container with Responsive Handling */}
            <div className="w-full overflow-hidden rounded-xl bg-white border border-[#E5E7EB] p-2 sm:p-4 flex items-center justify-center">
              <img 
                src="/wallet/credential_wallet.png" 
                alt="SOLO Credential Wallet - Actual Mobile App UI from Learner Guide PDF Page 30"
                className="w-full max-w-[500px] h-auto block rounded-lg shadow-2xs"
                loading="eager"
              />
            </div>

            {/* Caption matching PDF Page 30 */}
            <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#64748B] gap-1 px-1">
              <span className="italic">
                (Access, manage, and share your verified credentials anytime with the SOLO Credential Wallet app.)
              </span>
              <span className="font-semibold text-[#14243D]">
                SOLO Mobile App
              </span>
            </div>

          </div>

          {/* RIGHT: Four Simple Capabilities */}
          <div className="lg:col-span-6 space-y-4">
            {capabilities.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.step}
                  className="rounded-2xl border border-[#E3EAF1] bg-white p-5 sm:p-6 shadow-xs hover:border-[#FD4322]/40 transition-all duration-150 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0EB] border border-[#f8d1c6] flex items-center justify-center shrink-0 text-[#FD4322] mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-black text-[#FD4322] bg-[#FFF0EB] border border-[#f8d1c6] px-2 py-0.5 rounded-md">
                          {item.step}
                        </span>
                        <h4 className="text-[15px] font-black text-[#14243D]">
                          {item.title}
                        </h4>
                      </div>
                      <span className="font-mono text-xs font-extrabold text-[#5A6B82]/60">
                        {item.num}
                      </span>
                    </div>

                    <p className="text-[13px] text-[#5A6B82] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* Supporting Statement & CTA */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-4">
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6B82] font-medium leading-relaxed">
            Keep your verified achievements readily accessible on your mobile device without relying on physical documents.
          </p>

          <div className="flex flex-col items-center gap-3 w-full sm:w-auto pt-2">
            <a
              href="#credential-wallet"
              className="w-full sm:w-auto min-w-[260px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#FD4322] hover:bg-[#E03719] text-white font-bold px-7 py-3.5 text-[14px] shadow-[0_8px_20px_rgba(253,67,34,0.22)] transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
            >
              <span>Explore Credential Wallet</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.sparkrex.credentialwallet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[260px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#DBE6F1] bg-white hover:bg-[#FFF5F0] hover:border-[#FD4322]/40 text-[#14243D] hover:text-[#FD4322] font-bold px-7 py-3.5 text-[14px] shadow-2xs transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
            >
              <span>Download Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
