import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">LUMIÈRE</h3>
            <p className="text-sm text-muted-foreground">
              Premium beauty products crafted with the finest ingredients for your ultimate self-care ritual.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/policies/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/policies/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/policies/cancellation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-muted-foreground hover:text-foreground transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Helpline</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-LUMIERE</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@lumiere.com" className="hover:text-foreground transition-colors">
                  hello@lumiere.com
                </a>
              </li>
              <li className="text-muted-foreground pt-2">
                Available Mon-Fri, 9AM-6PM EST
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 LUMIÈRE Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
