"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-cream rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
            Stay in the <span className="text-gradient">Loop</span>
          </h3>
          <p className="font-cormorant text-lg text-foreground/50 mb-8 max-w-md mx-auto">
            Be the first to know about new menu items, events, and exclusive offers.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 rounded-full bg-white border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-charcoal text-white rounded-full font-dm text-sm flex items-center justify-center gap-2 hover:bg-gold transition-all duration-300"
            >
              {submitted ? (
                <>
                  <Check size={16} /> Subscribed!
                </>
              ) : (
                <>
                  <Send size={16} /> Subscribe
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
