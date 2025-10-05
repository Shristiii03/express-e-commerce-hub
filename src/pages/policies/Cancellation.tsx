import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Cancellation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif mb-8">Cancellation Policy</h1>
          
          <div className="max-w-3xl space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Order Cancellation</h2>
              <p>We understand that plans change. You may cancel your order at any time before it ships. Once an order has been shipped, it cannot be cancelled, but you may return it according to our Returns Policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">How to Cancel</h2>
              <p>To cancel an order that hasn't shipped yet:</p>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>Contact us immediately at hello@lumiere.com or call 1-800-LUMIERE</li>
                <li>Provide your order number and email address</li>
                <li>We'll confirm your cancellation via email</li>
              </ol>
              <p className="mt-3 font-medium text-foreground">Please note: Orders are typically processed within 1-2 business hours. For the best chance of cancellation, contact us as soon as possible after placing your order.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Refunds for Cancelled Orders</h2>
              <p>If your order is successfully cancelled before shipping, you'll receive a full refund to your original payment method within 3-5 business days. If your order has already been shipped, please refer to our Returns & Exchanges policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Partial Cancellations</h2>
              <p>If you'd like to cancel only certain items from your order, please contact us. We'll do our best to accommodate partial cancellations if the order hasn't been shipped yet. Once shipped, individual items can be returned according to our Returns Policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Pre-Orders & Special Items</h2>
              <p>Pre-ordered items and special order products may have different cancellation terms. Any specific cancellation policies will be clearly communicated at the time of purchase.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Contact Us</h2>
              <p>If you have any questions about our cancellation policy, please don't hesitate to reach out:</p>
              <div className="mt-3 space-y-1">
                <p>Email: hello@lumiere.com</p>
                <p>Phone: 1-800-LUMIERE</p>
                <p>Hours: Monday-Friday, 9AM-6PM EST</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cancellation;
