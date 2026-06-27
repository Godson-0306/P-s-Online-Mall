import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import logo from '../../images/logo.png';
import Container from './Container.jsx';

const links = ['Home', 'New Arrivals', 'Deals', 'About', 'Contact'];
const footerCategories = ['Clothes', 'Shoes', 'Perfumes', 'Bags', 'Electronics', 'Beauty'];

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logo}
              alt="P's Online Mall"
              className="h-16 w-auto rounded-2xl bg-white/95 object-contain p-2"
            />
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              A premium online mall for fashion, beauty, lifestyle, gifting, and everyday essentials.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  aria-label="Social media"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-gold hover:text-brand-ink"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {links.map((link) => (
                <li key={link}>
                  <a href="/" className="transition hover:text-brand-gold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Categories</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {footerCategories.map((category) => (
                <li key={category}>
                  <a href="/" className="transition hover:text-brand-gold">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-brand-gold" size={18} aria-hidden="true" />
                Lagos, Nigeria
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 shrink-0 text-brand-gold" size={18} aria-hidden="true" />
                +234 800 000 0000
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 shrink-0 text-brand-gold" size={18} aria-hidden="true" />
                hello@psonlinemall.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          Copyright {new Date().getFullYear()} P's Online Mall. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
