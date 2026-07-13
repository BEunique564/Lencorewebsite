"use client";

import { motion } from "framer-motion";
import { Star, Users, Clock, Award, Leaf, Truck } from "lucide-react";

const stats = [
  { icon: Star, value: "4.9", label: "Google Rating", sub: "287+ Reviews" },
  { icon: Users, value: "10,000+", label: "Happy Customers", sub: "And counting" },
  { icon: Clock, value: "3+", label: "Years of Excellence", sub: "Since 2021" },
  { icon: Award, value: "20+", label: "Signature Dishes", sub: "Handcrafted daily" },
  { icon: Leaf, value: "100%", label: "Premium Ingredients", sub: "No shortcuts" },
  { icon: Truck, value: "Same Day", label: "WhatsApp Delivery", sub: "Quick & fresh" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-20 bg-white border-y border-cream-dark/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <p className="text-xs font-dm tracking-[0.25em] text-gold uppercase font-medium">
            Trusted by Ahmedabad
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-cream mx-auto flex items-center justify-center mb-3 group-hover:bg-gold/10 transition-colors duration-300">
                <stat.icon size={20} className="text-gold" />
              </div>
              <p className="font-playfair text-2xl font-bold mb-0.5">{stat.value}</p>
              <p className="text-xs font-dm font-medium text-foreground/65">{stat.label}</p>
              <p className="text-[10px] text-foreground/35 font-dm">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
