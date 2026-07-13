"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogPreview() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section id="blog" className="py-24 md:py-32 bg-section-alt">
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
              Journal
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold"
          >
            Stories & <span className="text-gradient">Insights</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredSlug(post.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className="group bg-white rounded-2xl overflow-hidden luxury-shadow hover-gold"
            >
              <div className="h-48 bg-cream-dark relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center font-playfair text-4xl text-foreground/5">
                  {post.title[0]}
                </span>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-gold font-dm font-medium bg-gold/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/30 font-dm">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/50 font-dm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-gold font-dm group-hover:gap-2 transition-all">
                  Read More <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
