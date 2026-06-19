# Deluxe Skin Care — React + Next.js E-Commerce

A luxury med spa e-commerce website built with React, Next.js, TypeScript, and Paystack.

## Features

- **6 Pages**: Home, Services, Shop, About, Contact, Success
- **Full Cart System**: Add to cart, quantity controls, remove items, persistent via localStorage
- **Paystack Checkout**: Inline payment (customer stays on site), supports both products and services
- **Location-Based Shipping**: Mainland (+₦2,500) / Island (+₦4,000)
- **Email Notifications**: Branded HTML receipts via Resend webhook
- **100+ Spa Services**: Searchable, filterable by category
- **12 Skincare Products**: Organized by category with Add to Cart / Buy Now
- **Responsive Design**: Mobile-first, works on all devices
- **Luxury Design System**: Playfair Display + Montserrat, champagne & espresso palette

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules (globals.css)
- Paystack Inline
- Resend (email)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.local.example .env.local

# 3. Add your keys to .env.local:
# NEXT_PUBLIC_PAYSTACK_KEY=pk_live_YOUR_KEY
# RESEND_API_KEY=re_YOUR_KEY
# MERCHANT_EMAIL=youremail@gmail.com

# 4. Run dev server
npm run dev

# 5. Build for production
npm run build
```

## Deployment (Vercel)

```bash
# 1. Push to GitHub
# 2. Import to Vercel
# 3. Add environment variables in Vercel dashboard
# 4. Deploy
```

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout with providers
│   ├── globals.css       # Design system
│   ├── shop/page.tsx     # Product catalog
│   ├── services/page.tsx # Service menu
│   ├── about/page.tsx    # About us
│   ├── contact/page.tsx  # Contact form
│   └── success/page.tsx  # Payment confirmation
├── components/
│   ├── ui/               # Shared UI components
│   │   ├── Header.tsx    # Navigation + cart icon
│   │   ├── Footer.tsx    # Site footer
│   │   └── CartDrawer.tsx # Slide-out cart
│   └── AddToCartButton.tsx
├── lib/
│   ├── data.ts           # Products & services data
│   ├── cart-context.tsx  # React Context for cart state
│   ├── paystack.ts       # Checkout logic
│   └── utils.ts          # Format helpers
├── api/webhook/route.ts  # Paystack webhook + Resend emails
├── public/images/        # Logo & assets
└── package.json
```

## Adding New Products

Edit `lib/data.ts`:

```typescript
export const products: Product[] = [
  // Add new product here
  { id: 305, name: "New Product", price: 15000, category: "Body Care", description: "Description" },
];
```

## Adding New Services

Edit `lib/data.ts`:

```typescript
{
  title: "New Category",
  services: [
    { name: "New Service", duration: "1 hr", price: 50000 },
  ]
}
```

## Customization

- **Colors**: Edit CSS variables in `app/globals.css`
- **Fonts**: Already loaded from Google Fonts in layout
- **Logo**: Replace `public/images/mainlogo.png`
- **Contact Info**: Edit `components/ui/Footer.tsx` and `app/contact/page.tsx`

## License

© 2026 Deluxe Skin Care. All rights reserved.
