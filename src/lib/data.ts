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
    name: "Classic French Toast",
    description:
      "Our signature thick-cut brioche French Toast, golden and fluffy, served with maple syrup and fresh toppings",
    price: 249,
    category: "French Toast",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop&q=80",
    badge: "Bestseller",
    tags: ["vegetarian", "bestseller"],
  },
  {
    id: "ft-002",
    name: "Biscoff Caramel French Toast",
    description:
      "Thick-cut brioche with Biscoff spread, caramelised banana, and speculoos crumble",
    price: 299,
    category: "French Toast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80",
    tags: ["vegetarian"],
  },
  {
    id: "ft-003",
    name: "Nutella Stuffed French Toast",
    description:
      "Pillowy brioche filled with hazelnut Nutella, dusted with powdered sugar and gold leaf",
    price: 279,
    category: "French Toast",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop&q=80",
    tags: ["vegetarian"],
  },
  {
    id: "ft-004",
    name: "Brioche Toast Platter",
    description:
      "A generous platter of our golden brioche toast with assorted toppings — perfect for sharing",
    price: 349,
    category: "French Toast",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop&q=80",
    badge: "Must Try",
    tags: ["bestseller", "sharing"],
  },
  {
    id: "ny-001",
    name: "Supreme Nutella Roll",
    description:
      "Our signature NY Supreme Roll filled with creamy Nutella, crispy on the outside, soft on the inside",
    price: 199,
    category: "NY Rolls",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop&q=80",
    badge: "Most Loved",
    tags: ["bestseller"],
  },
  {
    id: "ny-002",
    name: "Classic NY Roll",
    description:
      "Crispy croissant-dough hybrid from New York, filled with cream cheese and topped with caramelised sugar",
    price: 179,
    category: "NY Rolls",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop&q=80",
    tags: ["original"],
  },
  {
    id: "ny-003",
    name: "Pistachio Rose NY Roll",
    description:
      "Delicate roll with pistachio cream, rose water glaze, and edible rose petals",
    price: 229,
    category: "NY Rolls",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=400&fit=crop&q=80",
    tags: ["premium"],
  },
  {
    id: "ny-004",
    name: "Biscoff NY Roll",
    description:
      "Lotus Biscoff filled NY Roll with speculoos crumble and caramel drizzle",
    price: 219,
    category: "NY Rolls",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&h=400&fit=crop&q=80",
    tags: ["popular"],
  },
  {
    id: "cr-001",
    name: "Nutella Crêpe",
    description:
      "Paper-thin French crêpe loaded with Nutella and topped with powdered sugar",
    price: 199,
    category: "Crêpes",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=600&h=400&fit=crop&q=80",
    badge: "Popular",
    tags: ["vegetarian"],
  },
  {
    id: "cr-002",
    name: "Strawberry Cream Crêpe",
    description:
      "Delicate crêpe with Chantilly cream, fresh strawberries, and white chocolate drizzle",
    price: 229,
    category: "Crêpes",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&h=400&fit=crop&q=80",
    tags: ["vegetarian"],
  },
  {
    id: "cr-003",
    name: "Saffron Kunafa Crêpe",
    description:
      "East-meets-West fusion with saffron cream, crispy kunafa threads, and rose syrup",
    price: 249,
    category: "Crêpes",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=400&fit=crop&q=80",
    badge: "Chef's Special",
    tags: ["signature", "fusion"],
  },
  {
    id: "cr-004",
    name: "Dark Chocolate Banana Crêpe",
    description:
      "Belgian dark chocolate crêpe with caramelised banana, cocoa nibs, and gold dust",
    price: 239,
    category: "Crêpes",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "ck-001",
    name: "Nutella Lava Cake",
    description:
      "Dark chocolate cake with a flowing Nutella centre, served with vanilla bean ice cream",
    price: 299,
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "ck-002",
    name: "Red Velvet Slice",
    description:
      "Moist red velvet cake with cream cheese frosting and white chocolate shavings",
    price: 199,
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "ck-003",
    name: "New York Cheesecake",
    description:
      "Classic creamy New York-style cheesecake with berry compote",
    price: 249,
    category: "Cakes",
    image: "https://images.unsplash.com/photo-1524351199678-94135b1ef281?w=600&h=400&fit=crop&q=80",
    tags: ["classic"],
  },
  {
    id: "cf-001",
    name: "Signature Latte",
    description:
      "Double-shot espresso with steamed milk foam and a hint of vanilla",
    price: 149,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&q=80",
    badge: "House Favourite",
  },
  {
    id: "cf-002",
    name: "Iced Mocha",
    description:
      "Chilled espresso with chocolate, cold milk, and ice — perfect for Ahmedabad evenings",
    price: 179,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "cb-001",
    name: "Butterfly Pea Lemonade",
    description:
      "Colour-changing butterfly pea flower tea with fresh lemon, honey, and edible flowers",
    price: 169,
    category: "Cold Beverages",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e959?w=600&h=400&fit=crop&q=80",
    badge: "Instagrammable",
    tags: ["instagrammable"],
  },
  {
    id: "cb-002",
    name: "Rose & Lychee Spritz",
    description:
      "Sparkling rose water with lychee purée, elderflower, and a hint of cardamom",
    price: 179,
    category: "Cold Beverages",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "cb-003",
    name: "Iced Americano",
    description:
      "Smooth espresso over ice — bold, refreshing, and pure",
    price: 129,
    category: "Cold Beverages",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=400&fit=crop&q=80",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    avatar: "",
    rating: 5,
    text: "Absolutely stunning café! The Classic French Toast is hands down the best I've had in Ahmedabad. The ambience is so luxurious, perfect for date nights. Every corner is Instagram-worthy.",
    source: "Google Reviews",
    date: "2 weeks ago",
  },
  {
    id: "r2",
    name: "Arjun Mehta",
    avatar: "",
    rating: 5,
    text: "L'Encore has set a new standard for dessert cafés. The Supreme Nutella Roll is divine, and the attention to presentation is remarkable. Worth every penny for the experience.",
    source: "Google Reviews",
    date: "1 month ago",
  },
  {
    id: "r3",
    name: "Foodie Ahmedabad",
    avatar: "",
    rating: 5,
    text: "As a food blogger, I've visited hundreds of cafés. L'Encore is in a league of its own. The Saffron Kunafa Crêpe is a masterpiece. The aesthetics are unmatched.",
    source: "Instagram",
    date: "3 weeks ago",
  },
  {
    id: "r4",
    name: "Neha Kapoor",
    avatar: "",
    rating: 5,
    text: "We celebrated our anniversary here and it was magical. The staff made us feel so special, and the desserts were out of this world. The Brioche Toast Platter is a must-try!",
    source: "Google Reviews",
    date: "1 week ago",
  },
  {
    id: "r5",
    name: "Karan Patel",
    avatar: "",
    rating: 5,
    text: "Finally, a café in Ahmedabad that matches international standards. The Pistachio Rose NY Roll is an experience. The whole vibe screams luxury. Highly recommended!",
    source: "Zomato",
    date: "2 months ago",
  },
  {
    id: "r6",
    name: "Sneha Desai",
    avatar: "",
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
      "We're open daily from 6:00 PM to 12:30 AM. We're Ahmedabad's favourite late-night dessert spot!",
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
      "Yes, there is ample parking available at Ornet Park. We're located near Crush Coffee and Taj Hotel on Sindhu Bhavan Marg.",
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
      "L'Encore isn't just a café — it's an experience. We're Ahmedabad's first kiosk serving Crêpes, NY Supreme Rolls, and French Toast. We combine European dessert craftsmanship with premium ingredients, luxury aesthetics, and warm hospitality to create unforgettable moments.",
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

**Premium Ingredients:** We source only the best. No artificial flavours, no shortcuts.

**European Craftsmanship:** Our recipes draw inspiration from the finest patisseries in Paris, Milan, and New York, reimagined for the Indian palate.

**Instagram-Worthy Aesthetics:** Every dish is plated to perfection. Every corner of our café is designed to be shared.

**The Experience:** L'Encore is where luxury meets warmth. It's the perfect spot for date nights, celebrations, and those moments that deserve something special.

## The Signature Collection

Our French Toast has earned a cult following in Ahmedabad. The Classic French Toast, our signature offering, is a revelation. The NY Supreme Rolls — crispy, flaky, and filled with innovative flavours — have become the city's most craved dessert. And our Crêpes? They're a love letter to French patisserie.

Visit L'Encore today and taste the difference that passion and premium ingredients make.`,
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=500&fit=crop&q=80",
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
      "From classic brioche to innovative flavours, here's why L'Encore serves the best French Toast in Ahmedabad — and why food lovers can't stop talking about it.",
    content: `French Toast is more than a breakfast staple — it's a canvas for culinary artistry. And at L'Encore, we've elevated this beloved classic to an art form.

## The Art of Perfect French Toast

The secret to extraordinary French Toast lies in three elements: the bread, the custard, and the toppings. At L'Encore, we've perfected all three.

**The Bread:** We use thick-cut brioche, baked fresh daily. The high butter content creates that signature golden crust while keeping the interior impossibly fluffy.

**The Custard:** Our custard is a carefully guarded recipe, soaked slowly for maximum flavour.

**The Toppings:** Each French Toast variation is a carefully composed symphony of flavours and textures.

## Our Signature French Toasts

### Classic French Toast (₹249)
The one that started it all. Golden brioche, vanilla custard, fresh toppings, and real maple syrup. Simple, yet transcendent.

### Biscoff Caramel French Toast (₹299)
For those who love a little indulgence. Biscoff spread, caramelised banana, and speculoos crumble create a flavour explosion.

### Nutella Stuffed French Toast (₹279)
Hazelnut Nutella, powdered sugar, and a touch of gold leaf. Because you deserve luxury.

### Brioche Toast Platter (₹349)
A generous platter of our golden brioche toast with assorted toppings — perfect for sharing with friends.

## Why L'Encore's French Toast is the Best in Ahmedabad

It's not just about the recipe — it's about the passion behind every plate. Every French Toast at L'Encore is made to order, ensuring you receive it at the peak of perfection.

Come taste why Ahmedabad calls us the home of the best French Toast.`,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=500&fit=crop&q=80",
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

### Supreme Nutella Roll (₹199)
The one everyone's talking about. Creamy Nutella filling, crispy exterior, and that signature NY Roll crunch. Our most ordered item.

### Classic NY Roll (₹179)
The purist's choice. Cream cheese filling, caramelised sugar crust, and that signature flake. Simple perfection.

### Pistachio Rose NY Roll (₹229)
Our most premium creation. Pistachio cream, rose water glaze, and edible petals. A true luxury.

### Biscoff NY Roll (₹219)
Lotus Biscoff filled with speculoos crumble and caramel drizzle. For the Biscoff lover in you.

## Why Everyone is Talking About NY Rolls

The texture alone is worth the visit. Shatter the crispy exterior and you're met with soft, buttery layers that practically melt on your tongue. It's pastry perfection.

Visit L'Encore and discover why NY Rolls are Ahmedabad's most talked-about dessert.`,
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&h=500&fit=crop&q=80",
    date: "2024-12-05",
    author: "L'Encore Team",
    category: "Menu Spotlight",
    keywords: [
      "ny rolls ahmedabad",
      "ny rolls sindhu bhavan",
      "supreme nutella roll ahmedabad",
    ],
  },
  {
    slug: "best-crepes-ahmedabad",
    title: "Crêpes Reimagined: L'Encore's French-Inspired Crêpe Collection",
    excerpt:
      "From classic Nutella to our signature Saffron Kunafa Crêpe — explore the art of French crêpe-making at L'Encore.",
    content: `The crêpe is France's gift to the world — delicate, versatile, and endlessly elegant. At L'Encore, we honour this tradition while pushing the boundaries of flavour.

## The L'Encore Crêpe Philosophy

A perfect crêpe should be paper-thin, with lacy golden edges and a tender centre. Our chefs train for months to achieve this level of precision.

## Our Signature Crêpes

### Nutella Crêpe (₹199)
The classic, perfected. Generous Nutella, powdered sugar, and that delicate crêpe texture.

### Strawberry Cream Crêpe (₹229)
Chantilly cream, fresh strawberries, and white chocolate — a timeless combination executed to perfection.

### Saffron Kunafa Crêpe (₹249)
Our signature East-meets-West creation. Saffron cream, crispy kunafa threads, and rose syrup. A fusion masterpiece that has earned its place as Ahmedabad's most Instagrammed dessert.

### Dark Chocolate Banana Crêpe (₹239)
Belgian dark chocolate, caramelised banana, cocoa nibs, and a dusting of gold. Decadence defined.

## The L'Encore Difference

Every crêpe is made to order, ensuring the perfect texture and temperature. We believe crêpes should be experienced, not just eaten.

Visit L'Encore and taste the art of French crêpe-making.`,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64571?w=800&h=500&fit=crop&q=80",
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
Imagine sharing a Nutella Lava Cake, watching the chocolate flow as you break through the surface. Or savouring a Saffron Kunafa Crêpe while conversation flows effortlessly. These are the moments L'Encore creates.

### The Privacy
Our seating arrangements offer intimate corners and semi-private spaces, perfect for couples who want to enjoy each other's company without distraction.

## Our Date Night Recommendations

1. **Start with our Signature Latte** — the perfect conversation starter
2. **Share a Supreme Nutella Roll** — because dessert is better when shared
3. **Indulge in the Nutella Lava Cake** — it's theatre and dessert in one
4. **End with a Crêpe** — because every great evening deserves a beautiful ending

## Making Your Date Night Perfect

Reserve your table via WhatsApp at least a day in advance. Let us know if it's a special occasion — we love making celebrations magical.

Book your table now and create memories that last a lifetime.`,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=500&fit=crop&q=80",
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
We source the finest ingredients. No compromises, no shortcuts.

### 2. Craftsmanship
Every dish is handcrafted by skilled artisans. Our recipes are precise, our execution is flawless.

### 3. Presentation
We eat with our eyes first. Every dish at L'Encore is plated like a work of art, using premium crockery and thoughtful garnishing.

### 4. Ambience
The space itself is part of the experience. From our custom lighting to our curated playlist, every sensory detail has been considered.

### 5. Hospitality
True luxury is feeling cared for. Our team is trained to anticipate your needs, remember your preferences, and make every visit feel personal.

## The L'Encore Promise

When you visit L'Encore, you're not just having dessert — you're stepping into a world where every detail matters, every bite is a pleasure, and every moment is worth savouring.

Experience luxury. Experience L'Encore.`,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
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
  "French Toast",
  "NY Rolls",
  "Crêpes",
  "Cakes",
  "Coffee",
  "Cold Beverages",
];

export const translations = {
  en: {
    hero: {
      headline: "Ahmedabad's Most Elegant Dessert Destination",
      subheading:
        "French Toasts, NY Rolls & Crêpes crafted for unforgettable evenings.",
      cta1: "Reserve Table",
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
      headline: "अहमदाबाद का सबसे शानदार मिठाई गंतव्य",
      subheading:
        "फ्रेंच टोस्ट, एनवाई रोल्स और क्रेप्स — अविस्मरणीय शामों के लिए तैयार।",
      cta1: "टेबल रिज़र्व करें",
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
      headline: "અમદાવાદનું સૌથી ભવ્ય મીઠાઈ ગંતવ્ય",
      subheading:
        "ફ્રેન્ચ ટોસ્ટ, એનવાય રોલ્સ અને ક્રેપ્સ — અભિન્ન સાંજો માટે તૈયાર.",
      cta1: "ટેબલ રિઝર્વ કરો",
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
