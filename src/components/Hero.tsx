"use client";

import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { WHATSAPP_PRESETS, GOOGLE_MAPS_URL, scrollToSection, WHATSAPP_NUMBER } from "@/lib/utils";

const dessertImages = [
  { url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=700&fit=crop&q=80", alt: "French Toast" },
  { url: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=700&fit=crop&q=80", alt: "NY Roll" },
  { url: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=600&h=700&fit=crop&q=80", alt: "Crêpe" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-warm-ivory">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-ivory via-cream to-warm-white" />

      <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-28 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1.5px] bg-gold" />
              <span className="text-gold text-xs font-dm tracking-[0.3em] uppercase font-medium">
                Premium Dessert Café
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-playfair text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight mb-6"
            >
              Ahmedabad&apos;s Most{" "}
              <span className="text-gradient">Elegant</span>{" "}
              Dessert Destination
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="font-cormorant text-lg md:text-xl text-foreground/55 max-w-lg mb-5 leading-relaxed"
            >
              French Toasts, NY Rolls & Crêpes crafted for unforgettable evenings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-sm font-dm text-foreground/60 font-medium">4.9</span>
              <span className="text-foreground/20">|</span>
              <span className="text-sm font-dm text-foreground/45">287+ Reviews</span>
              <span className="text-foreground/20">|</span>
              <span className="text-sm font-dm text-foreground/45">Open Daily</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="/reservation"
                className="btn-luxury btn-luxury-primary"
              >
                <span>Reserve Table</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={() => scrollToSection("menu")}
                className="btn-luxury btn-luxury-outline"
              >
                <span>Explore Menu</span>
              </button>

              <a
                href={WHATSAPP_PRESETS.order}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury btn-luxury-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Order</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-2 text-xs text-foreground/35 font-dm"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Open Daily • 6 PM – 12:30 AM</span>
              <span className="mx-1 text-foreground/15">|</span>
              <MapPin size={12} />
              <span>Sindhu Bhavan Road</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow-lg">
              <img
                src={dessertImages[0].url}
                alt="L'Encore Signature French Toast"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 luxury-shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=100&h=100&fit=crop&q=80"
                    alt="NY Roll"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-dm text-xs text-foreground/40">Most Loved</p>
                  <p className="font-playfair text-sm font-semibold">Supreme Nutella Roll</p>
                  <p className="text-gold font-dm text-xs font-medium">₹199</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 luxury-shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="font-dm text-sm font-semibold">4.9</span>
              </div>
              <p className="font-dm text-[10px] text-foreground/40 mt-0.5">287+ reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection("trust")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/25 hover:text-gold transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-dm tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
