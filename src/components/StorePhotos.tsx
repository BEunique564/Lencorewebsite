"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/utils";

const photos = [
  { id: 1, label: "Interior Ambience" },
  { id: 2, label: "Dessert Plating" },
  { id: 3, label: "Evening Vibes" },
  { id: 4, label: "Coffee Art" },
  { id: 5, label: "Celebration Setup" },
  { id: 6, label: "Fresh Pastries" },
  { id: 7, label: "Date Night Corner" },
  { id: 8, label: "Outdoor Seating" },
];

export default function StorePhotos() {
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
              Our Space
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
            Step Inside <span className="text-gradient">L&apos;Encore</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto"
          >
            Every corner designed to be felt, not just seen.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group aspect-[4/3] rounded-2xl bg-cream-dark relative overflow-hidden cursor-pointer hover-gold"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Camera size={20} className="text-foreground/10" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-dm">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-dm text-gold hover:gap-3 transition-all"
          >
            See more on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
