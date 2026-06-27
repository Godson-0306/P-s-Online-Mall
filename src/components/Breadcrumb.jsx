import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from './Container.jsx';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="border-b border-gray-100 bg-white py-4" aria-label="Breadcrumb">
      <Container>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-medium transition hover:text-brand-purple"
            >
              <Home size={15} aria-hidden="true" />
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.label} className="inline-flex items-center gap-2">
                <ChevronRight size={15} aria-hidden="true" />
                {isLast || !item.href ? (
                  <span className="font-semibold text-brand-ink">{item.label}</span>
                ) : (
                  <Link to={item.href} className="font-medium transition hover:text-brand-purple">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
