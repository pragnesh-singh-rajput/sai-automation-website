import Link from 'next/link';
import { navItems } from '@/lib/constants';
import { Settings2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 transition-opacity hover:opacity-80">
              <Settings2 className="h-7 w-7 text-primary" />
              <span className="font-heading text-xl font-bold text-primary">Precision Motion Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Leading the way in industrial automation and robotic solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-heading mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-heading mb-3">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>123 Automation Drive</p>
              <p>Tech Park, Innovation City, 45678</p>
              <p>Email: <a href="mailto:info@precisionmotionhub.com" className="hover:text-primary transition-colors">info@precisionmotionhub.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Precision Motion Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
