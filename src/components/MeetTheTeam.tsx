"use client";

import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";

const team = [
  {
    name: "Chef Arjun",
    role: "Head Pastry Chef",
    bio: "Trained at Le Cordon Bleu, Paris. 12 years of patisserie expertise. Passionate about blending European techniques with Indian flavours.",
  },
  {
    name: "Priya Mehta",
    role: "Founder & Creative Director",
    bio: "Visionary behind L'Encore's luxury experience. Obsessed with details — from the plating to the playlist.",
  },
  {
    name: "Rohit Sharma",
    role: "Barista & Beverage Artist",
    bio: "Latte art champion with a knack for creating Instagram-worthy drinks. His Butterfly Pea Lemonade is legendary.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-24 md:py-32 bg-section-alt">
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
              The People
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
            Meet the <span className="text-gradient">Artisans</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto"
          >
            The passionate people behind every extraordinary dessert.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 luxury-shadow text-center group hover-gold"
            >
              <div className="w-20 h-20 rounded-full bg-cream mx-auto flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <User size={32} className="text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-xs text-gold font-dm tracking-wider uppercase mb-4">
                {member.role}
              </p>
              <p className="text-sm text-foreground/50 font-dm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
