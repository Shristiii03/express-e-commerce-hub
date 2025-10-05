import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif mb-8">Returns & Exchanges</h1>
          
          <div className="max-w-3xl space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">30-Day Return Policy</h2>
              <p>We want you to love every purchase. If you're not completely satisfied, you may return unused items within 30 days of delivery for a full refund or exchange.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Return Conditions</h2>
              <p>To be eligible for a return, items must be:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Unused and in the same condition you received them</li>
                <li>In their original packaging with all tags attached</li>
                <li>Returned within 30 days of delivery</li>
                <li>Accompanied by the original receipt or proof of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">How to Return</h2>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>Contact our customer service team at hello@lumiere.com to initiate a return</li>
                <li>Pack your items securely in the original packaging</li>
                <li>Include your order number and reason for return</li>
                <li>Ship to the address provided by our customer service team</li>
              </ol>
              <p className="mt-3">Return shipping is free for domestic orders. Original shipping charges are non-refundable.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Exchanges</h2>
              <p>If you'd like to exchange an item for a different product, please return your original item following the process above and place a new order for your desired item.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Refund Processing</h2>
              <p>Once we receive your return, we'll inspect the items and notify you of the approval or rejection of your refund. If approved, refunds will be processed to your original payment method within 5-7 business days.</p>
            </section>

            <section>
              <h2 className="text-xl font-serif mb-3 text-foreground">Damaged or Defective Items</h2>
              <p>If you receive a damaged or defective item, please contact us immediately at hello@lumiere.com with photos of the product. We'll arrange for a replacement or full refund at no cost to you.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
