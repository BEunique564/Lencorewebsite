"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { menuItems, categories } from "@/lib/data";
import { formatPrice, WHATSAPP_LINK } from "@/lib/utils";

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
              The Menu
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-6"
          >
            Crafted for <span className="text-gradient">Unforgettable</span> Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-cormorant text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Every dish is a masterpiece, made with the finest ingredients and served with love.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-dm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-charcoal text-white"
                  : "bg-cream text-foreground/60 hover:bg-cream-dark hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden luxury-shadow hover-gold cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-cream">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <div className="w-full h-full bg-cream-dark flex items-center justify-center">
                    <span className="font-playfair text-3xl text-foreground/10">{item.name[0]}</span>
                  </div>
                  {item.badge && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gold text-white text-xs font-dm px-3 py-1.5 rounded-full flex items-center gap-1">
                        <Star size={12} fill="white" />
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-playfair text-lg font-semibold group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-gold font-dm font-semibold text-lg whitespace-nowrap">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/50 font-dm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/30 font-dm uppercase tracking-wider">
                      {item.category}
                    </span>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gold font-dm hover:gap-2 transition-all"
                    >
                      Order <ChevronRight size={14} />
                    </a>
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
