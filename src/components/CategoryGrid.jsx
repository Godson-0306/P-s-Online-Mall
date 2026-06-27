import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function CategoryGrid({ categories }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Shop by category"
          title="Curated departments for every part of your lifestyle"
          description="Explore refined essentials, statement pieces, and thoughtful gifts in one elegant marketplace."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <Link
                to={`/shop?category=${category.id}`}
                className="group block overflow-hidden rounded-[1.5rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-[4/5] overflow-hidden bg-brand-mist">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-4">
                  <h3 className="font-semibold text-brand-ink">{category.name}</h3>
                  <span className="text-sm font-semibold text-brand-purple">Shop</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
