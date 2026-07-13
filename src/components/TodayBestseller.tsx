"use client";

import { motion } from "framer-motion";
import { Flame, Star, Clock, ChevronRight } from "lucide-react";
import { WHATSAPP_LINK, formatPrice } from "@/lib/utils";

export default function TodayBestseller() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-charcoal to-charcoal-light rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/3 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame size={18} className="text-gold" />
                <span className="text-gold text-xs font-dm tracking-[0.2em] uppercase font-medium">
                  Today&apos;s Bestseller
                </span>
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Classic Brioche
                <br />
                French Toast
              </h3>
              <p className="font-cormorant text-lg text-white/60 mb-6">
                Golden brioche soaked in Madagascar vanilla custard, topped with fresh
                berries and real maple syrup. The one that started it all.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-playfair font-bold text-gold">
                  {formatPrice(345)}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-xs text-white/40 font-dm">4.9 • 287 reviews</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40 font-dm">
                <Clock size={14} />
                <span>Available all evening</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <div className="w-full md:w-64 h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="font-playfair text-5xl text-white/10">FT</span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full font-dm text-sm hover:bg-gold-dark transition-colors"
              >
                Order Now <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
