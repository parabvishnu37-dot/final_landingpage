import { useEffect, useRef, useState } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  Loader2,
} from 'lucide-react';
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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.reply,
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
                  {message.content}
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