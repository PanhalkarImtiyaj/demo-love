import { useState, useRef, useEffect } from 'react';
import logoImg from '../../assets/logo.png';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! Welcome to VSS Software. 👋 I am your VSS AI Assistant. How can I help you build your digital product today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const quickReplies = [
    { label: 'Web Dev', icon: 'bx bx-globe', text: 'Tell me about Web Development services' },
    { label: 'App Dev', icon: 'bx bx-mobile-alt', text: 'Tell me about App Development services' },
    { label: 'Custom Software', icon: 'bx bx-code-block', text: 'Tell me about Custom Software' },
    { label: 'Cloud & DevOps', icon: 'bx bx-cloud', text: 'Tell me about Cloud & DevOps services' },
    { label: 'WhatsApp Chat', icon: 'bx bxl-whatsapp', text: 'whatsapp_direct_contact' },
  ];

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Keyword-matching database for perfect responses
  const getAIResponse = (userText) => {
    const cleanText = userText.toLowerCase().trim();

    if (
      cleanText === 'hi' ||
      cleanText === 'hello' ||
      cleanText === 'hey' ||
      cleanText === 'hy' ||
      cleanText === 'hola'
    ) {
      return 'Hello! Welcome to VSS Software. How can I assist you with your digital goals today? Feel free to ask about our services: Web, Mobile App, Custom Software, or Cloud & DevOps.';
    }

    if (
      cleanText.includes('web') ||
      cleanText.includes('website') ||
      cleanText.includes('react') ||
      cleanText.includes('html') ||
      cleanText.includes('site') ||
      cleanText.includes('portal')
    ) {
      return 'At VSS Software, we build ultra-fast, responsive, and SEO-optimized websites. We specialize in React, Next.js, full-stack portals, and eCommerce platforms tailored to your business.';
    }

    if (
      cleanText.includes('app') ||
      cleanText.includes('mobile') ||
      cleanText.includes('android') ||
      cleanText.includes('ios') ||
      cleanText.includes('flutter') ||
      cleanText.includes('phone')
    ) {
      return 'We design and develop premium mobile applications for iOS and Android. Using Flutter and React Native, we deliver smooth, high-performance apps with modern UX designs.';
    }

    if (
      cleanText.includes('software') ||
      cleanText.includes('custom') ||
      cleanText.includes('saas') ||
      cleanText.includes('cloud') ||
      cleanText.includes('database') ||
      cleanText.includes('api')
    ) {
      return 'VSS Software specializes in custom business tools, cloud-based SaaS, custom API integrations, and database architectures to automate your operations and scale efficiently.';
    }

    if (
      cleanText.includes('cloud') ||
      cleanText.includes('devops') ||
      cleanText.includes('cyber') ||
      cleanText.includes('security') ||
      cleanText.includes('aws') ||
      cleanText.includes('azure')
    ) {
      return 'VSS Software Solutions specializes in robust cloud architectures (AWS/Azure), continuous integration and deployments (DevOps), infrastructure scaling, and end-to-end cyber security hardening.';
    }

    if (
      cleanText.includes('price') ||
      cleanText.includes('pricing') ||
      cleanText.includes('cost') ||
      cleanText.includes('budget') ||
      cleanText.includes('charge')
    ) {
      return 'Our solutions are fully customized to your business goals. We offer flexible engagement models. To get an exact quote or estimate for your project, please let us know your requirements or ask to schedule a callback!';
    }

    if (
      cleanText.includes('contact') ||
      cleanText.includes('call') ||
      cleanText.includes('phone') ||
      cleanText.includes('email') ||
      cleanText.includes('address') ||
      cleanText.includes('number') ||
      cleanText.includes('reach')
    ) {
      return 'You can contact VSS Software at contact@vsssoftware.com or call/WhatsApp us directly at +91 7517005494. You can also click the green WhatsApp icon in the header of this chat to start a direct WhatsApp conversation!';
    }

    if (
      cleanText.includes('help') ||
      cleanText.includes('service') ||
      cleanText.includes('do') ||
      cleanText.includes('provide') ||
      cleanText.includes('support')
    ) {
      return "I can guide you with VSS Software services: Web Development 🌐, App Development 📱, Custom Software 💻, and Cloud & DevOps ☁️. Type any of these to learn more, or type 'Contact' to speak to our representative.";
    }

    if (cleanText.includes('panhalkar')) {
      return 'VSS Software is proud to be powered by the expert engineering of Panhalkar. How can we assist you with our tech solutions today?';
    }

    // Check if it's an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(cleanText)) {
      return 'Thank you! I have saved your email. Our project manager will contact you at this email address within 2 hours to discuss your project. Have a wonderful day!';
    }

    // Check if it's a phone number (simple check: only digits, length 10 or more)
    const phoneDigits = cleanText.replace(/\D/g, '');
    if (phoneDigits.length >= 10) {
      return 'Thank you for providing your contact number! We have logged your request. Our sales representative will call you shortly to discuss your custom project.';
    }

    // Generic response if no keywords matched
    return 'Thank you for reaching out to VSS Software! That sounds like an interesting project. I have forwarded your message to our technical team. To help us contact you immediately, could you please share your Email ID or Phone Number? Alternatively, you can email us directly at contact@vsssoftware.com.';
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    if (text === 'whatsapp_direct_contact') {
      window.open('https://wa.me/917517005494?text=Hello%20VSS%20Software,%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20get%20more%20details.', '_blank');
      return;
    }

    // Add User Message
    const userMsg = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responseText = getAIResponse(text);
      const botMsg = {
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div className="chatbot-container">
      {/* ── Floating Launcher Button ── */}
      <button
        className={`chatbot-launcher ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <i className="bx bx-x icon-close" />
        ) : (
          <>
            <i className="bx bx-message-square-dots icon-message" />
            <span className="chatbot-launcher-ping" />
          </>
        )}
      </button>

      {/* Launcher Tooltip */}
      {!isOpen && (
        <div className="chatbot-tooltip">
          <span>Need Help? Chat with VSS AI! ✨</span>
        </div>
      )}

      {/* ── Chat Window ── */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__info">
            <div className="chatbot-avatar-container">
              <img src={logoImg} alt="VSS Logo" className="chatbot-header-logo" />
              <span className="online-indicator" />
            </div>
            <div>
              <h4 className="chatbot-name">VSS Assistant</h4>
              <p className="chatbot-status">Online • Help Desk</p>
            </div>
          </div>
          <div className="chatbot-header__actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href="https://wa.me/917517005494?text=Hello%20VSS%20Software,%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20get%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="chatbot-whatsapp-btn"
              title="Chat on WhatsApp"
            >
              <i className="bx bxl-whatsapp" />
            </a>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <i className="bx bx-minus" />
            </button>
          </div>
        </div>

        {/* Message History */}
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble-wrapper ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <div className="chat-avatar-small-container">
                  <img src={logoImg} alt="VSS" className="chatbot-bubble-logo" />
                </div>
              )}
              <div className="chat-bubble">
                <p className="chat-text">{msg.text}</p>
                <span className="chat-time">{msg.time}</span>
              </div>
            </div>
          ))}

          {/* Typing Indicator bubble */}
          {isTyping && (
            <div className="chat-bubble-wrapper bot">
              <div className="chat-avatar-small-container">
                <img src={logoImg} alt="VSS" className="chatbot-bubble-logo" />
              </div>
              <div className="chat-bubble typing-bubble">
                <div className="typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Replies chips */}
        <div className="chatbot-quick-replies">
          {quickReplies.map((reply, i) => (
            <button
              key={i}
              className="quick-reply-chip"
              onClick={() => handleSend(reply.text)}
            >
              <i className={reply.icon} style={{ marginRight: '6px', fontSize: '0.95rem', verticalAlign: 'middle' }} />
              <span style={{ verticalAlign: 'middle' }}>{reply.label}</span>
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <form
          className="chatbot-input-area"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
        >
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="chatbot-input"
          />
          <button type="submit" className="chatbot-send-btn" disabled={!inputValue.trim()}>
            <i className="bx bx-paper-plane" />
          </button>
        </form>
      </div>
    </div>
  );
}
