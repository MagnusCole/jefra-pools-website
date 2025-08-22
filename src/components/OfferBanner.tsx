import React, { useCallback, useMemo, useState } from 'react';
import { WHATSAPP_DISPLAY, WHATSAPP_PHONE } from '../config/contact';
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
        {/* Centered WhatsApp contact between chip and countdown */}
        <div className="flex-1 flex justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white/90 px-3 py-1 text-sm font-semibold"
            aria-label="Contactar por WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-green-400">
              <path d="M21.05 2.999a11.9 11.9 0 00-16.87 0 11.9 11.9 0 000 16.87L2 22l2.15-2.18A11.9 11.9 0 0021.05 2.999z" stroke="currentColor" strokeWidth="0" fill="#25D366" />
              <path d="M17.2 14.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.75.96-.92 1.15-.17.2-.34.22-.64.08-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2 0-.38-.02-.53-.02-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.35-.27.27-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.08 3.36 5.04 4.71 2.96 1.36 2.96.91 3.49.85.53-.06 1.72-.7 1.97-1.38.25-.68.25-1.26.17-1.38-.08-.12-.27-.2-.57-.35z" fill="#fff" />
            </svg>
            <span className="hidden sm:inline">{WHATSAPP_DISPLAY}</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
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
