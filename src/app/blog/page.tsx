"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
              Journal
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Stories</span>
          </h1>
          <p className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto">
            Insights, stories, and guides from L&apos;Encore.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden luxury-shadow hover-gold"
            >
              <div className="grid md:grid-cols-3 gap-0">
                <div className="h-48 md:h-auto bg-cream-dark relative">
                  <span className="absolute inset-0 flex items-center justify-center font-playfair text-5xl text-foreground/5">
                    {post.title[0]}
                  </span>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs text-gold font-dm font-medium bg-gold/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/40 font-dm flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-foreground/40 font-dm flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="font-playfair text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/60 font-dm leading-relaxed mb-6">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-gold font-dm group-hover:gap-3 transition-all cursor-pointer">
                    Read Full Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
