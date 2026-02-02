import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Truck, Shield, Leaf } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import productLinenDuvet from "@/assets/product-linen-duvet.jpg";
import productRattanPendant from "@/assets/product-rattan-pendant.jpg";
import productLoungeChair from "@/assets/product-lounge-chair.jpg";
import productPillowcases from "@/assets/product-pillowcases.jpg";
import categoryFurniture from "@/assets/category-furniture.jpg";
import categoryBedding from "@/assets/category-bedding.jpg";

// Map product image paths to imports
const imageMap: Record<string, string> = {
  "/product-linen-duvet.jpg": productLinenDuvet,
  "/product-rattan-pendant.jpg": productRattanPendant,
  "/product-lounge-chair.jpg": productLoungeChair,
  "/product-pillowcases.jpg": productPillowcases,
  "/product-rattan-nightstand.jpg": categoryFurniture,
  "/product-linen-throw.jpg": categoryBedding,
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 section-padding">
          <div className="container-luxury text-center">
            <h1 className="heading-section font-serif text-primary mb-4">
              Product Not Found
            </h1>
            <Button asChild variant="coastal">
              <Link to="/shop">Return to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const imageSrc = imageMap[product.image] || product.image;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-luxury py-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>

        {/* Product Content */}
        <section className="container-luxury pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-card shadow-soft">
                <img
                  src={imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <p className="caption-elegant text-driftwood mb-3">
                {product.material}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-medium text-primary mb-6">
                ${product.price.toLocaleString()}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Add to Cart */}
              <Button variant="sanctuary" size="xl" className="w-full mb-6">
                Add to Sanctuary
              </Button>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mb-8 py-6 border-y border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Leaf className="h-4 w-4" />
                  <span>Sustainably Made</span>
                </div>
              </div>

              {/* Specs */}
              {product.specs && (
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-primary mb-4">
                    The Details
                  </h3>
                  <dl className="space-y-3">
                    {product.specs.threadCount && (
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <dt className="text-muted-foreground">Thread Count / Fabric</dt>
                        <dd className="text-foreground font-medium">
                          {product.specs.threadCount}
                        </dd>
                      </div>
                    )}
                    {product.specs.dimensions && (
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <dt className="text-muted-foreground">Dimensions</dt>
                        <dd className="text-foreground font-medium text-right max-w-[60%]">
                          {product.specs.dimensions}
                        </dd>
                      </div>
                    )}
                    {product.specs.weight && (
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <dt className="text-muted-foreground">Weight</dt>
                        <dd className="text-foreground font-medium">
                          {product.specs.weight}
                        </dd>
                      </div>
                    )}
                    {product.specs.care && (
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <dt className="text-muted-foreground">Care Guide</dt>
                        <dd className="text-foreground font-medium text-right max-w-[60%]">
                          {product.specs.care}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Madeline's Note */}
              {product.madelineNote && (
                <div className="bg-accent/30 rounded-lg p-6">
                  <h3 className="font-serif text-lg text-primary mb-3">
                    Madeline's Note
                  </h3>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{product.madelineNote}"
                  </p>
                  <p className="text-sm text-driftwood mt-3">
                    — Madeline Marie Mellen
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
