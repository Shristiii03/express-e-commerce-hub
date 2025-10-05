import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-secondary/20 mb-4 relative">
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-background text-foreground px-3 py-1 text-xs font-medium italic z-10">
              NEW
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">${product.price}</p>
        
        <Button
          variant="luxury"
          size="sm"
          className="w-full"
          onClick={() => addToCart(product)}
        >
          Add to Bag
        </Button>
      </div>
    </div>
  );
};
