import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "919876543210";
export const INSTAGRAM_URL = "https://www.instagram.com/lencore.ahm";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/nSX7yNXqDAo8DhcN9";
export const PHONE_NUMBER = "+91 98765 43210";
export const EMAIL = "hello@lencore.in";
export const ADDRESS = "Ornet Park, near Crush Coffee, Nr. Taj Hotel, Sindhu Bhavan Marg, Ahmedabad";
export const TIMING = "6:00 PM – 12:30 AM";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_PRESETS = {
  general: whatsappLink("Hi L'Encore! I'd love to know more about your desserts."),
  menu: whatsappLink("Hi! Can you share today's menu and any specials?"),
  reservation: whatsappLink("Hi! I'd like to reserve a table for a special occasion."),
  birthday: whatsappLink("Hi! I want to plan a birthday celebration at L'Encore. Can you help?"),
  anniversary: whatsappLink("Hi! I'm planning an anniversary dinner. What packages do you offer?"),
  order: whatsappLink("Hi! I'd like to place a takeaway order."),
  catering: whatsappLink("Hi! Do you offer catering for events? I'd like to know more."),
  feedback: whatsappLink("Hi! I visited L'Encore recently and wanted to share my feedback."),
  directions: whatsappLink("Hi! Can you share directions to your café?"),
};

export const WHATSAPP_LINK = WHATSAPP_PRESETS.general;

export function formatPrice(price: number): string {
  return `₹${price}`;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
