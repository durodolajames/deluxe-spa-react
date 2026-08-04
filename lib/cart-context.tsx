'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  type: 'product' | 'service';
  category: string;
  duration?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  removeItem: (id: number, type: string) => void;
  updateQty: (id: number, type: string, qty: number) => void;
  clearCart: () => void;
  subtotal: number;
  total: number;
  count: number;
  hasPhysicalItems: boolean;
  hasServiceItems: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('deluxe_cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('deluxe_cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, 'qty'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.type === item.type);
      if (existing) {
        return prev.map(i => 
          i.id === item.id && i.type === item.type 
            ? { ...i, qty: i.qty + 1 } 
            : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setNotification(`${item.name} added to cart`);
    setTimeout(() => setNotification(null), 2500);
  }, []);

  const removeItem = useCallback((id: number, type: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.type === type)));
  }, []);

  const updateQty = useCallback((id: number, type: string, qty: number) => {
    const newQty = Math.max(1, qty);
    setItems(prev => 
      prev.map(i => i.id === id && i.type === type ? { ...i, qty: newQty } : i)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem('deluxe_cart');
  }, []);

  const hasPhysicalItems = items.some(i => i.type === 'product');
  const hasServiceItems = items.some(i => i.type === 'service');
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal;
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQty, clearCart,
      subtotal, total, count, hasPhysicalItems, hasServiceItems, isOpen, setIsOpen
    }}>
      {children}
      {notification && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#12100E',
          color: '#fff',
          padding: '14px 24px',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 500,
          zIndex: 1000,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          animation: 'slideIn 0.3s ease',
        }}>
          {notification}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
