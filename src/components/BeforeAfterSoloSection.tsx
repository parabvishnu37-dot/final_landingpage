import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Trophy, 
  Compass, 
  GitBranch, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface ElementItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  beforeTag: string;
  afterTag: string;
  iconColor: string;
  iconBg: string;
  before: {
    desktopX: number;
    desktopY: number;
    mobileX: number;
    mobileY: number;
    rotate: number;
  };
  after: {
    desktopX: number;
    desktopY: number;
    mobileX: number;
    mobileY: number;
    rotate: number;
  };
}

const ELEMENT_ITEMS: ElementItem[] = [
  {
    id: 'certificates',
    icon: Award,
    label: 'Certificates',
    title: 'AWS Certified',
    beforeTag: 'Local file',
    afterTag: 'Issuer Signed',
    iconColor: '#DC2626',
    iconBg: '#FEF2F2',
    before: { desktopX: 42, desktopY: 6, mobileX: 38, mobileY: 7, rotate: -4 },
    after: { desktopX: 50, desktopY: 13, mobileX: 50, mobileY: 13, rotate: 0 },
  },
  {
    id: 'skills',
    icon: Code2,
    label: 'Skills',
    title: 'React, Python, SQL',
    beforeTag: 'Static doc',
    afterTag: 'Verified Skills',
    iconColor: '#EA580C',
    iconBg: '#FFF7ED',
    before: { desktopX: 86, desktopY: 11, mobileX: 79, mobileY: 16, rotate: 5 },
    after: { desktopX: 79, desktopY: 24, mobileX: 74, mobileY: 26, rotate: 0 },
  },
  {
    id: 'projects',
    icon: FolderGit2,
    label: 'Projects',
    title: 'Career Assistant',
    beforeTag: 'Unlinked repo',
    afterTag: 'Portfolio Proof',
    iconColor: '#16A34A',
    iconBg: '#F0FDF4',
    before: { desktopX: 90, desktopY: 52, mobileX: 82, mobileY: 52, rotate: -3 },
    after: { desktopX: 83, desktopY: 50, mobileX: 77, mobileY: 50, rotate: 0 },
  },
  {
    id: 'interests',
    icon: Compass,
    label: 'Interests',
    title: 'AI & UI/UX',
    beforeTag: 'Unmatched',
    afterTag: 'Role Direction',
    iconColor: '#0D9488',
    iconBg: '#F0FDFA',
    before: { desktopX: 84, desktopY: 89, mobileX: 78, mobileY: 87, rotate: 4 },
    after: { desktopX: 79, desktopY: 76, mobileX: 74, mobileY: 74, rotate: 0 },
  },
  {
    id: 'achievements',
    icon: Trophy,
    label: 'Achievements',
    title: '1st Hackathon',
    beforeTag: 'Unshared win',
    afterTag: 'Recognized',
    iconColor: '#D97706',
    iconBg: '#FFFBEB',
    before: { desktopX: 44, desktopY: 94, mobileX: 42, mobileY: 93, rotate: -3 },
    after: { desktopX: 50, desktopY: 87, mobileX: 50, mobileY: 87, rotate: 0 },
  },
  {
    id: 'github',
    icon: GitBranch,
    label: 'GitHub',
    title: '124 Contribs',
    beforeTag: 'External link',
    afterTag: 'Code Verified',
    iconColor: '#0F172A',
    iconBg: '#F8FAFC',
    before: { desktopX: 13, desktopY: 88, mobileX: 19, mobileY: 87, rotate: 4 },
    after: { desktopX: 21, desktopY: 76, mobileX: 26, mobileY: 74, rotate: 0 },
  },
  {
    id: 'experience',
    icon: Briefcase,
    label: 'Experience',
    title: 'Web Dev Intern',
    beforeTag: 'Resume bullet',
    afterTag: 'Role Evidence',
    iconColor: '#7C3AED',
    iconBg: '#F5F3FF',
    before: { desktopX: 9, desktopY: 46, mobileX: 17, mobileY: 52, rotate: -5 },
    after: { desktopX: 17, desktopY: 50, mobileX: 23, mobileY: 50, rotate: 0 },
  },
  {
    id: 'education',
    icon: GraduationCap,
    label: 'Education',
    title: 'B.S. Comp Sci',
    beforeTag: 'PDF transcript',
    afterTag: 'Degree Proof',
    iconColor: '#2563EB',
    iconBg: '#EFF6FF',
    before: { desktopX: 13, desktopY: 10, mobileX: 19, mobileY: 16, rotate: 3 },
    after: { desktopX: 21, desktopY: 24, mobileX: 26, mobileY: 26, rotate: 0 },
  },
];

export const BeforeAfterSoloSection: React.FC = () => {
  const [isAfter, setIsAfter] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Responsive mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Motion preference detection
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <section 
      id="before-after" 
      className="relative bg-[#FFF9F6] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>THE SOLO DIFFERENCE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Your career shouldn't live in <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">scattered pieces.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            {isAfter 
              ? 'With SOLO, your skills, proof, and career direction are organized into one verified, connected ecosystem.'
              : 'Skills, projects, and achievements are scattered across documents, repos, and folders. Experience the transformation below.'}
          </p>
        </div>

        {/* ======================================================== */}
        {/* Interactive Before → After Transformation Arena          */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-[1080px] mx-auto min-h-[580px] sm:min-h-[620px] lg:min-h-[640px] rounded-[24px] sm:rounded-[32px] border border-[#E3EAF1] bg-white/85 shadow-[0_16px_50px_rgba(20,36,61,0.05)] overflow-hidden p-2 sm:p-4 select-none">
          
          {/* Subtle Background Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-700"
            style={{
              backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Subtle Ambient Glow in Connected State */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
              isAfter ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(253, 67, 34, 0.08) 0%, transparent 60%)',
            }}
          />

          {/* SVG Connector Lines (Appear smoothly on transition) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="soloLineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FD4322" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {ELEMENT_ITEMS.map((item) => {
              const coords = isAfter ? item.after : item.before;
              const posX = isMobile ? coords.mobileX : coords.desktopX;
              const posY = isMobile ? coords.mobileY : coords.desktopY;

              return (
                <g key={`line-${item.id}`}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${posX}%`}
                    y2={`${posY}%`}
                    stroke="url(#soloLineGlow)"
                    strokeWidth={isMobile ? '1.25' : '1.5'}
                    strokeDasharray="4 3"
                    className={`transition-all duration-700 ease-out ${
                      isAfter ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <circle
                    cx={`${posX}%`}
                    cy={`${posY}%`}
                    r={isMobile ? '2.5' : '3'}
                    fill="#FD4322"
                    className={`transition-all duration-700 ease-out ${
                      isAfter ? 'opacity-70' : 'opacity-0'
                    }`}
                  />
                </g>
              );
            })}
          </svg>

          {/* ======================================================== */}
          {/* Central SOLO Hub / Interactive Button                    */}
          {/* ======================================================== */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center">
            
            {!isAfter ? (
              /* BEFORE STATE: Prominent "USE SOLO →" Button */
              <div className="flex flex-col items-center justify-center animate-fadeIn">
                {/* State Indicator */}
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
                  <span>BEFORE SOLO · SCATTERED</span>
                </div>

                {/* Prominent Action Button */}
                <button
                  onClick={() => setIsAfter(true)}
                  className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#FD4322] hover:bg-[#e83b1c] text-white px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold shadow-[0_10px_28px_rgba(253,67,34,0.35)] hover:shadow-[0_14px_36px_rgba(253,67,34,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer focus:outline-hidden"
                  aria-label="Connect information using SOLO"
                >
                  <span>USE SOLO</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Helpful Hint */}
                <p className="mt-3 text-[11.5px] sm:text-xs text-[#5A6B82] font-medium">
                  Click to connect your scattered pieces
                </p>
              </div>
            ) : (
              /* AFTER STATE: Connected Profile Hub & State Label */
              <div className="flex flex-col items-center justify-center animate-fadeIn max-w-[280px] sm:max-w-[340px]">
                {/* State Label: "AFTER SOLO" */}
                <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FD4322] shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#FD4322]" />
                  <span>AFTER SOLO</span>
                </div>

                {/* Central SOLO Profile Hub Card */}
                <div className="w-full rounded-2xl border-2 border-[#FFE0D6] bg-white p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(253,67,34,0.12)]">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FD4322] text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-xs shrink-0">
                      AJ
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-[14px] font-black text-[#14243D]">Alex Johnson</span>
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16A34A]" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#FD4322] block">
                        Connected SOLO Profile
                      </span>
                    </div>
                  </div>
                  
                  {/* Supporting Message */}
                  <div className="mt-2 pt-2 border-t border-[#F1F5F9]">
                    <p className="text-[11.5px] sm:text-[12.5px] font-bold text-[#14243D] leading-tight">
                      “Everything connected. Everything working together.”
                    </p>
                  </div>
                </div>

                {/* Reset / Replay Button */}
                <button
                  onClick={() => setIsAfter(false)}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#5A6B82] hover:text-[#FD4322] transition-colors cursor-pointer bg-white px-3 py-1 rounded-full border border-[#E2E8F0] shadow-2xs focus:outline-hidden"
                  title="View scattered before state"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>View Scattered</span>
                </button>
              </div>
            )}

          </div>

          {/* ======================================================== */}
          {/* 8 Information Fragment Cards (Scattered → Connected)     */}
          {/* ======================================================== */}
          {ELEMENT_ITEMS.map((item) => {
            const IconComp = item.icon;
            const coords = isAfter ? item.after : item.before;
            const posX = isMobile ? coords.mobileX : coords.desktopX;
            const posY = isMobile ? coords.mobileY : coords.desktopY;
            const rotateDeg = isAfter || prefersReducedMotion ? 0 : coords.rotate;

            return (
              <div
                key={item.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-700 ease-out ${
                  prefersReducedMotion ? 'transition-none' : ''
                }`}
                style={{
                  left: `${posX}%`,
                  top: `${posY}%`,
                  transform: `translate(-50%, -50%) rotate(${rotateDeg}deg)`,
                }}
              >
                <div
                  className={`w-auto min-w-[95px] max-w-[115px] sm:min-w-[130px] sm:max-w-[155px] lg:max-w-[165px] rounded-xl sm:rounded-2xl p-2 sm:p-3 transition-all duration-700 ${
                    isAfter
                      ? 'bg-white border-2 border-[#FFE0D6] shadow-[0_6px_20px_rgba(253,67,34,0.08)]'
                      : 'bg-white/95 border border-[#E2E8F0] shadow-2xs'
                  }`}
                >
                  {/* Card Header: Icon & Category Label */}
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <div 
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                    >
                      <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-wider text-[#64748B] truncate">
                      {item.label}
                    </span>
                  </div>

                  {/* Card Title */}
                  <p className="text-[10.5px] sm:text-[12px] font-bold text-[#14243D] leading-tight truncate mb-1">
                    {item.title}
                  </p>

                  {/* Status Badge (Morphs from unlinked to verified) */}
                  <div className="flex items-center">
                    <span 
                      className={`text-[8.5px] sm:text-[9.5px] font-semibold px-1.5 py-0.5 rounded transition-colors duration-500 truncate ${
                        isAfter
                          ? 'bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]'
                          : 'bg-[#F1F5F9] text-[#94A3B8] border border-[#E2E8F0]'
                      }`}
                    >
                      {isAfter ? item.afterTag : item.beforeTag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSoloSection;
