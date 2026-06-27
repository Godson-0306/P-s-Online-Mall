import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Drawer({ title, open, onClose, children }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close drawer"
        className="absolute inset-0 bg-brand-ink/45"
        onClick={onClose}
      />
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative flex h-full w-[88vw] max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-lift"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-brand-ink">{title}</h2>
          <button
            type="button"
            aria-label="Close filters"
            className="rounded-full border border-gray-200 p-2 text-brand-ink"
            onClick={onClose}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        {children}
      </motion.aside>
    </div>
  );
}
