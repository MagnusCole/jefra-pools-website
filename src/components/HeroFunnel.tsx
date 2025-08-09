import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import Countdown from './Countdown';

// HeroFunnel: headline + urgency timer + single CTA (WhatsApp)
// Copy aligned to creative: "¿Cansado de limpiar tu piscina? +1 limpieza GRATIS esta semana + inspección sin costo"
interface HeroFunnelProps {
  bgSrc?: string; // optional override relative to public/
  objectPosition?: string; // e.g., 'center' | '50% 40%'
}

const ALLOWED_BG: Record<string, string> = {
  default: '/pool-real.jpg',
  // whitelist a few options from public/images
  a: '/images/a37b0152-c7c2-43a6-8095-8ed1fb416b49.jpg', // more contrast
  b: '/images/b03a52b6-923b-4a69-a5e2-6477b652c813.jpg',
  c: '/images/d5366dfa-97e8-473e-9286-c70af2b7adf0.jpg',
  d: '/images/fb922e80-a67e-4d6d-a188-679e111f5554.jpg',
  // "dirty" variant to suggest before state
  dirty: '/pool.png'
};

const HeroFunnel: React.FC<HeroFunnelProps> = React.memo(({ bgSrc, objectPosition }) => {
  const [hover, setHover] = useState(false);

  // Allow quick testing via URL: ?bg=a|b|c|d or ?bg=/images/xxx.jpg (if matches whitelist)
  const resolvedBg = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('bg');
      if (q && ALLOWED_BG[q as keyof typeof ALLOWED_BG]) return ALLOWED_BG[q as keyof typeof ALLOWED_BG];
      if (bgSrc && Object.values(ALLOWED_BG).includes(bgSrc)) return bgSrc;
      return ALLOWED_BG.default;
    } catch {
      return ALLOWED_BG.default;
    }
  }, [bgSrc]);

  // Optional crossfade to a "clean" background for contrast demo
  const [showClean, setShowClean] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return; // respect reduced motion
    const t = setTimeout(() => setShowClean(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const objPos: CSSProperties['objectPosition'] = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return objectPosition || params.get('pos') || 'center';
    } catch {
      return objectPosition || 'center';
    }
  }, [objectPosition]);

  const handleWhatsApp = useCallback(() => {
    const phone = '51999888777';
    const msg = '¡Hola JefraPools! Quiero agendar una inspección sin costo y aprovechar la limpieza GRATIS esta semana en La Molina.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section
      id="hero"
      role="banner"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-700"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Backgrounds: start slightly dull/dirty then reveal clean */}
      <img
        src={ALLOWED_BG.dirty}
        alt="Piscina antes de limpiar"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hover ? 'scale-105' : 'scale-100'}`}
        style={{ objectPosition: objPos, filter: 'grayscale(25%) saturate(0.8)' }}
        loading="eager"
        decoding="async"
        sizes="100vw"
        fetchPriority="high"
      />
      <img
        src={resolvedBg}
        alt="Piscina limpia y cristalina"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${showClean ? 'opacity-100' : 'opacity-0'}`}
        style={{ objectPosition: objPos }}
        loading="eager"
        decoding="async"
        sizes="100vw"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
      {/* Before/After hint overlay: desaturate left side, reveal on hover */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${hover ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 60%)',
          filter: 'grayscale(30%)',
          mixBlendMode: 'normal'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Piscina <span className="text-blue-300">cristalina</span> en 24h — sin que muevas un dedo
        </h1>

        <p className="mt-3 text-lg md:text-xl text-gray-100">
          Inspección gratis + limpieza completa + mantenimiento preventivo
        </p>

        {/* Garantía visible */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
          <span className="text-white text-sm font-semibold">Garantía:</span>
          <span className="text-sky-200 text-sm">Si no queda cristalina, repetimos gratis</span>
        </div>

        {/* Bonus + Countdown */}
        <div className="mt-5 md:mt-6">
          <p className="text-base md:text-lg text-gray-200 mb-2">Oferta limitada — solo <span className="font-bold text-white">10</span> cupos esta semana</p>
          <div className="inline-block scale-105 md:scale-110">
            <Countdown label="Termina en" emphasis size="md" urgentThresholdHours={12} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 md:mt-8">
          <button
            onClick={handleWhatsApp}
            data-testid="cta-primary"
            className="btn-cta bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold px-8 py-4 md:py-5 rounded-xl min-h-[52px] min-w-[56px] text-lg md:text-xl ring-1 ring-white/30 shadow-xl"
            aria-label="Reservar mi limpieza GRATIS ahora"
          >
            📞 Reservar mi limpieza GRATIS ahora
          </button>
          <p className="mt-2 text-xs md:text-sm text-gray-300">Atendemos en menos de 24h • Productos seguros para tu familia</p>
        </div>
      </div>
    </section>
  );
});

HeroFunnel.displayName = 'HeroFunnel';
export default HeroFunnel;
