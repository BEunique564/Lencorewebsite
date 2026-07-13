"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import BrandStory from "@/components/BrandStory";
import FeaturedMenu from "@/components/FeaturedMenu";
import TodayBestseller from "@/components/TodayBestseller";
import DessertOfTheWeek from "@/components/DessertOfTheWeek";
import QualityPromise from "@/components/QualityPromise";
import DessertGuide from "@/components/DessertGuide";
import Gallery from "@/components/Gallery";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import MeetTheTeam from "@/components/MeetTheTeam";
import CustomerPhotoWall from "@/components/CustomerPhotoWall";
import StorePhotos from "@/components/StorePhotos";
import VisitUs from "@/components/VisitUs";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import Newsletter from "@/components/Newsletter";
import QuickActions from "@/components/QuickActions";
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
      <BrandStory />
      <FeaturedMenu />
      <TodayBestseller />
      <DessertOfTheWeek />
      <QualityPromise />
      <DessertGuide />
      <QuickActions />
      <Gallery />
      <StorePhotos />
      <InstagramFeed />
      <Testimonials />
      <WhyChooseUs />
      <MeetTheTeam />
      <CustomerPhotoWall />
      <VisitUs />
      <FAQ />
      <BlogPreview />
      <Newsletter />
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
