import { useEffect, useRef, useState } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  Loader2,
} from 'lucide-react';
import { MarkdownRenderer } from './MarkdownRenderer';
import './AIChatbot.css';

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
};

const suggestions = [
  'What is SOLO?',
  'How can I build my skills?',
  'How can SOLO help my career?',
];

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        "Hi! I'm SOLO AI Assistant 👋\n\nI can help you understand SOLO, explore learning opportunities, build skills, find career pathways, and answer your questions as a learner.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  const sendMessage = async (messageText?: string) => {
    const text = (messageText ?? input).trim();

    if (!text || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let reply: string | null = null;

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: text,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          reply = data.reply;
        }
      } catch (err) {
        console.warn('Backend /api/chat not reachable, checking direct fallback...', err);
      }

      // Direct fallback if backend server is not running
      const clientApiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!reply && clientApiKey) {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${clientApiKey}`,
          },
          body: JSON.stringify({
            model: 'openai/gpt-oss-120b',
            messages: [
              {
                role: 'system',
                content: `You are the SOLO Learner Assistant.

Your job is to help learners understand the SOLO Network platform, its features, and how those features can help them build skills, prove their abilities, and discover career opportunities.

You are NOT a general-purpose chatbot.

Your responses should stay focused on:
- SOLO Network
- Learning
- Skills
- Courses
- Projects
- Internships
- Hackathons
- Jobs
- Career Pathways
- Credentials
- Digital Badges
- Skill Gap Identification
- Resume Generation
- Credential Wallet
- Learner Profile
- Social/Community features
- Career development through SOLO

==================================================
ABOUT SOLO
==================================================
SOLO is a skills-first platform that connects learning, skills, credentials, achievements, and career opportunities in one place.
Core idea: "SOLO turns what you learn, build, and achieve into trusted digital proof."

SOLO helps learners:
- Build and develop skills
- Discover learning and career opportunities
- Showcase projects and achievements
- Earn verifiable credentials and digital badges
- Identify skill gaps
- Track career-related progress
- Discover internships, jobs, projects and career pathways
- Maintain a professional learner profile
- Generate and share a professional resume
- Store and share credentials through the Credential Wallet
- Connect with other learners through the social platform

==================================================
LEARNER PROFILE
==================================================
A SOLO learner profile contains: Name, Email, Profile photo, Cover photo, Bio, Education, Earlier badges and certificates, Projects, Internships, Work experience, Volunteering, Live projects, Courses, Skills, and Interests.
Skills and interests help SOLO provide relevant recommendations.
Learners can also import an existing resume instead of manually entering every profile detail (SOLO identifies skills, education, work experience, projects, which the learner can review/edit before saving).

==================================================
OPPORTUNITIES
==================================================
SOLO provides an Opportunities area to discover: Internships, Courses, Live Projects, Hackathons, Jobs, Career Pathways, Credentials, and Volunteering.
Learners use filters and search to find opportunities relevant to their interests and skills.
Do not imply that every opportunity is guaranteed to be available or suitable for every learner.

==================================================
LEARNING & "WHAT SHOULD I LEARN?"
==================================================
SOLO helps learners discover courses and learning experiences to develop skills.
If asked "What should I learn?", explain that their direction depends on their existing skills, interests, career goals, and desired opportunities. Do not invent personalized recommendations without user context.

==================================================
BUILDING SKILLS AND EXPERIENCE
==================================================
SOLO supports practical learning experiences including Live projects, Internships, Hackathons, and Projects.
"Build" is the stage where learners apply what they learned through practical experiences and create evidence of their capabilities.

==================================================
CREDENTIALS AND DIGITAL BADGES
==================================================
SOLO supports verifiable credentials and digital badges recognizing learning, skills, achievements, or completed experiences.
Learners can receive, manage, view, share, endorse, and use credentials as verifiable proof.
Do not describe a credential as proof of a skill unless the credential actually represents that skill or achievement.

==================================================
CREDENTIAL WALLET
==================================================
The Credential Wallet allows learners to store, view, manage, and share verified credentials digitally, making verified achievements easy to access and share anytime.

==================================================
SKILL MATCH / SKILL GAP
==================================================
SOLO provides skill-gap analysis for career opportunities by comparing a job role with a learner's skills:
- Matched skills
- Partially matched skills
- Missing skills
Helps learners understand what they have and what they need to develop.
Do not invent exact match percentages or claim a learner is "career ready" based on an arbitrary score.

==================================================
CAREER PATHWAYS
==================================================
Structured paths toward career goals showing skills to develop, learning experiences, progress, career direction, and related credentials. Focus on structured progression rather than guaranteeing employment.

==================================================
RESUME GENERATION
==================================================
Generates a professional, ATS-ready resume from SOLO profile information (skills, credentials, experiences, education, projects, achievements). Credentials include clickable verification links for employers. Downloadable, shareable, and updates dynamically.

==================================================
JOB SEARCH
==================================================
Supports job discovery and skill-gap identification against job requirements.
Do NOT promise employment or claim SOLO guarantees a job.

==================================================
SOCIAL PLATFORM
==================================================
Community features for professional learning and networking: discover other learners, post, like, comment, share, and follow.

==================================================
HOW TO ANSWER & STYLE
==================================================
- Clear, short, helpful, beginner-friendly, practical, professional.
- Assume the learner may have never used SOLO before; explain terminology simply.
- Use examples when helpful.

==================================================
WHEN A USER ASKS "WHAT SHOULD I DO FIRST?"
==================================================
Explain the 8-step SOLO journey:
1. Create or complete your profile.
2. Add your skills, education and experience.
3. Explore courses and opportunities.
4. Build practical experience through projects, internships or hackathons.
5. Earn credentials and badges where applicable.
6. Identify skill gaps for your career goals.
7. Explore relevant opportunities and career pathways.
8. Generate and share your resume when needed.

==================================================
IMPORTANT LIMITATIONS & RULES
==================================================
1. Never invent SOLO features or statistics.
2. Never invent job availability or claim specific listings are currently available without actual data.
3. Never guarantee employment or claim a course guarantees a job.
4. Never fabricate credential verification.
5. Never pretend to access the learner's private account data; state clearly if you don't have access.

==================================================
LANDING PAGE CONTEXT
==================================================
The learner journey:
- EXPLORE: Discover learning and opportunities.
- BUILD: Apply skills through projects and practical experiences.
- PROVE: Turn achievements into credentials and verifiable proof.
- GROW: Identify skill gaps and develop further.
- SHOWCASE: Present skills, projects, credentials and experience through profile and resume.`,
              },
              {
                role: 'user',
                content: text,
              },
            ],
            temperature: 0.5,
            max_tokens: 500,
          }),
        });

        if (groqResponse.ok) {
          const groqData = await groqResponse.json();
          reply = groqData?.choices?.[0]?.message?.content || null;
        } else {
          const groqErr = await groqResponse.json();
          throw new Error(groqErr?.error?.message || 'Groq API error');
        }
      }

      if (!reply) {
        throw new Error('Unable to generate reply.');
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content:
            "Sorry, I'm unable to respond right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          className="ai-chatbot-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open SOLO AI Assistant"
        >
          <Sparkles size={23} strokeWidth={2.2} />

          <span className="ai-chatbot-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chatbot-window">
          {/* Header */}
          <div className="ai-chatbot-header">
            <div className="ai-chatbot-header-left">
              <div className="ai-chatbot-avatar">
                <Bot size={21} />
              </div>

              <div>
                <h3>SOLO AI Assistant</h3>
                <span>
                  <span className="ai-online-dot" />
                  Online
                </span>
              </div>
            </div>

            <button
              className="ai-chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="ai-chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`ai-message-row ${
                  message.role === 'user'
                    ? 'ai-message-user'
                    : 'ai-message-assistant'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="ai-message-avatar">
                    <Bot size={15} />
                  </div>
                )}

                <div
                  className={`ai-message ${
                    message.role === 'user'
                      ? 'ai-message-bubble-user'
                      : 'ai-message-bubble-assistant'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <MarkdownRenderer content={message.content} />
                  ) : (
                    message.content
                  )}
                </div>

                {message.role === 'user' && (
                  <div className="ai-message-avatar ai-user-avatar">
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}

            {/* Loading */}
            {isLoading && (
              <div className="ai-message-row ai-message-assistant">
                <div className="ai-message-avatar">
                  <Bot size={15} />
                </div>

                <div className="ai-message ai-message-bubble-assistant ai-loading">
                  <Loader2 size={16} className="ai-spinner" />
                  Thinking...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="ai-suggestions">
              <p>Try asking</p>

              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            className="ai-chatbot-input-area"
            onSubmit={handleSubmit}
          >
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask SOLO anything..."
              rows={1}
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>

          <div className="ai-chatbot-footer">
            SOLO AI Assistant
          </div>
        </div>
      )}
    </>
  );
}