'use client';

import { CartItem } from './cart-context';

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_KEY || 'pk_test_YOUR_KEY_HERE';

interface PaystackMetadata {
  custom_fields: { display_name: string; variable_name: string; value: string }[];
}

interface PaystackOptions {
  email: string;
  amount: number;
  currency?: string;
  ref: string;
  metadata?: PaystackMetadata;
  onSuccess?: (ref: string) => void;
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        metadata?: PaystackMetadata;
        callback: (response: { reference: string }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

export function checkoutSingle(item: { id: number; name: string; price: number; type: 'product' | 'service'; category: string; duration?: string }) {
  const email = prompt('Enter your email address:');
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  const phone = prompt('Enter phone number for confirmation:');
  if (!phone || phone.length < 10) {
    alert('Please enter a valid phone number');
    return;
  }

  const metadata: PaystackMetadata = {
    custom_fields: [
      { display_name: 'Item', variable_name: 'item', value: item.name },
      { display_name: 'Type', variable_name: 'type', value: item.type === 'service' ? 'Service Booking' : 'Product Purchase' },
      { display_name: 'Phone', variable_name: 'phone', value: phone },
      { display_name: 'Category', variable_name: 'category', value: item.category },
    ],
  };

  let totalAmount = item.price;

  if (item.type === 'product') {
    const location = prompt('Delivery Location:\n1. Mainland (+₦2,500)\n2. Island (+₦4,000)\n\nEnter 1 or 2:');
    let shipping = 0;
    let locName = '';
    if (location === '1') { shipping = 2500; locName = 'Mainland'; }
    else if (location === '2') { shipping = 4000; locName = 'Island'; }
    totalAmount += shipping;
    metadata.custom_fields.push(
      { display_name: 'Delivery', variable_name: 'location', value: locName || 'Not selected' },
      { display_name: 'Shipping', variable_name: 'shipping', value: '₦' + shipping.toLocaleString() },
      { display_name: 'Item Price', variable_name: 'item_price', value: '₦' + item.price.toLocaleString() }
    );
  }

  payWithPaystack({
    email,
    amount: totalAmount * 100,
    currency: 'NGN',
    ref: 'DLX_' + Date.now() + '_' + item.id,
    metadata,
    onSuccess: (ref) => {
      window.location.href = `/success?ref=${ref}&type=${item.type}`;
    },
  });
}

export function checkoutCart(items: CartItem[], location: string) {
  if (items.length === 0) {
    alert('Your cart is empty');
    return;
  }

  const hasPhysical = items.some(i => i.type === 'product');

  if (hasPhysical && !location) {
    alert('Please select your delivery location (Mainland or Island)');
    return;
  }

  const email = prompt('Enter your email address:');
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  const phone = prompt('Enter phone number for confirmation:');
  if (!phone || phone.length < 10) {
    alert('Please enter a valid phone number');
    return;
  }

  const itemList = items.map(i => `${i.name} (x${i.qty})`).join(', ');
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = hasPhysical && location ? (location === 'mainland' ? 2500 : 4000) : 0;
  const totalAmount = subtotal + shipping;

  const metadata: PaystackMetadata = {
    custom_fields: [
      { display_name: 'Items', variable_name: 'items', value: itemList },
      { display_name: 'Item Count', variable_name: 'count', value: String(items.reduce((s, i) => s + i.qty, 0)) },
      { display_name: 'Phone', variable_name: 'phone', value: phone },
      { display_name: 'Delivery', variable_name: 'location', value: location ? (location === 'mainland' ? 'Mainland' : 'Island') : 'N/A (Services only)' },
      { display_name: 'Shipping', variable_name: 'shipping', value: '₦' + shipping.toLocaleString() },
      { display_name: 'Subtotal', variable_name: 'subtotal', value: '₦' + subtotal.toLocaleString() },
      { display_name: 'Type', variable_name: 'type', value: hasPhysical ? 'Product Order' : 'Service Booking' },
    ],
  };

  payWithPaystack({
    email,
    amount: totalAmount * 100,
    currency: 'NGN',
    ref: 'DLX_CART_' + Date.now(),
    metadata,
    onSuccess: (ref) => {
      window.location.href = `/success?ref=${ref}&type=cart`;
    },
  });
}

function payWithPaystack(options: PaystackOptions) {
  if (typeof window === 'undefined' || !window.PaystackPop) {
    alert('Paystack is loading. Please try again in a moment.');
    return;
  }

  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: options.email,
    amount: options.amount,
    currency: options.currency || 'NGN',
    ref: options.ref,
    metadata: options.metadata,
    callback: (response) => {
      if (options.onSuccess) {
        options.onSuccess(response.reference);
      } else {
        window.location.href = `/success?ref=${response.reference}`;
      }
    },
    onClose: () => {
      console.log('Payment window closed');
    },
  });
  handler.openIframe();
}
