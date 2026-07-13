"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function FloatingReservation() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 5, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-40 hidden md:flex"
    >
      <button
        onClick={() => scrollToSection("visit")}
        className="flex items-center gap-2 bg-charcoal/90 text-white px-5 py-3 rounded-full font-dm text-xs shadow-lg hover:bg-gold transition-all duration-300 backdrop-blur-sm"
      >
        <Calendar size={14} />
        <span>Book a Table</span>
        <ChevronRight size={14} />
      </button>
    </motion.div>
  );
}
