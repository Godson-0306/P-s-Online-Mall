import { Heart, Menu, ShoppingBag, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import Container from './Container.jsx';
import SearchBar from './SearchBar.jsx';

const navItems = [
  ['Home', '/'],
  ['Categories', '/shop?view=categories'],
  ['New Arrivals', '/shop?collection=new-arrivals'],
  ['Deals', '/shop?collection=deals'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

function IconButton({ label, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-ink transition hover:border-brand-purple/30 hover:text-brand-purple"
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-20 items-center gap-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-brand-ink lg:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={21} aria-hidden="true" />
          </button>

          <Link to="/" className="flex shrink-0 items-center" aria-label="P's Online Mall home">
            <img
              src={logo}
              alt="P's Online Mall"
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
            />
          </Link>

          <SearchBar className="mx-auto hidden max-w-xl flex-1 lg:block" />

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <IconButton label="Wishlist">
                <Heart size={19} aria-hidden="true" />
              </IconButton>
            </div>
            <IconButton label="Shopping cart">
              <ShoppingBag size={19} aria-hidden="true" />
            </IconButton>
            <button
              type="button"
              className="hidden rounded-full bg-brand-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-purple md:inline-flex"
            >
              <UserRound className="mr-2" size={17} aria-hidden="true" />
              Account
            </button>
          </div>
        </div>

        <nav className="hidden items-center justify-center gap-9 border-t border-gray-100 py-4 text-sm font-semibold text-gray-600 lg:flex">
          {navItems.map(([label, href]) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `transition hover:text-brand-purple ${
                  isActive && href === '/' ? 'text-brand-purple' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 bg-brand-ink/40 lg:hidden" role="presentation">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-5 shadow-lift">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center"
                aria-label="P's Online Mall home"
                onClick={() => setOpen(false)}
              >
                <img src={logo} alt="P's Online Mall" className="h-14 w-auto object-contain" />
              </Link>
              <button
                type="button"
                aria-label="Close navigation"
                className="rounded-full border border-gray-200 p-2"
                onClick={() => setOpen(false)}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <SearchBar className="mt-7" />
            <nav className="mt-8 grid gap-2">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-brand-ink transition hover:bg-brand-mist hover:text-brand-purple"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
