"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=500&fit=crop&q=80", alt: "French Toast close-up", category: "desserts", h: "h-80" },
  { id: 2, url: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop&q=80", alt: "NY Roll golden layers", category: "desserts", h: "h-64" },
  { id: 3, url: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=700&fit=crop&q=80", alt: "L'Encore Interior", category: "ambience", h: "h-96" },
  { id: 4, url: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=600&h=500&fit=crop&q=80", alt: "Saffron Kunafa Crêpe", category: "desserts", h: "h-72" },
  { id: 5, url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&q=80", alt: "Coffee Art", category: "drinks", h: "h-64" },
  { id: 6, url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=500&fit=crop&q=80", alt: "L'Encore Ambience", category: "ambience", h: "h-80" },
  { id: 7, url: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=500&fit=crop&q=80", alt: "Pistachio Rose NY Roll", category: "desserts", h: "h-72" },
  { id: 8, url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop&q=80", alt: "Table Setup", category: "ambience", h: "h-96" },
  { id: 9, url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&q=80", alt: "Signature Latte", category: "drinks", h: "h-64" },
  { id: 10, url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=500&fit=crop&q=80", alt: "Nutella Lava Cake", category: "desserts", h: "h-80" },
  { id: 11, url: "https://images.unsplash.com/photo-1621263764928-df1444c5e959?w=600&h=500&fit=crop&q=80", alt: "Butterfly Pea Lemonade", category: "drinks", h: "h-72" },
  { id: 12, url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80", alt: "Biscoff French Toast", category: "desserts", h: "h-64" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-section-alt">
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
              Gallery
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-5"
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
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="masonry-item group cursor-pointer relative rounded-2xl overflow-hidden"
              onClick={() => setSelected(img.id)}
            >
              <div className={`${img.h} relative overflow-hidden`}>
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
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

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
              onClick={() => setSelected(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelected(null)}
              >
                <X size={28} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={galleryImages.find((g) => g.id === selected)?.url}
                alt={galleryImages.find((g) => g.id === selected)?.alt}
                className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
