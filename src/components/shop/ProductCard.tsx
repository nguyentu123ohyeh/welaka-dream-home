import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block card-coastal rounded-lg overflow-hidden bg-card transition-all hover:shadow-elegant"
    >
      {/* Image Container - Đổi sang object-contain để hiện full ảnh */}
      <div className="aspect-square bg-secondary/10 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-driftwood mb-2 font-medium">
          {product.material}
        </p>
        <h3 className="font-serif text-lg text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xl font-semibold text-primary">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;