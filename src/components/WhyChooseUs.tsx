"use client";

import { motion } from "framer-motion";
import { Leaf, UtensilsCrossed, Camera, Heart, Sparkles, Star } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "Only the finest — Madagascar vanilla, Bronte pistachios, Belgian chocolate.",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Taste",
    desc: "European craftsmanship meets Indian soul. Every bite is an experience.",
  },
  {
    icon: Camera,
    title: "Instagram-Worthy",
    desc: "Every dish is a work of art. Every corner, a photo opportunity.",
  },
  {
    icon: Heart,
    title: "Perfect Date Spot",
    desc: "Romantic ambience, intimate corners, and desserts made for sharing.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    desc: "From the cutlery to the service, everything is designed to delight.",
  },
  {
    icon: Star,
    title: "Award-Worthy",
    desc: "Ahmedabad's highest-rated dessert café. 4.9 stars and counting.",
  },
];

export default function WhyChooseUs() {
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
              Why L&apos;Encore
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
            Six Reasons to <span className="text-gradient">Fall in Love</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-8 rounded-3xl luxury-border hover-gold group bg-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-cream mx-auto flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <r.icon size={28} className="text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">{r.title}</h3>
              <p className="text-sm text-foreground/50 font-dm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
