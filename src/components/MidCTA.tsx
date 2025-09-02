import React, { useCallback } from 'react';
import { WHATSAPP_PHONE } from '../config/contact';
import { trackLead } from '../utils/tracking';
import VideoOverlay from './VideoOverlay';
import { FaWhatsapp } from 'react-icons/fa';

const MidCTA: React.FC = React.memo(() => {
  const handleClick = useCallback(() => {
  const msg = '¡Hola Jefra Pools! Quiero agendar mi visita técnica GRATIS + 1 limpieza extra para mantenimiento.';
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  trackLead('mid-cta');
  }, []);

  return (
    <section aria-labelledby="mid-cta-title" className="relative py-10 bg-primary-600 overflow-hidden">
      <VideoOverlay />
      <div className="relative z-10 container-custom text-center text-white">
        <h2 id="mid-cta-title" className="text-2xl md:text-3xl font-black mb-3">
          ¿Listo para tu piscina cristalina hoy?
        </h2>
        <p className="opacity-90 mb-5">Reserva sin compromiso • Respuesta en minutos</p>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center px-9 py-5 rounded-2xl bg-amber-400 text-gray-900 font-extrabold shadow-[0_10px_25px_rgba(245,158,11,0.45)] hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[56px] text-xl"
          aria-label="RESERVA GRATIS AHORA"
        >
          RESERVA GRATIS AHORA
          <FaWhatsapp className="inline-block ml-2" />
        </button>
      </div>
    </section>
  );
});

MidCTA.displayName = 'MidCTA';
export default MidCTA;
