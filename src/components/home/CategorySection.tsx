import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import categoryBedding from "@/assets/category-bedding.jpg";
import categoryFurniture from "@/assets/category-furniture.jpg";
import categoryDecor from "@/assets/category-decor.jpg";

const categories = [
  {
    id: 1,
    name: "Organic Bedding",
    description: "Breathable linens & cotton sets",
    image: categoryBedding,
    href: "/shop?category=bedding",
  },
  {
    id: 2,
    name: "Artisan Furniture",
    description: "Handcrafted nightstands & chairs",
    image: categoryFurniture,
    href: "/shop?category=furniture",
  },
  {
    id: 3,
    name: "Coastal Decor & Lighting",
    description: "Natural accents & warm glow",
    image: categoryDecor,
    href: "/shop?category=decor",
  },
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="caption-elegant text-driftwood mb-4">The Collection</p>
          <h2 className="heading-section font-serif text-primary">
            Curated for Your Retreat
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={category.href}
                className="group block card-coastal rounded-lg overflow-hidden bg-card"
              >
                <div className="image-coastal aspect-[4/5]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary mb-2 group-hover:text-accent-foreground transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
