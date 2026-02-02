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
    id: "bamboo-pillowcases-dark-grey",
    name: "Cooling Bamboo Pillow Case Set",
    price: 14.99, //
    material: "Rayon Derived from Bamboo", //
    category: "bedding",
    image: "https://m.media-amazon.com/images/I/71xcauK1dlL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/71xcauK1dlL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81PmeQFTl8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91rUQyFUUHL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81trez3l9GL._AC_SL1500_.jpg"
    ], //
    description: "Breathable and ultra-soft, these dark grey bamboo-derived pillowcases offer a cooling sensation perfect for warm Florida nights. The envelope closure keeps your pillow tucked away for a clean, coastal look.",
    specs: {
      dimensions: "20x30 Inches (Queen)", //
      care: "Machine wash cold, tumble dry low.",
    },
    madelineNote: "Bamboo is a dream for our humidity. It stays crisp and cool against your skin while you listen to the river breeze.",
    isBestSeller: true
  },
  {
    id: "premium-cooling-pillowcases-grey",
    name: "High-Hydration Cooling Pillowcases",
    price: 47.99, //
    material: "Q-Max > 0.5 Cooling Fibers", //
    category: "bedding",
    image: "https://m.media-amazon.com/images/I/81WqQBoNxpL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81WqQBoNxpL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71TKoQZYjAL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71GfKhUqRgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71aBBrTZ51L._AC_SL1500_.jpg"
    ], //
    description: "Designed for hot sleepers, these high-tech grey pillowcases hydrate your skin and hair while reducing morning frizz. A true beauty sleep essential.",
    specs: {
      dimensions: "Queen Size", //
      care: "Gentle cycle recommended to maintain cooling properties.",
    },
    madelineNote: "If you struggle with the summer heat, this is the sanctuary upgrade you've been waiting for. It feels like a cold breeze for your face."
  },
  {
    id: "satin-pillowcase-gift-set",
    name: "Silky Satin Pillowcase Duo",
    price: 6.97, //
    material: "High-Quality Satin", //
    category: "bedding",
    image: "https://m.media-amazon.com/images/I/61nwQVv3r5L._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/61nwQVv3r5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81o4Zb0fV+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71v1DoRK2HL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/610qKt5lmOL._AC_SL1500_.jpg"
    ], //
    description: "Experience the luxury of silk without the price tag. These satin pillowcases protect your hair and skin from friction, ensuring you wake up refreshed.",
    specs: {
      dimensions: "Standard/Queen",
      care: "Hand wash or delicate machine wash.",
    },
    madelineNote: "An affordable luxury that makes every night feel like a stay at a high-end coastal resort."
  },
  {
    id: "fleece-throw-cream-white",
    name: "Decorative Striped Fleece Throw",
    price: 17.99, //
    material: "300GSM Soft Fleece", //
    category: "bedding",
    image: "https://m.media-amazon.com/images/I/81pmFrTRrGL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81pmFrTRrGL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ln9xF4jyL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JguDACKfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71dST23Zd0L._AC_SL1500_.jpg"
    ], //
    description: "Wrap yourself in a cloud with this cream white striped fleece blanket. Perfect for cozying up during a sunset read on the porch.",
    specs: {
      dimensions: '50"x60"', //
      weight: "300GSM", //
      care: "Machine washable, anti-pilling.",
    },
    madelineNote: "The cream white mimics the soft sand of Welaka's quiet corners. It’s light enough for all seasons.",
    isBestSeller: true
  },
  {
    id: "waterproof-bed-blanket-queen",
    name: "Stain-Proof Flannel Sanctuary Blanket",
    price: 59.99, //
    material: "Soft Flannel", //
    category: "bedding",
    image: "https://m.media-amazon.com/images/I/81oEvs8y2JL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81oEvs8y2JL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71OV7yqpg+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71RRa3Z9mDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Nx99JQeeL._AC_SL1500_.jpg"
    ], //
    description: "Protection meets comfort. This waterproof flannel blanket is a must-have for families and pet owners, keeping your queen bed safe from spills.",
    specs: {
      dimensions: '80"x90"', //
      care: "Machine wash, air dry recommended to maintain waterproof seal.",
    },
    madelineNote: "Finally, a practical solution that doesn't sacrifice the aesthetic. Perfect for morning coffee in bed without the worry."
  },
  {
    id: "sherpa-fleece-lattice-throw",
    name: "Reversible Sherpa Lattice Blanket",
    price: 25.99, //
    material: "Lattice Flannel & Sherpa", //
    category: "bedding",
    image: "https://m.media-amazon.com/images/I/81-S45p1I5L._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81-S45p1I5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81aGxe2CzpL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/714u9CbmL+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71loVccpsHL._AC_SL1500_.jpg"
    ], //
    description: "A reversible plush throw in soft blue and grey. The lattice pattern adds a modern touch to your coastal furniture.",
    specs: {
      dimensions: '60"x80"', //
      care: "Tumble dry low. Reversible textures.",
    },
    madelineNote: "The soft blue matches the river mist at dawn. It’s my favorite for extra large snuggles."
  },
  {
    id: "walnut-charging-nightstand-set",
    name: "Walnut Charging Nightstand Set",
    price: 129.99, //
    material: "Walnut Wood & Solid Wood Feet", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/81AzaJroahL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81AzaJroahL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81WytpT5ppL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81D3iYYtnXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81pDehWi9CL._AC_SL1500_.jpg"
    ], //
    description: "Modern functionality meets mid-century charm. This fluted walnut nightstand features integrated USB-C charging and a drawer for sleek storage.",
    specs: {
      dimensions: "Standard Bedside Height",
      weight: "Heavy-duty solid wood feet", //
    },
    madelineNote: "I love the fluted detail—it adds such a subtle texture to a quiet room. And the USB-C port is a modern necessity.",
    isBestSeller: true
  },
  {
    id: "natural-oak-led-nightstand-set",
    name: "Natural Oak Nightstand with LED",
    price: 149.99, //
    material: "Natural Oak Wood", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/81UBQ-OziRL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81UBQ-OziRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/816PToA4-SL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61oZNrsHB6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81UdS3K0d1L._AC_SL1500_.jpg"
    ], //
    description: "A set of two oak nightstands featuring built-in LED lighting and charging stations. The perfect blend of artisan woodwork and modern convenience.",
    specs: {
      dimensions: "15\" D x 15.7\" W x 22.6\" H", //
      care: "Wipe with wood-safe cleaner.",
    },
    madelineNote: "The LED light acts as a perfect soft glow for late-night reading without disturbing the peace of your sanctuary."
  },
  {
    id: "farmhouse-white-nightstand-set",
    name: "Distressed White Farmhouse Nightstands",
    price: 269.99, //
    material: "Thickened Wood Base", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/81WOh1ZlCTL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81WOh1ZlCTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/713EizCyHKL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/915HdBGaQoL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91f4dWhEdZL._AC_SL1500_.jpg"
    ], //
    description: "Vintage-inspired distressed white nightstands with 3 spacious drawers. Sturdy farmhouse design with antique-style handles.",
    specs: {
      dimensions: '22" Wider Side Table', //
      care: "Dust with a dry cloth.",
    },
    madelineNote: "That distressed finish is the epitome of Welaka charm. It feels like a piece that has been in the family for generations."
  },
  {
    id: "olive-green-scooped-accent-chair",
    name: "Olive Green Reading Sanctuary Chair",
    price: 169.99, //
    material: "Upholstered Fabric", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/71pC0ZzN29L._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/71pC0ZzN29L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/815K+vmT8EL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/7134KLlOKBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81XcN3r1AWL._AC_SL1500_.jpg"
    ], //
    description: "A mid-century modern scooped armchair in deep olive green. Comfy enough for hours of reading in your favorite corner.",
    specs: {
      dimensions: "Modern Compact Size",
      care: "Spot clean fabric.",
    },
    madelineNote: "This green reminds me of the lush riverbanks of the St. Johns. It brings the outside into your sanctuary."
  },
  {
    id: "lazy-chair-ottoman-beige",
    name: "Leisure Lazy Chair & Ottoman",
    price: 159.99, //
    material: "Comfy Fabric & Wood", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/81Wcr0M-4zL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81Wcr0M-4zL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71cEL56lcxL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/713BviKy-vL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71lXSAxRGmL._AC_SL1500_.jpg"
    ], //
    description: "The ultimate relaxation set. Includes an arm chair with lumbar pillow and a folding footrest for maximum comfort.",
    specs: {
      dimensions: "Adjustable folding footrest", //
    },
    madelineNote: "I call this the 'Sunday Morning' chair. Kick back, put your feet up, and let the rest of the world wait.",
    isBestSeller: true
  },
  {
    id: "script-print-armless-chair",
    name: "Botticelli Contemporary Script Chair",
    price: 81.76, //
    material: "Fabric", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/91Tqh3xlAiL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/91Tqh3xlAiL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91zwqtC0MNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91uziKNT2DL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/714fSDVBsdL._AC_SL1116_.jpg"
    ], //
    description: "An armless contemporary accent chair featuring a unique script print. A literary addition to any modern bedroom sanctuary.",
    specs: {
      dimensions: "Compact Accent Profile",
    },
    madelineNote: "Perfect for an empty corner that needs a dash of personality. It's lightweight and easy to move where the sun hits best."
  },
  {
    id: "solid-oak-bed-bench",
    name: "Heritage Solid Oak End of Bed Bench",
    price: 109.99, //
    material: "100% Solid Oak Wood", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/81CWi4XAyGL._AC_SL1280_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81CWi4XAyGL._AC_SL1280_.jpg",
      "https://m.media-amazon.com/images/I/61NCbEW6IIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61kmUzSr9KL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ppDFM1SkL._AC_SL1500_.jpg"
    ], //
    description: "Simple, honest, and built to last. This solid oak bench is the perfect landing spot at the end of your bed.",
    specs: {
      dimensions: "47’’ Length", //
      care: "Wipe with damp cloth and dry immediately.",
    },
    madelineNote: "Solid oak is timeless. It’s the kind of piece that grounds a room and adds a sense of permanence."
  },
  {
    id: "oval-upholstered-storage-bench",
    name: "Oval Aesthetic Storage Ottoman",
    price: 164.99, //
    material: "Upholstered Fabric", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/91IVqQNLh0L._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/91IVqQNLh0L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81aMSBaFFyL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81C3dfsstaL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81J9XRnqhhL._AC_SL1500_.jpg"
    ], //
    description: "A large oval storage ottoman that combines seating with hidden utility. Soft fabric and an aesthetic silhouette for a clutter-free sanctuary.",
    specs: {
      dimensions: "49.2 Inch Length", //
    },
    madelineNote: "Hidden storage is the secret to a peaceful bedroom. Tuck your extra blankets away and enjoy the clean lines."
  },
  {
    id: "tufted-linen-storage-ottoman",
    name: "Classic Tufted Linen Storage Bench",
    price: 119.99, //
    material: "Linen Fabric", //
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/71m6hy29SGL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/71m6hy29SGL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51U-dZvbFiL._AC_SL1024_.jpg",
      "https://m.media-amazon.com/images/I/71kkp0Ur+OL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/816qQCe4VtL._AC_SL1500_.jpg"
    ], //
    description: "Tufted linen storage bench with a safety hinge. Durable enough for seating and elegant enough for the foot of your bed.",
    specs: {
      dimensions: "43 Inch", //
      weight: "350 lb Weight Capacity", //
    },
    madelineNote: "Linen beige is our signature color. It’s light, airy, and works with everything."
  },
  {
    id: "led-flush-mount-ceiling-light",
    name: "Square LED Flush Mount Light (2PK)",
    price: 89.99, //
    material: "Metal & Acrylic",
    category: "decor",
    image: "https://m.media-amazon.com/images/I/61WD-5+qjML._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/61WD-5+qjML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61pNenyo40L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61lMTiLyFCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71tGZz0OpYL._AC_SL1500_.jpg"
    ], //
    description: "Sleek square ceiling light with selectable color temperatures. Provides broad, bright lighting for closets or hallways.",
    specs: {
      dimensions: "18 Inch", //
      threadCount: "50W, 4500LM", //
      care: "2700K/4000K/6000K CCT Selectable", //
    },
    madelineNote: "I love that you can change the mood from cool morning light to warm evening glow with a simple setting."
  },
  {
    id: "northern-galaxy-light-projector",
    name: "Aurora Galaxy Star Projector",
    price: 41.99, //
    material: "LED Components",
    category: "decor",
    image: "https://m.media-amazon.com/images/I/81ASRJlhl3L._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81ASRJlhl3L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71J3JbnK7xL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/813Ux630GSL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711jgLwGY6L._AC_SL1500_.jpg"
    ], //
    description: "Transform your ceiling into a northern nebula with 33 light effects. Includes white noise and Bluetooth speaker for total relaxation.",
    specs: {
      care: "Remote Control Operated", //
    },
    madelineNote: "It’s like sleeping under the Florida stars, without the mosquitos. The white noise is a dream for deep rest."
  },
  {
    id: "sunset-ocean-ambient-lamp",
    name: "3-in-1 Sunset & Ocean Mood Light",
    price: 31.99, //
    material: "Ambient LED",
    category: "decor",
    image: "https://m.media-amazon.com/images/I/71I1UDhtksL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/71I1UDhtksL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81wpmYhoeUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tXH-nP6+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71V5DiuDwFL._AC_SL1500_.jpg"
    ], //
    description: "Capture the golden hour with 216 modes including sunset, ocean, and northern lights. The ultimate vibe creator for any bedroom.",
    specs: {
      care: "Remote Control with 216 Modes", //
    },
    madelineNote: "Perfect for those of us who never want the Welaka sunset to end. It creates such a dreamy, warm glow."
  },
  {
    id: "ivory-fluffy-shag-rug",
    name: "Ivory Shag Nursery & Bedroom Rug",
    price: 31.99, //
    material: "Plush Fuzzy Shaggy Fabric", //
    category: "decor",
    image: "https://m.media-amazon.com/images/I/71jJIcUX09L._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/71jJIcUX09L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/811lalm1NUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71tF0BOq+KL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yysr+mOiL._AC_SL1500_.jpg"
    ], //
    description: "Ultra-soft ivory rug with a non-slip backing. Bring a cloud-like texture to your bedroom floor for a cozy, aesthetic dorm or nursery.",
    specs: {
      dimensions: "4x6 Feet", //
      care: "Shake out dust regularly. Spot clean.",
    },
    madelineNote: "There is nothing better than stepping onto something this soft first thing in the morning."
  },
  {
    id: "moroccan-boho-washable-rug",
    name: "Machine Washable Moroccan Boho Rug",
    price: 39.99, //
    material: "Ultra Soft Distressed Fabric", //
    category: "decor",
    image: "https://m.media-amazon.com/images/I/815xwrtKJeL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/815xwrtKJeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71KBw6X+leL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71jJSp65wLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71hno28vd5L._AC_SL1500_.jpg"
    ], //
    description: "Neutral grey Moroccan style rug that is completely machine washable. Distressed patterns add a touch of vintage boho charm.",
    specs: {
      dimensions: "5x7 Feet", //
      care: "Machine Washable", //
    },
    madelineNote: "Washable rugs are a game changer for coastal homes. Easy clean-up, and it looks beautiful even after a day at the river."
  },
  {
    id: "grey-plush-runner-rug",
    name: "Furry Grey Plush Runner Rug",
    price: 18.71, //
    material: "Shag Furry Plush", //
    category: "decor",
    image: "https://m.media-amazon.com/images/I/81P4e+zxnHL._AC_SL1500_.jpg", //
    images: [
      "https://m.media-amazon.com/images/I/81P4e+zxnHL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91c0GmUH6bL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81mavbiVfwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81gjayqNfhL._AC_SL1500_.jpg"
    ], //
    description: "A plush, non-shedding grey runner rug. Adds a soft texture to narrow spaces like hallways or beside the bed.",
    specs: {
      dimensions: "2x6 Feet", //
    },
    madelineNote: "Perfect for placing right next to your bed so your toes hit something fuzzy instead of cold floors."
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