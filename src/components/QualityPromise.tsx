"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Heart, Clock } from "lucide-react";

const promises = [
  {
    icon: Sparkles,
    title: "Premium Ingredients Only",
    desc: "Madagascar vanilla, Bronte pistachios, Valrhona chocolate, organic dairy. We never compromise.",
  },
  {
    icon: Heart,
    title: "Made Fresh to Order",
    desc: "Every dish is crafted the moment you order. No pre-made, no reheated. Peak freshness guaranteed.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    desc: "If your dessert doesn't exceed expectations, we'll make it right. That's our promise.",
  },
  {
    icon: Clock,
    title: "Served in 12 Minutes",
    desc: "Luxury doesn't have to wait. Our kitchen is optimised for both speed and perfection.",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-24 md:py-32">
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
              Our Promise
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
            The L&apos;Encore <span className="text-gradient">Standard</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 p-6 bg-white rounded-2xl luxury-border hover-gold group"
            >
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                <p.icon size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-foreground/50 font-dm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
