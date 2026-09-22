import { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Tag
} from 'lucide-react';

export interface OpportunityCardData {
  id: string;
  title: string;
  provider: string;
  skillsCount: string;
  category: string;
  postedTime: string;
  mode: string;
  duration: string;
  cost: string;
}

// Stylized illustrated avatar component matching SOLO screenshot
export const SoloAvatar: React.FC = () => (
  <div className="w-12 h-12 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] flex items-center justify-center flex-shrink-0 shadow-2xs overflow-hidden">
    <svg viewBox="0 0 44 44" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="22" cy="22" r="21" fill="#FFF3EB" />
      {/* Hair back */}
      <path 
        d="M13 19C13 13 17 9 22 9C27 9 31 13 31 19C31 22 29 23 28 23C26 23 26 17 22 17C18 17 18 23 16 23C14 23 13 22 13 19Z" 
        fill="#C07119" 
      />
      {/* Face & Ears */}
      <circle cx="22" cy="20" r="7.5" fill="#FCD5A3" />
      <circle cx="14" cy="20" r="2" fill="#FCD5A3" />
      <circle cx="30" cy="20" r="2" fill="#FCD5A3" />
      {/* Hair front bangs */}
      <path 
        d="M14 19C16 14 18 11 22 11C26 11 28 14 30 19C28 17.5 26 15.5 22 15.5C18 15.5 16 17.5 14 19Z" 
        fill="#9C5204" 
      />
      {/* Suit / Orange Blazer */}
      <path 
        d="M11 40C11 31 16 27.5 22 27.5C28 27.5 33 31 33 40" 
        fill="#FD4322" 
      />
      {/* Inner White Shirt */}
      <path d="M19.5 27.5L22 32L24.5 27.5" fill="#FFFFFF" />
      {/* Dark Tie */}
      <path d="M21.2 31L22.8 31L23.2 37L20.8 37Z" fill="#14243D" />
    </svg>
  </div>
);

// Reusable Opportunity Card Component matching exact SOLO Opportunities UI
export const OpportunityCard: React.FC<{ item: OpportunityCardData; className?: string }> = ({ 
  item, 
  className = '' 
}) => (
  <div
    className={`rounded-[16px] border border-[#E5E7EB] bg-white overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:border-[#FD4322]/30 transition-all duration-200 ${className}`}
  >
    {/* Top Content Container */}
    <div className="p-4 sm:p-5">
      {/* Avatar & Title Row */}
      <div className="flex items-start gap-3.5 mb-3.5">
        <SoloAvatar />
        <div className="overflow-hidden">
          <h4 
            className="text-[15px] font-bold text-[#1F2937] leading-tight truncate" 
            title={item.title}
          >
            {item.title}
          </h4>
          <p className="text-[12.5px] font-normal text-[#6B7280] truncate mt-0.5">
            {item.provider}
          </p>
        </div>
      </div>

      {/* Badges Row (3 Skills | Course | Posted 3 Days Ago) */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {/* Skills Count Badge */}
        <span className="rounded-[6px] bg-[#FFF0EB] px-2 py-0.5 text-[11px] font-semibold text-[#FD4322]">
          {item.skillsCount}
        </span>

        {/* Category Badge */}
        <span className="rounded-[6px] bg-[#FF7A00] px-2 py-0.5 text-[11px] font-semibold text-white">
          {item.category}
        </span>

        {/* Posted Time Badge */}
        <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#E5E7EB] bg-white px-2 py-0.5 text-[11px] font-medium text-[#6B7280]">
          <Clock className="w-3 h-3 text-[#6B7280]" />
          <span>{item.postedTime}</span>
        </span>
      </div>

      {/* Metadata Row (📍 Virtual · 💼 1 Hour · 🏷️ Free) */}
      <div className="flex items-center gap-3.5 text-[12px] text-[#4B5563]">
        <span className="inline-flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#6B7280]" />
          <span>{item.mode}</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <img 
            src="/solo-assets/icons/SVGRepo_iconCarrier.svg" 
            alt="Role" 
            className="w-3.5 h-3.5 object-contain opacity-70" 
          />
          <span>{item.duration}</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <Tag className="w-3.5 h-3.5 text-[#6B7280]" />
          <span>{item.cost}</span>
        </span>
      </div>
    </div>

    {/* Bottom Gray Panel with "View more" Button */}
    <div className="bg-[#F9FAFB] border-t border-[#F3F4F6] px-4 sm:px-5 py-3 flex items-center justify-start">
      <button
        type="button"
        className="rounded-lg border border-[#FFE0D6] bg-white hover:bg-[#FFF5F0] text-[#FD4322] px-5 py-1.5 text-[12.5px] font-bold transition-colors cursor-pointer shadow-2xs"
      >
        View more
      </button>
    </div>
  </div>
);

export const opportunitiesByCategory: Record<string, OpportunityCardData[]> = {
  Courses: [
    {
      id: 'c1',
      title: 'HR Analytics',
      provider: 'Infosys Springboard',
      skillsCount: '3 Skills',
      category: 'Course',
      postedTime: 'Posted 3 Days Ago',
      mode: 'Virtual',
      duration: '1 Hour',
      cost: 'Free',
    },
    {
      id: 'c2',
      title: 'HR Professional Skills',
      provider: 'The Open University',
      skillsCount: '2 Skills',
      category: 'Course',
      postedTime: 'Posted 3 Days Ago',
      mode: 'Virtual',
      duration: '9 Hours',
      cost: 'Free',
    },
    {
      id: 'c3',
      title: 'HR Strategy',
      provider: 'Infosys Springboard',
      skillsCount: '2 Skills',
      category: 'Course',
      postedTime: 'Posted 3 Days Ago',
      mode: 'Virtual',
      duration: '1 Hour',
      cost: 'Free',
    },
  ],
  Internships: [
    {
      id: 'i1',
      title: 'AutoCAD Designer For Printing',
      provider: 'Deluxe Digital Advertising',
      skillsCount: '4 Skills',
      category: 'Internship',
      postedTime: 'Posted 2 Days Ago',
      mode: 'Onsite',
      duration: '3 Months',
      cost: 'Unpaid',
    },
    {
      id: 'i2',
      title: 'Motion Graphics Designer',
      provider: 'Kodework',
      skillsCount: '10 Skills',
      category: 'Internship',
      postedTime: 'Posted 1 Day Ago',
      mode: 'Onsite',
      duration: '6 Months',
      cost: 'Stipend',
    },
    {
      id: 'i3',
      title: 'Creative Designer - Graphics...',
      provider: 'Team Inertia Technologies',
      skillsCount: '13 Skills',
      category: 'Internship',
      postedTime: 'Posted 4 Days Ago',
      mode: 'Onsite',
      duration: '3 Months',
      cost: 'Unpaid',
    },
  ],
  'Live Projects': [
    {
      id: 'lp1',
      title: 'Full-Stack React Platform',
      provider: 'Techstars Partner',
      skillsCount: '8 Skills',
      category: 'Live Project',
      postedTime: 'Posted 5 Days Ago',
      mode: 'Virtual',
      duration: '4 Weeks',
      cost: 'Hands-on',
    },
    {
      id: 'lp2',
      title: 'AI Prompt Engineering System',
      provider: 'SOLO Labs',
      skillsCount: '6 Skills',
      category: 'Live Project',
      postedTime: 'Posted 2 Days Ago',
      mode: 'Virtual',
      duration: '3 Weeks',
      cost: 'Hands-on',
    },
    {
      id: 'lp3',
      title: 'Design System Component Library',
      provider: 'Kodework',
      skillsCount: '5 Skills',
      category: 'Live Project',
      postedTime: 'Posted 1 Week Ago',
      mode: 'Virtual',
      duration: '2 Weeks',
      cost: 'Hands-on',
    },
  ],
  Hackathons: [
    {
      id: 'h1',
      title: 'AI Innovation Challenge 2026',
      provider: 'Global Track',
      skillsCount: '6 Skills',
      category: 'Hackathon',
      postedTime: 'Posted 3 Days Ago',
      mode: 'Virtual',
      duration: '48 Hours',
      cost: 'Free Entry',
    },
    {
      id: 'h2',
      title: 'Build for Students Hackathon',
      provider: 'University Track',
      skillsCount: '4 Skills',
      category: 'Hackathon',
      postedTime: 'Posted 5 Days Ago',
      mode: 'Hybrid',
      duration: '36 Hours',
      cost: 'Free Entry',
    },
    {
      id: 'h3',
      title: 'ClimateTech Impact Sprint',
      provider: 'Sustainability Labs',
      skillsCount: '5 Skills',
      category: 'Hackathon',
      postedTime: 'Posted 1 Week Ago',
      mode: 'Virtual',
      duration: '24 Hours',
      cost: 'Free Entry',
    },
  ],
  Jobs: [
    {
      id: 'j1',
      title: 'Junior Frontend Developer',
      provider: 'Spark Technologies',
      skillsCount: '6 Skills',
      category: 'Job',
      postedTime: 'Posted 1 Day Ago',
      mode: 'Hybrid',
      duration: 'Full-Time',
      cost: 'Competitive',
    },
    {
      id: 'j2',
      title: 'Associate UI/UX Designer',
      provider: 'Nova Labs',
      skillsCount: '5 Skills',
      category: 'Job',
      postedTime: 'Posted 3 Days Ago',
      mode: 'Remote',
      duration: 'Full-Time',
      cost: 'Competitive',
    },
    {
      id: 'j3',
      title: 'AI Product Operations Specialist',
      provider: 'SOLO Partner Network',
      skillsCount: '7 Skills',
      category: 'Job',
      postedTime: 'Posted 4 Days Ago',
      mode: 'Onsite',
      duration: 'Full-Time',
      cost: 'Competitive',
    },
  ],
  'Career Pathways': [
    {
      id: 'cp1',
      title: 'Product Design & AI Systems',
      provider: 'SOLO Academy',
      skillsCount: '12 Skills',
      category: 'Pathway',
      postedTime: 'Posted 2 Weeks Ago',
      mode: 'Guided',
      duration: '4 Months',
      cost: 'Verified',
    },
    {
      id: 'cp2',
      title: 'Full-Stack Web Architecture',
      provider: 'Open Tech Guild',
      skillsCount: '15 Skills',
      category: 'Pathway',
      postedTime: 'Posted 1 Month Ago',
      mode: 'Guided',
      duration: '6 Months',
      cost: 'Verified',
    },
    {
      id: 'cp3',
      title: 'AI Engineering & RAG Foundations',
      provider: 'SOLO Partner Network',
      skillsCount: '10 Skills',
      category: 'Pathway',
      postedTime: 'Posted 3 Weeks Ago',
      mode: 'Guided',
      duration: '3 Months',
      cost: 'Verified',
    },
  ],
  Credentials: [
    {
      id: 'cr1',
      title: 'ReactJS Professional Certification',
      provider: 'SPARK Technologies',
      skillsCount: '8 Skills',
      category: 'Credential',
      postedTime: 'Posted 1 Week Ago',
      mode: 'Virtual',
      duration: 'Exam-based',
      cost: 'Verified Proof',
    },
    {
      id: 'cr2',
      title: 'AI Product Architecture',
      provider: 'SOLO Institute',
      skillsCount: '6 Skills',
      category: 'Credential',
      postedTime: 'Posted 2 Weeks Ago',
      mode: 'Virtual',
      duration: 'Project-based',
      cost: 'Verified Proof',
    },
    {
      id: 'cr3',
      title: 'Design Systems Foundations',
      provider: 'Nova Labs',
      skillsCount: '5 Skills',
      category: 'Credential',
      postedTime: 'Posted 3 Weeks Ago',
      mode: 'Virtual',
      duration: 'Hands-on',
      cost: 'Verified Proof',
    },
  ],
};

export const OpportunitiesSection: React.FC = () => {
  const categories = [
    'Internships',
    'Courses',
    'Live Projects',
    'Hackathons',
    'Jobs',
    'Career Pathways',
    'Credentials',
  ];

  const [activeCategory, setActiveCategory] = useState<string>('Courses');
  const [opportunityName, setOpportunityName] = useState<string>('');

  const rawCards = opportunitiesByCategory[activeCategory] || opportunitiesByCategory.Courses;
  const currentCards = opportunityName.trim()
    ? rawCards.filter((c) =>
        c.title.toLowerCase().includes(opportunityName.toLowerCase()) ||
        c.provider.toLowerCase().includes(opportunityName.toLowerCase())
      )
    : rawCards;

  return (
    <section 
      id="opportunities"
      className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
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
            The next opportunity is <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">closer than you think.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Explore courses, internships, projects, hackathons, jobs and career pathways—all in one place.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main Product Frame (Faithful reproduction of actual SOLO UI) */}
        {/* ======================================================== */}
        <div className="relative max-w-[1140px] mx-auto">

          {/* ======================================================== */}
          {/* Personalized Recommendation Floating Card */}
          {/* ======================================================== */}
          <div className="hidden lg:flex absolute -bottom-6 -right-6 z-30 animate-float-slow">
            <div className="solo-floating-card p-4 bg-white max-w-[280px] shadow-[0_16px_36px_-6px_rgba(20,36,61,0.14),0_0_0_1px_rgba(227,234,241,0.9)]">
              <div className="flex items-center gap-1.5 mb-1 text-[#FD4322]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider">
                  RECOMMENDED FOR YOU
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] mb-2.5">
                Based on your skills &amp; interests
              </p>

              <h4 className="text-[14px] font-black text-[#14243D] mb-1.5">
                AI Product Development
              </h4>

              <div className="flex flex-wrap gap-1 mb-3">
                <span className="rounded bg-[#F7F9FC] border border-[#E3EAF1] px-1.5 py-0.5 text-[9px] font-bold text-[#14243D]">
                  AI
                </span>
                <span className="rounded bg-[#F7F9FC] border border-[#E3EAF1] px-1.5 py-0.5 text-[9px] font-bold text-[#14243D]">
                  Product
                </span>
                <span className="rounded bg-[#F7F9FC] border border-[#E3EAF1] px-1.5 py-0.5 text-[9px] font-bold text-[#14243D]">
                  React
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf8f1] border border-[#c9ead9] px-2 py-0.5 text-[10px] font-extrabold text-[#16a36a]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>92% Profile Match</span>
                </span>
                <a 
                  href="#opportunities"
                  className="text-xs font-bold text-[#FD4322] flex items-center gap-0.5 hover:underline"
                >
                  <span>View</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Product Showcase Container */}
          <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-6 lg:p-8 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">

            {/* ======================================================== */}
            {/* Real SOLO UI: Category Navigation Bar with Chevrons */}
            {/* ======================================================== */}
            <div className="relative border-b border-[#E5E7EB] mb-6">
              <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none pb-0.5">
                {/* Left Chevron */}
                <button 
                  type="button" 
                  aria-label="Scroll left"
                  className="p-2 text-[#9CA3AF] hover:text-[#4B5563] transition-colors flex-shrink-0 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Categories */}
                <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none px-1">
                  {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 sm:px-6 py-2.5 text-[13px] sm:text-[14px] font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer rounded-t-xl ${
                          isActive
                            ? 'bg-[#FFF0EB] text-[#FD4322] font-bold shadow-xs'
                            : 'text-[#4B5563] hover:text-[#111827] hover:bg-slate-50'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>

                {/* Right Chevron */}
                <button 
                  type="button" 
                  aria-label="Scroll right"
                  className="p-2 text-[#9CA3AF] hover:text-[#4B5563] transition-colors flex-shrink-0 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ======================================================== */}
            {/* Real SOLO UI: 3x3 Filter Controls Grid */}
            {/* ======================================================== */}
            <div className="mb-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 text-[13px]">
                
                {/* Row 1, Col 1: Opportunity Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Opportunity Name"
                    value={opportunityName}
                    onChange={(e) => setOpportunityName(e.target.value)}
                    className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#1F2937] placeholder-[#6B7280] bg-white focus:outline-none focus:border-[#FD4322] transition-colors"
                  />
                </div>

                {/* Row 1, Col 2: Filter by category (Floating Label) */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-3 bg-white px-1.5 text-[11px] font-medium text-[#6B7280] pointer-events-none z-10">
                    Filter by category
                  </label>
                  <div className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#1F2937] bg-white flex items-center justify-between cursor-pointer hover:border-[#9CA3AF] transition-colors">
                    <span className="font-normal text-[#1F2937]">All</span>
                    <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                  </div>
                </div>

                {/* Row 1, Col 3: Filter by cost (Floating Label) */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-3 bg-white px-1.5 text-[11px] font-medium text-[#6B7280] pointer-events-none z-10">
                    Filter by cost
                  </label>
                  <div className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#1F2937] bg-white flex items-center justify-between cursor-pointer hover:border-[#9CA3AF] transition-colors">
                    <span className="font-normal text-[#1F2937]">All</span>
                    <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                  </div>
                </div>

                {/* Row 2, Col 1: Filter by mode (Floating Label) */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-3 bg-white px-1.5 text-[11px] font-medium text-[#6B7280] pointer-events-none z-10">
                    Filter by mode
                  </label>
                  <div className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#1F2937] bg-white flex items-center justify-between cursor-pointer hover:border-[#9CA3AF] transition-colors">
                    <span className="font-normal text-[#1F2937]">All</span>
                    <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                  </div>
                </div>

                {/* Row 2, Col 2: Select Country Dropdown */}
                <div className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#6B7280] bg-white flex items-center justify-between cursor-pointer hover:border-[#9CA3AF] transition-colors">
                  <span>Select Country</span>
                  <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                </div>

                {/* Row 2, Col 3: Select State Dropdown */}
                <div className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#6B7280] bg-white flex items-center justify-between cursor-pointer hover:border-[#9CA3AF] transition-colors">
                  <span>Select State</span>
                  <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                </div>

                {/* Row 3, Col 1: Select Skills Dropdown */}
                <div className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#6B7280] bg-white flex items-center justify-between cursor-pointer hover:border-[#9CA3AF] transition-colors">
                  <span>Select Skills</span>
                  <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                </div>

                {/* Row 3, Col 2: Select Institution/Employer Dropdown */}
                <div className="w-full h-[46px] px-3.5 rounded-xl border border-[#D1D5DB] text-[13px] text-[#6B7280] bg-white flex items-center justify-between cursor-pointer hover:border-[#9CA3AF] transition-colors">
                  <span>Select Institution/Employer</span>
                  <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                </div>

                {/* Row 3, Col 3: Search & Clear Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="flex-1 h-[46px] rounded-xl bg-[#FD4322] hover:bg-[#E03719] text-white font-bold text-[14px] shadow-sm transition-all duration-150 cursor-pointer active:scale-[0.99]"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpportunityName('')}
                    className="flex-1 h-[46px] rounded-xl bg-white border border-[#FD4322]/35 hover:bg-[#FFF5F0] text-[#FD4322] font-bold text-[14px] transition-all duration-150 cursor-pointer active:scale-[0.99]"
                  >
                    Clear
                  </button>
                </div>

              </div>
            </div>

            {/* ======================================================== */}
            {/* Real SOLO UI: Opportunity Cards Row (Faithful to Screenshot) */}
            {/* ======================================================== */}
            <div className="min-h-[220px]">
              {currentCards.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-[#F9FAFB] rounded-2xl border border-dashed border-[#D1D5DB]">
                  <img 
                    src="/solo-assets/images/NoRecords.svg" 
                    alt="No opportunities found" 
                    className="w-24 h-24 mb-3 opacity-90" 
                  />
                  <h4 className="text-base font-bold text-[#14243D]">No opportunities found</h4>
                  <p className="text-[13px] text-[#6B7280] max-w-sm mt-1 mb-4">
                    No results matched your search &ldquo;{opportunityName}&rdquo;. Try clearing filters to see all available opportunities.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpportunityName('')}
                    className="px-4 py-2 rounded-xl bg-[#FD4322] text-white text-[13px] font-bold shadow-xs hover:bg-[#e03719] transition-colors cursor-pointer"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div 
                  key={activeCategory}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-fadeIn"
                >
                  {currentCards.map((item) => (
                    <OpportunityCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Status / Engine Footer */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#6B7280] gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16a36a]" />
                <span>Showing live opportunities for <strong className="text-[#1F2937] font-semibold">{activeCategory}</strong> · Verified SOLO network</span>
              </span>
              <span className="font-semibold text-[#1F2937]">
                Powered by SOLO Opportunity Engine
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
