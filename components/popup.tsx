// app/page.tsx
"use client";
import { useState, useEffect } from 'react';

interface Message {
  content: string;
  isBot: boolean;
}

const faqs = [
  {
    question: "What are the steps to register a company?",
    answer: `✅ We simplify the process of business setup by:<br>
            • Helping choose legal structure (LLC, Private Limited, Partnership)<br>
            • Advising on licensing requirements<br>
            • Registering with authorities<br>
            • Obtaining approvals/licenses<br>
            • Drafting shareholder/partnership agreements<br><br>
            🔹 <a href="/consultation" class="text-blue-600 hover:underline">Book Free Consultation</a>`
  },
  {
    question: "What type of business entity should I choose?",
    answer: `✅ Depends on:<br>
            • Business objectives<br>
            • Liability protection<br>
            • Taxation needs<br>
            • Ownership requirements<br><br>
            Options:<br>
            • LLC - Limited liability<br>
            • Private Limited Company<br>
            • Sole Proprietorship<br>
            • Partnerships<br><br>
            🔹 <a href="/consultation" class="text-blue-600 hover:underline">Schedule Consultation</a>`
  },
  // Add all 20 questions in this format
  // ...
  {
    question: "Where is your office located?",
    answer: `📍 Office #301, Al Serkal 2 Building, Airport Road, Deira, Dubai<br>
            🌐 Virtual services for global clients`
  }
];

export default function LegalAssistantPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        content: `<strong>🏛️ Virtual Legal Assistant</strong><br><br>
                Welcome to Chanakyatse Consultancy! How can we assist you today?<br><br>
                <em>📌 Disclaimer: AI guidance only. Not legal advice. For personalized help, <a href="/consultation" class="text-blue-600 hover:underline">book a consultation</a>.</em>`,
        isBot: true
      }]);
    }
  }, [isOpen]);

  const normalize = (text: string) => text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\b(what|how|where|can|do|are|i|me|my|you|your)\b/g, '')
    .trim();

  const findBestMatch = (query: string) => {
    const cleanQuery = normalize(query);
    let bestMatch = { score: 0, answer: '' };
    
    faqs.forEach(faq => {
      const cleanQ = normalize(faq.question);
      const words = cleanQ.split(/\s+/);
      const matches = cleanQuery.split(/\s+/)
        .filter(word => words.some(w => w.includes(word))).length;
      const score = matches / Math.max(words.length, 1);
      
      if (score > bestMatch.score) bestMatch = { score, answer: faq.answer };
    });

    return bestMatch.score > 0.3 ? bestMatch.answer : 
      `Thank you for your query. Please contact us:<br>
      📞 <a href="tel:+971544778569" class="text-blue-600 hover:underline">+971 544778569</a><br>
      📧 <a href="mailto:contact@chanakyatse.com" class="text-blue-600 hover:underline">contact@chanakyatse.com</a><br>
      🌐 <a href="/contact" class="text-blue-600 hover:underline">Contact Page</a>`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setMessages(prev => [...prev, { content: input, isBot: false }]);
    setIsLoading(true);
    
    setTimeout(() => {
      const response = findBestMatch(input);
      setMessages(prev => [...prev, { content: response, isBot: true }]);
      setInput('');
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Chat Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 max-w-full bg-white rounded-xl shadow-xl flex flex-col border border-gray-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-semibold">Chanakya AI Legal Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 rounded-full p-1 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg ${
                    msg.isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'
                  } legal-message`}
                  dangerouslySetInnerHTML={{ __html: msg.content }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type legal question..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              AI-powered guidance. Not legal advice. <a href="/disclaimer" className="text-blue-600 hover:underline">See full disclaimer</a>
            </p>
          </form>
        </div>
      )}

      <style jsx global>{`
        .legal-message a {
          color: #2563eb;
          text-decoration: underline;
        }
        .legal-message ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }
        .legal-message strong {
          font-weight: 600;
        }
        .legal-message em {
          font-style: italic;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}