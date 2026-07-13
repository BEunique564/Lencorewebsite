"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_PRESETS } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_PRESETS.general}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: "spring", stiffness: 200 }}
      className="fixed bottom-20 md:bottom-16 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform animate-pulse-gold">
          <MessageCircle size={24} className="text-white" />
        </div>
        <div className="absolute -top-10 right-0 bg-white rounded-xl shadow-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <span className="text-xs font-dm text-foreground">Chat with us!</span>
        </div>
      </div>
    </motion.a>
  );
}
