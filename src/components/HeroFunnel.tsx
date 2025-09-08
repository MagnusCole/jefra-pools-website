import React, { useCallback } from 'react';
import { trackLead } from '../utils/tracking';
import Countdown from './Countdown';

// HeroFunnel: headline + urgency timer + single CTA (WhatsApp)
// Copy aligned to creative: "¿Cansado de limpiar tu piscina? +1 limpieza GRATIS esta semana + inspección sin costo"

// Single, fixed hero background (no alternates)
const HERO_BG = '/images/b651ee56-0c98-4bc4-8d01-87ee3d7bc715.jpg';

const HeroFunnel: React.FC = React.memo(() => {
  // Background: single image; slightly lower center for best composition
  const objPos = '50% 55%';

  const handleFormRedirect = useCallback(() => {
    document.getElementById('contacto')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    trackLead('hero');
  }, []);

  return (
    <section
      id="hero"
      role="banner"
  className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-primary-700"
    >
      {/* Background simple y nítido (única imagen) */}
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover brightness-[1.08] saturate-125 pointer-events-none select-none"
        style={{ objectPosition: objPos }}
        loading="eager"
        decoding="async"
        sizes="100vw"
        fetchPriority="high"
      />
  <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
  <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-10 md:pt-12 text-center">
  {/* Logo discreto arriba del headline */}
    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)] [text-shadow:0_0_2px_#000,0_2px_6px_rgba(0,0,0,0.55)] mb-3">
    <span className="block font-outfit">Piscina cristalina</span>
    <span className="block font-outfit">Resultados en 24h</span>
  </h1>

  <video
    autoPlay
    muted
    loop
    playsInline
    className="mx-auto mb-3 md:mb-4 w-[350px] sm:w-[400px] md:w-[450px] h-auto opacity-90 select-none pointer-events-none rounded-xl border-4 border-white/20 shadow-[0_8px_32px_rgba(14,165,233,0.3)] ring-2 ring-sky-400/30 backdrop-blur-sm"
    preload="none"
    aria-label="JefraPools video logo"
  >
  <source src="/videos/antes_y_despues_2.mp4" type="video/mp4" />
  Tu navegador no soporta videos.
  </video>

  <p className="mt-3 text-lg md:text-xl text-gray-100 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] [text-shadow:0_0_2px_#000,0_2px_6px_rgba(0,0,0,0.55)]">
          <span className="block">Especialistas Nro. 1 en piscinas</span>
          <span className="block">GRATIS: Inspección + 1 limpieza extra</span>
        </p>

        {/* Garantía (removida temporalmente para reducir distracción y peso visual)
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/20">
          <span className="text-white text-sm font-semibold">Garantía:</span>
          <span className="text-sky-200 text-sm">Si no queda cristalina, repetimos gratis</span>
        </div>
        */}

        {/* Bonus + Countdown moved to OfferBanner for less invasive placement */}

        {/* Countdown arriba del CTA */}
        <div className="mt-4 flex justify-center">
          <Countdown label="Termina en" emphasis urgentThresholdHours={12} target="2025-09-13T23:59:59" />
        </div>

        {/* CTA */}
  <div className="mt-5 md:mt-6">
          <button
            onClick={handleFormRedirect}
            data-testid="cta-primary"
            className="btn-cta bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold px-9 py-5 md:py-6 rounded-2xl min-h-[56px] min-w-[64px] text-xl md:text-2xl ring-1 ring-amber-300 shadow-[0_10px_25px_rgba(245,158,11,0.45)] transform transition duration-200 hover:scale-[1.02] active:scale-[0.99]"
            aria-label="RESERVA GRATIS AHORA"
          >
            RESERVA GRATIS AHORA
          </button>
        </div>
      </div>

  {/* Scroll cue removido para evitar distracción */}
    </section>
  );
});

HeroFunnel.displayName = 'HeroFunnel';
export default HeroFunnel;
