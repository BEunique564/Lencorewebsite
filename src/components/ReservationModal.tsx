"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, MessageSquare } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🍽️ *Reservation Request*\n\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n📅 Date: ${form.date}\n🕐 Time: ${form.time}\n👥 Guests: ${form.guests}\n🎉 Occasion: ${form.occasion || "None"}\n💬 Message: ${form.message || "None"}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-playfair text-2xl font-bold">Reserve a Table</h3>
                <p className="text-sm text-foreground/50 font-dm mt-1">
                  We&apos;ll confirm via WhatsApp
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-cream-dark transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1 block">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-dm text-foreground/50 mb-1 block flex items-center gap-1">
                    <Calendar size={12} /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
                  />
                </div>
                <div>
                  <label className="text-xs font-dm text-foreground/50 mb-1 block flex items-center gap-1">
                    <Clock size={12} /> Time
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
                  >
                    <option value="">Select</option>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                    <option>9:30 PM</option>
                    <option>10:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-dm text-foreground/50 mb-1 block flex items-center gap-1">
                    <Users size={12} /> Guests
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-dm text-foreground/50 mb-1 block">Occasion</label>
                  <select
                    value={form.occasion}
                    onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm"
                  >
                    <option value="">None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Date Night</option>
                    <option>Celebration</option>
                    <option>Business</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-dm text-foreground/50 mb-1 block flex items-center gap-1">
                  <MessageSquare size={12} /> Special Requests
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm resize-none"
                  placeholder="Any special requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-charcoal text-white py-4 rounded-full font-dm text-sm tracking-wide hover:bg-gold transition-all duration-500 hover:scale-[1.01]"
              >
                Confirm Reservation via WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
