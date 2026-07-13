import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { restaurantSchema, faqSchema, reviewSchema, breadcrumbSchema } from "@/lib/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "L'Encore | Luxury Dessert Café Ahmedabad | French Toasts • NY Rolls • Crepes",
    template: "%s | L'Encore - Premium Dessert Café",
  },
  description:
    "Ahmedabad's most elegant dessert destination. Premium French Toasts, NY Rolls & Crepes crafted for unforgettable evenings. Located at Sindhu Bhavan Road.",
  keywords: [
    "luxury dessert cafe ahmedabad",
    "dessert cafe sindhu bhavan",
    "best french toast ahmedabad",
    "best crepes ahmedabad",
    "ny rolls ahmedabad",
    "dessert near me",
    "cafe ahmedabad",
    "luxury cafe ahmedabad",
    "instagrammable cafe ahmedabad",
    "date night cafe ahmedabad",
    "premium dessert ahmedabad",
    "french toast sindhu bhavan",
    "ny rolls sindhu bhavan",
    "crepe cafe ahmedabad",
  ],
  authors: [{ name: "L'Encore" }],
  creator: "L'Encore",
  publisher: "L'Encore",
  metadataBase: new URL("https://lencore.in"),
  alternates: {
    canonical: "https://lencore.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lencore.in",
    siteName: "L'Encore",
    title: "L'Encore | Luxury Dessert Café Ahmedabad",
    description:
      "Ahmedabad's most elegant dessert destination. Premium French Toasts, NY Rolls & Crepes crafted for unforgettable evenings.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L'Encore - Premium Dessert Café Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Encore | Luxury Dessert Café Ahmedabad",
    description:
      "Premium French Toasts, NY Rolls & Crepes crafted for unforgettable evenings.",
    images: ["/images/og-image.jpg"],
    creator: "@lencore.ahm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F9F5EC" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              restaurantSchema,
              faqSchema,
              reviewSchema,
              breadcrumbSchema,
            ]),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
