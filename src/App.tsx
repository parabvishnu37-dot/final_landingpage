import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LearnerProfileSection } from './components/LearnerProfileSection';
import { StorytellingSection } from './components/StorytellingSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { SkillMatchSection } from './components/SkillMatchSection';
import { CareerPathwaysSection } from './components/CareerPathwaysSection';
import { VerifiedCredentialsSection } from './components/VerifiedCredentialsSection';
import { ResumeGenerationSection } from './components/ResumeGenerationSection';
import { JobSearchSkillMatchSection } from './components/JobSearchSkillMatchSection';
import { CredentialWalletSection } from './components/CredentialWalletSection';
import { SocialPlatformSection } from './components/SocialPlatformSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#14243D] relative overflow-hidden flex flex-col">
      {/* Sticky/Fixed Minimal Navbar */}
      <Navbar />

      {/* Main Content: Sections 1 to 11 + Final CTA */}
      <main className="flex-1">
        <Hero />
        <LearnerProfileSection />
        <StorytellingSection />
        <OpportunitiesSection />
        <SkillMatchSection />
        <CareerPathwaysSection />
        <VerifiedCredentialsSection />
        <ResumeGenerationSection />
        <JobSearchSkillMatchSection />
        <CredentialWalletSection />
        <SocialPlatformSection />
        <FinalCTASection />
      </main>

      {/* Professional SaaS Footer */}
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;
