"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, ShoppingBag, MessageCircle, Phone, Star } from "lucide-react";
import { WHATSAPP_PRESETS, GOOGLE_MAPS_URL, scrollToSection, PHONE_NUMBER } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-cream-dark" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold/30 rounded-full animate-float" />
      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-gold/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gold/25 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm font-dm tracking-[0.25em] uppercase">
              Premium Dessert Café
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Ahmedabad&apos;s Most
            <br />
            <span className="text-gradient">Elegant</span> Dessert
            <br />
            Destination
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-cormorant text-xl md:text-2xl text-foreground/60 max-w-xl mb-4 leading-relaxed"
          >
            French Toasts, NY Rolls & Crepes crafted for unforgettable evenings.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-2 text-sm text-foreground/50 font-dm mb-10"
          >
            <Star size={14} className="text-gold fill-gold" />
            <span>4.9 on Google • 287+ Happy Customers • Open Daily 5–11 PM</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-charcoal text-white px-8 py-4 rounded-full font-dm text-sm tracking-wide hover:bg-gold transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
            >
              <MapPin size={18} />
              Visit Now
              <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                →
              </span>
            </a>

            <button
              onClick={() => scrollToSection("menu")}
              className="group flex items-center gap-3 bg-white text-charcoal px-8 py-4 rounded-full font-dm text-sm tracking-wide luxury-border hover-gold transition-all duration-500"
            >
              <ShoppingBag size={18} />
              Explore Menu
            </button>

            <a
              href={WHATSAPP_PRESETS.order}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-dm text-sm tracking-wide hover:bg-[#20BD5C] transition-all duration-500 hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>

            <a
              href={`tel:+919876543210`}
              className="group flex items-center gap-3 border border-foreground/10 text-foreground/60 px-6 py-4 rounded-full font-dm text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-500"
            >
              <Phone size={18} />
              Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-6 mt-16 text-foreground/40 text-xs font-dm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span>Open Daily • 6 PM - 12:30 AM</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span>★</span>
              <span>4.9 Rating • 287 Reviews</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span>📍</span>
              <span>Sindhu Bhavan Road</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection("trust")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 hover:text-gold transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs font-dm tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
