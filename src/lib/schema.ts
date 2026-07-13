export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "L'Encore",
  description:
    "Ahmedabad's most elegant dessert destination. Premium French Toasts, NY Rolls & Crepes crafted for unforgettable evenings.",
  url: "https://lencore.in",
  telephone: "+919876543210",
  email: "hello@lencore.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ornet Park 3, Sindhu Bhavan Road",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380054",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0225,
    longitude: 72.5014,
  },
  image: ["https://lencore.in/images/og-image.jpg"],
  logo: "https://lencore.in/images/logo.png",
  priceRange: "$$",
  servesCuisine: ["Desserts", "French", "Café", "Pastries"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "17:00",
    closes: "23:00",
  },
  menu: "https://lencore.in/menu",
  acceptsReservations: "True",
  hasMenu: {
    "@type": "Menu",
    name: "L'Encore Dessert Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "French Toasts",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Classic Brioche French Toast",
            description:
              "Golden brioche soaked in Madagascar vanilla custard, topped with fresh berries and maple syrup",
            offers: {
              "@type": "Offer",
              price: "345",
              priceCurrency: "INR",
            },
          },
          {
            "@type": "MenuItem",
            name: "Biscoff Caramel French Toast",
            description:
              "Thick-cut brioche with Biscoff spread, caramelised banana, and speculoos crumble",
            offers: {
              "@type": "Offer",
              price: "395",
              priceCurrency: "INR",
            },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "NY Rolls",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Original NY Roll",
            description:
              "Crispy croissant-dough hybrid with cream cheese filling and caramelised sugar crust",
            offers: {
              "@type": "Offer",
              price: "295",
              priceCurrency: "INR",
            },
          },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "287",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/lencore.ahm",
    "https://www.facebook.com/lencore.ahm",
  ],
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "L'Encore",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "287",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Absolutely stunning café! The French Toast is hands down the best I've had in Ahmedabad.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arjun Mehta" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "L'Encore has set a new standard for dessert cafés. The NY Rolls are divine.",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are L'Encore's opening hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're open daily in the evenings from 5:00 PM to 11:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can reserve a table through WhatsApp or our online reservation form.",
      },
    },
    {
      "@type": "Question",
      name: "Is parking available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, there is ample parking available at Ornet Park 3. We also have valet service available during peak hours.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lencore.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Menu",
      item: "https://lencore.in/menu",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gallery",
      item: "https://lencore.in/gallery",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Blog",
      item: "https://lencore.in/blog",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Reservation",
      item: "https://lencore.in/reservation",
    },
  ],
};
