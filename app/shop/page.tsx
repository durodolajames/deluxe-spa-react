'use client';

import { useState } from 'react';
import { products, productCategories } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { checkoutSingle } from '@/lib/paystack';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addItem } = useCart();

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const grouped = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="shop-header fade-up">
          <div className="shop-header-left">
            <span className="label-lg" style={{ color: 'var(--primary)', display: 'inline-block', marginBottom: 8 }}>Skincare Collection</span>
            <h1 className="headline-lg" style={{ color: 'var(--deep-espresso)' }}>Shop Products</h1>
            <p className="shop-count">Professional-grade skincare delivered to your door across Lagos.</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="service-tabs" style={{ marginBottom: 48 }}>
          {productCategories.map(cat => (
            <button
              key={cat}
              className={`service-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products by Category */}
        {Object.entries(grouped).map(([category, items]) => (
          <div className="service-category" style={{ marginBottom: 64 }} key={category}>
            <div className="service-category-title">
              <span>{category}</span>
              <span className="service-count">{items.length} product{items.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="grid-4">
              {items.map((product, idx) => (
                <div className={`product-card fade-up d${(idx % 5) + 1}`} key={product.id}>
                  <div className="product-image">
                    <div className="product-image-placeholder">
                      {product.name.split(' ').slice(0, 2).join(' ')}<br />
                      {product.name.split(' ').slice(2).join(' ')}
                    </div>
                  </div>
                  <div className="product-body">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price">{formatPrice(product.price)}</div>
                    <div className="product-actions">
                      <button
                        className="btn btn-sm btn-gold"
                        onClick={() => addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          type: 'product',
                          category: product.category,
                        })}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => checkoutSingle({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          type: 'product',
                          category: product.category,
                        })}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Delivery Info */}
        <div className="bg-champagne" style={{ borderRadius: 'var(--radius-lg)', padding: 32, textAlign: 'center', marginTop: 48 }}>
          <h3 className="headline-sm" style={{ marginBottom: 12 }}>Delivery Information</h3>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: 600, margin: '0 auto' }}>
            We deliver across Lagos. Select your location at checkout for accurate shipping rates.
          </p>
          <div className="grid-2" style={{ marginTop: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ textAlign: 'center', padding: 16, background: 'var(--surface-container-lowest)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--primary)' }}>₦2,500</div>
              <div style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginTop: 4 }}>Mainland Delivery</div>
            </div>
            <div style={{ textAlign: 'center', padding: 16, background: 'var(--surface-container-lowest)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--primary)' }}>₦4,000</div>
              <div style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginTop: 4 }}>Island Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
