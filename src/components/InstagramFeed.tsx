"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";

function Instagram({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { INSTAGRAM_URL } from "@/lib/utils";

const posts = [
  { id: 1, likes: 342, comments: 28, desc: "The Classic Brioche French Toast ✨" },
  { id: 2, likes: 521, comments: 45, desc: "NY Roll Season 🥐" },
  { id: 3, likes: 289, comments: 19, desc: "Saffron Kunafa Crepe 🌸" },
  { id: 4, likes: 467, comments: 37, desc: "Date Night at L'Encore 💫" },
  { id: 5, likes: 398, comments: 31, desc: "Butterfly Pea Lemonade Magic 🦋" },
  { id: 6, likes: 554, comments: 42, desc: "Pistachio Rose NY Roll 🌹" },
];

export default function InstagramFeed() {
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
              @lencore.ahm
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
            Follow Our <span className="text-gradient">Journey</span>
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-dm text-gold hover:gap-3 transition-all"
          >
            <Instagram size={18} />
            Follow @lencore.ahm
            <ExternalLink size={14} />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-cream-dark"
            >
              <span className="absolute inset-0 flex items-center justify-center font-playfair text-3xl text-foreground/5">
                {post.id}
              </span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-4 text-white text-sm font-dm">
                  <span className="flex items-center gap-1">
                    <Heart size={14} /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} /> {post.comments}
                  </span>
                </div>
                <p className="text-white text-xs font-dm text-center px-3">{post.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
