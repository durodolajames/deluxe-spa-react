import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/mainlogo.png" alt="Deluxe Skin Care" width={120} height={40} />
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
              <li><a href="tel:+2348000000000">+234 800 000 0000</a></li>
              <li><a href="mailto:hello@deluxeskincare.ng">hello@deluxeskincare.ng</a></li>
              <li><span>Lagos, Nigeria</span></li>
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
