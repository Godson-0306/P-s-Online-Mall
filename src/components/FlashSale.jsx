import ProductCard from './ProductCard.jsx';
import Container from './Container.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function FlashSale({ products }) {
  return (
    <section className="bg-brand-mist py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Flash sale"
          title="Limited-time luxury finds"
          description="Move quickly on elevated essentials with exclusive savings."
        />
        <div className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-5 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          {products.map((product) => (
            <div key={product.id} className="w-72 shrink-0 snap-start sm:w-80">
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
