import React, { useCallback } from 'react';
import { WHATSAPP_PHONE } from '../config/contact';
import { trackLead } from '../utils/tracking';

const phone = WHATSAPP_PHONE;

// Proceso / ¿Qué incluye la oferta?
// 1) Evaluación (antes S/.100 → ahora S/.0.00), 2) Cotización clara, 3) 4 visitas + 1 gratis, 4) Revisión final
const Process: React.FC = React.memo(() => {
  const handleWhatsApp = useCallback(() => {
    const msg = 'Hola JefraPools, quiero conocer su proceso y reservar una inspección gratuita.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    trackLead('process-cta');
  }, []);

  return (
  <section aria-labelledby="process-title" className="pt-8 pb-14 sm:pt-10 sm:pb-16 bg-white">
      <div className="container-custom">
  <h2 id="process-title" className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-6">
          ¿Qué incluye el servicio?
        </h2>

        <ol className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: (
                <>
                  Visita técnica inicial — <span className="text-gray-700">Antes</span>{' '}
                  <span className="line-through decoration-4 decoration-primary-700 text-gray-600">S/.149</span>{' '}
                  <span className="mx-1">→</span>
                  <span className="text-gray-700">Ahora</span>{' '}
                  <span className="align-middle rounded-md bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] font-extrabold">S/.0.00</span>
                </>
              ),
              desc: 'Revisión del agua, materiales, salada de maqúina (conexiones de tuberías), sistema de recirculación y filtrado; niveles de pH y cloro. Heco por expertos, ahorrándote horas y detectando problemas temprano.'
            },
            {
              title: 'Cotización transparente y personalizada',
              desc: 'Detalle exacto de insumos y cotización de materiales, sin sorpresas, todo claro para tu tranquilidad.'
            },
            {
              title: (
                <>
                  4 visitas de mantenimiento <span className="font-black">+</span>{' '}
                  <span className="rounded-md bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] font-bold whitespace-nowrap">1 Limpieza Gratis</span>
                </>
              ),
              desc: 'Mantenimiento completo de la piscina, limpieza de paredes, piso y canaletas; disminución de agua, limpieza de filtro, etc. Resultados visibles en semanas, con reportes digitales para seguimiento fácil.'
            },
            {
              title: 'Informe detallado por visita',
              desc: 'Recibe un reporte claro de cada mantenimiento. Si no te convence, repetimos gratis hasta que estés 100% satisfecho.'
            }
          ].map((step, i) => (
            <li key={i} className="relative rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
              <div className="absolute -left-3 top-4 sm:top-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-primary-700 text-white text-sm sm:text-base font-extrabold shadow">
                {i + 1}
              </div>
              <h3 className="pl-6 sm:pl-8 text-[15px] sm:text-lg font-bold text-gray-900 tracking-tight">
                {step.title}
              </h3>
              <p className="pl-6 sm:pl-8 mt-1 text-gray-700 text-sm">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>

        {/* Clarificación requerida: debajo del paso 4 y antes del CTA */}
        <p
          className="mt-6 max-w-3xl mx-auto text-[11px] sm:text-xs md:text-sm leading-snug text-gray-600 bg-amber-50/80 border border-amber-200 rounded-lg px-4 py-3 shadow-sm"
          role="note"
        >
          <span className="font-semibold text-amber-700">Importante:</span> La visita técnica inicial es gratuita únicamente al
          contratar el servicio de mantenimiento completo (plan de 4 visitas) y cuenta como la primera visita del plan.
        </p>

    <div className="text-center mt-8">
          <button
            onClick={handleWhatsApp}
      className="inline-flex items-center justify-center px-6 md:px-8 py-3 rounded-full border-2 border-amber-400 text-amber-700 bg-amber-50 font-bold shadow hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[48px]"
            aria-label="Solicitar inspección gratis"
          >
            ¡Sé el próximo cliente feliz!
          </button>
        </div>
      </div>
    </section>
  );
});

Process.displayName = 'Process';
export default Process;
