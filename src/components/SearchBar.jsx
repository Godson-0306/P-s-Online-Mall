import { Search } from 'lucide-react';

export default function SearchBar({ className = '' }) {
  return (
    <form className={`relative ${className}`} role="search">
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
        aria-hidden="true"
      />
      <input
        id="site-search"
        type="search"
        placeholder="Search dresses, bags, beauty..."
        className="h-12 w-full rounded-full border border-gray-200 bg-brand-mist pl-11 pr-4 text-sm text-brand-ink transition placeholder:text-gray-400 focus:border-brand-purple focus:bg-white focus:outline-none"
      />
    </form>
  );
}
