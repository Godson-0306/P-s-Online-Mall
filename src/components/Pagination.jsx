import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-brand-ink transition hover:border-brand-purple hover:text-brand-purple disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} aria-hidden="true" />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        const active = pageNumber === page;

        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={`h-11 w-11 rounded-full text-sm font-semibold transition ${
              active
                ? 'bg-brand-purple text-white shadow-soft'
                : 'border border-gray-200 bg-white text-brand-ink hover:border-brand-purple hover:text-brand-purple'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-brand-ink transition hover:border-brand-purple hover:text-brand-purple disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </nav>
  );
}
