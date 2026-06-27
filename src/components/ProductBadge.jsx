export default function ProductBadge({ children }) {
  return (
    <span className="absolute left-4 top-4 z-10 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-brand-ink shadow-soft">
      {children}
    </span>
  );
}
