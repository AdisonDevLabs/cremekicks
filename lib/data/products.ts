// lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    "id": "p1",
    "name": "Warrior Tactical Chunky Sneaker",
    "price": 3200,
    "originalPrice": 4500,
    "image": "/Warrior Tactical Chunky Sneaker.png",
    "images": ["/Warrior Tactical Chunky Sneaker.png"],
    "category": "Sneakers",
    "rating": 4.5,
    "reviews": 12,
    "sizes": ["37"],
    "colors": ["Black", "Silver"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "All-black chunky tactical running sneaker featuring reflective silver/grey curved side panel overlays and rugged design. Embossed with Warrior branding on the heel."
  },
  {
    "id": "p2",
    "name": "New Balance 530 Chunky Runner - Grey/Black",
    "price": 3500,
    "originalPrice": 4800,
    "image": "/New Balance 530 Chunky Runner - Grey-Black.png",
    "images": ["/New Balance 530 Chunky Runner - Grey-Black.png"],
    "category": "Sneakers",
    "rating": 4.7,
    "reviews": 24,
    "sizes": ["37"],
    "colors": ["Grey", "Silver", "Black"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Classic grey and silver chunky mesh dad-shoe runner with the signature black 'N' logo paneling. Features an ultra-comfortable cushioned midsole labeled with Fashion styling."
  },
  {
    "id": "p3",
    "name": "Adidas Samba Classic White Gum",
    "price": 3800,
    "originalPrice": 5000,
    "image": "/Adidas Samba Classic White Gum.png",
    "images": ["/Adidas Samba Classic White Gum.png"],
    "category": "Sneakers",
    "rating": 4.9,
    "reviews": 45,
    "sizes": ["42"],
    "colors": ["White", "Black", "Gum"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Timeless terrace style sneaker featuring a crisp white leather upper, contrasting black three-stripes, a light grey suede T-toe overlay, and a classic gum rubber sole."
  },
  {
    "id": "p4",
    "name": "Wave Athletic Training Shoe",
    "price": 2800,
    "originalPrice": 3800,
    "image": "/Wave Athletic Training Shoe.png",
    "images": ["/Wave Athletic Training Shoe.png"],
    "category": "Sneakers",
    "rating": 4.2,
    "reviews": 8,
    "sizes": ["42"],
    "colors": ["Black", "White", "Grey"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": true,
    "description": "Lightweight black athletic trainer designed with a supportive white midsole and an eye-catching silver wave graphic over a grey mesh matrix underlay."
  },
  {
    "id": "p5",
    "name": "New Balance 580 Retro Grey Suede",
    "price": 3600,
    "originalPrice": 4800,
    "image": "/New Balance 580 Retro Grey Suede.png",
    "images": ["/New Balance 580 Retro Grey Suede.png"],
    "category": "Sneakers",
    "rating": 4.6,
    "reviews": 19,
    "sizes": ["42"],
    "colors": ["Grey", "Navy", "Lilac"],
    "isNewArrival": false,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Retro-inspired lifestyle runner constructed with premium grey suede and breathable mesh. Detailed with a navy blue 'N' emblem and a distinct lilac color-blocked accent on the heel."
  },
  {
    "id": "p6",
    "name": "Retro Low-Profile Mesh Trainer",
    "price": 2500,
    "originalPrice": 3500,
    "image": "/Retro Low-Profile Mesh Trainer.png",
    "images": ["/Retro Low-Profile Mesh Trainer.png"],
    "category": "Sneakers",
    "rating": 4.0,
    "reviews": 5,
    "sizes": ["42"],
    "colors": ["White", "Grey", "Black"],
    "isNewArrival": false,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Minimalist, lightweight low-profile trainer featuring a white mesh upper paired with clean black multi-stripes and a thin flexible rubber outsole."
  },
  {
    "id": "p7",
    "name": "Urban Skate Canvas Court Shoe",
    "price": 2700,
    "originalPrice": 3600,
    "image": "/Urban Skate Canvas Court Shoe.png",
    "images": ["/Urban Skate Canvas Court Shoe.png"],
    "category": "Sneakers",
    "rating": 4.3,
    "reviews": 11,
    "sizes": ["42"],
    "colors": ["Black", "Grey", "White"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Casual low-top skate and court sneaker blending breathable black mesh bases with structured grey paneling over a contrast solid white flat cupsole."
  },
  {
    "id": "p8",
    "name": "New Balance 1906R Metallic Silver",
    "price": 3800,
    "originalPrice": 5500,
    "image": "/New Balance 1906R Metallic Silver.png",
    "images": ["/New Balance 1906R Metallic Silver.png"],
    "category": "Sneakers",
    "rating": 4.8,
    "reviews": 32,
    "sizes": ["42"],
    "colors": ["Silver", "White", "Black"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "High-performance tech runner silhouette showcasing a metallic silver framework mesh overlay, intricate black design accents, and an outlined signature side 'N'."
  },
  {
    "id": "p9",
    "name": "Stealth Segmented Utility Sneaker",
    "price": 3400,
    "originalPrice": 4500,
    "image": "/Stealth Segmented Utility Sneaker.png",
    "images": ["/Stealth Segmented Utility Sneaker.png"],
    "category": "Sneakers",
    "rating": 4.4,
    "reviews": 15,
    "sizes": ["42"],
    "colors": ["Black"],
    "isNewArrival": false,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Monochromatic triple-black heavy duty sneaker. Built with a deeply lugged, thick segmented outsole and an intricate synthetic external cage structure."
  },
  {
    "id": "p10",
    "name": "Nike Vintage Cortez Runner",
    "price": 3200,
    "originalPrice": 4200,
    "image": "/Nike Vintage Cortez Runner.png",
    "images": ["/Nike Vintage Cortez Runner.png"],
    "category": "Sneakers",
    "rating": 4.7,
    "reviews": 28,
    "sizes": ["42"],
    "colors": ["Off-White", "Black"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Retro lifestyle track sneaker featuring an off-white/light grey upper, a bold contrasting black Swoosh, a textured foam wedge midsole, and a black waffle grip pattern underfoot."
  },
  {
    "id": "p11",
    "name": "Yeezy Boost 700 V2 Anthracite",
    "price": 3900,
    "originalPrice": 5500,
    "image": "/Yeezy Boost 700 V2 Anthracite.png",
    "images": ["/Yeezy Boost 700 V2 Anthracite.png"],
    "category": "Sneakers",
    "rating": 4.8,
    "reviews": 37,
    "sizes": ["42"],
    "colors": ["Grey", "Charcoal"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Premium monochrome anthracite chunky sneaker sporting a distinct sculpted fluid foam midsole, mesh underlays, and curved organic wave overlays across the upper profile."
  },
  {
    "id": "p12",
    "name": "New Balance 530 Tech Silver Metallic",
    "price": 3500,
    "originalPrice": 4800,
    "image": "/New Balance 530 Tech Silver Metallic.png",
    "images": ["/New Balance 530 Tech Silver Metallic.png"],
    "category": "Sneakers",
    "rating": 4.7,
    "reviews": 21,
    "sizes": ["42"],
    "colors": ["Silver", "Dark Grey", "Black"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Highly responsive mechanical mesh running shoe featuring bold silver panel architecture, a central black 'N' with a white outline border, and an iconic multi-layered vintage midsole."
  },
  {
    "id": "p13",
    "name": "New Balance 327 Suede - Light Grey/Navy",
    "price": 3600,
    "originalPrice": 5000,
    "image": "/New Balance 327 Suede - Light Grey-Navy.png",
    "images": ["/New Balance 327 Suede - Light Grey-Navy.png"],
    "category": "Sneakers",
    "rating": 4.6,
    "reviews": 18,
    "sizes": ["42"],
    "colors": ["Light Grey", "Navy Blue", "Gum"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Modern angular lifestyle shoe built with crisp nylon bases and light grey suede panel trim. Outfitted with an oversized deep navy blue lateral 'N' logo and a distinctive studded wrap-around gum sole."
  }
]

export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal);
export const getProductById = (id: string) => products.find((p) => p.id === id);

export const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#ffffff',
  'Red': '#ff0000',
  'Beige': '#f5f5dc',
  'Nude': '#e3bc9a',
  'Brown': '#8b4513',
  'Silver': '#c0c0c0',
  'Gold': '#ffd700',
  'Blue': '#0000ff',
  'Pink': '#ffc0cb'
};

export const sizeGuideData = [
  {eu: 36, uk: 3, us: 5, cm: 22.5},
  {eu: 37, uk: 4, us: 6, cm: 23.5},
  {eu: 38, uk: 5, us: 7, cm: 24},
  {eu: 39, uk: 6, us: 8, cm: 25},
  {eu: 40, uk: 7, us: 9, cm: 25.5},
  {eu: 41, uk: 8, us: 10, cm: 26.5},
  {eu: 42, uk: 9, us: 11, cm: 27},
];