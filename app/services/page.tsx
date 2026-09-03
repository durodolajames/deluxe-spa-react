'use client';

import { useState, useMemo } from 'react';
import { serviceCategories } from '@/lib/data';

const normalizeServiceName = (name: string) => name.toLowerCase().replace(/[^a-z0-9+]+/g, ' ').trim();
const formatServicePrice = (price: number | string) => typeof price === 'number' ? `₦${price.toLocaleString()}` : price;

const serviceDescriptionMap = new Map<string, string>([
  ['skincare consultation', 'A personalized skin assessment with expert guidance on routines, treatment plans, and product recommendations for your skin goals.'],
  ['international skincare consultation', 'A virtual or international client consultation tailored to skin history, concerns, and long-term corrective plans.'],
  ['acne treatment facial with light therapy mask', 'The first step in treating acne involves thorough steaming, deep cleansing, extraction of clogged pores, followed by a healing mask and light therapy.'],
  ['acne treatment facials with light therapy mask', 'The first step in treating acne involves thorough steaming, deep cleansing, extraction of clogged pores, followed by a healing mask and light therapy.'],
  ['vitamin c brightening facial', 'Boosts radiance, brightens, moisturizes, purifies, removes dullness, improves skin clarity, and promotes healthier-looking skin.'],
  ['vitamin c brightening facials', 'Boosts radiance, brightens, moisturizes, purifies, removes dullness, improves skin clarity, and promotes healthier-looking skin.'],
  ['acne mask peel facial', 'A superficial peel for oily and acne-prone skin that purifies the epidermis, controls excess oil, and tightens pores.'],
  ['acne mask peel facials', 'A superficial peel for oily and acne-prone skin that purifies the epidermis, controls excess oil, and tightens pores.'],
  ['dermaplaning facial', 'Exfoliates the skin and removes peach fuzz, leaving the face smoother and more youthful.'],
  ['derma planing facials', 'Exfoliates the skin and removes peach fuzz, leaving the face smoother and more youthful.'],
  ['dermaplaning facial pro', 'A resurfacing treatment that combines deep exfoliation with a superficial peel for brighter skin.'],
  ['derma planning facial pro', 'A resurfacing treatment that combines deep exfoliation with a superficial peel for brighter skin.'],
  ['microdermabrasion with light therapy mask', 'Combines enzyme treatment, steaming, deep cleansing, extraction, mask, and light therapy to treat acne.'],
  ['hydra facial', 'A multi-step facial that cleanses, exfoliates, extracts impurities, and infuses rejuvenating serums to brighten and firm the skin.'],
  ['facial massage', 'Relieves facial tension, improves circulation, and enhances product absorption.'],
  ['deluxe signature facelift', 'A resurfacing treatment that deeply exfoliates, delivers an instant glow, and improves hyperpigmentation with alpha hydroxy acids.'],
  ['skin renewal facial', 'A classic facial including cleansing, toning, exfoliation, steaming, extraction, facial mask, and moisturizer.'],
  ['skin renewal facials', 'A classic facial including cleansing, toning, exfoliation, steaming, extraction, facial mask, and moisturizer.'],
  ['add ons sheet mask led therapy', 'Add-on options include sheet mask hydration and LED light therapy support to boost treatment results.'],
  ['immune booster drip', 'IV infusion containing vitamins and minerals to support immunity, reduce fatigue, and decrease oxidative stress.'],
  ['flawless glow glutathione drip', 'Designed to promote younger-looking skin, support gut health, and detoxification with essential nutrients.'],
  ['luminous skin glutathione drip', 'A powerful glutathione infusion that brightens skin, treats hyperpigmentation, repairs skin, and promotes overall wellness.'],
  ['nad+ therapy', 'Cellular rejuvenation infusion that supports skin renewal, enhances radiance, improves texture, boosts energy, mental clarity, and longevity.'],
  ['deluxe glow drip', 'Signature IV infusion for radiant skin, hydration, increased energy, and overall wellness.'],
  ['salicylic acid peel', 'A beta-hydroxy acid (BHA) that exfoliates the skin and helps unclog pores, working particularly well for oily and acne-prone skin.'],
  ['mandelic acid peel', 'An alpha-hydroxy acid (AHA) that gently exfoliates, improves uneven tone and texture, and helps reduce acne. It is particularly suited for sensitive, acne-prone, and pigmentation-prone skin.'],
  ['tranexamic acid peel', 'A targeted peel that helps improve the appearance of hyperpigmentation, dark spots, and uneven skin tone.'],
  ['retinol peel', 'A powerful regenerating and repairing peel that stimulates collagen and elastin synthesis, reducing wrinkles and expression lines while improving smoothness and elasticity.'],
  ['retinol plus peel', 'Combines microneedling, hyaluronic acid infusion, and a retinol peel to stimulate renewal, boost hydration, and support collagen production for a smoother, brighter complexion.'],
  ['kojic acid peel', 'A superficial peel that helps reduce the appearance of hyperpigmentation, dark spots, and uneven skin tone.'],
  ['jessner cocktail peel', 'An advanced resurfacing treatment combining lactic acid, salicylic acid, and resorcinol to refine texture, improve uneven tone, and address acne, congestion, and hyperpigmentation.'],
  ['knee peel', 'A targeted depigmenting treatment designed to correct uneven skin tone and hyperpigmentation on the knees.'],
  ['elbow peel', 'A targeted depigmenting treatment designed to correct uneven skin tone and hyperpigmentation on the elbows.'],
  ['knuckle peel', 'Combines AHA and depigmenting agents to improve dark, uneven pigmentation for brighter, more even-toned knuckles.'],
  ['feet peel', 'A targeted depigmenting treatment designed to correct uneven skin tone and hyperpigmentation on the feet.'],
  ['nano needling', 'A non-invasive rejuvenation treatment that creates nano-channels to enhance product absorption, allowing active ingredients to penetrate more effectively for a smoother, brighter complexion.'],
  ['microneedling hyaluronic', 'A rejuvenating treatment for dehydrated, dull, and ageing skin. It combines microneedling with hydrating ingredients to restore moisture, improve texture, enhance radiance, and promote a youthful complexion.'],
  ['microneedling prp', 'Combines microneedling with blood-derived growth factors to stimulate repair and collagen production, improve acne scars, reduce fine lines and wrinkles, refine texture, and improve hair growth.'],
  ['microneedling + tca cross', 'Combines collagen-inducing microneedling with targeted TCA application to improve atrophic acne scars and enlarged pores for a smoother complexion.'],
  ['microneedling + peel', 'Combines microneedling with a peel to enhance renewal, improve texture, and address skin concerns through micro-channels, controlled exfoliation, and regeneration.'],
  ['microneedling with exosomes', 'Combines microneedling with topical exosomes containing growth factors and peptides to improve texture and dull tone while reducing fine lines and wrinkles.'],
  ['deluxe glass skin microneedling', 'Combines microneedling, PRP, and Botox to promote collagen renewal, refine pores, and improve texture and firmness for a smoother, plumper, more radiant complexion.'],
  ['corrective acne treatment', 'An intensive acne-focused treatment combining professional extractions with a customized chemical peel to control breakouts, decongest pores, and reduce inflammation.'],
  ['corrective acne treatment combo', 'Combines gentle extractions with a dual-peel treatment to target active acne, decongest pores, reduce inflammation, and control excess oil.'],
  ['depigmenting treatment', 'Begins with gentle extractions followed by a customized depigmenting peel to address hyperpigmentation, dark spots, and uneven tone.'],
  ['tca peel', 'A professional resurfacing treatment using trichloroacetic acid (TCA) to improve pigmentation, uneven texture, acne scarring, and signs of ageing.'],
  ['chest acne depigmenting peel', 'Combines AHA, BHA, and De Melan peel to target active acne, unclog pores, and improve post-acne marks and hyperpigmentation.'],
  ['back acne depigmenting peel', 'Combines AHA, BHA, and De Melan peel to target active acne, unclog pores, and improve post-acne marks and hyperpigmentation.'],
  ['de melan peel', 'A customized depigmenting treatment for moderate to severe pigmentation, targeting melasma, hyperpigmentation, and post-inflammatory hyperpigmentation while restoring a brighter complexion.'],
  ['cosmelan', 'A professional depigmenting treatment for stubborn pigmentation that inhibits excess melanin production and promotes skin renewal for improved clarity and tone.'],
  ['cat protocol 3 months', 'A structured, intensive acne-management program with personalized treatments every two weeks for three months, including tailored extractions and chemical peels.'],
  ['dpt protocol 3 months', 'An intensive pigmentation-correction program with targeted treatments every two weeks for three months, combining depigmenting peels, microneedling, and corrective treatments.'],
  ['deluxe jelly pedicure', 'Relaxing jelly pedicure that softens skin, refreshes tired feet, and leaves a smooth polished finish.'],
  ['classic pedicure', 'Essential foot grooming and nail care treatment with exfoliation, cleanup, and polish-ready finishing.'],
  ['manicure', 'Professional hand and nail grooming service for clean, healthy, and beautifully finished nails.'],
  ['gel polish', 'Long-lasting gel polish application with a glossy, chip-resistant finish.'],
  ['gel polish removal', 'Safe gel removal process that protects the natural nail while removing product thoroughly.'],
  ['soak off', 'Gentle soak-off treatment to remove gel or enhancement product with minimal nail stress.'],
  ['royal hammam polish', 'Steam bath, exfoliation, and a brightening herbal mask that hydrates and restores radiant skin.'],
  ['turmeric glow body scrub', 'Deep exfoliation using a special sugar scrub, steaming, and moisturizing for healthier glowing skin.'],
  ['hammam me', 'Traditional hammam treatment with exfoliation, water therapy, masking, and nourishing oil infusion.'],
  ['moroccan hammam glow bath', 'Traditional cleansing ritual that cleanses, brightens, softens skin, relaxes muscles, and improves circulation.'],
  ['deluxe coffee body scrub cellulite stretch mark', 'Coffee scrub formulated to reduce cellulite and tighten the skin using caffeine.'],
  ['detoxifying green tea scrub', 'Natural exfoliating treatment rich in antioxidants that unclogs pores and reveals brighter, smoother skin.'],
  ['signature brightening hammam', 'Steam bath with vitamin E-rich ingredients, herbs, scrubs, and masks to deeply cleanse and brighten skin.'],
  ['body detox', 'Steam room session that improves circulation, helps remove toxins, relieves stress, cramps, colds, and flu symptoms.'],
  ['intensive get waisted', 'Body sculpting treatment targeting the tummy, side rolls, and bra bulge.'],
  ['butt enhancement & sculpting', 'Body sculpting treatment designed to enhance and contour the buttocks.'],
]);

const getServiceDescription = (serviceName: string, categoryTitle: string) => {
  const key = normalizeServiceName(serviceName);
  const directDescription = serviceDescriptionMap.get(key);
  if (directDescription) {
    return categoryTitle === 'Chemical Peel'
      ? `${directDescription} Chemical peels require consultation and skin prep before treatment.`
      : directDescription;
  }

  if (categoryTitle === 'Chemical Peel') {
    return 'Chemical peels require consultation and skin prep before treatment.';
  }

  if (categoryTitle === 'Laser Treatment') {
    return `Laser hair removal service for ${serviceName.toLowerCase()} to reduce unwanted hair growth and support smoother skin over time.`;
  }

  if (categoryTitle === 'Waxing') {
    return `Professional waxing treatment for ${serviceName.toLowerCase()} to keep skin smooth, clean, and hair-free for longer.`;
  }

  if (categoryTitle === 'Massage') {
    return 'Therapeutic massage treatment designed to ease tension, improve circulation, and support full-body relaxation.';
  }

  if (categoryTitle === 'Special Packages') {
    return 'A curated multi-service package that combines treatments for a complete spa and wellness experience.';
  }

  return 'Professional spa treatment customized to your skin and wellness goals after consultation.';
};

const serviceLocations = [
  {
    id: 'location-1',
    name: 'Johnson - Lekki Phase 1',
    bookingUrl: 'https://www.fresha.com/book-now/deluxe-skincare-and-spa-ik0gudoa/services?lid=633191&share=true&pId=593378',
  },
  {
    id: 'location-2',
    name: 'Williams - Lekki Phase I',
    bookingUrl: 'https://www.fresha.com/book-now/deluxe-skincare-and-spa-55b-rasheed-alaba-wiliams-street-off-admiralty-way-lekki-phase-i-fwyiv090/services?lid=2888994&eid=5105300&share=true&pId=2793372',
  },
];

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');

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
            <p className="services-location-label">Book by Location</p>
            <p className="services-location-note">Each service card includes direct booking buttons for Johnson and Williams branches.</p>
          </div>
          <div className="services-location-controls">
            {serviceLocations.map((location) => (
              <a
                key={location.id}
                className="btn btn-primary btn-sm"
                href={location.bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                {location.name}
              </a>
            ))}
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
                        <div className="service-item-price">{formatServicePrice(service.price)}</div>
                        <div className="service-item-dur">{service.duration}</div>
                        <p className="service-item-desc">{getServiceDescription(service.name, cat.title)}</p>
                        <div className="service-item-add service-item-add-locations">
                          {serviceLocations.map((location) => (
                            <a
                              key={`${location.id}-${service.name}`}
                              className="btn btn-sm btn-secondary"
                              href={location.bookingUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Book {location.name.split(' - ')[0]}
                            </a>
                          ))}
                        </div>
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
