"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MessageSquare, Send, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER, GOOGLE_MAPS_URL } from "@/lib/utils";

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🍽️ *Table Reservation*\n\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n📧 Email: ${form.email || "N/A"}\n📅 Date: ${form.date}\n🕐 Time: ${form.time}\n👥 Guests: ${form.guests}\n🎉 Occasion: ${form.occasion || "None"}\n💬 Message: ${form.message || "None"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-dm tracking-[0.25em] uppercase">
              Reservations
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Reserve Your <span className="text-gradient">Table</span>
          </h1>
          <p className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto">
            Book your perfect evening at L&apos;Encore.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white rounded-3xl p-12 luxury-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-green-500" />
            </div>
            <h2 className="font-playfair text-2xl font-bold mb-3">Reservation Confirmed!</h2>
            <p className="text-foreground/60 font-dm mb-6">
              We&apos;ll confirm your booking via WhatsApp shortly. Check your phone!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-charcoal text-white px-6 py-3 rounded-full font-dm text-sm hover:bg-gold transition-colors"
            >
              Make Another Reservation
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 luxury-shadow space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1.5 block">Full Name *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1.5 block">Phone *</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div>
              <label className="text-xs font-dm text-foreground/50 mb-1.5 block">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm" placeholder="your@email.com" />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1.5 block flex items-center gap-1"><Calendar size={12} /> Date *</label>
                <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm" />
              </div>
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1.5 block flex items-center gap-1"><Clock size={12} /> Time *</label>
                <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm">
                  <option value="">Select</option>
                  {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1.5 block flex items-center gap-1"><Users size={12} /> Guests</label>
                <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-dm text-foreground/50 mb-1.5 block">Occasion</label>
              <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm">
                <option value="">None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Date Night</option>
                <option>Celebration</option>
                <option>Business Meeting</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-dm text-foreground/50 mb-1.5 block flex items-center gap-1"><MessageSquare size={12} /> Special Requests</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm resize-none" placeholder="Dietary requirements, seating preference, etc." />
            </div>

            <button type="submit" className="w-full bg-charcoal text-white py-4 rounded-full font-dm text-sm tracking-wide hover:bg-gold transition-all duration-500 flex items-center justify-center gap-2">
              <Send size={16} />
              Confirm via WhatsApp
            </button>

            <p className="text-center text-xs text-foreground/30 font-dm">
              You&apos;ll be redirected to WhatsApp to confirm your reservation.
            </p>
          </form>
        )}
      </div>
      <Footer />
    </main>
  );
}
