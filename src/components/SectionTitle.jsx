import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-2xl text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-brand-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">{description}</p>
      ) : null}
    </motion.div>
  );
}
