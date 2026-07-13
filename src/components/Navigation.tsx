"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Globe } from "lucide-react";
import { cn, scrollToSection, INSTAGRAM_URL } from "@/lib/utils";
import { translations } from "@/lib/data";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "blog", label: "Blog" },
  { id: "visit", label: "Visit Us" },
  { id: "faq", label: "FAQ" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState<"en" | "hi" | "gu">("en");
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = useCallback((id: string) => {
    scrollToSection(id);
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <button onClick={() => handleNav("home")} className="flex flex-col items-start">
            <span className="font-playfair text-2xl font-bold tracking-[0.15em] text-foreground">
              L&apos;ENCORE
            </span>
            <span className="text-[10px] tracking-[0.3em] text-gold font-inter uppercase">
              Dessert Café
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={cn(
                  "text-sm font-dm tracking-wide transition-all duration-300 relative group py-1",
                  activeSection === link.id
                    ? "text-gold font-medium"
                    : "text-foreground/65 hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-[1.5px] bg-gold transition-all duration-300",
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1 text-sm text-foreground/50 hover:text-foreground transition-colors font-dm p-2"
              >
                <Globe size={16} />
                <span className="uppercase text-xs">{lang}</span>
              </button>
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-xl luxury-shadow-lg border border-cream-dark overflow-hidden min-w-[120px]"
                  >
                    {(["en", "hi", "gu"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setShowLangMenu(false); }}
                        className={cn(
                          "block w-full px-4 py-2.5 text-sm text-left font-dm hover:bg-cream transition-colors",
                          lang === l && "text-gold font-medium"
                        )}
                      >
                        {l === "en" ? "English" : l === "hi" ? "हिन्दी" : "ગુજરાતી"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-gold transition-colors p-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="/reservation"
              className="flex items-center gap-2 bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-dm font-medium hover:bg-gold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/20"
            >
              <Calendar size={16} />
              Reserve Table
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    "text-2xl font-playfair tracking-wide",
                    activeSection === link.id ? "text-gold" : "text-foreground"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <a
                  href="/reservation"
                  className="flex items-center gap-2 bg-charcoal text-white px-8 py-3 rounded-full font-dm"
                >
                  <Calendar size={18} />
                  Reserve a Table
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm font-dm"
                >
                  Follow @lencore.ahm
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
