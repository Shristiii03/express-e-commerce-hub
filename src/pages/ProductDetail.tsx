import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-4">Product not found</h1>
            <Link to="/products">
              <Button variant="outline">Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ChevronLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square bg-secondary/20">
              {product.isNew && (
                <span className="absolute top-8 left-8 bg-background text-foreground px-4 py-2 text-sm font-medium italic">
                  NEW
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
              <p className="text-2xl mb-6">${product.price}</p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <Button
                variant="luxury"
                size="lg"
                className="w-full md:w-auto"
                onClick={() => addToCart(product)}
              >
                Add to Bag
              </Button>

              <div className="mt-12 space-y-4 text-sm text-muted-foreground">
                <p>• Free shipping on orders over $100</p>
                <p>• 30-day return policy</p>
                <p>• Complimentary gift wrapping available</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
