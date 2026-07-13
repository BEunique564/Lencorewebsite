"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail, ArrowUp } from "lucide-react";

function Instagram({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { INSTAGRAM_URL, WHATSAPP_LINK, GOOGLE_MAPS_URL, EMAIL, ADDRESS, scrollToSection } from "@/lib/utils";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Menu", id: "menu" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "reviews" },
  { label: "Blog", id: "blog" },
  { label: "FAQ", id: "faq" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-playfair text-2xl font-bold tracking-[0.1em] mb-2">
              L&apos;ENCORE
            </h3>
            <p className="text-[10px] tracking-[0.3em] text-gold font-inter uppercase mb-6">
              Dessert Café
            </p>
            <p className="text-sm text-white/50 font-dm leading-relaxed">
              Ahmedabad&apos;s most elegant dessert destination. Where luxury meets indulgence.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-sm font-semibold tracking-[0.15em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/50 hover:text-gold font-dm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-sm font-semibold tracking-[0.15em] uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-gold font-dm transition-colors"
                >
                  <Instagram size={16} />
                  @lencore.ahm
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-gold font-dm transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-gold font-dm transition-colors"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-gold font-dm transition-colors"
                >
                  <Mail size={16} />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-sm font-semibold tracking-[0.15em] uppercase mb-6">
              Visit Us
            </h4>
            <p className="text-sm text-white/50 font-dm leading-relaxed mb-4">{ADDRESS}</p>
            <p className="text-sm text-white/50 font-dm">Open Daily: 5 PM — 11 PM</p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-white/40"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-white/40"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-white/40"
                aria-label="Google Maps"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-dm">
            &copy; {new Date().getFullYear()} L&apos;Encore. All rights reserved. Crafted with love in Ahmedabad.
          </p>
          <button
            onClick={() => scrollToSection("home")}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all text-white/40"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
