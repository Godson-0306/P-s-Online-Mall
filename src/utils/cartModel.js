export function createCartItems(products) {
  return products.slice(0, 3).map((product, index) => ({
    id: product.id,
    product,
    quantity: index + 1,
    color: product.colors?.[0] || 'Default',
    size: product.sizes?.[0] || 'One Size',
    saved: false,
  }));
}

export function calculateCartTotals(items, coupon = '') {
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const shipping = subtotal > 75000 || subtotal === 0 ? 0 : 6500;
  const couponDiscount = coupon.toUpperCase() === 'PSGOLD' ? subtotal * 0.1 : 0;
  const estimatedTax = subtotal * 0.075;
  const grandTotal = Math.max(0, subtotal + shipping + estimatedTax - couponDiscount);

  return {
    subtotal,
    shipping,
    discount: couponDiscount,
    estimatedTax,
    grandTotal,
  };
}
