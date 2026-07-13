"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { menuItems, categories } from "@/lib/data";
import { formatPrice, WHATSAPP_PRESETS } from "@/lib/utils";

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-warm-ivory">
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
              The Menu
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
            Crafted for <span className="text-gradient">Unforgettable</span> Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-cormorant text-lg text-foreground/50 max-w-xl mx-auto"
          >
            Every dish is a masterpiece, made with the finest ingredients and served with love.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-2.5 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-dm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-charcoal text-white shadow-lg shadow-charcoal/10"
                  : "bg-white text-foreground/55 hover:bg-cream hover:text-foreground luxury-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group bg-white rounded-2xl overflow-hidden luxury-shadow hover-lift cursor-pointer border border-transparent hover:border-gold/20"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {item.badge && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-gold/90 backdrop-blur-sm text-white text-[11px] font-dm font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                        <Star size={11} fill="white" />
                        {item.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={WHATSAPP_PRESETS.order}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-dm font-medium px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-gold hover:text-white transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-playfair text-base font-semibold group-hover:text-gold transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-gold font-dm font-semibold text-base whitespace-nowrap">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/45 font-dm leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-foreground/30 font-dm uppercase tracking-[0.15em]">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gold font-dm opacity-0 group-hover:opacity-100 transition-opacity">
                      Order <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
