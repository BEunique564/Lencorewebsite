"use client";

import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/utils";

const photos = [
  { id: 1, name: "Priya", text: "Best French Toast ever!" },
  { id: 2, name: "Arjun", text: "NY Roll obsession begins" },
  { id: 3, name: "Neha", text: "Date night perfection" },
  { id: 4, name: "Karan", text: "Pistachio Rose is divine" },
  { id: 5, name: "Sneha", text: "Instagrammable desserts" },
  { id: 6, name: "Riya", text: "Luxury in every bite" },
];

export default function CustomerPhotoWall() {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
              Customer Love
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl font-bold"
          >
            You <span className="text-gradient">Beautiful</span> People
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group aspect-square rounded-2xl bg-white luxury-border overflow-hidden relative cursor-pointer hover-gold"
            >
              <div className="w-full h-full flex items-center justify-center bg-cream">
                <Camera size={24} className="text-foreground/10" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div>
                  <p className="text-white text-xs font-dm font-medium">{photo.name}</p>
                  <p className="text-white/70 text-[10px] font-dm flex items-center gap-1">
                    <Heart size={10} className="text-red-400 fill-red-400" />
                    {photo.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-dm text-gold hover:gap-3 transition-all"
          >
            Tag @lencore.ahm to be featured
          </a>
        </div>
      </div>
    </section>
  );
}
