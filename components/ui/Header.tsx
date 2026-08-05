'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import CartDrawer from './CartDrawer';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setIsOpen } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <Image src="/images/vec2.svg" alt="Deluxe Skin Care" width={180} height={60} />
          </Link>

          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button className="cart-btn" onClick={() => setIsOpen(true)} aria-label="Shopping cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
            <button className="menu-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
            <Image src="/images/vec2.svg" alt="Deluxe Skin Care" width={180} height={60} />
          </Link>
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-social">
            <a href="https://www.instagram.com/deluxe_skincare?igsh=MWJzYmpta3gwbTJmeg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/2349076860852" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.46 7.51a4.28 4.28 0 0 0-6.06 0c-1.15 1.16-1.24 2.96-.24 4.05l.16.18a1 1 0 0 1 .2.82l-.26 1.28a1 1 0 0 1-.98.8 11.14 11.14 0 0 1-3.22-.46 1 1 0 0 1-.74-1.13 17.36 17.36 0 0 1 .93-3.12 1 1 0 0 1 .86-.63h.02a1 1 0 0 1 .8.34c.81.91 1.96 1.64 3.22 1.93a1 1 0 0 1 .7.67l.37 1.03a1 1 0 0 1-.19.94 8.68 8.68 0 0 1-2.14 1.98 9.38 9.38 0 0 0 4.78 1.46 9.44 9.44 0 0 0 9.47-9.47 9.42 9.42 0 0 0-2.83-6.69z" />
                <path d="M15.64 8.47c-.03-.18-.17-.34-.35-.37a.84.84 0 0 0-.38.03c-.11.03-.31.12-.48.26a.98.98 0 0 0-.31.44c-.06.14-.14.33-.17.4a.8.8 0 0 1-.17.29c-.11.1-.28.25-.47.41-.41.31-.76.44-1.03.44a.91.91 0 0 1-.54-.17c-.13-.09-.33-.24-.55-.43a3.67 3.67 0 0 0-.83-.44c-.17-.06-.31-.12-.44-.12a1.05 1.05 0 0 0-.74.24c-.2.18-.28.43-.27.7a2.62 2.62 0 0 0 .24 1.17 4.28 4.28 0 0 0 1.03 1.5 8.6 8.6 0 0 0 1.84 1.43c.96.53 1.64.55 2.25.35a1.1 1.1 0 0 0 .55-.41 1.22 1.22 0 0 0 .2-.64c.01-.22-.01-.31-.08-.42a1.09 1.09 0 0 0-.38-.42 3.14 3.14 0 0 0-.65-.36c-.21-.1-.41-.2-.47-.23z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="mobile-menu-actions">
            <Link href="/contact" className="btn btn-secondary" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <Link href="/services" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <CartDrawer />
    </>
  );
}
