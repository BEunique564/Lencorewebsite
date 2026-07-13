"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  const review = reviews[current];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-warm-ivory">
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
              Reviews
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
            What Our Guests <span className="text-gradient">Say</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-6 left-0 text-gold/10">
            <Quote size={80} />
          </div>

          <div className="min-h-[280px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="font-cormorant text-xl md:text-2xl text-foreground/75 leading-relaxed mb-8 italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center">
                    <span className="font-playfair text-lg text-gold font-semibold">{review.name[0]}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-dm font-medium text-sm">{review.name}</p>
                    <p className="text-xs text-foreground/40 font-dm">
                      {review.source} • {review.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-6" : "bg-foreground/15 w-2"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
