"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, alt: "L'Encore French Toast", category: "desserts", h: "h-80" },
  { id: 2, alt: "NY Roll close-up", category: "desserts", h: "h-64" },
  { id: 3, alt: "L'Encore Interior", category: "ambience", h: "h-96" },
  { id: 4, alt: "Saffron Kunafa Crepe", category: "desserts", h: "h-72" },
  { id: 5, alt: "Coffee Art", category: "drinks", h: "h-64" },
  { id: 6, alt: "L'Encore Ambience", category: "ambience", h: "h-80" },
  { id: 7, alt: "Pistachio Rose NY Roll", category: "desserts", h: "h-72" },
  { id: 8, alt: "L'Encore Exterior", category: "ambience", h: "h-96" },
  { id: 9, alt: "Signature Latte", category: "drinks", h: "h-64" },
  { id: 10, alt: "Molten Lava Cake", category: "desserts", h: "h-80" },
  { id: 11, alt: "Butterfly Pea Lemonade", category: "drinks", h: "h-72" },
  { id: 12, alt: "Table Setup", category: "ambience", h: "h-64" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-section-alt">
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
              Gallery
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
            A Feast for <span className="text-gradient">the Eyes</span>
          </motion.h2>
        </div>

        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="masonry-item group cursor-pointer relative rounded-2xl overflow-hidden"
              onClick={() => setSelected(img.id)}
            >
              <div className={`${img.h} bg-cream-dark flex items-center justify-center relative`}>
                <span className="font-playfair text-4xl text-foreground/5">{img.alt[0]}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
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
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full aspect-video bg-charcoal-light rounded-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-playfair text-6xl text-white/10">
                {galleryImages.find((g) => g.id === selected)?.alt}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
