"use client";

import { motion } from "framer-motion";
import { QrCode, Download, UtensilsCrossed } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export default function QuickActions() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: QrCode,
              title: "Digital Menu",
              desc: "Scan QR at table",
              action: WHATSAPP_LINK,
            },
            {
              icon: Download,
              title: "Download Menu",
              desc: "PDF menu",
              action: "#",
            },
            {
              icon: SwiggyIcon,
              title: "Order Online",
              desc: "Swiggy / Zomato",
              action: "https://www.swiggy.com",
            },
            {
              icon: UtensilsCrossed,
              title: "Gift Cards",
              desc: "Give the gift of L'Encore",
              action: WHATSAPP_LINK,
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.action}
              target={item.action.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 luxury-border hover-gold text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-cream mx-auto flex items-center justify-center mb-3 group-hover:bg-gold/10 transition-colors">
                <item.icon size={22} className="text-gold" />
              </div>
              <h4 className="font-dm font-medium text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-foreground/40 font-dm">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SwiggyIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}
