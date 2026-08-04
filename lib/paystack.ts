'use client';

import { CartItem } from './cart-context';

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_KEY || '';
export const isPaystackEnabled = Boolean(PAYSTACK_PUBLIC_KEY);

const BANK_TRANSFER_INFO = {
  accountName: 'DELUXE SKINCARE LIMITED',
  accountNumber: '0261377230',
};

const PENDING_TRANSFER_ORDER_KEY = 'deluxe_pending_transfer_order';

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

function bankTransferFallback(options: { email: string; amount: number; ref: string; metadata?: PaystackMetadata; type: string }) {
  const pendingOrder = {
    ref: options.ref,
    amount: options.amount,
    type: options.type,
    metadata: options.metadata,
    accountName: BANK_TRANSFER_INFO.accountName,
    accountNumber: BANK_TRANSFER_INFO.accountNumber,
  };
  window.localStorage.setItem(PENDING_TRANSFER_ORDER_KEY, JSON.stringify(pendingOrder));
  window.location.href = `/bank-transfer`; 
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
  const email = 'payments@deluxeskincare.com';

  const metadata: PaystackMetadata = {
    custom_fields: [
      { display_name: 'Item', variable_name: 'item', value: item.name },
      { display_name: 'Type', variable_name: 'type', value: item.type === 'service' ? 'Service Booking' : 'Product Purchase' },
      { display_name: 'Category', variable_name: 'category', value: item.category },
    ],
  };

  const totalAmount = item.price;

  if (item.type === 'product') {
    metadata.custom_fields.push(
      { display_name: 'Item Price', variable_name: 'item_price', value: '₦' + item.price.toLocaleString() },
    );
  }

  const reference = 'DLX_' + Date.now() + '_' + item.id;

  if (!isPaystackEnabled) {
    bankTransferFallback({
      email,
      amount: totalAmount * 100,
      ref: reference,
      metadata,
      type: item.type,
    });
    return;
  }

  payWithPaystack({
    email,
    amount: totalAmount * 100,
    currency: 'NGN',
    ref: reference,
    metadata,
    onSuccess: (ref) => {
      window.location.href = `/success?ref=${ref}&type=${item.type}`;
    },
  });
}

export function checkoutCart(items: CartItem[]) {
  if (items.length === 0) {
    alert('Your cart is empty');
    return;
  }

  const email = 'payments@deluxeskincare.com';

  const itemList = items.map(i => `${i.name} (x${i.qty})`).join(', ');
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalAmount = subtotal;

  const metadata: PaystackMetadata = {
    custom_fields: [
      { display_name: 'Items', variable_name: 'items', value: itemList },
      { display_name: 'Item Count', variable_name: 'count', value: String(items.reduce((s, i) => s + i.qty, 0)) },
      { display_name: 'Subtotal', variable_name: 'subtotal', value: '₦' + subtotal.toLocaleString() },
      { display_name: 'Type', variable_name: 'type', value: items.some(i => i.type === 'product') ? 'Product Order' : 'Service Booking' },
    ],
  };

  const reference = 'DLX_CART_' + Date.now();

  if (!isPaystackEnabled) {
    bankTransferFallback({
      email,
      amount: totalAmount * 100,
      ref: reference,
      metadata,
      type: 'cart',
    });
    return;
  }

  payWithPaystack({
    email,
    amount: totalAmount * 100,
    currency: 'NGN',
    ref: reference,
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
