import React, { useEffect, useRef, useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  Award, 
  MapPin, 
  Check, 
  ChevronRight,
  Trophy,
  Quote
} from 'lucide-react';

export const LearnerProfileSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'projects' | 'credentials'>('overview');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sample Profile Data for Tab 1 (Overview)
  const overviewSkills = [
    'Product Design',
    'React.js',
    'Python',
    'AI Integration',
    'UI/UX',
    'Full-Stack Development',
  ];

  // Sample Profile Data for Tab 2 (Work Experience & Internships)
  const experiences = [
    {
      role: 'Product Design Intern',
      company: 'Nova Labs',
      period: 'Jun 2026 – Aug 2026',
      bullets: [
        'Designed product interfaces',
        'Conducted user research',
        'Created interactive prototypes',
      ],
      skills: ['Figma', 'UI/UX', 'Product Design'],
      status: 'Internship Completed',
    },
    {
      role: 'Software Engineering Intern',
      company: 'Spark Technologies',
      period: 'Jan 2026 – May 2026',
      bullets: [
        'Built frontend components',
        'Worked with REST APIs',
        'Improved application workflows',
      ],
      skills: ['React', 'JavaScript', 'APIs'],
      status: 'Internship Completed',
    },
  ];

  // Sample Profile Data for Tab 3 (Projects & Hackathons)
  const projects = [
    {
      title: 'AI Career Assistant',
      description: 'An AI-powered assistant that helps learners understand skill gaps and career opportunities.',
      tags: ['AI', 'Python', 'RAG'],
    },
    {
      title: 'EventHub',
      description: 'Event management and leaderboard platform for students and organizations.',
      tags: ['Next.js', 'Supabase', 'JavaScript'],
    },
    {
      title: 'Smart Campus',
      description: 'A student-focused platform for discovering campus opportunities.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  const hackathons = [
    {
      title: 'AI Innovation Challenge',
      achievement: 'Finalist · 2026',
    },
    {
      title: 'Build for Students',
      achievement: 'Participant · 2025',
    },
  ];

  // Sample Profile Data for Tab 4 (Credentials & Endorsements)
  const credentials = [
    {
      title: 'AI Product Architecture',
      issuer: 'SOLO',
      verified: true,
      issued: 'Issued Aug 2026',
    },
    {
      title: 'React Development',
      issuer: 'SOLO',
      verified: true,
      issued: 'Issued Jul 2026',
    },
    {
      title: 'Product Design Foundations',
      issuer: 'SOLO',
      verified: true,
      issued: 'Issued Jun 2026',
    },
  ];

  const endorsements = [
    {
      quote: 'Strong problem solver with excellent product thinking.',
      author: 'Priya Sharma',
      role: 'Product Lead',
    },
    {
      quote: 'Consistently turns ideas into working prototypes.',
      author: 'Rahul Mehta',
      role: 'Engineering Mentor',
    },
  ];

  return (
    <section 
      id="profile" 
      ref={sectionRef}
      className="relative bg-[#F7F8FA] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#E3EAF1]"
    >
      {/* Ambient background glows */}
      <div 
        className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[#1255FF]/5 blur-[120px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-[#FD4322]/5 blur-[120px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section 2 Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#fff1ec] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>YOUR CAREER, IN ONE PLACE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-[#14243D] mb-6">
            Your entire career story. <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">One profile.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Bring your education, skills, projects, experience and achievements together in one profile that grows with you.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Large Marketing Profile Visualization Container */}
        {/* ======================================================== */}
        <div className="relative max-w-5xl mx-auto">

          {/* ======================================================== */}
          {/* 3 Floating SOLO-Style Cards */}
          {/* ======================================================== */}

          {/* Card 1: Skill Added (Top-Left) */}
          <div 
            className={`absolute -top-6 -left-4 sm:-left-8 lg:-left-12 z-30 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="solo-floating-card px-3.5 py-2.5 bg-white flex items-center gap-3 shadow-[0_16px_32px_-6px_rgba(20,36,61,0.12),0_0_0_1px_rgba(227,234,241,0.9)] animate-float-slow">
              <div className="w-8 h-8 rounded-lg bg-[#eef5ff] text-[#1255FF] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">Skill Added</span>
                <p className="text-[13px] font-extrabold text-[#14243D]">React.js</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#16a36a] mt-0.5">
                  <Check className="w-3 h-3" /> Acquired
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Project Added (Top-Right) */}
          <div 
            className={`absolute -top-8 -right-4 sm:-right-8 lg:-right-10 z-30 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="solo-floating-card px-3.5 py-2.5 bg-white flex items-center gap-3 shadow-[0_16px_32px_-6px_rgba(20,36,61,0.12),0_0_0_1px_rgba(227,234,241,0.9)] animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-[#fff1ec] text-[#FD4322] flex items-center justify-center flex-shrink-0">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">Project Added</span>
                <p className="text-[13px] font-extrabold text-[#14243D]">AI Career Assistant</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FD4322] mt-0.5">
                  <Check className="w-3 h-3" /> Added to Profile
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Credential Earned (Bottom-Right / Side) */}
          <div 
            className={`hidden sm:flex absolute -bottom-6 -right-6 lg:-right-8 z-30 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="solo-floating-card px-3.5 py-2.5 bg-white flex items-center gap-3 shadow-[0_16px_32px_-6px_rgba(20,36,61,0.12),0_0_0_1px_rgba(227,234,241,0.9)] animate-float-alt">
              <div className="w-8 h-8 rounded-lg bg-[#fff8dd] text-[#b65d00] flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">Credential Earned</span>
                <p className="text-[13px] font-extrabold text-[#14243D]">Product Design</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#16a36a] mt-0.5">
                  <Check className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Main Central Profile Mockup */}
          {/* ======================================================== */}
          <div 
            className={`relative rounded-[24px] border border-[#DBE6F1] bg-white shadow-[0_24px_60px_rgba(20,36,61,0.08)] overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            
            {/* 1. Cover Photo Banner (Inspired by actual SOLO profile) */}
            <div className="relative h-28 sm:h-36 w-full bg-gradient-to-r from-[#00A3FF] via-[#1255FF] to-[#6A0DAD] overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Top Banner Tag / Edit button mockup */}
              <div className="absolute top-3 right-4 flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  @vishnuparab
                </span>
                <button 
                  type="button"
                  className="rounded-lg bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white/90 px-2.5 py-1 text-[11px] font-medium transition-colors"
                >
                  Edit profile
                </button>
              </div>
            </div>

            {/* 2. Profile Identity Bar */}
            <div className="px-5 sm:px-8 pb-5 pt-0 relative border-b border-[#E3EAF1]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-10 sm:-mt-12 mb-4">
                {/* Avatar and Name */}
                <div className="flex items-end gap-3.5">
                  <div className="relative">
                    <img 
                      src="/avatar.png" 
                      alt="Vishnu Parab"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-md bg-white"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/solo-assets/images/Student.png';
                      }}
                    />
                    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#16a36a] border-2 border-white shadow-xs" />
                  </div>

                  <div className="pb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-[#14243D]">Vishnu Parab</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf8f1] border border-[#c9ead9] px-2 py-0.5 text-[10px] font-extrabold text-[#16a36a]">
                        <Check className="w-2.5 h-2.5" /> Verified Profile
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold text-[#5A6B82] mt-0.5">
                      Product-Focused Technology Learner
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-[#64748B] mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FD4322]" /> Goa, India
                      </span>
                      <span>•</span>
                      <span className="font-semibold text-[#14243D]">18 Skills</span>
                      <span>•</span>
                      <span className="font-semibold text-[#14243D]">12 Credentials</span>
                    </div>
                  </div>
                </div>

                {/* Profile Stats Quick Badges */}
                <div className="flex items-center gap-2 self-start sm:self-end pb-1">
                  <span className="rounded-xl border border-[#E3EAF1] bg-[#F7F9FC] px-3 py-1.5 text-center">
                    <span className="block text-[14px] font-black text-[#14243D]">86%</span>
                    <span className="block text-[9px] font-bold text-[#64748B]">Complete</span>
                  </span>
                  <span className="rounded-xl border border-[#f8d1c6] bg-[#fff8f5] px-3 py-1.5 text-center">
                    <span className="block text-[14px] font-black text-[#FD4322]">94%</span>
                    <span className="block text-[9px] font-bold text-[#FD4322]">Job Ready</span>
                  </span>
                </div>
              </div>

              {/* 3. Resume & Profile Action Banner (Inspired by actual SOLO screenshot) */}
              <div className="rounded-xl border border-[#f8d1c6] bg-[#fff8f5] p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#fff1ec] text-[#FD4322] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-extrabold text-[#14243D]">Resume & Profile</h4>
                    <p className="text-[11px] text-[#64748B]">
                      Build a verified resume from your profile or pull in details instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button 
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#FD4322] hover:bg-[#e83b1c] text-white px-3.5 py-1.5 text-[11px] font-extrabold shadow-sm transition-all"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Generate resume</span>
                  </button>
                  <button 
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#D7E3F0] bg-white text-[#14243D] hover:text-[#FD4322] px-3 py-1.5 text-[11px] font-bold shadow-xs transition-colors"
                  >
                    <span>Import</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Interactive Profile Navigation Tabs (Horizontally scrollable on mobile) */}
            <div className="px-5 sm:px-8 border-b border-[#E3EAF1] bg-[#FAFBFC] flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap text-[12px] font-bold text-[#64748B] scrollbar-none">
              <button 
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`py-3.5 border-b-2 transition-all duration-200 whitespace-nowrap relative ${
                  activeTab === 'overview' 
                    ? 'border-[#FD4322] text-[#FD4322] font-black' 
                    : 'border-transparent hover:text-[#14243D]'
                }`}
              >
                Overview
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`py-3.5 border-b-2 transition-all duration-200 whitespace-nowrap relative ${
                  activeTab === 'experience' 
                    ? 'border-[#FD4322] text-[#FD4322] font-black' 
                    : 'border-transparent hover:text-[#14243D]'
                }`}
              >
                Work Experience & Internships
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('projects')}
                className={`py-3.5 border-b-2 transition-all duration-200 whitespace-nowrap relative ${
                  activeTab === 'projects' 
                    ? 'border-[#FD4322] text-[#FD4322] font-black' 
                    : 'border-transparent hover:text-[#14243D]'
                }`}
              >
                Projects & Hackathons
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('credentials')}
                className={`py-3.5 border-b-2 transition-all duration-200 whitespace-nowrap relative ${
                  activeTab === 'credentials' 
                    ? 'border-[#FD4322] text-[#FD4322] font-black' 
                    : 'border-transparent hover:text-[#14243D]'
                }`}
              >
                Credentials & Endorsements
              </button>
            </div>

            {/* 5. Dynamic Tab Content Area (Maintains consistent height with smooth transitions) */}
            <div className="p-5 sm:p-8 min-h-[360px] flex flex-col justify-start">
              
              {/* ======================================================== */}
              {/* TAB 1: Overview (Default) */}
              {/* ======================================================== */}
              {activeTab === 'overview' && (
                <div className="space-y-5 animate-fadeIn">
                  {/* About Section */}
                  <div className="rounded-2xl border border-[#E3EAF1] bg-[#F7F9FC] p-4 sm:p-5 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-[#64748B] mb-2">
                        About
                      </h4>
                      <p className="text-[14px] leading-relaxed font-semibold text-[#14243D]">
                        Product-focused technology learner building experiences at the intersection of design, AI and software.
                      </p>
                    </div>
                    <div className="hidden sm:block flex-shrink-0">
                      <img 
                        src="/solo-assets/images/Student.png" 
                        alt="SOLO Learner" 
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-white/70 p-1 border border-[#E3EAF1] shadow-2xs" 
                      />
                    </div>
                  </div>

                  {/* Acquired Skills */}
                  <div className="rounded-2xl border border-[#E3EAF1] bg-white p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-[#64748B]">
                          Acquired Skills
                        </h4>
                        <span className="rounded-full bg-[#eef5ff] border border-[#cfe0fb] px-2 py-0.5 text-[10px] font-extrabold text-[#1255FF]">
                          {overviewSkills.length} Verified
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#FD4322]">✓ Evidence Backed</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {overviewSkills.map((skill) => (
                        <span 
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#DBE6F1] bg-[#F7F9FC] px-3 py-1.5 text-[11px] font-bold text-[#14243D] hover:border-[#FD4322] transition-colors"
                        >
                          <span>{skill}</span>
                          <Check className="w-3 h-3 text-[#16a36a]" />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="rounded-2xl border border-[#E3EAF1] bg-[#F7F9FC] p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#1255FF]" />
                        <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-[#64748B]">
                          Education
                        </h4>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf8f1] border border-[#c9ead9] px-2 py-0.5 text-[10px] font-extrabold text-[#16a36a]">
                        <Check className="w-2.5 h-2.5" /> Verified
                      </span>
                    </div>

                    <div className="bg-white rounded-xl border border-[#E3EAF1] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-extrabold text-[#14243D]">
                          B.E. Information Technology
                        </p>
                        <p className="text-[12px] font-semibold text-[#5A6B82]">
                          Goa Engineering College
                        </p>
                      </div>
                      <span className="text-[11px] font-medium text-[#64748B]">
                        2023 – Present
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TAB 2: Work Experience & Internships */}
              {/* ======================================================== */}
              {activeTab === 'experience' && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#FD4322]" />
                      <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#14243D]">
                        Work Experience
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B]">
                      2 Roles Completed
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {experiences.map((exp) => (
                      <div 
                        key={exp.company}
                        className="rounded-2xl border border-[#E3EAF1] bg-white p-4 sm:p-5 hover:border-[#DBE6F1] transition-all shadow-xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-slate-100">
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="text-[14px] font-extrabold text-[#14243D]">{exp.role}</h5>
                              <span className="rounded-full bg-[#fff1ec] border border-[#f8d1c6] px-2 py-0.5 text-[9px] font-extrabold text-[#FD4322]">
                                {exp.status}
                              </span>
                            </div>
                            <p className="text-[12px] font-semibold text-[#5A6B82] mt-0.5">{exp.company}</p>
                          </div>
                          <span className="text-[11px] font-medium text-[#64748B] self-start sm:self-auto">
                            {exp.period}
                          </span>
                        </div>

                        {/* Bullets */}
                        <ul className="mt-3 space-y-1 text-[12px] text-[#5A6B82]">
                          {exp.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FD4322]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Skills:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill) => (
                              <span 
                                key={skill}
                                className="rounded-md bg-[#F7F9FC] border border-[#E3EAF1] px-2 py-0.5 text-[10px] font-bold text-[#14243D]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TAB 3: Projects & Hackathons */}
              {/* ======================================================== */}
              {activeTab === 'projects' && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Projects Grid */}
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-[#FD4322]" />
                        <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#14243D]">
                          Projects
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold text-[#64748B]">
                        3 Featured Projects
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {projects.map((proj) => (
                        <div 
                          key={proj.title}
                          className="rounded-2xl border border-[#E3EAF1] bg-[#F7F9FC] p-4 flex flex-col justify-between hover:border-[#DBE6F1] transition-all"
                        >
                          <div>
                            <h5 className="text-[13px] font-extrabold text-[#14243D] mb-1.5">
                              {proj.title}
                            </h5>
                            <p className="text-[11px] text-[#5A6B82] leading-relaxed mb-3">
                              {proj.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-[#E3EAF1]">
                            {proj.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="rounded bg-white border border-[#DBE6F1] px-1.5 py-0.5 text-[9px] font-bold text-[#14243D]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hackathons Section */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-4 h-4 text-[#FD4322]" />
                      <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-[#14243D]">
                        Hackathons
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hackathons.map((hack) => (
                        <div 
                          key={hack.title}
                          className="rounded-xl border border-[#E3EAF1] bg-white p-3.5 flex items-center justify-between shadow-xs"
                        >
                          <div>
                            <p className="text-[12px] font-extrabold text-[#14243D]">{hack.title}</p>
                            <p className="text-[11px] text-[#5A6B82]">{hack.achievement}</p>
                          </div>
                          <span className="flex items-center gap-1 rounded-full bg-[#fff1ec] border border-[#f8d1c6] px-2 py-0.5 text-[9px] font-extrabold text-[#FD4322]">
                            <Trophy className="w-2.5 h-2.5" /> Achievement
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TAB 4: Credentials & Endorsements */}
              {/* ======================================================== */}
              {activeTab === 'credentials' && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Verified Credentials */}
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#FD4322]" />
                        <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#14243D]">
                          Verified Credentials
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold text-[#16a36a] flex items-center gap-1">
                        <Check className="w-3 h-3" /> All Cryptographically Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {credentials.map((cred) => (
                        <div 
                          key={cred.title}
                          className="rounded-2xl border border-[#E3EAF1] bg-white p-4 flex flex-col justify-between hover:border-[#FD4322]/30 transition-all shadow-xs"
                        >
                          <div>
                            <div className="w-8 h-8 rounded-lg bg-[#fff1ec] text-[#FD4322] flex items-center justify-center mb-2.5">
                              <Award className="w-4 h-4" />
                            </div>
                            <h5 className="text-[13px] font-extrabold text-[#14243D] mb-1">
                              {cred.title}
                            </h5>
                            <div className="flex items-center gap-1.5 text-[10px] text-[#16a36a] font-bold mb-1">
                              <span>{cred.issuer}</span>
                              <span>•</span>
                              <span className="flex items-center gap-0.5">
                                <Check className="w-2.5 h-2.5" /> Verified
                              </span>
                            </div>
                            <p className="text-[10px] text-[#64748B] mb-3">{cred.issued}</p>
                          </div>

                          <button 
                            type="button"
                            className="w-full mt-2 rounded-lg border border-[#f8d1c6] bg-white hover:bg-[#fff8f5] text-[#FD4322] py-1.5 text-[10px] font-extrabold transition-colors shadow-2xs"
                          >
                            View Credential
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Endorsements Section */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Quote className="w-4 h-4 text-[#1255FF]" />
                      <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-[#14243D]">
                        Endorsements
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {endorsements.map((end) => (
                        <div 
                          key={end.author}
                          className="rounded-xl border border-[#E3EAF1] bg-[#F7F9FC] p-3.5 flex flex-col justify-between"
                        >
                          <p className="text-[12px] italic text-[#14243D] font-medium leading-relaxed mb-2">
                            &ldquo;{end.quote}&rdquo;
                          </p>
                          <p className="text-[11px] font-bold text-[#5A6B82]">
                            — {end.author} <span className="text-[#64748B] font-normal">· {end.role}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Profile Footer Caption */}
            <div className="bg-[#F7F9FC] border-t border-[#E3EAF1] px-5 sm:px-8 py-3.5 flex items-center justify-between text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16a36a]" />
                Everything you build becomes part of your career story.
              </span>
              <span className="font-semibold text-[#FD4322] flex items-center gap-0.5">
                Share verified link <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
