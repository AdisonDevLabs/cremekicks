// lib/data/brand.ts
import { Truck, MessageCircle, Star, Sparkles, Tag, CheckCircle, ShieldCheck } from 'lucide-react';

export const brand = {
  name: "Creme Kicks",
  shortName: "CK",
  logo: "/pexels-nathanjhilton-9244881.jpg",
  tagline: "Step into Confidence",
  description:
    "Stylish, affordable, and high-quality women's footwear designed for everyday elegance.",
  location: "Kenyatta Avenue, Opposite Equity Bank, Lams Business Mall, Shop 22 & 25, Nakuru",
  seo: {
    title: "Creme Kicks",
    description: "Premium thrift fashion.",
  },
  hero: {
    badge: "110K+ Followers on TikTok ✨",
    headlineTop: "STEP OUT IN",
    headlineHighlight: "GLAMOUR",
    backgroundImage: "/Wave Athletic Training Shoe.png", // BEN★BU Platform Canvas Sneakers
    ctaPrimary: "Order on WhatsApp",
    ctaSecondary: "Shop Collection",
  },
  sections: {
    featured: {
      title: "Featured Collections",
      subtitle: "Find your perfect pair. Browse through elegant ladies' slides, urban kids' wear, and classic canvas kicks."
    },
    flashDeals: {
      badge: "Live Offers",
      title: "Flash Deals",
      subtitle: "Grab customer favorites like our Wetlook School Shoes at unbeatable prices before stocks run out.",
      cta: "View All Deals"
    },
    newArrivals: {
      badge: "Just Dropped",
      title: "Latest Styles",
      subtitle: "Fresh pairs added weekly directly from our TikTok catalog — be the first to own them.",
      cta: "View All Arrivals",
      trendingBadgePrefix: "Trending in" 
    },
    bestSellers: {
      badge: "Customer Favorites",
      title: "BEST SELLERS",
      subtitle: "Highly reviewed and loved by shoe lovers in Nakuru and across Kenya.",
      cta: "View All Favorites"
    },
    whyUs: {
      badge: "Trust & Reliability",
      titleTop: "WHY SHOP WITH",
      subtitle: "We offer top-tier design curation, reliable sizing guidance, and an easy localized shopping experience."
    },
    reviews: {
      badge: "Real Feedback from TikTok & WhatsApp",
      titleTop: "WHAT OUR",
      titleBottom: "CUSTOMERS SAY"
    },
    whatsappCta: {
      badge: "We Are Active",
      titleTop: "START YOUR",
      titleBottom: "ORDER NOW",
      subtitle: "Chat with Esther directly on WhatsApp to secure your size and confirm store pickup or delivery details."
    }
  },
  whatsappNumber: "254745343781",
  whatsappMessage: {
    general:
      "Hello Creme Kicks,\n\n\n\nI would like to place an order.\n\nShoe Screenshot/Name:\n\nShoe Size:\nPreferred Colour:\n\nDelivery/Pickup Location:\n\nPlease confirm availability.\n\nThank you.",
  },
  socialLinks: {
    tiktok: "https://www.tiktok.com/@cremekicksbywambo",
  },
  deliveryInfo: {
    standard: "Ksh 300-500 for Percels Outside Nairobi",
    nairobi: "Ksh 100 for Deliveries/Drop offs Within CBD",
  },
  trustStatements: [
    "Fast Delivery Across Kenya",
    "Quality Checked",
    "WhatsApp Ordering",
    "Secure Ordering",
  ],
  features: [
    {
      title: "Premium Quality",
      description: "Every pair is carefully selected to ensure comfort, durability, and modern style."
    },
    {
      title: "Affordable Prices",
      description: "Get stylish footwear without overspending — value for money guaranteed."
    },
    {
      title: "Fast Delivery",
      description: "We process and deliver orders promptly so you receive your items as fast as possible across Kenya."
    },
    {
      title: "WhatsApp Ordering",
      description: "No complicated checkout — just message us and place your order instantly."
    }
  ],
  whatsappTrustSignals: [
    "Fast response within minutes",
    "Secure and reliable",
    "Quick delivery available",
    "Trusted across Kenya"
  ],
  whatsappMockChat: [
    {
      sender: "user",
      text: `Hello Creme Kicks

I'd like to order:

• Wave Athletic Training Shoe × 2
Size 42 | Black

Delivery: Nairobi CBD

Subtotal: KSh 5,600

Please confirm availability, total payable and payment method.

Thank you.

`,
      time: "10:05 AM"
    },
    {
      sender: "brand",
      text: `Yes, it's available.

Total including delivery: KSh 6,100

You can pay via M-Pesa:
Till: XXXXXXX

Send the confirmation message once payment is complete.
`,
      time: "10:06 AM"
    }
  ],
  salesCallout: "200+ sold this week"
};

export const announcementMessages = [
  { text: "Fast Delivery Across Kenya", icon: Truck },
  { text: "Order Easily Via WhatsApp", icon: MessageCircle },
  { text: "New Arrivals Added Weekly", icon: Sparkles },
  { text: "Trusted by Hundreds of Happy Customers", icon: Star },
  { text: "Flash Deals Available Today", icon: Tag },
];

export const cartTrustFeatures = [
  { text: "Fast Delivery Across Kenya", icon: Truck },
  { text: "Quality Checked", icon: CheckCircle },
  { text: "Secure Ordering", icon: ShieldCheck },
  { text: "WhatsApp Support", icon: MessageCircle },
];

export const footerQuickShopLinks = [
  { label: "New Arrivals", href: "/shop" },
  { label: "Best Sellers", href: "/shop?category=best-sellers" },
  { label: "Sneakers", href: "/shop" },
];

export const footerSupportLinks = [
  { label: "How to Order", href: "/how-to-order" },
  { label: "Delivery Info", href: "/delivery" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];