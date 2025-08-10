import React, { useCallback, useMemo } from 'react';
import type { CSSProperties } from 'react';
import { trackLead } from '../utils/tracking';
import OfferBanner from './OfferBanner';

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

  // Background simplified: static clean image for focus

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
  trackLead('hero');
  }, []);

  return (
    <section
      id="hero"
      role="banner"
  className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-primary-700"
    >
      {/* Overlay banner fixed at top of hero */}
      <OfferBanner variant="overlay" dismissible={false} />
      {/* Background simple y nítido (estático) */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={`${resolvedBg.replace(/\.jpg$/g,'.avif')}`} type="image/avif" />
        <source srcSet={`${resolvedBg.replace(/\.jpg$/g,'.webp')}`} type="image/webp" />
        <img
          src={resolvedBg}
          alt="Piscina limpia y cristalina"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: objPos }}
          loading="eager"
          decoding="async"
          sizes="100vw"
          fetchPriority="high"
        />
      </picture>
  <div className="absolute inset-0 bg-black/45 md:bg-black/45" />

      {/* Content */}
  <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-10 md:pt-12 text-center">
  <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Piscina <span className="text-blue-300">cristalina</span> en 24h
        </h1>

  <p className="mt-3 text-lg md:text-xl text-gray-100 font-medium">
          GRATIS: Inspección + 1 limpieza extra
        </p>

        {/* Garantía visible }
  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/20">
          <span className="text-white text-sm font-semibold">Garantía:</span>
          <span className="text-sky-200 text-sm">Si no queda cristalina, repetimos gratis</span>
        </div> 

  {/* Bonus + Countdown moved to OfferBanner for less invasive placement */}

        {/* CTA */}
  <div className="mt-5 md:mt-6">
          <button
            onClick={handleWhatsApp}
            data-testid="cta-primary"
            className="btn-cta bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold px-9 py-5 md:py-6 rounded-2xl min-h-[56px] min-w-[64px] text-xl md:text-2xl ring-1 ring-amber-300 shadow-[0_10px_25px_rgba(245,158,11,0.45)] transform transition duration-200 hover:scale-[1.02] active:scale-[0.99]"
            aria-label="Reservar mi limpieza GRATIS ahora"
          >
            📞 RESERVAR MI LIMPIEZA GRATIS AHORA
          </button>
        </div>
      </div>

  {/* Scroll cue removido para evitar distracción */}
    </section>
  );
});

HeroFunnel.displayName = 'HeroFunnel';
export default HeroFunnel;
