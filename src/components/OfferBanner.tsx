import React from 'react';
import Countdown from './Countdown';

// Slim, non-invasive top banner with the weekly offer
const OfferBanner: React.FC = React.memo(() => {

  return (
    <div
      role="region"
      aria-label="Oferta semanal"
      className="w-full bg-primary-700/95 text-white border-b border-primary-800"
    >
      <div className="container-custom py-1.5 md:py-2 flex items-center justify-between gap-3">
        {/* Copy */}
        <p className="text-xs md:text-sm text-gray-50/95">
          Oferta limitada — solo <span className="font-bold text-white">10</span> cupos esta semana
        </p>
        {/* Compact countdown */}
        <div className="shrink-0">
          <Countdown label="Termina en" emphasis size="sm" urgentThresholdHours={12} />
        </div>
      </div>
    </div>
  );
});

OfferBanner.displayName = 'OfferBanner';
export default OfferBanner;
