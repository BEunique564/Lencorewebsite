"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const images = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  alt: `L'Encore Gallery ${i + 1}`,
  h: ["h-64", "h-80", "h-72", "h-96", "h-60", "h-84"][i % 6],
}));

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
              Gallery
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            A Feast for <span className="text-gradient">the Eyes</span>
          </h1>
          <p className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto">
            Every corner of L&apos;Encore is designed to inspire.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="masonry-grid">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="masonry-item group cursor-pointer relative rounded-2xl overflow-hidden"
              onClick={() => setSelected(img.id)}
            >
              <div className={`${img.h} bg-cream-dark flex items-center justify-center`}>
                <span className="font-playfair text-4xl text-foreground/5">{img.id}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-white/70 hover:text-white">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full aspect-video bg-charcoal-light rounded-2xl flex items-center justify-center"
            >
              <span className="font-playfair text-4xl text-white/10">Gallery Image {selected}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}
