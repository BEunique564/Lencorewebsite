"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ArrowRight, Clock } from "lucide-react";
import { WHATSAPP_LINK, GOOGLE_MAPS_URL, PHONE_NUMBER, ADDRESS, TIMING } from "@/lib/utils";

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-warm-ivory">
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
              Visit Us
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
            Find <span className="text-gradient">L&apos;Encore</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-2xl overflow-hidden luxury-shadow-lg h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.5!3d23.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzEyLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl p-6 luxury-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-base font-semibold mb-1">Address</h3>
                  <p className="text-sm text-foreground/50 font-dm leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 luxury-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-base font-semibold mb-1">Hours</h3>
                  <p className="text-sm text-foreground/50 font-dm">{TIMING}</p>
                  <p className="text-xs text-foreground/35 font-dm mt-1">Open daily including weekends</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury btn-luxury-primary flex-1"
              >
                <MapPin size={16} />
                Get Directions
                <ArrowRight size={14} />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-luxury btn-luxury-outline flex-1"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury btn-luxury-whatsapp flex-1"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
