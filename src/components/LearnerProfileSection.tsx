import React, { useState } from 'react';
import { 
  Pencil, 
  Camera, 
  Sparkles, 
  Upload, 
  Bookmark, 
  Globe, 
  Plus, 
  Award
} from 'lucide-react';

interface CourseCardData {
  id: string;
  title: string;
  displayTitle: string;
  issuer: string;
  skillsCount: string;
  verified: boolean;
  badgeRingColor: string;
  badgeBgColor: string;
  badgeTitle: string;
  badgeSub: string;
  description: string;
}

export const LearnerProfileSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Courses');
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});

  const toggleDescription = (id: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Category navigation tabs matching Screenshot 2
  const categoryRows = {
    row1: [
      { name: 'Education', count: 2 },
      { name: 'Work Experience', count: null },
      { name: 'Internships', count: null },
      { name: 'Courses', count: 5 },
      { name: 'Hackathons', count: null },
    ],
    row2: [
      { name: 'Live Projects', count: null },
      { name: 'Volunteering', count: null },
      { name: 'Other Achievements', count: null },
      { name: 'Posts', count: null },
      { name: 'Endorsements', count: null },
    ],
  };

  // Skills list matching Screenshot 1
  const acquiredSkills = [
    'Identify AI Concepts',
    'Artificial Intelligence (AI) Developments Research',
    'Full-Stack Web Development',
    'Web Operating Systems',
    'Tools/Frameworks',
    '31 More Skills',
  ];

  // Course cards data matching Screenshot 2
  const courses: CourseCardData[] = [
    {
      id: 'course-1',
      title: 'Web Development Basics',
      displayTitle: 'Web Development Ba...',
      issuer: 'IBM SkillsBuild',
      skillsCount: '12 Skills',
      verified: true,
      badgeRingColor: '#EAB308', // Amber/Yellow
      badgeBgColor: '#FEF9C3',
      badgeTitle: 'Web Development Basics',
      badgeSub: 'Coursework',
      description: 'This course equips learners with foundational skills in computer functions, programming languages...',
    },
    {
      id: 'course-2',
      title: 'NextJS',
      displayTitle: 'NextJS',
      issuer: 'SPARK+',
      skillsCount: '8 Skills',
      verified: true,
      badgeRingColor: '#00A8FF', // Cyan/Sky
      badgeBgColor: '#E0F2FE',
      badgeTitle: 'NextJS',
      badgeSub: 'Coursework',
      description: 'Gain core skills in Next.js by building a fully functional demo web application. This course equi...',
    },
    {
      id: 'course-3',
      title: 'Learning Introduction in Artificial Intelligence',
      displayTitle: 'Learning Introduction...',
      issuer: 'IBM SkillsBuild',
      skillsCount: '4 Skills',
      verified: true,
      badgeRingColor: '#1E40AF', // Deep Blue
      badgeBgColor: '#DBEAFE',
      badgeTitle: 'Learning Introduction in Artificial Intelligence',
      badgeSub: 'Coursework',
      description: "What you'll learn After completing this course, you should be able to: Define artificial inte...",
    },
    {
      id: 'course-4',
      title: 'React Redux Toolkit',
      displayTitle: 'React Redux Toolkit',
      issuer: 'SPARK+',
      skillsCount: '6 Skills',
      verified: true,
      badgeRingColor: '#0284C7', // Sky Blue
      badgeBgColor: '#E0F2FE',
      badgeTitle: 'React Redux Toolkit',
      badgeSub: 'Coursework',
      description: 'Master modern state management with Redux Toolkit, create slices, async thunks, and integrate with React...',
    },
    {
      id: 'course-5',
      title: 'ReactJS',
      displayTitle: 'ReactJS',
      issuer: 'SPARK+',
      skillsCount: '8 Skills',
      verified: true,
      badgeRingColor: '#0EA5E9', // Light Blue
      badgeBgColor: '#E0F2FE',
      badgeTitle: 'ReactJS',
      badgeSub: 'Coursework',
      description: 'Build dynamic, component-driven web user interfaces with React hooks, props, and modern state architecture...',
    },
  ];

  return (
    <section 
      id="profile" 
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
            <span>YOUR CAREER, IN ONE PLACE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Your entire career story. <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">One profile.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Bring your education, skills, projects, experience and achievements together in one profile that grows with you.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Authentic SOLO Profile Container */}
        {/* ======================================================== */}
        <div className="max-w-[1180px] mx-auto">
          
          {/* -------------------------------------------------------- */}
          {/* 1. TOP ROW: About Card (Left) & Profile Cover Banner (Right) */}
          {/* -------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mb-5">
            
            {/* LEFT: About Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                {/* Header with Title and Pencil */}
                <div className="flex items-center justify-between pb-3 border-b border-[#F3F4F6] mb-4">
                  <h3 className="text-[17px] font-bold text-[#14243D]">About Vishnu</h3>
                  <button 
                    type="button" 
                    aria-label="Edit about section"
                    className="text-[#FD4322] hover:text-[#E03719] p-1 rounded-md hover:bg-[#FFF5F0] transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content Rows with small orange edit pencils */}
                <div className="space-y-3.5">
                  {/* Row 1: Git Badge & Pencil */}
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center bg-[#10B981] text-white text-[11px] font-mono font-black px-1.5 py-0.5 rounded shadow-2xs">
                        git
                      </span>
                    </div>
                    <button 
                      type="button" 
                      aria-label="Edit git profile"
                      className="text-[#FD4322] hover:text-[#E03719] p-1 rounded-md hover:bg-[#FFF5F0] transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Row 2: Location & Pencil */}
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[13.5px] font-medium text-[#4B5563]">
                      Goa, India
                    </span>
                    <button 
                      type="button" 
                      aria-label="Edit location"
                      className="text-[#FD4322] hover:text-[#E03719] p-1 rounded-md hover:bg-[#FFF5F0] transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Row 3: Additional detail & Pencil */}
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[13px] text-[#6B7280]">
                      Available for opportunities
                    </span>
                    <button 
                      type="button" 
                      aria-label="Edit status"
                      className="text-[#FD4322] hover:text-[#E03719] p-1 rounded-md hover:bg-[#FFF5F0] transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#F3F4F6] text-[11.5px] text-[#9CA3AF]">
                Profile verified by SOLO Network
              </div>
            </div>

            {/* RIGHT: Large Profile Cover / Header Banner */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-xs relative bg-gradient-to-r from-[#00A8FF] via-[#2563EB] to-[#581C87] p-5 sm:p-6 text-white flex flex-col justify-between min-h-[220px]">
              
              {/* Top Row: Username & Edit cover photo button */}
              <div className="flex items-center justify-between gap-3 mb-6">
                {/* User Handle with icon & pencil */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FD4322]" />
                  </div>
                  <span className="font-semibold text-white text-xs sm:text-[13px] tracking-wide">
                    @VishnuParab2221
                  </span>
                  <button 
                    type="button" 
                    aria-label="Edit username"
                    className="text-[#FD4322] bg-white/90 hover:bg-white p-1 rounded-md transition-colors shadow-2xs ml-0.5"
                  >
                    <Pencil className="w-2.5 h-2.5" />
                  </button>
                </div>

                {/* Edit cover photo button */}
                <button 
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 hover:bg-white text-[#1F2937] text-xs font-semibold px-3 py-1.5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Camera className="w-3.5 h-3.5 text-[#4B5563]" />
                  <span>Edit cover photo</span>
                </button>
              </div>

              {/* Bottom Row: Avatar, Name/Skills, and Stats */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
                
                {/* Left: Avatar + Identity */}
                <div className="flex items-center sm:items-end gap-3.5">
                  {/* Avatar with Camera badge */}
                  <div className="relative shrink-0">
                    <img 
                      src="/avatar.png" 
                      alt="Vishnu Parab" 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white shadow-md bg-white object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/solo-assets/images/Student.png';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white text-[#4B5563] shadow-xs flex items-center justify-center border border-[#E5E7EB]">
                      <Camera className="w-3 h-3 text-[#FD4322]" />
                    </div>
                  </div>

                  {/* Name and Tech stack line */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        Vishnu Parab
                      </h4>
                      <button 
                        type="button" 
                        aria-label="Edit name"
                        className="text-[#FD4322] bg-white/90 hover:bg-white p-1 rounded-md transition-colors shadow-2xs"
                      >
                        <Pencil className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-[13px] text-white/90 font-normal mt-0.5 max-w-md">
                      C, C++, JavaScript,HTML5, React.js,Node.js
                    </p>
                  </div>
                </div>

                {/* Right: Stats (Posts, Followers, Following) */}
                <div className="flex items-center justify-around sm:justify-end gap-6 sm:gap-7 border-t sm:border-t-0 border-white/20 pt-3 sm:pt-0">
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-black text-white leading-none">0</div>
                    <div className="text-[11px] font-medium text-white/80 mt-1">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-black text-white leading-none">0</div>
                    <div className="text-[11px] font-medium text-white/80 mt-1">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-black text-white leading-none">0</div>
                    <div className="text-[11px] font-medium text-white/80 mt-1">Following</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* 2. RESUME & PROFILE BAR (Screenshot 1) */}
          {/* -------------------------------------------------------- */}
          <div className="bg-[#FFF4EE] border border-[#FFE2D5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 shadow-xs">
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#14243D]">
                Resume &amp; profile
              </h4>
              <p className="text-xs sm:text-[13px] text-[#5A6B82] mt-0.5 font-normal">
                Build a resume from your profile or pull in details by uploading a file.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button 
                type="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FD4322] hover:bg-[#E03719] text-white font-bold text-xs sm:text-[13px] px-4 sm:px-5 py-2.5 shadow-[0_4px_14px_rgba(253,67,34,0.25)] transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Generate resume</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>

              <button 
                type="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] font-bold text-xs sm:text-[13px] px-4 sm:px-5 py-2.5 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] shadow-2xs"
              >
                <span>Import from resume</span>
                <Upload className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 3. ACQUIRED SKILLS CARD (Screenshot 1) */}
          {/* -------------------------------------------------------- */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-xs mb-5">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#14243D]">
                Acquired Skills
              </h4>
              <button 
                type="button" 
                aria-label="Edit acquired skills"
                className="text-[#FD4322] hover:text-[#E03719] p-1 rounded-md hover:bg-[#FFF5F0] transition-colors"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {acquiredSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-xs sm:text-[13px] font-medium text-[#374151] hover:border-[#CBD5E1] hover:bg-[#F9FAFB] transition-colors shadow-2xs cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 4. PROFILE ACTION ROW (Screenshot 1) */}
          {/* -------------------------------------------------------- */}
          <div className="flex items-center justify-start sm:justify-end gap-2.5 mb-8 flex-wrap">
            <button 
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] text-xs sm:text-[12.5px] font-semibold px-3.5 py-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#FD4322]" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Connect GitHub</span>
            </button>

            <button 
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] text-xs sm:text-[12.5px] font-semibold px-3.5 py-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <span>Verify Government ID</span>
            </button>

            <button 
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] text-xs sm:text-[12.5px] font-semibold px-3.5 py-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <span>Ask for endorsement</span>
            </button>

            <button 
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] text-xs sm:text-[12.5px] font-semibold px-3.5 py-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <span>Profile CLR</span>
            </button>

            <button 
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] text-xs sm:text-[12.5px] font-semibold px-3.5 py-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <span>Copy Profile Link</span>
            </button>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 5. CATEGORY NAVIGATION TABS (Two Rows - Screenshot 2) */}
          {/* -------------------------------------------------------- */}
          <div className="mb-6 space-y-2.5">
            {/* Row 1 */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {categoryRows.row1.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setActiveCategory(cat.name)}
                    className={`inline-flex items-center gap-2 rounded-xl text-xs sm:text-[13px] font-semibold px-4 py-2 transition-all cursor-pointer shadow-2xs ${
                      isActive
                        ? 'border-2 border-[#FD4322] bg-white text-[#FD4322] font-bold shadow-xs'
                        : 'border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] text-[#4B5563] hover:text-[#111827]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {cat.count !== null && (
                      <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-[#FD4322] text-white' 
                          : 'bg-[#F1F5F9] text-[#64748B]'
                      }`}>
                        {cat.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {categoryRows.row2.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setActiveCategory(cat.name)}
                    className={`inline-flex items-center gap-2 rounded-xl text-xs sm:text-[13px] font-semibold px-4 py-2 transition-all cursor-pointer shadow-2xs ${
                      isActive
                        ? 'border-2 border-[#FD4322] bg-white text-[#FD4322] font-bold shadow-xs'
                        : 'border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] text-[#4B5563] hover:text-[#111827]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {cat.count !== null && (
                      <span className="bg-[#F1F5F9] text-[#64748B] text-[11px] font-bold px-1.5 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 6. COURSES CONTAINER & CARD GRID (Screenshot 2) */}
          {/* -------------------------------------------------------- */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 sm:p-7 shadow-xs mb-8">
            
            {/* Header: "Courses" on left, "+ Add" and "Import" on right */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F3F4F6] mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#14243D]">
                Courses
              </h3>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] text-xs sm:text-[13px] font-bold px-3 py-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg border border-[#FD4322] bg-white hover:bg-[#FFF5F0] text-[#FD4322] text-xs sm:text-[13px] font-bold px-3 py-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Import</span>
                </button>
              </div>
            </div>

            {/* Course Cards Grid (Responsive 1/2/3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map((course) => {
                const isExpanded = expandedDescriptions[course.id];

                return (
                  <div 
                    key={course.id}
                    className="rounded-xl border border-[#E5E7EB] bg-white p-4 sm:p-4.5 flex flex-col justify-between hover:border-[#CBD5E1] transition-all duration-150 shadow-2xs"
                  >
                    <div>
                      {/* Top Row: Circular Credential Badge, Title/Issuer, Meta & SOLO swirl */}
                      <div className="flex items-start gap-3 mb-3">
                        {/* Authentic Circular Credential Badge */}
                        <div 
                          className="w-16 h-16 rounded-full shrink-0 flex flex-col items-center justify-center p-1 relative border-2 shadow-2xs text-center overflow-hidden"
                          style={{ borderColor: course.badgeRingColor, backgroundColor: course.badgeBgColor }}
                        >
                          <div className="w-14 h-14 rounded-full bg-white flex flex-col items-center justify-center p-1">
                            <span className="text-[7.5px] font-bold text-[#1E3A8A] uppercase tracking-wider leading-none">
                              academia
                            </span>
                            <span className="text-[7px] font-semibold text-[#374151] line-clamp-2 leading-tight mt-0.5">
                              {course.badgeTitle}
                            </span>
                            <span className="text-[6px] text-[#6B7280] leading-none mt-0.5">
                              ···
                            </span>
                          </div>
                        </div>

                        {/* Title, Issuer & Badges */}
                        <div className="flex-1 min-w-0">
                          <h4 
                            className="text-[14px] font-bold text-[#14243D] truncate"
                            title={course.title}
                          >
                            {course.displayTitle}
                          </h4>
                          <p className="text-[12px] text-[#6B7280] font-medium mb-1.5">
                            {course.issuer}
                          </p>

                          {/* Meta Row: Skills Pill, Verified Badge, and SOLO Watermark */}
                          <div className="flex items-center justify-between gap-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="bg-[#FFF0EB] text-[#FD4322] text-[10.5px] font-bold px-2 py-0.5 rounded-md">
                                {course.skillsCount}
                              </span>
                              <span className="bg-[#10B981] text-white text-[10.5px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                                Verified
                              </span>
                            </div>

                            {/* Authentic SOLO swirl circular emblem */}
                            <div 
                              className="w-6 h-6 rounded-full border border-[#00B4D8]/30 bg-[#F0FDFA] flex items-center justify-center shrink-0 shadow-2xs"
                              title="Verified on SOLO Network"
                            >
                              <span className="text-[#00B4D8] font-black text-[10px] select-none font-sans">
                                S
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Course Description */}
                      <p className="text-[12px] text-[#4B5563] leading-relaxed mb-4">
                        {isExpanded ? course.description : course.description}
                        <button
                          type="button"
                          onClick={() => toggleDescription(course.id)}
                          className="text-[#FD4322] hover:underline font-semibold ml-1 cursor-pointer"
                        >
                          {isExpanded ? 'see less' : 'see more'}
                        </button>
                      </p>
                    </div>

                    {/* Bottom Action Row: Icons on Left, Openbadge & View Credential on Right */}
                    <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between gap-2">
                      {/* Left: 3 Small Action Icons */}
                      <div className="flex items-center gap-2 text-[#FD4322]">
                        <button 
                          type="button" 
                          aria-label="Bookmark course"
                          className="hover:bg-[#FFF5F0] p-1 rounded transition-colors"
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          type="button" 
                          aria-label="Edit course details"
                          className="hover:bg-[#FFF5F0] p-1 rounded transition-colors"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          type="button" 
                          aria-label="View public web link"
                          className="hover:bg-[#FFF5F0] p-1 rounded transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Right: Openbadge button + View Credential link */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="rounded-md bg-[#FD4322] hover:bg-[#E03719] text-white text-[11px] font-bold px-2.5 py-1 transition-colors cursor-pointer shadow-2xs"
                        >
                          Openbadge
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#FD4322] hover:text-[#E03719] transition-colors cursor-pointer"
                        >
                          <span>View Credential</span>
                          <Award className="w-3 h-3 text-[#10B981]" />
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>



        </div>

      </div>
    </section>
  );
};
