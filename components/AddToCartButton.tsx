'use client';

import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/data';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      className="btn btn-sm btn-gold"
      onClick={() =>
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          type: 'product',
          category: product.category,
        })
      }
    >
      Add to Cart
    </button>
  );
}
