import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3EAF1] bg-white/95 backdrop-blur-md shadow-[0_1px_6px_rgba(20,36,61,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
        {/* Left: Actual SOLO Logo */}
        <a href="#top" className="flex items-center gap-2 transition-opacity hover:opacity-90" aria-label="SOLO home">
          <img
            src="/solo-assets/images/solo.png"
            alt="SOLO"
            className="h-8 w-auto object-contain object-left"
            onError={(e) => {
              // fallback to svg/png if asset fails
              (e.currentTarget as HTMLImageElement).src = '/solo-logo.svg';
            }}
          />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-bold text-[#14243D] hover:text-[#FD4322] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Get Started CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.thesolo.network/signin"
            className="btn-primary-solo inline-flex h-10 items-center justify-center gap-1.5 rounded-xl px-5 text-[13px] font-bold text-white"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#14243D] hover:bg-[#F4F7FA] md:hidden transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-[#E3EAF1] bg-white px-6 py-5 shadow-lg md:hidden animate-fadeIn">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3.5 py-2.5 text-[14px] font-bold text-[#14243D] hover:bg-[#F4F7FA] hover:text-[#FD4322] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#E3EAF1]">
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="btn-primary-solo flex h-11 items-center justify-center gap-2 rounded-xl text-[13px] font-bold text-white"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};