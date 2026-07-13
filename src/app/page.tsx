"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import FeaturedMenu from "@/components/FeaturedMenu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisitUs from "@/components/VisitUs";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import Newsletter from "@/components/Newsletter";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingReservation from "@/components/FloatingReservation";
import StickyCTA from "@/components/StickyCTA";

const ExitPopup = dynamic(() => import("@/components/ExitPopup"), { ssr: false });
const ChatBot = dynamic(() => import("@/components/ChatBot"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustSection />
      <FeaturedMenu />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
      <VisitUs />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <FloatingReservation />
      <StickyCTA />
      <ExitPopup />
      <ChatBot />
    </main>
  );
}
