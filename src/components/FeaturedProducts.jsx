import Container from './Container.jsx';
import ProductCard from './ProductCard.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function FeaturedProducts({ products }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Featured products"
          title="Pieces selected for everyday polish"
          description="A refined edit of fashion, beauty, home, and tech favorites."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
