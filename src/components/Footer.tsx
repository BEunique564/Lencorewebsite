"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail, ArrowUp, Phone } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_LINK, GOOGLE_MAPS_URL, EMAIL, ADDRESS, PHONE_NUMBER, scrollToSection } from "@/lib/utils";

function Instagram({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
    <footer className="bg-charcoal text-white pt-24 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-12 mb-20">
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold tracking-[0.1em] mb-2">
              L&apos;ENCORE
            </h3>
            <p className="text-[10px] tracking-[0.3em] text-gold font-inter uppercase mb-6">
              Dessert Café
            </p>
            <p className="text-sm text-white/45 font-dm leading-relaxed mb-6 max-w-xs">
              Ahmedabad&apos;s most elegant dessert destination. Where luxury meets indulgence.
            </p>
            <div className="w-full h-32 rounded-xl overflow-hidden bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.5!3d23.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzEyLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(1) brightness(0.6)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="L'Encore Location"
              />
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-sm font-semibold tracking-[0.15em] uppercase mb-7">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/45 hover:text-gold font-dm transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-sm font-semibold tracking-[0.15em] uppercase mb-7">
              Connect
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-gold font-dm transition-colors duration-300"
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
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-gold font-dm transition-colors duration-300"
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
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-gold font-dm transition-colors duration-300"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-gold font-dm transition-colors duration-300"
                >
                  <Mail size={16} />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-gold font-dm transition-colors duration-300"
                >
                  <Phone size={16} />
                  {PHONE_NUMBER}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-sm font-semibold tracking-[0.15em] uppercase mb-7">
              Visit Us
            </h4>
            <p className="text-sm text-white/45 font-dm leading-relaxed mb-3">{ADDRESS}</p>
            <p className="text-sm text-white/45 font-dm mb-6">Open Daily: 6 PM — 12:30 AM</p>
            <a
              href="/reservation"
              className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full font-dm text-sm font-medium hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Reserve a Table
            </a>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-white/35"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-white/35"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-white/35"
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
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-white/35"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
