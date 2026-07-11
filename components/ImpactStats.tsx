'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type StatItem = {
  label: string;
  value: string;
};

type ParsedStat = {
  prefix: string;
  target: number;
  suffix: string;
};

type ImpactStatsProps = {
  stats: StatItem[];
};

function parseStatValue(value: string): ParsedStat {
  const match = value.match(/^([^\d]*)([\d,]+)([^\d]*)$/);

  if (!match) {
    return {
      prefix: '',
      target: 0,
      suffix: value,
    };
  }

  return {
    prefix: match[1],
    target: Number(match[2].replace(/,/g, '')),
    suffix: match[3],
  };
}

function formatStatValue(parsed: ParsedStat, current: number): string {
  return `${parsed.prefix}${current.toLocaleString()}${parsed.suffix}`;
}

export default function ImpactStats({ stats }: ImpactStatsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0));

  const parsedStats = useMemo(() => stats.map((item) => parseStatValue(item.value)), [stats]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let rafId = 0;
    const durationMs = 1600;
    const startTs = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTs;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(parsedStats.map((item) => Math.round(item.target * eased)));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    rafId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(rafId);
  }, [hasStarted, parsedStats]);

  return (
    <div className="impact-grid" ref={sectionRef}>
      {stats.map((stat, idx) => (
        <article className={`impact-card fade-up d${(idx % 5) + 1}`} key={stat.label}>
          <p className="impact-value">{formatStatValue(parsedStats[idx], counts[idx] ?? 0)}</p>
          <p className="impact-label">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
