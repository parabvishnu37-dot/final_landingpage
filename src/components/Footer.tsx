import React from 'react';

export const Footer: React.FC = () => {
  const navigation = {
    platform: [
      { name: 'Profile', href: '#profile' },
      { name: 'Skills', href: '#skill-match' },
      { name: 'Opportunities', href: '#opportunities' },
      { name: 'Career Pathways', href: '#career-pathways' },
      { name: 'Credentials', href: '#credentials' },
      { name: 'Skill Match', href: '#job-search-skill-match' },
    ],
    resources: [
      { name: 'Resume', href: '#resume' },
      { name: 'Credential Wallet', href: '#credential-wallet' },
      { name: 'Community', href: '#social-platform' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-white border-t border-[#E3EAF1] text-[#14243D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Left Column: Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#top" className="inline-block transition-opacity hover:opacity-90" aria-label="SOLO home">
              <img
                src="/solo-assets/images/solo.png"
                alt="SOLO"
                className="h-8 w-auto object-contain object-left"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/solo-logo.svg';
                }}
              />
            </a>

            <p className="text-[14px] text-[#5A6B82] leading-relaxed max-w-sm">
              Skills, Opportunities, Learning and Outcome
            </p>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#14243D] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[#5A6B82] hover:text-[#FD4322] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#14243D] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[#5A6B82] hover:text-[#FD4322] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#14243D] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[#5A6B82] hover:text-[#FD4322] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-[#EEF2F6] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#64748B]">
          <div>
            &copy; 2026 SOLO Network. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-[#64748B] hover:text-[#FD4322] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-[#64748B] hover:text-[#FD4322] transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
