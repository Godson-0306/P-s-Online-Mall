export default function EmptyState({ title = 'Nothing to show yet', text, children }) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-gray-200 bg-white p-10 text-center">
      <h2 className="text-lg font-semibold text-brand-ink">{title}</h2>
      {text ? <p className="mt-2 text-sm text-gray-500">{text}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
