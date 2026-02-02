export interface Product {
  id: string;
  name: string;
  price: number;
  material: string;
  category: "bedding" | "furniture" | "decor";
  image: string;
  images?: string[];
  description: string;
  specs?: {
    threadCount?: string;
    dimensions?: string;
    care?: string;
    weight?: string;
  };
  madelineNote?: string;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "french-linen-duvet",
    name: "French Linen Duvet Set",
    price: 389,
    material: "100% French Linen",
    category: "bedding",
    image: "/product-linen-duvet.jpg",
    description:
      "Luxuriously soft and breathable, our French linen duvet set transforms your bed into a cloud of comfort. Pre-washed for that perfectly lived-in softness from day one.",
    specs: {
      threadCount: "Premium European Flax",
      dimensions: "Queen: 90\" x 90\", King: 106\" x 92\"",
      care: "Machine wash cold, tumble dry low. Embrace the natural wrinkles.",
      weight: "Medium weight (220 GSM)",
    },
    madelineNote:
      "This linen breathes with Florida's rhythm—keeping you cool on humid nights and cozy when the breeze rolls in. It's the sheet set I reach for every single time.",
    isBestSeller: true,
  },
  {
    id: "rattan-pendant-light",
    name: "Coastal Rattan Pendant",
    price: 245,
    material: "Hand-woven Rattan",
    category: "decor",
    image: "/product-rattan-pendant.jpg",
    description:
      "Hand-woven by skilled artisans, this pendant light casts beautiful dancing shadows while bathing your space in warm, golden light. A statement piece that whispers relaxation.",
    specs: {
      dimensions: 'Diameter: 16", Height: 14", Cord: 60" adjustable',
      care: "Dust with soft cloth. Keep away from direct moisture.",
    },
    madelineNote:
      "When I installed this in my own bedroom, it completely changed the evening atmosphere. That warm glow is pure magic.",
    isBestSeller: true,
  },
  {
    id: "oak-cane-lounge",
    name: "Driftwood Lounge Chair",
    price: 1295,
    material: "White Oak & Natural Cane",
    category: "furniture",
    image: "/product-lounge-chair.jpg",
    description:
      "A sanctuary within your sanctuary. This lounge chair combines the warmth of solid white oak with the breathability of natural cane weaving—perfect for your morning coffee or evening read.",
    specs: {
      dimensions: 'W: 28", D: 34", H: 32", Seat Height: 16"',
      care: "Dust regularly. Condition wood annually with natural oil.",
      weight: "Supports up to 300 lbs",
    },
    madelineNote:
      "I designed this chair with those quiet morning moments in mind—when you can just sit, watch the light change, and simply breathe.",
    isBestSeller: true,
  },
  {
    id: "ocean-mist-pillowcases",
    name: "Ocean Mist Pillowcase Set",
    price: 89,
    material: "Organic Cotton Sateen",
    category: "bedding",
    image: "/product-pillowcases.jpg",
    description:
      "Wake up to the soft touch of organic cotton in our signature ocean mist blue. Silky smooth with a subtle sheen that catches the morning light.",
    specs: {
      threadCount: "400 Thread Count",
      dimensions: 'Standard: 20" x 26", King: 20" x 36"',
      care: "Machine wash warm. Tumble dry low. Iron on medium if desired.",
    },
    madelineNote:
      "This particular shade of blue? It's the exact color of the St. Johns River at dawn. I spent months getting it just right.",
    isBestSeller: true,
  },
  {
    id: "rattan-nightstand",
    name: "Woven Dreams Nightstand",
    price: 445,
    material: "Light Oak & Rattan",
    category: "furniture",
    image: "/product-rattan-nightstand.jpg",
    description:
      "Bedside elegance meets coastal charm. Features a solid oak frame with hand-woven rattan basket drawer and a slim top drawer for your essentials.",
    specs: {
      dimensions: 'W: 22", D: 18", H: 24"',
      care: "Dust with soft cloth. Avoid placing hot items directly on surface.",
    },
  },
  {
    id: "linen-throw-blanket",
    name: "Sunset Linen Throw",
    price: 165,
    material: "Stonewashed Linen",
    category: "bedding",
    image: "/product-linen-throw.jpg",
    description:
      "Draped at the foot of your bed or wrapped around your shoulders on a cool evening, this stonewashed linen throw adds warmth and texture to any space.",
    specs: {
      dimensions: '50" x 70"',
      care: "Machine wash cold. Tumble dry low.",
      weight: "Lightweight (180 GSM)",
    },
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getBestSellers = (): Product[] => {
  return products.filter((product) => product.isBestSeller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
