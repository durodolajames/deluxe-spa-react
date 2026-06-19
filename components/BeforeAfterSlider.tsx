'use client';

import { useEffect, useState } from 'react';

export type BeforeAfterCase = {
  id: string;
  title: string;
  concern: string;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeScale?: number;
  afterScale?: number;
};

type BeforeAfterSliderProps = {
  cases: BeforeAfterCase[];
  initialPosition?: number;
  enableSessionShuffle?: boolean;
};

function shuffleCases(items: BeforeAfterCase[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

export default function BeforeAfterSlider({
  cases,
  initialPosition = 50,
  enableSessionShuffle = true,
}: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(initialPosition);
  const [orderedCases, setOrderedCases] = useState<BeforeAfterCase[]>(cases);

  useEffect(() => {
    if (!cases.length) {
      setOrderedCases([]);
      return;
    }

    if (!enableSessionShuffle) {
      setOrderedCases(cases);
      return;
    }

    // Shuffle only after mount so server and first client render stay identical.
    const key = 'before-after-order-v1';
    const saved = window.sessionStorage.getItem(key);
    if (saved) {
      const ids = saved.split(',');
      const mapped = ids
        .map((id) => cases.find((item) => item.id === id))
        .filter((item): item is BeforeAfterCase => Boolean(item));
      if (mapped.length === cases.length) {
        setOrderedCases(mapped);
        return;
      }
    }

    const shuffled = shuffleCases(cases);
    window.sessionStorage.setItem(key, shuffled.map((item) => item.id).join(','));
    setOrderedCases(shuffled);
  }, [cases, enableSessionShuffle]);

  useEffect(() => {
    setCurrentIndex(0);
    setPosition(initialPosition);
  }, [initialPosition, orderedCases.length]);

  if (!orderedCases.length) return null;

  const activeCase = orderedCases[currentIndex];
  const beforeLabel = activeCase.beforeLabel || 'Before';
  const afterLabel = activeCase.afterLabel || 'After';
  const beforeScale = activeCase.beforeScale || 100;
  const afterScale = activeCase.afterScale || 100;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + orderedCases.length) % orderedCases.length);
    setPosition(initialPosition);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % orderedCases.length);
    setPosition(initialPosition);
  };

  return (
    <div className="before-after-card fade-up d2">
      <div className="before-after-topbar">
        <div className="before-after-meta">
          <h3>{activeCase.title}</h3>
          <p>{activeCase.concern}</p>
        </div>
        <div className="before-after-nav">
          <button type="button" className="before-after-nav-btn" onClick={goPrev} aria-label="Previous client result">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="before-after-counter">{currentIndex + 1}/{orderedCases.length}</span>
          <button type="button" className="before-after-nav-btn" onClick={goNext} aria-label="Next client result">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="before-after-canvas" role="group" aria-label="Before and after comparison slider">
        <div className="before-after-layer">
          <div
            className={`before-after-photo ${activeCase.afterImage ? '' : 'placeholder placeholder-after'}`.trim()}
            style={
              activeCase.afterImage
                ? { backgroundImage: `url(${activeCase.afterImage})`, backgroundSize: `${afterScale}%` }
                : undefined
            }
            aria-label={afterLabel}
          />
        </div>

        <div
          className="before-after-layer before-mask"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <div
            className={`before-after-photo ${activeCase.beforeImage ? '' : 'placeholder placeholder-before'}`.trim()}
            style={
              activeCase.beforeImage
                ? { backgroundImage: `url(${activeCase.beforeImage})`, backgroundSize: `${beforeScale}%` }
                : undefined
            }
          />
        </div>

        <div className="before-after-divider" style={{ left: `${position}%` }} aria-hidden="true">
          <span className="before-after-handle">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </div>

        <input
          className="before-after-range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Drag to compare before and after"
        />

        <span className="before-after-badge before">{beforeLabel}</span>
        <span className="before-after-badge after">{afterLabel}</span>
      </div>

      <div className="before-after-thumbs" role="tablist" aria-label="Choose client result">
        {orderedCases.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            className={`before-after-thumb ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(idx);
              setPosition(initialPosition);
            }}
            aria-label={`Show ${item.title}`}
            aria-selected={idx === currentIndex}
            role="tab"
          >
            <span>{item.title}</span>
            <small>{item.concern}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
