import React, { useCallback } from 'react';
import { WHATSAPP_PHONE } from '../config/contact';
import { trackLead } from '../utils/tracking';
import VideoOverlay from './VideoOverlay';

const MidCTA: React.FC = React.memo(() => {
  const handleClick = useCallback(() => {
    const msg = 'Hola JefraPools, quiero mi limpieza GRATIS. ¿Pueden atender hoy en La Molina?';
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    trackLead('mid-cta');
  }, []);

  return (
    <section aria-labelledby="mid-cta-title" className="py-10 bg-primary-600 relative overflow-hidden">
      {/* Video caustics overlay */}
  <VideoOverlay src="/videos/caustics.mp4" opacity={0.22} playbackRate={1.0} scale={1.35} objectPosition="center right" />
      <div className="container-custom text-center text-white">
  <div className="content-above">
        <h2 id="mid-cta-title" className="text-2xl md:text-3xl font-black mb-3">
          ¿Listo para tu piscina cristalina hoy?
        </h2>
        <p className="opacity-90 mb-5">Inspección sin costo en La Molina • Respuesta en minutos</p>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center px-9 py-5 rounded-2xl bg-amber-400 text-gray-900 font-extrabold shadow-[0_10px_25px_rgba(245,158,11,0.45)] hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[56px] text-xl"
          aria-label="RESERVAR GRATIS AHORA"
        >
          📞 RESERVAR GRATIS AHORA
        </button>
        <p className="mt-2 text-xs md:text-sm text-white/90">Sin compromiso</p>
        </div>
      </div>
    </section>
  );
});

MidCTA.displayName = 'MidCTA';
export default MidCTA;
