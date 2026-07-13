export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  tags?: string[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  keywords: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: "ft-001",
    name: "Classic Brioche French Toast",
    description:
      "Golden brioche soaked in Madagascar vanilla custard, topped with fresh berries and maple syrup",
    price: 345,
    category: "French Toasts",
    image: "/images/french-toast-classic.jpg",
    badge: "Bestseller",
    tags: ["vegetarian", "bestseller"],
  },
  {
    id: "ft-002",
    name: "Biscoff Caramel French Toast",
    description:
      "Thick-cut brioche with Biscoff spread, caramelised banana, and speculoos crumble",
    price: 395,
    category: "French Toasts",
    image: "/images/french-toast-biscoff.jpg",
    tags: ["vegetarian"],
  },
  {
    id: "ft-003",
    name: "Nutella Stuffed French Toast",
    description:
      "Pillowy brioche filled with hazelnut Nutella, dusted with powdered sugar and gold leaf",
    price: 375,
    category: "French Toasts",
    image: "/images/french-toast-nutella.jpg",
    tags: ["vegetarian"],
  },
  {
    id: "ny-001",
    name: "Original NY Roll",
    description:
      "Crispy croissant-dough hybrid from New York, filled with cream cheese and topped with caramelised sugar",
    price: 295,
    category: "NY Rolls",
    image: "/images/ny-roll-original.jpg",
    badge: "Most Loved",
    tags: ["bestseller"],
  },
  {
    id: "ny-002",
    name: "Matcha NY Roll",
    description:
      "Our signature roll infused with ceremonial-grade matcha, white chocolate, and kinako powder",
    price: 345,
    category: "NY Rolls",
    image: "/images/ny-roll-matcha.jpg",
    tags: ["new"],
  },
  {
    id: "ny-003",
    name: "Pistachio Rose NY Roll",
    description:
      "Delicate roll with Bronte pistachio cream, rose water glaze, and edible rose petals",
    price: 365,
    category: "NY Rolls",
    image: "/images/ny-roll-pistachio.jpg",
    tags: ["premium"],
  },
  {
    id: "cr-001",
    name: "Strawberry Cream Crepe",
    description:
      "Paper-thin French crepe with Chantilly cream, fresh strawberries, and white chocolate drizzle",
    price: 325,
    category: "Crepes",
    image: "/images/crepe-strawberry.jpg",
    tags: ["vegetarian"],
  },
  {
    id: "cr-002",
    name: "Dark Chocolate Banana Crepe",
    description:
      "Belgian dark chocolate crepe with caramelised banana, cocoa nibs, and gold dust",
    price: 355,
    category: "Crepes",
    image: "/images/crepe-chocolate.jpg",
  },
  {
    id: "cr-003",
    name: "Saffron Kunafa Crepe",
    description:
      "East-meets-West fusion with saffron cream, crispy kunafa threads, and rose syrup",
    price: 375,
    category: "Crepes",
    image: "/images/crepe-kunafa.jpg",
    badge: "Chef's Special",
    tags: ["signature", "fusion"],
  },
  {
    id: "sg-001",
    name: "Crème Brûlée",
    description:
      "Classic French custard with a perfectly caramelised sugar crust, infused with Tahitian vanilla",
    price: 295,
    category: "Signature Specials",
    image: "/images/creme-brulee.jpg",
    tags: ["classic"],
  },
  {
    id: "sg-002",
    name: "Molten Lava Cake",
    description:
      "Dark Valrhona chocolate cake with a flowing molten centre, served with vanilla bean ice cream",
    price: 345,
    category: "Signature Specials",
    image: "/images/lava-cake.jpg",
  },
  {
    id: "cf-001",
    name: "L'Encore Signature Latte",
    description:
      "Double-shot espresso with oat milk foam, vanilla bean, and a whisper of gold",
    price: 245,
    category: "Coffee",
    image: "/images/signature-latte.jpg",
    badge: "House Favourite",
  },
  {
    id: "cf-002",
    name: "Hazelnut Cortado",
    description:
      "Smooth ristretto with hazelnut-infused steamed milk, served in a ceramic cup",
    price: 225,
    category: "Coffee",
    image: "/images/hazelnut-cortado.jpg",
  },
  {
    id: "cb-001",
    name: "Butterfly Pea Lemonade",
    description:
      "Colour-changing butterfly pea flower tea with fresh lemon, honey, and edible flowers",
    price: 275,
    category: "Cold Beverages",
    image: "/images/butterfly-lemonade.jpg",
    tags: ["instagrammable"],
  },
  {
    id: "cb-002",
    name: "Rose & Lychee Spritz",
    description:
      "Sparkling rose water with lychee purée, elderflower, and a hint of cardamom",
    price: 295,
    category: "Cold Beverages",
    image: "/images/rose-lychee.jpg",
  },
  {
    id: "ss-001",
    name: "Saffron Panna Cotta",
    description:
      "Silken saffron-infused panna cotta with pistachio crumble and rose petal compote",
    price: 325,
    category: "Seasonal Specials",
    image: "/images/panna-cotta.jpg",
    badge: "Limited Edition",
    tags: ["seasonal", "limited"],
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    text: "Absolutely stunning café! The French Toast is hands down the best I've had in Ahmedabad. The ambience is so luxurious, perfect for date nights. Every corner is Instagram-worthy.",
    source: "Google Reviews",
    date: "2 weeks ago",
  },
  {
    id: "r2",
    name: "Arjun Mehta",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    text: "L'Encore has set a new standard for dessert cafés. The NY Rolls are divine, and the attention to presentation is remarkable. Worth every penny for the experience.",
    source: "Google Reviews",
    date: "1 month ago",
  },
  {
    id: "r3",
    name: "Foodie Ahmedabad",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
    text: "As a food blogger, I've visited hundreds of cafés. L'Encore is in a league of its own. The Saffron Kunafa Crepe is a masterpiece. The aesthetics are unmatched.",
    source: "Instagram",
    date: "3 weeks ago",
  },
  {
    id: "r4",
    name: "Neha Kapoor",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    text: "We celebrated our anniversary here and it was magical. The staff made us feel so special, and the desserts were out of this world. The Molten Lava Cake is a must-try!",
    source: "Google Reviews",
    date: "1 week ago",
  },
  {
    id: "r5",
    name: "Karan Patel",
    avatar: "/images/avatar-5.jpg",
    rating: 5,
    text: "Finally, a café in Ahmedabad that matches international standards. The Pistachio Rose NY Roll is an experience. The whole vibe screams luxury. Highly recommended!",
    source: "Zomato",
    date: "2 months ago",
  },
  {
    id: "r6",
    name: "Sneha Desai",
    avatar: "/images/avatar-6.jpg",
    rating: 5,
    text: "The Butterfly Pea Lemonade is pure art in a glass. L'Encore understands that luxury is in the details. From the cutlery to the plating, everything is premium.",
    source: "Google Reviews",
    date: "10 days ago",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "What are L'Encore's opening hours?",
    answer:
      "We're open daily in the evenings from 5:00 PM to 11:00 PM. We recommend visiting during golden hour for the most magical experience.",
  },
  {
    id: "faq2",
    question: "Do you take reservations?",
    answer:
      "Yes! You can reserve a table through WhatsApp or our online reservation form. For special occasions like birthdays and anniversaries, we recommend booking at least 24 hours in advance.",
  },
  {
    id: "faq3",
    question: "Is parking available?",
    answer:
      "Yes, there is ample parking available at Ornet Park 3. We also have valet service available during peak hours for your convenience.",
  },
  {
    id: "faq4",
    question: "Do you cater to dietary restrictions?",
    answer:
      "Absolutely! We offer vegetarian options clearly marked on our menu. Our chefs can also accommodate gluten-free and dairy-free requests with advance notice.",
  },
  {
    id: "faq5",
    question: "Can I order for delivery?",
    answer:
      "You can order through WhatsApp for quick pickup or check our Swiggy/Zomato listings for delivery. We recommend enjoying our desserts fresh at the café for the best experience.",
  },
  {
    id: "faq6",
    question: "Do you host private events?",
    answer:
      "Yes, we host birthday parties, anniversary celebrations, and intimate gatherings. Contact us on WhatsApp for event bookings and customised dessert menus.",
  },
  {
    id: "faq7",
    question: "What makes L'Encore different from other cafés?",
    answer:
      "L'Encore isn't just a café — it's an experience. We combine European dessert craftsmanship with premium ingredients, luxury aesthetics, and warm hospitality to create unforgettable moments.",
  },
  {
    id: "faq8",
    question: "Do you have a kids' menu?",
    answer:
      "Our desserts are crafted for all ages! Kids love our NY Rolls and French Toasts. We also offer smaller portions upon request.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "best-dessert-cafe-ahmedabad",
    title: "L'Encore: The Best Dessert Café in Ahmedabad",
    excerpt:
      "Discover why L'Encore has become Ahmedabad's most sought-after luxury dessert destination, redefining the café experience with European-inspired creations.",
    content: `Ahmedabad's culinary scene has evolved dramatically, and at the forefront of this revolution stands L'Encore — a luxury dessert café that has redefined what it means to indulge.

Located on the prestigious Sindhu Bhavan Road, L'Encore isn't just another café. It's an experience. From the moment you step through the doors, you're transported to a world where every detail has been meticulously crafted for the discerning palate.

## The L'Encore Philosophy

Our philosophy is simple yet profound: every dessert should be a masterpiece. We don't just make food — we create moments. Using only the finest ingredients sourced from around the world, each dish tells a story of craftsmanship and passion.

## What Sets Us Apart

**Premium Ingredients:** From Madagascar vanilla to Bronte pistachios, we source only the best. No artificial flavours, no shortcuts.

**European Craftsmanship:** Our recipes draw inspiration from the finest patisseries in Paris, Milan, and New York, reimagined for the Indian palate.

**Instagram-Worthy Aesthetics:** Every dish is plated to perfection. Every corner of our café is designed to be shared.

**The Experience:** L'Encore is where luxury meets warmth. It's the perfect spot for date nights, celebrations, and those moments that deserve something special.

## The Signature Collection

Our French Toasts have earned a cult following in Ahmedabad. The Classic Brioche French Toast, soaked in Madagascar vanilla custard and topped with fresh berries, is a revelation. The NY Rolls — crispy, flaky, and filled with innovative flavours — have become the city's most craved dessert. And our Crepes? They're a love letter to French patisserie.

Visit L'Encore today and taste the difference that passion and premium ingredients make.`,
    image: "/images/blog-cafe.jpg",
    date: "2024-12-15",
    author: "L'Encore Team",
    category: "Café Life",
    keywords: [
      "best dessert cafe ahmedabad",
      "luxury cafe ahmedabad",
      "sindhu bhavan cafe",
    ],
  },
  {
    slug: "best-french-toast-ahmedabad",
    title: "The Ultimate Guide to French Toasts in Ahmedabad",
    excerpt:
      "From classic brioche to innovative fusion flavours, here's why L'Encore serves the best French Toast in Ahmedabad — and why food lovers can't stop talking about it.",
    content: `French Toast is more than a breakfast staple — it's a canvas for culinary artistry. And at L'Encore, we've elevated this beloved classic to an art form.

## The Art of Perfect French Toast

The secret to extraordinary French Toast lies in three elements: the bread, the custard, and the toppings. At L'Encore, we've perfected all three.

**The Bread:** We use thick-cut brioche, baked fresh daily. The high butter content creates that signature golden crust while keeping the interior impossibly fluffy.

**The Custard:** Our custard is a carefully guarded recipe — a blend of Madagascar vanilla, organic eggs, and cream, soaked slowly for maximum flavour.

**The Toppings:** Each French Toast variation is a carefully composed symphony of flavours and textures.

## Our Signature French Toasts

### Classic Brioche French Toast (₹345)
The one that started it all. Golden brioche, vanilla custard, fresh berries, and real maple syrup. Simple, yet transcendent.

### Biscoff Caramel French Toast (₹395)
For those who love a little indulgence. Biscoff spread, caramelised banana, and speculoos crumble create a flavour explosion.

### Nutella Stuffed French Toast (₹375)
Hazelnut Nutella, powdered sugar, and a touch of gold leaf. Because you deserve luxury.

## Why L'Encore's French Toast is the Best in Ahmedabad

It's not just about the recipe — it's about the passion behind every plate. Every French Toast at L'Encore is made to order, ensuring you receive it at the peak of perfection.

Come taste why Ahmedabad calls us the home of the best French Toast.`,
    image: "/images/blog-french-toast.jpg",
    date: "2024-12-10",
    author: "L'Encore Team",
    category: "Menu Spotlight",
    keywords: [
      "best french toast ahmedabad",
      "french toast sindhu bhavan",
      "french toast near me",
    ],
  },
  {
    slug: "best-ny-rolls-ahmedabad",
    title: "NY Rolls Have Arrived in Ahmedabad — And They're Spectacular",
    excerpt:
      "The viral New York pastry sensation has found its home at L'Encore. Here's everything you need about the NY Roll craze sweeping Ahmedabad.",
    content: `If you haven't tried a NY Roll yet, you're missing out on one of the most exciting pastry innovations to hit Ahmedabad. And at L'Encore, we've perfected this viral sensation.

## What is a NY Roll?

Born in the streets of New York, the NY Roll is a revolutionary pastry that combines the flakiness of a croissant with the shape of a doughnut. The result? A crispy, golden ring that's light as air and utterly addictive.

## The L'Encore NY Roll Experience

### Original NY Roll (₹295)
The purist's choice. Cream cheese filling, caramelised sugar crust, and that signature flake. Simple perfection.

### Matcha NY Roll (₹345)
For the adventurous. Ceremonial-grade matcha meets white chocolate in a harmony of East and West.

### Pistachio Rose NY Roll (₹365)
Our most premium creation. Bronte pistachio cream, rose water glaze, and edible petals. A true luxury.

## Why Everyone is Talking About NY Rolls

The texture alone is worth the visit. Shatter the crispy exterior and you're met with soft, buttery layers that practically melt on your tongue. It's pastry perfection.

Visit L'Encore and discover why NY Rolls are Ahmedabad's most talked-about dessert.`,
    image: "/images/blog-ny-roll.jpg",
    date: "2024-12-05",
    author: "L'Encore Team",
    category: "Menu Spotlight",
    keywords: [
      "ny rolls ahmedabad",
      "ny rolls sindhu bhavan",
      "croissant doughnut ahmedabad",
    ],
  },
  {
    slug: "best-crepes-ahmedabad",
    title: "Crepes Reimagined: L'Encore's French-Inspired Crepe Collection",
    excerpt:
      "From classic strawberries and cream to our signature Saffron Kunafa Crepe — explore the art of French crepe-making at L'Encore.",
    content: `The crepe is France's gift to the world — delicate, versatile, and endlessly elegant. At L'Encore, we honour this tradition while pushing the boundaries of flavour.

## The L'Encore Crepe Philosophy

A perfect crepe should be paper-thin, with lacy golden edges and a tender centre. Our chefs train for months to achieve this level of precision.

## Our Signature Crepes

### Strawberry Cream Crepe (₹325)
Chantilly cream, fresh strawberries, and white chocolate — a timeless combination executed to perfection.

### Dark Chocolate Banana Crepe (₹355)
Belgian dark chocolate, caramelised banana, cocoa nibs, and a dusting of gold. Decadence defined.

### Saffron Kunafa Crepe (₹375)
Our signature East-meets-West creation. Saffron cream, crispy kunafa threads, and rose syrup. A fusion masterpiece that has earned its place as Ahmedabad's most Instagrammed dessert.

## The L'Encore Difference

Every crepe is made to order on our custom copper griddles, ensuring the perfect texture and temperature. We believe crepes should be experienced, not just eaten.

Visit L'Encore and taste the art of French crepe-making.`,
    image: "/images/blog-crepe.jpg",
    date: "2024-11-28",
    author: "L'Encore Team",
    category: "Menu Spotlight",
    keywords: [
      "best crepes ahmedabad",
      "crepe cafe ahmedabad",
      "french crepes sindhu bhavan",
    ],
  },
  {
    slug: "date-night-cafe-ahmedabad",
    title: "The Perfect Date Night Café in Ahmedabad",
    excerpt:
      "Looking for the ideal spot for your next date night? Here's why L'Encore is Ahmedabad's most romantic dessert destination.",
    content: `Every great love story deserves a great setting. And at L'Encore, we've created the perfect atmosphere for romance.

## Why L'Encore is Ahmedabad's #1 Date Spot

### The Ambience
Soft lighting, warm tones, and carefully curated music create an intimate atmosphere that sets the stage for connection. Every detail, from the table settings to the ambient lighting, has been designed with romance in mind.

### The Experience
Imagine sharing a Molten Lava Cake, watching the chocolate flow as you break through the surface. Or savouring a Saffron Kunafa Crepe while conversation flows effortlessly. These are the moments L'Encore creates.

### The Privacy
Our seating arrangements offer intimate corners and semi-private spaces, perfect for couples who want to enjoy each other's company without distraction.

## Our Date Night Recommendations

1. **Start with our Signature Latte** — the perfect conversation starter
2. **Share an Original NY Roll** — because dessert is better when shared
3. **Indulge in the Molten Lava Cake** — it's theatre and dessert in one
4. **End with our Saffron Panna Cotta** — because every great evening deserves a beautiful ending

## Making Your Date Night Perfect

Reserve your table via WhatsApp at least a day in advance. Let us know if it's a special occasion — we love making celebrations magical.

Book your table now and create memories that last a lifetime.`,
    image: "/images/blog-date-night.jpg",
    date: "2024-11-20",
    author: "L'Encore Team",
    category: "Experiences",
    keywords: [
      "date night cafe ahmedabad",
      "romantic cafe ahmedabad",
      "couples cafe sindhu bhavan",
    ],
  },
  {
    slug: "luxury-dessert-experience",
    title: "What Makes a Luxury Dessert Experience?",
    excerpt:
      "Luxury isn't just about price — it's about the entire experience. Discover the philosophy behind L'Encore's approach to premium desserts.",
    content: `In a world of mass-produced everything, true luxury stands apart. At L'Encore, we believe that luxury dessert is about much more than expensive ingredients — it's about creating moments that feel extraordinary.

## The Five Pillars of Luxury at L'Encore

### 1. Ingredient Excellence
We source the world's finest ingredients: Madagascar vanilla, Bronte pistachios, Valrhona chocolate, and organic dairy. No compromises, no shortcuts.

### 2. Craftsmanship
Every dish is handcrafted by skilled artisans who have trained in European patisseries. Our recipes are precise, our execution is flawless.

### 3. Presentation
We eat with our eyes first. Every dish at L'Encore is plated like a work of art, using premium crockery and thoughtful garnishing.

### 4. Ambience
The space itself is part of the experience. From our custom lighting to our curated playlist, every sensory detail has been considered.

### 5. Hospitality
True luxury is feeling cared for. Our team is trained to anticipate your needs, remember your preferences, and make every visit feel personal.

## The L'Encore Promise

When you visit L'Encore, you're not just having dessert — you're stepping into a world where every detail matters, every bite is a pleasure, and every moment is worth savouring.

Experience luxury. Experience L'Encore.`,
    image: "/images/blog-luxury.jpg",
    date: "2024-11-15",
    author: "L'Encore Team",
    category: "Brand Story",
    keywords: [
      "luxury dessert ahmedabad",
      "premium cafe ahmedabad",
      "luxury experience ahmedabad",
    ],
  },
];

export const categories = [
  "All",
  "French Toasts",
  "NY Rolls",
  "Crepes",
  "Signature Specials",
  "Coffee",
  "Cold Beverages",
  "Seasonal Specials",
];

export const translations = {
  en: {
    hero: {
      headline: "Experience Ahmedabad's Most Elegant Dessert Destination",
      subheading:
        "French Toasts, NY Rolls & Crepes crafted for unforgettable evenings.",
      cta1: "Visit Now",
      cta2: "Explore Menu",
      cta3: "Order on WhatsApp",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      gallery: "Gallery",
      reviews: "Reviews",
      blog: "Blog",
      visit: "Visit Us",
      reservation: "Reserve",
    },
    common: {
      readMore: "Read More",
      viewAll: "View All",
      bookNow: "Book a Table",
      orderNow: "Order on WhatsApp",
    },
  },
  hi: {
    hero: {
      headline: "अहमदाबाद का सबसे शानदार मिठाई गंतव्य अनुभव करें",
      subheading:
        "फ्रेंच टोस्ट, एनवाई रोल्स और क्रेप्स — अविस्मरणीय शामों के लिए तैयार।",
      cta1: "अभी जाएं",
      cta2: "मेनू देखें",
      cta3: "WhatsApp पर ऑर्डर करें",
    },
    nav: {
      home: "होम",
      menu: "मेनू",
      about: "हमारे बारे में",
      gallery: "गैलरी",
      reviews: "समीक्षाएं",
      blog: "ब्लॉग",
      visit: "हमसे मिलें",
      reservation: "रिज़र्व",
    },
    common: {
      readMore: "और पढ़ें",
      viewAll: "सभी देखें",
      bookNow: "टेबुक बुक करें",
      orderNow: "WhatsApp पर ऑर्डर करें",
    },
  },
  gu: {
    hero: {
      headline: "અમદાવાદનું સૌથી ભવ્ય મીઠાઈ ગંતવ્ય અનુભવો",
      subheading:
        "ફ્રેન્ચ ટોસ્ટ, એનવાય રોલ્સ અને ક્રેપ્સ — અભિન્ન સાંજો માટે તૈયાર.",
      cta1: "હમણાં જાઓ",
      cta2: "મેનુ જુઓ",
      cta3: "WhatsApp પર ઓર્ડર કરો",
    },
    nav: {
      home: "હોમ",
      menu: "મેનુ",
      about: "અમારા વિશે",
      gallery: "ગેલેરી",
      reviews: "સમીક્ષાઓ",
      blog: "બ્લૉગ",
      visit: "અમને મળો",
      reservation: "રિઝર્વ",
    },
    common: {
      readMore: "વધુ વાંચો",
      viewAll: "બધું જુઓ",
      bookNow: "ટેબલ બુક કરો",
      orderNow: "WhatsApp પર ઓર્ડર કરો",
    },
  },
};
