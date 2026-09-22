import React from 'react';
import { 
  ArrowRight, 
  Share2, 
  Compass, 
  Users, 
  MessageSquare 
} from 'lucide-react';

export const SocialPlatformSection: React.FC = () => {
  // Four simple capabilities from the Learner Guide PDF page 31
  const capabilities = [
    {
      step: 'SHARE',
      num: '01',
      title: 'Share Posts',
      description: 'Create and share posts.',
      icon: Share2,
    },
    {
      step: 'DISCOVER',
      num: '02',
      title: 'Discover Updates',
      description: 'Explore updates from learners and institutions.',
      icon: Compass,
    },
    {
      step: 'CONNECT',
      num: '03',
      title: 'Connect & Follow',
      description: 'Follow people on similar career paths.',
      icon: Users,
    },
    {
      step: 'ENGAGE',
      num: '04',
      title: 'Engage Community',
      description: 'Like, comment, and share updates.',
      icon: MessageSquare,
    },
  ];

  return (
    <section 
      id="social-platform"
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
            <span>SOCIAL PLATFORM</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Learn, <span className="text-[#FD4322]">share, and connect.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Showcase your achievements, follow other learners, and connect with a community moving toward similar goals.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Main Product Showcase Frame with Actual SOLO Screenshot */}
        {/* ======================================================== */}
        <div className="relative max-w-[1140px] mx-auto mb-12 sm:mb-16">
          
          {/* Clean White Product Showcase Container */}
          <div className="rounded-[20px] border border-[#DBE6F1] bg-white p-4 sm:p-6 shadow-[0_24px_60px_rgba(20,36,61,0.08)]">

            {/* Screenshot Container with Responsive Horizontal Scrolling on Mobile */}
            <div className="w-full overflow-x-auto scrollbar-thin rounded-xl bg-white border border-[#E5E7EB] p-2 sm:p-4">
              <div className="min-w-[720px] sm:min-w-0 flex flex-col items-center justify-center">
                <img 
                  src="/social/social_platform.png" 
                  alt="SOLO Social Platform - Actual UI"
                  className="w-full h-auto block rounded-lg shadow-2xs"
                  loading="eager"
                />
              </div>
            </div>

            {/* Sub-caption matching PDF Learner Guide Page 31 */}
            <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#64748B] gap-1 px-1">
              <span className="italic">
                (Social Platform for sharing posts and connecting with the learner community)
              </span>
              <span className="font-semibold text-[#14243D]">
                SOLO Community Network
              </span>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* Four Simple Capabilities Grid Below Screenshot */}
        {/* ======================================================== */}
        <div className="max-w-[1140px] mx-auto mb-12 sm:mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {capabilities.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.step}
                  className="rounded-2xl border border-[#E3EAF1] bg-white p-5 sm:p-6 shadow-xs relative flex flex-col justify-between hover:border-[#FD4322]/40 transition-all duration-150"
                >
                  {/* Step Pill & Number */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-[#FD4322] bg-[#FFF0EB] border border-[#f8d1c6] px-2 py-0.5 rounded-md">
                        {item.num}
                      </span>
                      <span className="font-mono text-xs font-extrabold text-[#14243D] tracking-wider">
                        {item.step}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-[#FFF0EB] border border-[#f8d1c6] flex items-center justify-center text-[#FD4322]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="text-[15px] font-black text-[#14243D] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[12.5px] text-[#5A6B82] leading-relaxed">
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
            Connect with peers, share learning milestones, and grow together on your professional journey.
          </p>

          <a
            href="#social-platform"
            className="btn-primary-solo inline-flex items-center gap-2 rounded-xl px-7 h-11 text-[14px] font-bold text-white"
          >
            <span>Explore the Community</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
