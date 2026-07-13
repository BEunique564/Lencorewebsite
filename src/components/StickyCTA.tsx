"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Calendar } from "lucide-react";
import { WHATSAPP_PRESETS, PHONE_NUMBER, GOOGLE_MAPS_URL, scrollToSection } from "@/lib/utils";

export default function StickyCTA() {
  return (
    <>
      {/* Desktop bottom bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 hidden md:block"
      >
        <div className="bg-charcoal/95 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/60 text-xs font-dm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Open Now • 6 PM - 12:30 AM</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:+919876543210`}
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-dm transition-colors"
              >
                <Phone size={14} />
                Call
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-dm transition-colors"
              >
                <MapPin size={14} />
                Directions
              </a>
              <button
                onClick={() => scrollToSection("reservation")}
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-dm transition-colors"
              >
                <Calendar size={14} />
                Reserve
              </button>
              <a
                href={WHATSAPP_PRESETS.order}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-1.5 rounded-full text-xs font-dm hover:bg-[#20BD5C] transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile bottom bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      >
        <div className="bg-charcoal/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-around">
          <a href={`tel:+919876543210`} className="flex flex-col items-center gap-1 text-white/60">
            <Phone size={18} />
            <span className="text-[10px] font-dm">Call</span>
          </a>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white/60"
          >
            <MapPin size={18} />
            <span className="text-[10px] font-dm">Directions</span>
          </a>
          <a
            href={WHATSAPP_PRESETS.order}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[#25D366]"
          >
            <MessageCircle size={22} />
            <span className="text-[10px] font-dm">Order</span>
          </a>
          <button
            onClick={() => scrollToSection("reservation")}
            className="flex flex-col items-center gap-1 text-white/60"
          >
            <Calendar size={18} />
            <span className="text-[10px] font-dm">Book</span>
          </button>
        </div>
      </motion.div>
    </>
  );
}
