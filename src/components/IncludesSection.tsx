import React, { useCallback } from 'react';
import { MagnifyingGlassIcon, WrenchScrewdriverIcon, BeakerIcon } from '@heroicons/react/24/outline';

const phone = '51999888777';
const microCtaMessage = 'Hola JefraPools, quiero solicitar mi limpieza completa (inspección, limpieza y balance). ¿Pueden atender en La Molina?';

const IncludesSection: React.FC = React.memo(() => {
  const handleWhatsApp = useCallback(() => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(microCtaMessage)}`, '_blank', 'noopener');
  }, []);

  return (
    <section aria-labelledby="includes-title" className="py-14 sm:py-16 bg-gradient-to-b from-sky-100 via-sky-100 to-sky-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 id="includes-title" className="text-3xl md:text-4xl font-black text-gray-900">Todo incluido en tu limpieza</h2>
          <p className="text-gray-700 mt-2">Sin costos ocultos. Servicio completo en una sola visita.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {/* Bloque 1 – Inspección gratuita */}
          <article className="text-center">
            <span aria-hidden className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-md ring-1 ring-sky-200 text-sky-600">
              <MagnifyingGlassIcon className="w-12 h-12" />
            </span>
            <h3 className="mt-3 text-xl font-bold text-gray-900">Inspección inicial</h3>
            <p className="mt-1 text-sm text-gray-700">Revisamos agua, paredes, fondo y filtros antes de empezar.</p>
          </article>

          {/* Bloque 2 – Limpieza profesional */}
          <article className="text-center">
            <span aria-hidden className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-md ring-1 ring-sky-200 text-sky-600">
              <WrenchScrewdriverIcon className="w-12 h-12" />
            </span>
            <h3 className="mt-3 text-xl font-bold text-gray-900">Limpieza profunda</h3>
            <p className="mt-1 text-sm text-gray-700">Cepillado, aspirado y filtrado. Lista el mismo día.</p>
          </article>

          {/* Bloque 3 – Mantenimiento preventivo */}
          <article className="text-center">
            <span aria-hidden className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-md ring-1 ring-sky-200 text-sky-600">
              <BeakerIcon className="w-12 h-12" />
            </span>
            <h3 className="mt-3 text-xl font-bold text-gray-900">Balance y mantenimiento</h3>
            <p className="mt-1 text-sm text-gray-700">Ajuste de pH y cloro + recomendaciones.</p>
          </article>
        </div>

    <div className="text-center mt-6">
          <button
            onClick={handleWhatsApp}
      className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-amber-400 text-amber-600 bg-white font-semibold shadow-sm hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[48px]"
      aria-label="Solicitar inspección gratis"
          >
      Solicitar inspección gratis
          </button>
        </div>
      </div>
    </section>
  );
});

IncludesSection.displayName = 'IncludesSection';
export default IncludesSection;
