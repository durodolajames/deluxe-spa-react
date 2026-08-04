'use client';

import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/utils';
import { checkoutCart, isPaystackEnabled } from '@/lib/paystack';

export default function CartDrawer() {
  const {
    items, removeItem, updateQty, clearCart,
    subtotal, total, hasPhysicalItems, isOpen, setIsOpen
  } = useCart();

  const handleCheckout = () => {
    checkoutCart(items);
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={() => setIsOpen(false)} aria-label="Close cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p>Your cart is empty</p>
              <a href="/shop" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', marginTop: 16 }} onClick={() => setIsOpen(false)}>
                Browse Products
              </a>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.type}`}>
                <div className="cart-item-image">
                  <div style={{
                    width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(135deg, #EFE9D9 0%, #f5ede2 100%)',
                    fontFamily: "'Playfair Display', serif", fontSize: 10, color: '#7f7669',
                    textAlign: 'center', padding: 4
                  }}>
                    {item.name.substring(0, 15)}{item.name.length > 15 ? '...' : ''}
                  </div>
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-meta">{item.type === 'service' ? 'Service' : 'Product'} · {item.duration || 'Standard'}</div>
                  <div className="cart-item-price">{formatPrice(item.price * item.qty)}</div>
                  <div className="cart-item-actions">
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.type, item.qty - 1)}>−</button>
                    <span style={{ fontSize: 13, fontWeight: 600, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.type, item.qty + 1)}>+</button>
                    <button className="cart-item-remove" onClick={() => removeItem(item.id, item.type)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="price-breakdown">
              <div className="breakdown-row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="breakdown-row total">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {!isPaystackEnabled && (
              <p className="cart-checkout-note" style={{ marginBottom: 12, color: '#6B5A3B', fontSize: 14 }}>
                Paystack is currently unavailable. Please place your order and complete payment by bank transfer.
              </p>
            )}
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              {isPaystackEnabled ? 'Checkout with Paystack' : 'Checkout with Bank Transfer'}
            </button>
            <button className="cart-clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
