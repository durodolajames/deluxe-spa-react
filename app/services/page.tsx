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
  ['salicylic acid peel', 'This is a beta-hydroxy acid (BHA) that exfoliates the skin and helps unclog pores. It works particularly well for oily and acne-prone skin.'],
  ['mandelic acid peel', 'This is an alpha-hydroxy acid (AHA), It gently exfoliates the skin, helps improve uneven skin tone and texture and can help reduce the appearance of acne. It is particularly well suited for sensitive, acne-prone and pigmentation-prone skin.'],
  ['tranexamic acid peel', 'This targeted peel helps improve the appearance of hyperpigmentation, dark spots, and uneven skin tone.'],
  ['retinol peel', 'Retinol peel has a powerful regenerating and repairing action on the skin, stimulates the synthesis of collagen and elastin, reducing the depth of wrinkles and expression lines and increasing the smoothness and elasticity of the skin.'],
  ['retinol plus peel', 'Retinol Plus Peel combines microneedling, hyaluronic acid infusion and a retinol peel to stimulate skin renewal, boost hydration and support collagen production for a smoother, brighter and more youthful-looking complexion.'],
  ['kojic acid peel', 'This is a superficial peel that helps reduce the appearance of hyperpigmentation, dark spots, and uneven skin tone.'],
  ['jessner cocktail peel', 'This is an advanced resurfacing treatment combining lactic acid, salicylic acid, and resorcinol to refine skin texture, improve uneven tone,address acne, congestion and hyperpigmentation.'],
  ['knee peel', 'This is a targeted depigmenting treatment designed to correct uneven skin tone and hyperpigmentation on the knees.'],
  ['elbow peel', 'This is a targeted depigmenting treatment designed to correct uneven skin tone and hyperpigmentation on the elbows.'],
  ['knuckle peel', 'This treatment combines AHA and depigmenting agents to improve dark, uneven pigmentation for brighter, more even-toned knuckles.'],
  ['feet peel', 'This is a targeted depigmenting treatment designed to correct uneven skin tone and hyperpigmentation on the feet.'],
  ['nano needling', 'Nano-Needling is a non-invasive skin rejuvenation treatment that creates nano-channels in the skin to enhance product absorption, allowing active ingredients to penetrate more effectively for a smoother, brighter complexion.'],
  ['microneedling hyaluronic', 'This is a skin-rejuvenating treatment designed for dehydrated, dull and ageing skin. By combining microneedling with deeply hydrating and revitalizing ingredients, it restores moisture, improves skin texture, enhances radiance and promotes a more youthful-looking complexion.'],
  ['microneedling prp', 'This is a skin rejuvenating treatment that combines traditional microneedling with your own blood-derived growth factors to stimulate skin repair and collagen production. It helps to improve acne scars, reduce fine lines and wrinkles, better skin texture and improve hair growth.'],
  ['microneedling + tca cross', 'Microneedling and TCA Cross combines collagen-inducing microneedling with targeted TCA application to improve the appearance of atrophic acne scars, enlarged pores, promoting a smoother, more refined complexion.'],
  ['microneedling + peel', 'Microneedling with peel is a skin rejuvenation treatment that combines microneedling with a peel to enhance skin renewal, improve texture and address various skin concerns. Microneedling creates tiny micro-channels in the skin while the peel promotes controlled exfoliation and skin regeneration.'],
  ['microneedling with exosomes', 'This is an advanced treatment that combines microneedling with topical application of exosomes that contain growth factors and peptides. It helps to improve skin texture, dull skin tone and reduce fine lines and wrinkles.'],
  ['deluxe glass skin microneedling', 'This is an advanced rejuvenation treatment combining microneedling, PRP (Platelet-Rich Plasma), and Botox to promote collagen renewal, refine pores and improve overall skin texture and firmness. The result is a smoother, plumper, and visibly more radiant complexion.'],
  ['corrective acne treatment', 'This is an intensive acne- focused treatment combining professional extractions with a customised chemical peel to help control breakouts, decongest pores, reduce inflammation. It promotes a clearer and smoother skin.'],
  ['corrective acne treatment combo', 'This combines gentle extractions with a dual-peel treatment to target active acne, deeply decongest clogged pores, reduce inflammation, and control excess oil. This enhanced approach helps restore clearer, smoother and healthier looking skin.'],
  ['depigmenting treatment', 'This is a targeted brightening treatment that begins with gentle extractions, followed by the application of a customized depigmenting peel. It is designed to address hyperpigmentation, dark spots and uneven skin tone, helping to reveal a brighter, clearer and more even complexion.'],
  ['tca peel', 'TCA Peel is a professional resurfacing treatment that uses trichloroacetic acid (TCA) to improve pigmentation, uneven texture, acne scarring, and signs of skin ageing, revealing a smoother, clearer and more refined complexion.'],
  ['chest acne depigmenting peel', 'This combines AHA,BHA and De Melan peel to target active acne, unclog pores and improve post-acne marks and hyperpigmentation, leaving the skin clearer, smoother, and more even-toned.'],
  ['back acne depigmenting peel', 'This combines AHA,BHA and De Melan peel to target active acne, unclog pores and improve post-acne marks and hyperpigmentation, leaving the skin clearer, smoother, and more even-toned.'],
  ['de melan peel', 'De Melan Peel is a Deluxe Skincare customised depigmenting treatment formulated for moderate to severe pigmentation, particularly stubborn or recurrent cases. It targets melasma, hyperpigmentation and post-inflammatory hyperpigmentation (PIH) while helping to restore a brighter, more even complexion.'],
  ['cosmelan', 'This is a professional depigmenting treatment designed to address stubborn and persistent pigmentation. It works by inhibiting excess melanin production and promoting skin renewal, helping to improve overall skin clarity and tone. It targets deep hyperpigmentation, (PIH) and uneven skin tone, resulting in a brighter and more even complexion.'],
  ['cat protocol 3 months', 'Corrective Acne Treatment Protocol  is a structured, intensive acne-management program designed to address persistent and active breakouts through personalised treatments every two weeks for three months. The program is paid for in full upfront and includes a tailored combination of professional acne treatments, extractions and chemical peels based on the skin’s needs and progress.'],
  ['dpt protocol 3 months', 'Depigmenting Treatment Protocol — is an intensive, personalised pigmentation-correction program designed to improve stubborn hyperpigmentation, dark spots, and uneven skin tone. The program includes targeted treatments every two weeks for three months, with a customised combination of depigmenting peels, micro needling and corrective treatments based on the skin’s condition and progress. Payment is made in full upfront for the complete three-month protocol.'],
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
