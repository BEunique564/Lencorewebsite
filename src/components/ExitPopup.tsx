"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dismissed) return;
      if (e.clientY < 5) {
        setShow(true);
      }
    };
    const handleLeave = () => {
      if (!dismissed) setShow(true);
    };

    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mousemove", handler);
    return () => {
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mousemove", handler);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShow(false);
                setDismissed(true);
              }}
              className="absolute top-4 right-4 text-foreground/30 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Gift size={28} className="text-gold" />
            </div>

            <h3 className="font-playfair text-2xl font-bold mb-3">
              Wait! Don&apos;t Miss This
            </h3>
            <p className="font-cormorant text-lg text-foreground/60 mb-2">
              Get <span className="text-gold font-semibold">10% OFF</span> your first visit
            </p>
            <p className="text-sm text-foreground/40 font-dm mb-8">
              Show this popup at the café and enjoy a special welcome gift.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white py-3 rounded-full font-dm text-sm hover:bg-[#20BD5C] transition-colors"
              >
                Claim on WhatsApp
              </a>
              <button
                onClick={() => {
                  setShow(false);
                  setDismissed(true);
                }}
                className="text-sm text-foreground/40 font-dm hover:text-foreground/60 transition-colors"
              >
                No thanks
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
