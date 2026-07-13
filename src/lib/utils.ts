import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20L%27Encore!%20I%27d%20like%20to%20know%20more.`;
export const INSTAGRAM_URL = "https://www.instagram.com/lencore.ahm";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/nSX7yNXqDAo8DhcN9";
export const PHONE_NUMBER = "+91 98765 43210";
export const EMAIL = "hello@lencore.in";
export const ADDRESS = "Ornet Park 3, Sindhu Bhavan Road, Ahmedabad";

export function formatPrice(price: number): string {
  return `₹${price}`;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
