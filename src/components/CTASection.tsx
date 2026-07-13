"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK, GOOGLE_MAPS_URL, PHONE_NUMBER, scrollToSection } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-gold" />
          <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
            Your Evening Awaits
          </span>
          <div className="w-8 h-[1px] bg-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-4xl md:text-6xl font-bold mb-8"
        >
          Ready for an
          <br />
          <span className="text-gradient">Extraordinary</span> Evening?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="font-cormorant text-xl text-white/50 mb-12 max-w-lg mx-auto"
        >
          Join us for an evening of luxury desserts, warm ambience, and memories that last a lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gold text-white px-8 py-4 rounded-full font-dm text-sm tracking-wide hover:bg-gold-dark transition-all duration-500 hover:scale-[1.02]"
          >
            <MapPin size={18} />
            Get Directions
            <ArrowRight size={16} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-dm text-sm tracking-wide hover:bg-[#20BD5C] transition-all duration-500 hover:scale-[1.02]"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-dm text-sm tracking-wide hover:bg-white/20 transition-all duration-500"
          >
            <Phone size={18} />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
