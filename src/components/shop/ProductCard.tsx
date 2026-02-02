import { Link } from "react-router-dom";
import { Product } from "@/data/products";
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

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const imageSrc = imageMap[product.image] || product.image;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block card-coastal rounded-lg overflow-hidden bg-card"
    >
      <div className="image-coastal aspect-square">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs tracking-wider uppercase text-driftwood mb-2">
          {product.material}
        </p>
        <h3 className="font-serif text-lg text-primary mb-2 group-hover:text-accent-foreground transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xl font-medium text-primary">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
