import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getBestSellers } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

const BestSellersSection = () => {
  const bestSellers = getBestSellers();

  return (
    <section className="section-padding gradient-sand">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <p className="caption-elegant text-driftwood mb-4">Most Loved</p>
            <h2 className="heading-section font-serif text-primary">
              Best Sellers
            </h2>
          </div>
          <Button asChild variant="coastal" className="mt-6 md:mt-0">
            <Link to="/shop">View All Products</Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
