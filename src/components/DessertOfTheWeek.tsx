"use client";

import { motion } from "framer-motion";
import { Crown, Sparkles, ChevronRight } from "lucide-react";
import { WHATSAPP_LINK, formatPrice } from "@/lib/utils";

export default function DessertOfTheWeek() {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-3xl p-8 md:p-12 luxury-shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-64 h-64 rounded-3xl bg-cream flex items-center justify-center relative">
                <span className="font-playfair text-6xl text-foreground/5">SK</span>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg">
                  <Crown size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-gold" />
                <span className="text-gold text-xs font-dm tracking-[0.2em] uppercase font-medium">
                  Dessert of the Week
                </span>
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Saffron Kunafa Crepe
              </h3>
              <p className="font-cormorant text-lg text-foreground/60 mb-4">
                East meets West in this fusion masterpiece. Silky saffron cream, crispy kunafa
                threads, and fragrant rose syrup wrapped in a delicate French crepe.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-playfair font-bold text-gold">
                  {formatPrice(375)}
                </span>
                <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full font-dm font-medium">
                  Chef&apos;s Special
                </span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-full font-dm text-sm hover:bg-gold transition-all duration-300"
              >
                Order This <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
