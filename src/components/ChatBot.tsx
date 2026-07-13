"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  hello: "Welcome to L'Encore! How can I help you today?",
  hi: "Hello! Welcome to L'Encore. What would you like to know?",
  menu: "Our menu features French Toasts (₹295-₹395), NY Rolls (₹295-₹365), Crepes (₹325-₹375), Signature Specials, Coffee, and Cold Beverages. Would you like to know about any specific category?",
  "view menu": "Our menu features French Toasts (₹295-₹395), NY Rolls (₹295-₹365), Crepes (₹325-₹375), Signature Specials, Coffee, and Cold Beverages.",
  hours: "We're open daily from 6:00 PM to 12:30 AM. We're Ahmedabad's favourite late-night dessert spot!",
  "opening hours": "We're open daily from 6:00 PM to 12:30 AM. We're open till midnight!",
  location: "We're located at Ornet Park 3, Sindhu Bhavan Road, Ahmedabad. Easy parking available!",
  reservation: "You can reserve a table via WhatsApp or our online reservation form. For special occasions, book 24 hours in advance.",
  "reserve table": "You can reserve a table via WhatsApp or our online reservation form. For special occasions, book 24 hours in advance.",
  price: "Our prices range from ₹225 to ₹395. French Toasts start at ₹345, NY Rolls at ₹295, and Crepes at ₹325.",
  bestseller: "Our bestsellers are the Classic Brioche French Toast, Original NY Roll, and our signature Saffron Kunafa Crepe!",
  bestsellers: "Our bestsellers are the Classic Brioche French Toast, Original NY Roll, and our signature Saffron Kunafa Crepe!",
  parking: "Yes! There's ample parking at Ornet Park 3. Valet service is available during peak hours.",
  delivery: "You can order via WhatsApp for pickup, or check Swiggy/Zomato for delivery. We recommend enjoying our desserts fresh at the café!",
  event: "We host birthday parties, anniversaries, and intimate gatherings. Contact us on WhatsApp for event bookings!",
  special: "For birthdays and anniversaries, let us know when you book — we love making celebrations magical!",
  birthday: "Happy Birthday! 🎂 We'd love to make your celebration special. We offer custom birthday setups and desserts. Shall I connect you on WhatsApp?",
  anniversary: "How romantic! 🌹 We specialize in anniversary experiences. Private corners, custom desserts, and a magical atmosphere. Book via WhatsApp!",
  gift: "Gift cards are available! Contact us on WhatsApp to purchase a L'Encore gift card for someone special.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(botResponses)) {
    if (lower.includes(key)) return value;
  }
  return "Thank you for your interest! For detailed information, please WhatsApp us or call +91 98765 43210. We'd love to help!";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to L'Encore! I'm here to help with menus, reservations, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 4, type: "spring" }}
        className="fixed bottom-[148px] right-5 z-50 w-12 h-12 bg-charcoal rounded-full flex items-center justify-center shadow-lg hover:bg-gold transition-colors md:bottom-[140px]"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X size={20} className="text-white" />
        ) : (
          <MessageCircle size={20} className="text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[220px] right-5 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden md:bottom-[212px]"
          >
            <div className="bg-charcoal p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Bot size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-white text-sm font-dm font-medium">L&apos;Encore Assistant</p>
                <p className="text-white/50 text-xs font-dm">Online now</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.isBot ? "" : "flex-row-reverse"}`}
                >
                  <div className="w-6 h-6 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    {msg.isBot ? (
                      <Bot size={12} className="text-gold" />
                    ) : (
                      <User size={12} className="text-foreground/40" />
                    )}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-xl text-sm font-dm max-w-[75%] ${
                      msg.isBot
                        ? "bg-cream text-foreground"
                        : "bg-charcoal text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {["View Menu", "Opening Hours", "Reserve Table", "Bestsellers", "Location"].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        const userMsg: Message = { id: Date.now().toString(), text: q, isBot: false, timestamp: new Date() };
                        setMessages((prev) => [...prev, userMsg]);
                        setTimeout(() => {
                          const botMsg: Message = { id: (Date.now() + 1).toString(), text: getResponse(q), isBot: true, timestamp: new Date() };
                          setMessages((prev) => [...prev, botMsg]);
                        }, 600);
                      }}
                      className="px-3 py-1.5 bg-cream rounded-full text-xs font-dm text-foreground/70 hover:bg-gold/10 hover:text-gold transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-cream-dark">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about menu, hours..."
                  className="flex-1 px-3 py-2 rounded-xl bg-cream text-sm font-dm focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <button
                  onClick={handleSend}
                  className="w-9 h-9 rounded-xl bg-charcoal text-white flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label="Send"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
