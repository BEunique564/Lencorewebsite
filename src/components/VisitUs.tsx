"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, Car } from "lucide-react";
import { GOOGLE_MAPS_URL, PHONE_NUMBER, ADDRESS } from "@/lib/utils";

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-section-alt">
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
              Visit Us
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
            Your Table <span className="text-gradient">Awaits</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden h-[400px] lg:h-full min-h-[400px] luxury-shadow"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.5014!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="L'Encore Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-1">Address</h3>
                  <p className="text-sm text-foreground/60 font-dm">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-1">Opening Hours</h3>
                  <p className="text-sm text-foreground/60 font-dm">Open Daily: 6:00 PM — 12:30 AM</p>
                  <p className="text-xs text-foreground/40 font-dm mt-1">
                    Extended hours on weekends & holidays
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-1">Contact</h3>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-sm text-gold font-dm">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                  <Car size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-1">Parking</h3>
                  <p className="text-sm text-foreground/60 font-dm">
                    Ample parking at Ornet Park 3. Valet service available during peak hours.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-charcoal text-white px-8 py-4 rounded-full font-dm text-sm tracking-wide hover:bg-gold transition-all duration-500 hover:scale-[1.02] w-full"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
