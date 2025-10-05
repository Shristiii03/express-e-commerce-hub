import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const featuredProducts = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Luxury beauty products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">
              Elevate Your Beauty Ritual
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover curated luxury for your self-care journey
            </p>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                Shop Collection
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">New Arrivals</h2>
            <p className="text-muted-foreground">
              Introducing our latest luxurious additions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="luxury" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="bg-secondary/20 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-xl font-serif mb-3">Complimentary Shipping</h3>
                <p className="text-muted-foreground">
                  Free standard delivery on orders over $100
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Cruelty-free & sustainably sourced ingredients
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-3">Expert Service</h3>
                <p className="text-muted-foreground">
                  Personalized beauty consultations available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Shop by Category</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/products?category=skincare"
              className="group relative aspect-square overflow-hidden bg-secondary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-8 left-8 text-3xl font-serif text-white group-hover:translate-y-[-4px] transition-transform duration-300">
                Skincare
              </h3>
            </Link>

            <Link
              to="/products?category=haircare"
              className="group relative aspect-square overflow-hidden bg-secondary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-8 left-8 text-3xl font-serif text-white group-hover:translate-y-[-4px] transition-transform duration-300">
                Haircare
              </h3>
            </Link>

            <Link
              to="/products?category=bodycare"
              className="group relative aspect-square overflow-hidden bg-secondary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-8 left-8 text-3xl font-serif text-white group-hover:translate-y-[-4px] transition-transform duration-300">
                Body Care
              </h3>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
