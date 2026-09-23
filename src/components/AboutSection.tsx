import React from 'react';
import {
  Compass,
  GraduationCap,
  BadgeCheck,
  BriefcaseBusiness,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Discover',
    description:
      'Discover courses, internships, projects, hackathons, jobs and career pathways based on your skills and interests.',
  },
  {
    icon: GraduationCap,
    title: 'Learn & Build',
    description:
      'Learn new skills and build practical experience through relevant projects and learning opportunities.',
  },
  {
    icon: BadgeCheck,
    title: 'Prove Your Skills',
    description:
      'Turn your learning and achievements into verified credentials and badges that showcase your skills.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Find Opportunities',
    description:
      'Explore internships, projects and jobs that match your skills and career interests.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Career',
    description:
      'Build your profile, showcase your achievements and take your next step towards your career goals.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#F8FAFC] py-20 sm:py-24 lg:py-28 border-t border-[#E3EAF1] scroll-mt-[68px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322]">
              ABOUT SOLO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.1] text-[#14243D] mb-5">
            Everything you need to{' '}
            <span className="text-[#FD4322]">
              move forward.
            </span>
          </h2>

          <p className="text-base sm:text-lg leading-[1.75] text-[#5A6B82] max-w-2xl mx-auto">
            SOLO is a skills-first career platform that helps learners
            discover opportunities, build practical skills, prove their
            abilities and connect their skills with career opportunities.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="solo-card p-6 sm:p-7 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0EB] text-[#FD4322] mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-extrabold text-[#14243D] mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm leading-[1.65] text-[#5A6B82]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Description */}
        <div className="mt-10 max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-[#E3EAF1] bg-white px-6 py-7 sm:px-10 sm:py-8 shadow-[0_8px_30px_rgba(20,36,61,0.04)]">
            <p className="text-base sm:text-lg font-semibold leading-[1.7] text-[#14243D]">
              From{' '}
              <span className="text-[#FD4322]">learning</span>{' '}
              to{' '}
              <span className="text-[#FD4322]">skills</span>,{' '}
              <span className="text-[#FD4322]">proof</span>{' '}
              and{' '}
              <span className="text-[#FD4322]">opportunities</span>,
              SOLO brings your career journey together in one platform.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};