import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Truck, Shield, Leaf, MessageCircle } from "lucide-react";
import { useState } from "react"; // Thêm useState
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  
  // State để quản lý ảnh đang hiển thị
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 section-padding">
          <div className="container-luxury text-center">
            <h1 className="heading-section font-serif text-primary mb-4">Product Not Found</h1>
            <Button asChild variant="coastal">
              <Link to="/shop">Return to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Lấy danh sách tất cả ảnh (ảnh chính + gallery)
  const allImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container-luxury py-6">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>
        </div>

        <section className="container-luxury pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* --- GALLERY SECTION --- */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-square rounded-lg overflow-hidden bg-secondary/5 border border-border flex items-center justify-center p-8"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={allImages[selectedImage]}
                    alt={product.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain shadow-elegant"
                  />
                </AnimatePresence>
              </motion.div>

              {/* Thumbnails list */}
              <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-accent shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`view ${index}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* --- INFO SECTION --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <p className="caption-elegant text-driftwood mb-3 uppercase tracking-widest text-xs font-bold">
                {product.material}
              </p>
              <h1 className="font-serif text-3xl md:text-5xl text-primary mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-primary mb-6">
                ${product.price.toLocaleString()}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Link 
                  to="/contact" 
                  className="w-full bg-foreground text-background flex items-center justify-center gap-3 py-6 rounded-md text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-white transition-all shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </Link>
                <p className="text-[10px] text-center text-muted-foreground italic">
                  Madeline personally responds to all design inquiries within 24-48 hours.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="h-5 w-5 text-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 border-x border-border">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter">30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Leaf className="h-5 w-5 text-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Eco-Friendly</span>
                </div>
              </div>

              {/* Specs & Madeline's Note (Giữ nguyên logic cũ) */}
              {/* ... (phần code specs và note của bạn) */}
              {product.specs && (
                <div className="mb-10">
                  <h3 className="font-serif text-xl text-primary mb-4">The Details</h3>
                  <dl className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border/50 text-sm">
                        <dt className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</dt>
                        <dd className="text-foreground font-medium text-right max-w-[60%]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {product.madelineNote && (
                <div className="bg-accent/10 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12" />
                  <h3 className="font-serif text-lg text-primary mb-3">Madeline's Note</h3>
                  <p className="text-primary/80 italic leading-relaxed font-serif text-lg">"{product.madelineNote}"</p>
                  <p className="text-xs text-driftwood mt-4 font-bold tracking-widest uppercase">— Madeline Marie Mellen</p>
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