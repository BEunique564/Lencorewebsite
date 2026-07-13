"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { menuItems, categories } from "@/lib/data";
import { formatPrice, WHATSAPP_LINK } from "@/lib/utils";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
              The Menu
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Menu</span>
          </h1>
          <p className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto mb-8">
            Every dish is a masterpiece, made with the finest ingredients and served with love.
          </p>

          <div className="max-w-md mx-auto relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search our menu..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-dm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-charcoal text-white"
                    : "bg-white text-foreground/60 hover:bg-cream-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white rounded-3xl overflow-hidden luxury-shadow hover-gold"
            >
              <div className="h-48 bg-cream-dark relative">
                <span className="absolute inset-0 flex items-center justify-center font-playfair text-3xl text-foreground/5">
                  {item.name[0]}
                </span>
                {item.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-white text-xs font-dm px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star size={12} fill="white" /> {item.badge}
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
                <p className="text-sm text-foreground/50 font-dm leading-relaxed mb-4">
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
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-foreground/40 font-dm">No items found. Try a different search.</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
