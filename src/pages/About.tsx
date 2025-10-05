import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-serif mb-6">About LUMIÈRE</h1>
          
          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground">
              Where luxury meets self-care
            </p>
            
            <p>
              Founded in 2020, LUMIÈRE was born from a simple belief: that everyone deserves to experience the transformative power of premium beauty products. Our name, meaning "light" in French, represents our mission to help you shine from within.
            </p>

            <p>
              We carefully curate each product in our collection, working directly with artisan laboratories and sustainable suppliers who share our commitment to quality and ethics. Every formula is crafted with the finest natural ingredients, advanced skincare technology, and a touch of luxury that makes your daily routine feel extraordinary.
            </p>

            <h2 className="text-2xl font-serif mt-12 mb-4 text-foreground">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 className="font-medium text-foreground mb-2">Quality First</h3>
                <p>We never compromise on ingredients or formulations. Each product undergoes rigorous testing to ensure it meets our exacting standards.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">Sustainable Beauty</h3>
                <p>Our packaging is recyclable, and we partner with suppliers who prioritize environmental responsibility at every step.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">Cruelty-Free</h3>
                <p>All our products are cruelty-free and we work exclusively with brands that share our commitment to ethical practices.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2">Inclusive Beauty</h3>
                <p>We believe beauty is for everyone. Our products are formulated to work for all skin types, tones, and hair textures.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif mt-12 mb-4 text-foreground">The LUMIÈRE Experience</h2>
            
            <p>
              Shopping with LUMIÈRE is more than a transaction—it's an experience. From our carefully designed packaging to our attentive customer service, we strive to make every moment feel special. Each order includes complimentary samples, and we offer personalized consultations to help you find the perfect products for your unique needs.
            </p>

            <p>
              Our gift sets are thoughtfully curated to create complete beauty rituals, perfect for treating yourself or someone special. Each set tells a story, combining complementary products that work in harmony to deliver exceptional results.
            </p>

            <p className="text-lg text-foreground mt-8">
              Thank you for choosing LUMIÈRE. We're honored to be part of your self-care journey.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
