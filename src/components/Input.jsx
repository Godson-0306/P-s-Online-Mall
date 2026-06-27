export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-brand-ink shadow-sm transition placeholder:text-gray-400 focus:border-brand-purple focus:ring-0 ${className}`}
      {...props}
    />
  );
}
