import { CreditCard, PackageCheck, RefreshCcw, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from './Container.jsx';

const benefits = [
  {
    title: 'Fast Delivery',
    text: 'Reliable dispatch across major cities with careful packaging.',
    icon: Truck,
  },
  {
    title: 'Secure Payments',
    text: 'Encrypted checkout and trusted payment options for confidence.',
    icon: CreditCard,
  },
  {
    title: 'Genuine Products',
    text: 'Verified suppliers and quality checks before items reach you.',
    icon: PackageCheck,
  },
  {
    title: 'Easy Returns',
    text: 'Simple return support when an item is not the perfect fit.',
    icon: RefreshCcw,
  },
];

export default function Benefits() {
  return (
    <section className="bg-brand-purple py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }, index) => (
            <motion.div
              key={title}
              className="rounded-[1.25rem] border border-white/10 bg-white/8 p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-purple">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">{text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
