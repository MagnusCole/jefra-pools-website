import React, { useCallback } from 'react';
import { trackLead } from '../utils/tracking';

const phone = '51999888777';

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
          ¿Qué incluye la <span className="align-baseline rounded-lg bg-amber-100 text-amber-800 px-2 py-0.5 font-extrabold">oferta</span>?
        </h2>

        <ol className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: (
                <>
                  Evaluación inicial clara — <span className="line-through decoration-4 decoration-primary-700 text-gray-600">S/.100</span>{' '}
                  <span className="mx-1">&gt;</span>
                  <span className="align-middle rounded-md bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] font-extrabold">S/.0.00</span>
                </>
              ),
              desc: 'Revisamos agua, paredes, fondo y filtrado. Te explicamos qué está bien y qué hay que mejorar.'
            },
            {
              title: 'Cotización transparente',
              desc: 'Escuchamos tus necesidades y te damos una propuesta clara, sin costos ocultos.'
            },
            {
              title: (
                <>
                  4 visitas de mantenimiento <span className="font-black">+</span>{' '}
                  <span className="rounded-md bg-amber-100 text-amber-800 px-1.5 py-0.5 font-semibold whitespace-nowrap">1 visita de limpieza gratis</span>
                </>
              ),
              desc: 'Cepillado, aspirado y balanceo profesional para recuperar el brillo. Sin interrumpir tu rutina.'
            },
            {
              title: 'Revisión final + fotos',
              desc: 'Verificamos que quede cristalina y te compartimos fotos del resultado. Si no, repetimos gratis.'
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

        <div className="text-center mt-8">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-amber-400 text-amber-700 bg-amber-50 font-bold shadow-sm hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[48px]"
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
