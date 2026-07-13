"use client";

import { motion } from "framer-motion";
import { BookOpen, Coffee, Cake, IceCream, Star } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const guides = [
  {
    icon: Coffee,
    title: "Perfect Coffee Pairing",
    desc: "Our Signature Latte pairs beautifully with French Toast. The vanilla notes complement the custard perfectly.",
    cta: "Ask our barista",
    wa: whatsappLink("Hi! What coffee pairs best with French Toast?"),
  },
  {
    icon: Cake,
    title: "French Toast Guide",
    desc: "Best enjoyed warm, within 5 minutes of serving. Start with Classic, then explore Biscoff and Nutella.",
    cta: "Order French Toast",
    wa: whatsappLink("Hi! I'd like to order a French Toast."),
  },
  {
    icon: IceCream,
    title: "NY Roll Temperature",
    desc: "NY Rolls are best at room temperature. The crispy exterior and soft interior are at their peak within 15 minutes.",
    cta: "Try a NY Roll",
    wa: whatsappLink("Hi! I want to try the NY Roll."),
  },
  {
    icon: Star,
    title: "Dessert of the Week",
    desc: "Our chefs create a new special every week. Ask us what's trending — it's always a surprise.",
    cta: "What's new?",
    wa: whatsappLink("Hi! What's your Dessert of the Week?"),
  },
];

export default function DessertGuide() {
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
              Dessert Guide
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
            How to <span className="text-gradient">Enjoy</span> L&apos;Encore
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 luxury-border hover-gold group"
            >
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <g.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">{g.title}</h3>
              <p className="text-sm text-foreground/50 font-dm leading-relaxed mb-4">{g.desc}</p>
              <a
                href={g.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold font-dm hover:underline"
              >
                {g.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
