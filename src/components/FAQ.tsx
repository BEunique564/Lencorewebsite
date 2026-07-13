"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-section-alt">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase font-medium">
              FAQ
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-5"
          >
            Frequently <span className="text-gradient">Asked</span>
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl luxury-border overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="font-dm text-sm font-medium text-foreground/80 group-hover:text-gold transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-foreground/30 flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-foreground/50 font-dm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
