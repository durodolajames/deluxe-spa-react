'use client';

import { useState, useMemo } from 'react';
import { serviceCategories } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

const serviceLocations = [
  {
    id: 'location-1',
    name: 'Johnsons - Lekki Phase 1',
    bookingUrl: 'https://www.fresha.com/a/deluxe-skincare-and-spa-lagos-block-95-plot-5a-omorinre-johnson-street-off-bisola-durosimi-etti-street-off-admiralty-way-lekki-phase1-fx7mrwp0',
  },
  {
    id: 'location-2',
    name: 'Williams - Lekki Phase I',
    bookingUrl: 'https://www.fresha.com/a/deluxe-skincare-and-spa-lekki-55-rasheed-alaba-williams-street-xqwbfu2b',
  },
];

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [activeLocationId, setActiveLocationId] = useState(serviceLocations[0].id);

  const allCategories = useMemo(() => ['All', ...serviceCategories.map(c => c.title)], []);

  const filteredCategories = useMemo(() => {
    const cats = activeTab === 'All' ? serviceCategories : serviceCategories.filter(c => c.title === activeTab);
    if (!search) return cats;
    return cats.map(cat => ({
      ...cat,
      services: cat.services.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
    })).filter(cat => cat.services.length > 0);
  }, [search, activeTab]);

  const totalServices = filteredCategories.reduce((sum, c) => sum + c.services.length, 0);
  const activeLocation = serviceLocations.find((location) => location.id === activeLocationId) || serviceLocations[0];

  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="section-header fade-up" style={{ marginBottom: 40 }}>
          <span className="label-lg section-label">Service Menu</span>
          <h1 className="headline-lg section-title">Our Treatments</h1>
          <p className="body-md section-text">Comprehensive med spa services designed for results. Book your session today.</p>
        </div>

        <div className="services-location-panel fade-up d1">
          <div className="services-location-copy">
            <p className="services-location-label">Choose Location for Booking</p>
            <p className="services-location-note">All "Book via Fresha" buttons below will use your selected branch.</p>
          </div>
          <div className="services-location-controls">
            <select
              className="services-location-select"
              value={activeLocationId}
              onChange={(e) => setActiveLocationId(e.target.value)}
              aria-label="Select booking location"
            >
              {serviceLocations.map((location) => (
                <option key={location.id} value={location.id}>{location.name}</option>
              ))}
            </select>
            <a className="btn btn-primary btn-sm" href={activeLocation.bookingUrl} target="_blank" rel="noreferrer">
              Book Selected Location
            </a>
          </div>
        </div>

        <div className="services-search fade-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--on-surface-variant)', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search services…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="service-tabs">
          {allCategories.map(cat => {
            const count = cat === 'All'
              ? serviceCategories.reduce((s, c) => s + c.services.length, 0)
              : serviceCategories.find(c => c.title === cat)?.services.length || 0;
            return (
              <button
                key={cat}
                className={`service-tab ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat} <span style={{ opacity: 0.6, marginLeft: 4 }}>({count})</span>
              </button>
            );
          })}
        </div>

        {totalServices === 0 ? (
          <div className="no-results">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <p>No services match &quot;{search}&quot;</p>
          </div>
        ) : (
          filteredCategories.map(cat => (
            <div className="service-category" key={cat.title}>
              <div className="service-category-title">
                <span>{cat.title}</span>
                <span className="service-count">{cat.services.length} service{cat.services.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="service-grid">
                {cat.services.map((service, index) => {
                  return (
                    <div className={`service-item fade-up d${(index % 5) + 1}`} key={`${cat.title}-${service.name}-${index}`}>
                      <div className="service-item-left">
                        <div className="service-item-name">{service.name}</div>
                        <div className="service-item-dur">{service.duration}</div>
                        <div className="service-item-add">
                          <a
                            className="btn btn-sm btn-secondary"
                            href={activeLocation.bookingUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Book via Fresha
                          </a>
                        </div>
                      </div>
                      <div className="service-item-price">
                        {service.price === 0 ? 'Price on request' : formatPrice(service.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
