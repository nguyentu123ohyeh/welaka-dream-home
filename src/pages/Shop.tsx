import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const categories = [
  { id: "all", name: "All Products" },
  { id: "bedding", name: "Organic Bedding" },
  { id: "furniture", name: "Artisan Furniture" },
  { id: "decor", name: "Coastal Decor" },
];

const materials = ["All", "Linen", "Cotton", "Rattan", "Oak"];

const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: Infinity },
  { id: "under-200", name: "Under $200", min: 0, max: 200 },
  { id: "200-500", name: "$200 - $500", min: 200, max: 500 },
  { id: "500-plus", name: "$500+", min: 500, max: Infinity },
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeMaterial, setActiveMaterial] = useState("All");
  const [activePriceRange, setActivePriceRange] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (activeCategory !== "all" && product.category !== activeCategory) {
        return false;
      }

      // Material filter
      if (activeMaterial !== "All") {
        const materialLower = activeMaterial.toLowerCase();
        if (!product.material.toLowerCase().includes(materialLower)) {
          return false;
        }
      }

      // Price filter
      const priceRange = priceRanges.find((p) => p.id === activePriceRange);
      if (priceRange && activePriceRange !== "all") {
        if (product.price < priceRange.min || product.price >= priceRange.max) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, activeMaterial, activePriceRange]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="gradient-coastal section-padding">
          <div className="container-luxury text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="caption-elegant text-driftwood mb-4"
            >
              The Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display font-serif text-primary mb-6"
            >
              Shop Our Sanctuary
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-large text-muted-foreground max-w-2xl mx-auto"
            >
              Each piece has been thoughtfully selected to bring comfort,
              beauty, and tranquility to your bedroom.
            </motion.p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="section-padding">
          <div className="container-luxury">
            {/* Filters */}
            <div className="mb-12 space-y-6">
              {/* Category Filter */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={activeCategory === cat.id ? "sanctuary" : "subtle"}
                      size="sm"
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-8">
                {/* Material Filter */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Material
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {materials.map((mat) => (
                      <Button
                        key={mat}
                        variant={activeMaterial === mat ? "sanctuary" : "subtle"}
                        size="sm"
                        onClick={() => setActiveMaterial(mat)}
                      >
                        {mat}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Price
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <Button
                        key={range.id}
                        variant={
                          activePriceRange === range.id ? "sanctuary" : "subtle"
                        }
                        size="sm"
                        onClick={() => setActivePriceRange(range.id)}
                      >
                        {range.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No products match your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
