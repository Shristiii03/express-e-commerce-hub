import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif mb-8">Shipping & Delivery</h1>
          
          <div className="max-w-3xl space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Shipping Options</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">Standard Shipping - $10</p>
                  <p>Delivery within 5-7 business days</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Express Shipping - $25</p>
                  <p>Delivery within 2-3 business days</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Next Day Delivery - $40</p>
                  <p>Order before 2PM EST for next business day delivery</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Free Shipping</h2>
              <p>Enjoy complimentary standard shipping on all orders over $100. No code required—discount applied automatically at checkout.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Processing Time</h2>
              <p>All orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day. You will receive a confirmation email with tracking information once your order ships.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">International Shipping</h2>
              <p>We currently ship to select international destinations. Shipping times vary by location (typically 10-15 business days). Please note that international orders may be subject to customs fees and import duties, which are the responsibility of the recipient.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Order Tracking</h2>
              <p>Once your order ships, you'll receive a tracking number via email. You can track your package status at any time through the carrier's website or in your account dashboard.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
