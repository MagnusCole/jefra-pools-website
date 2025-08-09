import React, { useCallback } from 'react';

const StickyFooterCTA: React.FC = React.memo(() => {
  const handleClick = useCallback(() => {
    const phone = '51999888777';
    const msg = 'Hola JefraPools, quiero reservar mi limpieza GRATIS. ¿Tienen cupos hoy?';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }, []);

  return (
    <div role="region" aria-label="Acción principal" className="sm:hidden fixed inset-x-0 bottom-0 z-40 bg-amber-400 border-t border-amber-300" style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}>
      <div className="container-custom py-2">
        <button
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-gray-900 text-white font-bold shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 min-h-[48px]"
          aria-label="Reservar mi limpieza GRATIS ahora"
        >
          📞 Reservar mi limpieza GRATIS ahora
        </button>
      </div>
    </div>
  );
});

StickyFooterCTA.displayName = 'StickyFooterCTA';
export default StickyFooterCTA;
