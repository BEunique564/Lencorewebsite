"use client";

import { motion } from "framer-motion";
import { Leaf, Award, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "Sourced from the world's finest farms — Madagascar vanilla, Bronte pistachios, Belgian chocolate.",
  },
  {
    icon: Award,
    title: "European Craftsmanship",
    desc: "Recipes inspired by the finest patisseries in Paris, Milan, and New York, perfected for Ahmedabad.",
  },
  {
    icon: Heart,
    title: "Made with Passion",
    desc: "Every dessert is handcrafted to order, ensuring peak freshness and flavour in every bite.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    desc: "From the ambience to the plating, every detail is designed to make you feel extraordinary.",
  },
];

export default function BrandStory() {
  return (
    <section id="about" className="py-24 md:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Where Luxury
              <br />
              Meets <span className="text-gradient">Indulgence</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="font-cormorant text-lg text-foreground/70 leading-relaxed">
                L&apos;Encore was born from a simple yet ambitious vision — to bring the world&apos;s
                finest dessert experience to Ahmedabad. We believe that dessert is not just food;
                it&apos;s a celebration of life&apos;s sweetest moments.
              </p>
              <p className="font-cormorant text-lg text-foreground/70 leading-relaxed">
                Every dish at L&apos;Encore tells a story of craftsmanship, passion, and uncompromising
                quality. From sourcing the finest ingredients across continents to the meticulous
                art of plating, we leave nothing to chance.
              </p>
              <p className="font-cormorant text-lg text-foreground/70 leading-relaxed">
                Our European-inspired desserts, set within a luxuriously designed space, offer
                more than taste — they offer an experience. One that lingers long after the last bite.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 luxury-shadow hover-gold group"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <f.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-foreground/60 font-dm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
