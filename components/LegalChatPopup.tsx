"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, AlertCircle } from 'lucide-react';
import axios from 'axios';
import qs from 'querystring';

interface Message {
  content: string;
  isBot: boolean;
}

const LegalChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Prevent scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll when chat is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "What are the steps to register a company?",
      answer: `✅ We simplify the process of business setup by:<br><br>
               • Helping you choose the right legal structure (LLC, Private Limited, Partnership, etc.)<br>
               • Advising on suitable business activities and licensing requirements<br>
               • Registering your company with the relevant authorities<br>
               • Obtaining necessary approvals, licenses, and permits<br>
               • Drafting essential agreements such as shareholder or partnership agreements<br><br>
        `
    },
    {
      question: "What type of business entity should I choose?",
      answer: `✅ The right structure depends on your business objectives, jurisdiction, liability protection, taxation, and ownership requirements. We provide tailored legal guidance to help you decide between:<br><br>
               • LLC – Limited liability, flexible ownership<br>
               • Private Limited Company (Pvt. Ltd.) – Structured ownership, suitable for growing businesses<br>
               • Sole Proprietorship – Full control but personal liability<br>
               • Partnerships & Joint Ventures – Ideal for shared ownership<br><br>
        `
    },
    {
      question: "How long does it take to register a company?",
      answer: `✅ Fast-track your business setup! Depending on the jurisdiction, registration can take a few days to weeks. In the UAE, we can help set up your business within a week with minimal hassle.`
    },
    {
      question: "What documents do I need to set up a company?",
      answer: `✅ Generally, you will need:<br><br>
               • Identification documents of owners<br>
               • Proof of address for the business<br>
               • Business name and objectives<br>
               • Shareholder or partnership agreements (if applicable)<br><br>
               📩 <a href="/contact" class="text-blue-600 hover:underline">Need a personalized checklist? Contact Us</a>`
    },
    {
      question: "Can you draft business contracts for me?",
      answer: `✅ Absolutely! We specialize in custom-drafted agreements, including:<br><br>
               • Shareholder Agreements<br>
               • Employment Contracts<br>
               • Vendor Agreements<br>
               • Non-Disclosure Agreements (NDAs)<br>
               • All other essential business contracts<br><br>
               🔹 <a href="/contact" class="text-blue-600 hover:underline">Protect your business with legally sound agreements! Get Started</a>`
    },
    {
      question: "How do I ensure my contract is legally enforceable?",
      answer: `✅ A legally binding contract requires clear terms, valid consent, consideration, and enforceability. In the UAE, any signed agreement between two parties is generally accepted as legally binding by the courts.<br><br>
               💡 Pro Tip: Always seek legal review before signing contracts.`
    },
    {
      question: "Can you review an agreement before I sign it?",
      answer: `✅ Yes! We analyze, identify risks, and mitigate loss by recommending modifications to ensure you are fully protected.<br><br>
               🔹 <a href="/contact" class="text-blue-600 hover:underline">Avoid costly mistakes—let us review your contract! Request a Review</a>`
    },
    {
      question: "Can I get legal advice before signing a business deal?",
      answer: `✅ Yes! Proactive legal advice helps you mitigate risks and avoid liabilities. Our team provides expert legal opinions to ensure full compliance, security, and mitigation of losses in your business transactions.<br><br>
               🔹 <a href="/contact" class="text-blue-600 hover:underline">Speak with a lawyer today! Book a Consultation</a>`
    },
    {
      question: "What industries do you provide legal advice for?",
      answer: `✅ We serve a wide range of industries, including:<br><br>
               • Startups & SMEs<br>
               • Real Estate & Construction<br>
               • Healthcare & Pharmaceuticals<br>
               • Financial Services & Fintech<br>
               • Technology & E-commerce`
    },
    {
      question: "Can I get a legal opinion online?",
      answer: `✅ Yes! We offer virtual legal consultations but only to corporate clients, allowing them to receive personalized legal opinions anytime, anywhere.`
    },
    {
      question: "What should I do if my company is being sued?",
      answer: `✅ Stay calm and contact us immediately. Our legal team will:<br><br>
               • Assess the legal risks and potential liabilities<br>
               • Develop a defense strategy to protect your interests<br>
               • Represent you in negotiations, mediation, or court proceedings<br><br>
               🔹 <a href="/contact" class="text-blue-600 hover:underline">Don't face legal action alone! Consult a Lawyer</a>`
    },
    {
      question: "Do you handle commercial disputes?",
      answer: `✅ Yes! We specialize in contract disputes, business disputes, debt recovery, and other related disputes through:<br><br>
               • Negotiation & Mediation – Avoid court with alternative dispute resolution<br>
               • Arbitration & Litigation – Strong representation in legal disputes`
    },
    {
      question: "What are the alternatives to going to court?",
      answer: `✅ We explore cost-effective dispute resolution methods, including:<br><br>
               • Mediation – Neutral third-party helps resolve issues<br>
               • Arbitration – Faster and private legal resolution<br>
               • Settlement Negotiation – Avoid prolonged litigation<br><br>
               🔹 <a href="/contact" class="text-blue-600 hover:underline">Let's find the best solution for your case. Discuss Your Case</a>`
    },
    {
      question: "Do you provide intellectual property (IP) protection services?",
      answer: `✅ Yes! We help businesses with:<br><br>
               • Trademark Registration<br>
               • Copyright Protection<br>
               • Patent Filing & IP Enforcement<br>
               • IP Infringement Disputes`
    },
    {
      question: "Can you help with employment law issues?",
      answer: `✅ We assist with:<br><br>
               • Employee Contracts & Compliance<br>
               • Workplace Disputes & Termination Issues<br>
               • Dealing with Disruptive employee`
    },
    {
      question: "Do you provide retainer legal services for businesses?",
      answer: `✅ Yes! Our Legal Retainer Services provide:<br><br>
               • Round-the-clock legal support<br>
               • Handholding of businesses to ensure compliance<br>
               • Prevention-based legal advisory<br>
               • Quick conflict resolution & risk mitigation<br><br>
               📩 <a href="/contact" class="text-blue-600 hover:underline">Secure ongoing legal protection for your business! Request Retainer Services</a>`
    },
    {
      question: "How can I book a consultation?",
      answer: `✅ You can schedule a consultation via:<br><br>
               📞 Phone: +971 544778569<br>
               📧 Email: contact@chanakyatse.com<br>
               🌐 <a href="/contact" class="text-blue-600 hover:underline">Online Booking: Click Here</a>`
    },
    {
      question: "What are your legal service fees?",
      answer: `✅ Fees depend on:<br><br>
               • Complexity of the case<br>
               • Duration of the service<br>
               • Type of legal assistance required<br><br>
               📩 <a href="/contact" class="text-blue-600 hover:underline">Contact us for a custom quote</a>`
    },
    {
      question: "Where is your office located?",
      answer: `📍 Office #301, Al Serkal 2 Building, Airport Road, Deira, Dubai<br>
               We also offer virtual legal services for global corporate clients.`
    }
  ];
  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        content: generateWelcomeMessage(),
        isBot: true
      }]);
    }
  }, [isOpen]);

  const generateWelcomeMessage = () => `
    <div class="space-y-2">
      <div class="flex items-center gap-2 text-blue-600">
        <span class="text-xl">⚖️</span>
        <span class="font-semibold">Virtual Assistant</span>
      </div>
      <p class="text-gray-600">
        Welcome to our legal consultation service. I'm here to help answer your questions about business law, contracts, company formation, and more.
      </p>
      <div class="flex items-center gap-2 mt-4 text-xs text-gray-500 bg-blue-50 p-2 rounded-lg">
        <AlertCircle className="w-4 h-4" />
        <span>This is an AI assistant for general guidance only. For specific legal advice, please contact our legal team directly.</span>
      </div>
    </div>`;

  const getAPIResponse = async (prompt: string) => {
    const apiKey = 'b27299bdb4ac8848162cbb3e5992406b';
    const model = 'gpt-3.5-turbo';
    
    try {
      const apiUrl = `http://195.179.229.119/gpt/api.php?${qs.stringify({
        prompt: `You are a legal assistant. Answer this question professionally and concisely: ${prompt}`,
        api_key: apiKey,
        model: model
      })}`;

      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      return null;
    }
  };

  const processQuery = (query: string) => {
    return query.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2);
  };

  const findLocalMatch = (query: string) => {
    const queryWords = processQuery(query);
    
    // Score each FAQ
    const scoredMatches = faqs.map(faq => {
      const questionWords = processQuery(faq.question);
      const answerWords = processQuery(faq.answer);
      
      // Calculate match scores
      const questionScore = queryWords.reduce((score, word) => {
        return score + (questionWords.some(qWord => qWord.includes(word)) ? 1 : 0);
      }, 0) / queryWords.length;

      const answerScore = queryWords.reduce((score, word) => {
        return score + (answerWords.some(aWord => aWord.includes(word)) ? 0.5 : 0);
      }, 0) / queryWords.length;

      return {
        faq,
        score: questionScore * 0.7 + answerScore * 0.3
      };
    });

    // Sort by score
    const sortedMatches = scoredMatches.sort((a, b) => b.score - a.score);
    
    // Return best match if score is good enough
    if (sortedMatches[0].score > 0.3) {
      return sortedMatches[0].faq.answer;
    }
    
    // Combine relevant matches if multiple partial matches exist
    const relevantMatches = sortedMatches.filter(match => match.score > 0.2);
    if (relevantMatches.length > 1) {
      return `
        <div class="space-y-3">
          <p class="font-medium text-gray-700">Here are some relevant answers that might help:</p>
          ${relevantMatches.slice(0, 2).map((match) => `
            <div class="border-l-4 border-blue-500 pl-3 py-1">
              <div class="font-medium mb-1">💡 ${match.faq.question}</div>
              <div>${match.faq.answer}</div>
            </div>
          `).join('')}
        </div>`;
    }
    
    return generateNoMatchResponse();
  };

  const generateNoMatchResponse = () => `
    <div class="space-y-2">
      <p class="font-medium text-gray-700">I apologize, but I couldn't find a specific answer. Please contact us directly:</p>
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span>📞</span>
          <a href="tel:+971544778569" class="text-blue-600 hover:underline">+971 544778569</a>
        </div>
        <div class="flex items-center gap-2">
          <span>📧</span>
          <a href="mailto:contact@chanakyatse.com" class="text-blue-600 hover:underline">contact@chanakyatse.com</a>
        </div>
      </div>
    </div>`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuery = input.trim();
    setMessages(prev => [...prev, { content: userQuery, isBot: false }]);
    setIsLoading(true);
    setInput('');

    try {
      // Try local matching first
      const localMatch = findLocalMatch(userQuery);
      
      // If we have a high confidence local match, use it immediately
      const hasConfidentLocalMatch = localMatch.includes('border-l-4 border-blue-500') || 
                                   localMatch.includes('✅');
      
      if (hasConfidentLocalMatch) {
        setMessages(prev => [...prev, { content: localMatch, isBot: true }]);
      } else {
        // Try API for more complex queries
        try {
          const apiResponse = await getAPIResponse(userQuery);
          if (apiResponse && apiResponse.trim()) {
            setMessages(prev => [...prev, { 
              content: formatResponse(apiResponse), 
              isBot: true 
            }]);
          } else {
            // Fallback to local match if API returns empty response
            setMessages(prev => [...prev, { content: localMatch, isBot: true }]);
          }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          // Use local match on API error
          setMessages(prev => [...prev, { content: localMatch, isBot: true }]);
        }
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessages(prev => [...prev, { 
        content: generateNoMatchResponse(), 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatResponse = (response: string) => {
    return `<div class="space-y-2">
      <p class="text-gray-700">${response}</p>
      <div class="text-xs text-gray-500 mt-2">
        Need more specific advice? 
        <a href="/contact" class="text-blue-600 hover:underline">Contact our legal team</a>
      </div>
    </div>`;
  };

  return (
    <div className="font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        >
          <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      {isOpen && (
        <div 
          className="fixed bottom-8 right-8 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 z-[100] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              <h3 className="font-semibold">Virtual Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div 
            ref={chatContainerRef}
            onWheel={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent isolate"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                    msg.isBot 
                      ? 'bg-white text-gray-800 rounded-tl-none' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-none'
                  } [&_a]:text-blue-600 [&_a]:hover:underline`}
                  dangerouslySetInnerHTML={{ __html: msg.content }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a legal question..."
                className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl hover:shadow-lg disabled:opacity-50 transition-all duration-300 flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              AI guidance only. For legal advice, please consult our lawyers.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LegalChatPopup;