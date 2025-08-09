import React, { useCallback } from 'react';

const MidCTA: React.FC = React.memo(() => {
  const handleClick = useCallback(() => {
    const phone = '51999888777';
    const msg = 'Hola JefraPools, quiero mi limpieza GRATIS. ¿Pueden atender hoy en La Molina?';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }, []);

  return (
    <section aria-labelledby="mid-cta-title" className="py-10 bg-primary-600">
      <div className="container-custom text-center text-white">
        <h2 id="mid-cta-title" className="text-2xl md:text-3xl font-black mb-3">
          ¿Listo para tu piscina cristalina hoy?
        </h2>
        <p className="opacity-90 mb-5">Inspección sin costo en La Molina • Respuesta en minutos</p>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-400 text-gray-900 font-semibold shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[48px]"
          aria-label="Cotización Gratuita por WhatsApp"
        >
          📞 Cotización Gratuita WhatsApp
        </button>
      </div>
    </section>
  );
});

MidCTA.displayName = 'MidCTA';
export default MidCTA;
