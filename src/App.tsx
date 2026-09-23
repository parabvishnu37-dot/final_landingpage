import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSoloSection } from './components/BeforeAfterSoloSection';
import { ResumeImportSection } from './components/ResumeImportSection';
import { GitHubIntegrationSection } from './components/GitHubIntegrationSection';
import { LearnerProfileSection } from './components/LearnerProfileSection';
import { StorytellingSection } from './components/StorytellingSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { TopMatchingJobsSection } from './components/TopMatchingJobsSection';
import { CareerPathwaysSection } from './components/CareerPathwaysSection';
import { VerifiedCredentialsSection } from './components/VerifiedCredentialsSection';
import { CredentialSharingSection } from './components/CredentialSharingSection';
import { ResumeGenerationSection } from './components/ResumeGenerationSection';
import { JobSearchSkillMatchSection } from './components/JobSearchSkillMatchSection';
import { CredentialWalletSection } from './components/CredentialWalletSection';
import { SocialPlatformSection } from './components/SocialPlatformSection';
import { FinalCTASection } from './components/FinalCTASection';
import { JourneyConnector } from './components/JourneyConnector';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';
import { SoloLearnerOverlayCompanion } from './components/character';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-image-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-image-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.05
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#14243D] relative overflow-hidden flex flex-col">
      {/* Sticky/Fixed Minimal Navbar */}
      <Navbar />

      {/* Main Content: Sections 1 to 11 + Final CTA */}
      <main className="flex-1">
        <Hero />
        
        <div className="reveal-on-scroll">
          <BeforeAfterSoloSection />
        </div>
        
        <JourneyConnector stepNumber="01" label="Resume — Start with what you have" targetId="resume-import" />
        <div className="reveal-on-scroll">
          <ResumeImportSection />
        </div>
        
        <JourneyConnector label="NEXT — CONNECT YOUR GITHUB WORK →" targetId="github-integration" />
        <div className="reveal-on-scroll">
          <GitHubIntegrationSection />
        </div>
          
        <JourneyConnector stepNumber="02" label="NEXT — BUILD YOUR PROFILE →" targetId="profile" />
          <div className="reveal-on-scroll">
            <LearnerProfileSection />
          </div>
          
          <JourneyConnector stepNumber="03" label="NEXT — DISCOVER WHAT FITS YOU →" targetId="how-it-works" />
          <div className="reveal-on-scroll">
            <StorytellingSection />
          </div>
          
          <JourneyConnector stepNumber="04" label="NEXT — FIND YOUR NEXT OPPORTUNITY →" targetId="opportunities" />
          <div className="reveal-on-scroll">
            <OpportunitiesSection />
          </div>
          
          <JourneyConnector stepNumber="05" label="NEXT — UNDERSTAND YOUR FIT →" targetId="skill-match" />
          <div className="reveal-on-scroll">
            <TopMatchingJobsSection />
          </div>
          
          <JourneyConnector stepNumber="06" label="NEXT — SEE WHERE YOUR SKILLS CAN TAKE YOU →" targetId="career-pathways" />
          <div className="reveal-on-scroll">
            <CareerPathwaysSection />
          </div>
          
          <JourneyConnector stepNumber="07" label="NEXT — TURN EXPERIENCE INTO PROOF →" targetId="credentials" />
          <div className="reveal-on-scroll">
            <VerifiedCredentialsSection />
          </div>
          
          <JourneyConnector stepNumber="08" label="NEXT — SHARE YOUR PROOF →" targetId="credential-sharing" />
          <div className="reveal-on-scroll">
            <CredentialSharingSection />
          </div>
          
          <JourneyConnector stepNumber="09" label="NEXT — GET READY FOR THE OPPORTUNITY →" targetId="resume" />
          <div className="reveal-on-scroll">
            <ResumeGenerationSection />
          </div>
          
          <JourneyConnector stepNumber="10" label="NEXT — COMPARE AGAINST ROLES →" targetId="job-search-skill-match" />
          <div className="reveal-on-scroll">
            <JobSearchSkillMatchSection />
          </div>
          
          <JourneyConnector stepNumber="11" label="NEXT — CARRY YOUR PROOF →" targetId="credential-wallet" />
          <div className="reveal-on-scroll">
            <CredentialWalletSection />
          </div>
          
          <JourneyConnector stepNumber="12" label="NEXT — KEEP LEARNING & CONNECTING →" targetId="social-platform" />
          <div className="reveal-on-scroll">
            <SocialPlatformSection />
          </div>
          
          <JourneyConnector label="NEXT — START YOUR JOURNEY →" targetId="get-started" />
          <div className="reveal-on-scroll">
            <FinalCTASection />
          </div>

          <div className="reveal-on-scroll">
             <AboutSection />
          </div>
      </main>

      {/* Professional SaaS Footer */}
      <Footer />

      {/* Floating SOLO Learner Companion Overlay */}
      <SoloLearnerOverlayCompanion />

      {/* AI Assistant */}
      <AIChatbot />
    </div>
  );
}

export default App;
