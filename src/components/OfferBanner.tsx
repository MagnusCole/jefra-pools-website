import React, { useCallback, useMemo, useState } from 'react';
import Countdown from './Countdown';

interface OfferBannerProps {
  sticky?: boolean; // stick to page top (non-overlay)
  dismissible?: boolean; // allow user to close until week end
  storageKey?: string; // key for localStorage
  variant?: 'page' | 'overlay'; // overlay places it fixed at the top of its container (e.g., hero)
}

// get end of week (Sunday 23:59:59)
const getEndOfWeek = () => {
  const now = new Date();
  const end = new Date(now);
  const daysUntilSunday = (7 - now.getDay()) % 7;
  end.setDate(now.getDate() + daysUntilSunday);
  end.setHours(23, 59, 59, 999);
  return end.getTime();
};

// Slim, non-invasive top banner with the weekly offer
const OfferBanner: React.FC<OfferBannerProps> = React.memo(({ sticky = false, dismissible = true, storageKey = 'offer-banner-dismissed-until', variant = 'page' }) => {
  const untilKey = storageKey;
  const dismissedUntil = useMemo(() => {
    try {
      const raw = localStorage.getItem(untilKey);
      return raw ? parseInt(raw, 10) : 0;
    } catch {
      return 0;
    }
  }, [untilKey]);

  const [hidden, setHidden] = useState<boolean>(() => Date.now() < dismissedUntil);

  const handleClose = useCallback(() => {
    if (!dismissible) return;
    setHidden(true);
    try {
      localStorage.setItem(untilKey, String(getEndOfWeek()));
    } catch {
      // ignore storage errors
    }
  }, [dismissible, untilKey]);

  return (
    <div
      role="region"
      aria-label="Oferta semanal"
      className={`${hidden ? 'hidden' : ''} w-full ${variant === 'overlay' ? 'absolute top-0 left-0 right-0 z-20 bg-primary-700/80 backdrop-blur-sm' : `${sticky ? 'sticky top-0 z-40' : ''} bg-primary-700/95`} text-white ${variant === 'overlay' ? '' : 'border-b border-primary-800'}`}
    >
      <div className={`container-custom flex items-center justify-between gap-3 ${variant === 'overlay' ? 'py-1 md:py-1.5' : 'py-1.5 md:py-2'}`}>
        {/* Visual-first chip */}
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-amber-400/90 text-gray-900 px-2 py-0.5 text-xs font-extrabold shadow-sm">
            10 cupos
          </span>
          <span className="hidden sm:inline text-xs text-white/90">esta semana</span>
        </div>
        {/* Compact countdown */}
        <div className="shrink-0 flex items-center gap-2">
          <Countdown label="Termina en" emphasis size="sm" urgentThresholdHours={12} />
          {dismissible && (
            <button
              type="button"
              onClick={handleClose}
              className="ml-1 inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white/90 w-7 h-7 focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[28px] min-h-[28px]"
              aria-label="Cerrar banner de oferta"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

OfferBanner.displayName = 'OfferBanner';
export default OfferBanner;
