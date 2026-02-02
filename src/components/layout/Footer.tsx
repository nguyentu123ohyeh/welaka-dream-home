import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-wide">
                Welaka Breeze
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Curated bedroom essentials for your personal sanctuary. Where
              Florida's coastal serenity meets timeless elegance.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Founded by Madeline Marie Mellen
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/shop"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Shop Collection
              </Link>
              <Link
                to="/about"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Our Story
              </Link>
              <Link
                to="/contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:kennanstropmfh6@hotmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">kennanstropmfh6@hotmail.com</span>
              </a>
              <a
                href="tel:+14092568329"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+1 (409) 256-8329</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  112 Cherry Drive
                  <br />
                  Welaka, Florida 32193
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Welaka Breeze. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Crafted with care in Florida
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
