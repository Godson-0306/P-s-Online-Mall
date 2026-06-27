export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-10 bg-brand-purple" />
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="h-12 rounded-full bg-gray-100" />
      </div>
      <div className="h-[55vh] min-h-[420px] animate-pulse bg-gray-100 md:h-[65vh] lg:h-[80vh]" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-20 sm:grid-cols-4 sm:px-6 lg:px-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-64 animate-pulse rounded-[1.5rem] bg-gray-100" />
        ))}
      </div>
    </div>
  );
}
