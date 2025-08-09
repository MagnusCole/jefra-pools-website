import React, { useCallback } from 'react';

// Slim, non-invasive top banner with the weekly offer
const OfferBanner: React.FC = React.memo(() => {

  const handleWhatsApp = useCallback(() => {
    const phone = '51999888777';
    const msg = '¡Hola! Quiero agendar mi inspección sin costo y la limpieza GRATIS esta semana.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div
      role="region"
      aria-label="Oferta semanal"
      className="sticky top-0 z-40 w-full bg-primary-600/95 text-white backdrop-blur-md border-b border-primary-700"
    >
      <div className="container-custom py-1.5 md:py-2 flex items-center gap-2 md:gap-3 justify-between min-h-[44px]">
        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-base min-w-0">
          <span className="hidden sm:inline">🏊‍♂️</span>
          <p className="truncate font-semibold">Inspección sin costo en La Molina</p>
        </div>
        <button
          onClick={handleWhatsApp}
          className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg text-xs md:text-sm min-h-[36px] md:min-h-[40px]"
          aria-label="Agendar por WhatsApp"
          data-testid="banner-cta"
        >
          <span className="hidden sm:inline">📞 Agenda por WhatsApp</span>
          <span className="sm:hidden">📞 WhatsApp</span>
        </button>
      </div>
    </div>
  );
});

OfferBanner.displayName = 'OfferBanner';
export default OfferBanner;
