"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-section-alt">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase font-medium">
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

        <div className="grid md:grid-cols-3 gap-7">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden luxury-shadow hover-lift cursor-pointer border border-transparent hover:border-gold/20"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-gold/90 backdrop-blur-sm text-white text-[11px] font-dm font-medium px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-charcoal w-9 h-9 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-foreground/35 font-dm flex items-center gap-1">
                    <Clock size={12} />
                    5 min read
                  </span>
                  <span className="text-foreground/15">·</span>
                  <span className="text-xs text-foreground/35 font-dm">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/45 font-dm line-clamp-2 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-gold font-dm font-medium group-hover:gap-2.5 transition-all">
                  Read More <ArrowUpRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
