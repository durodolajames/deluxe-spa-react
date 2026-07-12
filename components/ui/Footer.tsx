import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <Image src="/images/vec2.svg" alt="Deluxe Skin Care" width={180} height={60} />
            </div>
            <p>Premium med spa and skincare boutique in Lagos. Clinical expertise meets luxury self-care.</p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services">Facial Treatments</Link></li>
              <li><Link href="/services">Laser Therapy</Link></li>
              <li><Link href="/services">Body Treatments</Link></li>
              <li><Link href="/services">Massage</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:09076860852">09076860852</a></li>
              <li><a href="https://wa.me/2349076860852" target="_blank" rel="noopener noreferrer">WhatsApp: 09076860852</a></li>
              <li><a href="mailto:deluxe.skincareng@gmail.com">deluxe.skincareng@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Deluxe Skin Care. All rights reserved.</span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            {' '}|{' '}
            <Link href="/terms">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
