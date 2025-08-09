import React from 'react';

// Slim, non-invasive top banner with the weekly offer
const OfferBanner: React.FC = React.memo(() => {

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
      </div>
    </div>
  );
});

OfferBanner.displayName = 'OfferBanner';
export default OfferBanner;
