import { Tag } from 'lucide-react';
import { useState } from 'react';
import Button from './Button.jsx';
import Input from './Input.jsx';
import { formatCurrency } from '../utils/formatCurrency.js';

export default function OrderSummary({
  totals,
  coupon,
  onCouponChange,
  onCheckout,
  buttonLabel = 'Checkout',
}) {
  const [message, setMessage] = useState('');

  const applyCoupon = () => {
    setMessage(
      coupon.trim().toUpperCase() === 'PSGOLD'
        ? 'Coupon applied: 10% luxury edit discount.'
        : 'Try PSGOLD for 10% off.',
    );
  };

  const rows = [
    ['Subtotal', totals.subtotal],
    ['Shipping', totals.shipping],
    ['Discount', -totals.discount],
    ['Estimated Tax', totals.estimatedTax],
  ];

  return (
    <aside className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-soft lg:sticky lg:top-32">
      <h2 className="text-xl font-semibold text-brand-ink">Order Summary</h2>
      <div className="mt-6 space-y-4">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="font-semibold text-brand-ink">
              {value === 0 && label === 'Shipping' ? 'Free' : formatCurrency(value)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-gray-100 pt-5">
        <label htmlFor="coupon-code" className="mb-2 block text-sm font-semibold text-brand-ink">
          Coupon Code
        </label>
        <div className="flex gap-2">
          <Input
            id="coupon-code"
            value={coupon}
            onChange={(event) => onCouponChange(event.target.value)}
            placeholder="PSGOLD"
            className="min-w-0"
          />
          <button
            type="button"
            onClick={applyCoupon}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-purple transition hover:bg-brand-purple hover:text-white"
          >
            <Tag size={17} aria-hidden="true" />
          </button>
        </div>
        {message ? <p className="mt-2 text-xs font-semibold text-brand-purple">{message}</p> : null}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
        <span className="text-base font-semibold text-brand-ink">Grand Total</span>
        <span className="text-2xl font-bold text-brand-purple">
          {formatCurrency(totals.grandTotal)}
        </span>
      </div>
      <Button type="button" onClick={onCheckout} className="mt-6 w-full">
        {buttonLabel}
      </Button>
    </aside>
  );
}
