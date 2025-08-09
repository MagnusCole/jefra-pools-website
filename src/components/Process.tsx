import React, { useCallback } from 'react';

const phone = '51999888777';

// Proceso de limpieza (inspirado en el ejemplo aportado)
// 1) Evaluación, 2) Cotización clara, 3) Limpieza profunda, 4) Revisión final
const Process: React.FC = React.memo(() => {
  const handleWhatsApp = useCallback(() => {
    const msg = 'Hola JefraPools, quiero conocer su proceso y reservar una inspección gratuita.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }, []);

  return (
  <section aria-labelledby="process-title" className="pt-8 pb-14 sm:pt-10 sm:pb-16 bg-white">
      <div className="container-custom">
  <h2 id="process-title" className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-6">
          ¿Cómo dejamos tu piscina perfecta?
        </h2>

        <ol className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: 'Evaluación inicial clara',
              desc: 'Revisamos agua, paredes, fondo y filtrado. Te explicamos qué está bien y qué hay que mejorar.'
            },
            {
              title: 'Cotización transparente',
              desc: 'Escuchamos tus necesidades y te damos una propuesta clara, sin costos ocultos.'
            },
            {
              title: 'Limpieza profunda el mismo día',
              desc: 'Cepillado, aspirado y balanceo profesional para recuperar el brillo. Sin interrumpir tu rutina.'
            },
            {
              title: 'Revisión final + fotos',
              desc: 'Verificamos que quede cristalina y te compartimos fotos del resultado. Si no, repetimos gratis.'
            }
          ].map((step, i) => (
            <li key={i} className="relative rounded-2xl border border-gray-300 bg-white p-4 sm:p-5">
              <div className="absolute -left-3 top-4 sm:top-5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-700 text-white font-bold shadow">
                {i + 1}
              </div>
              <h3 className="pl-6 sm:pl-8 text-lg font-bold text-gray-900">
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
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-amber-400 text-amber-600 bg-white font-semibold shadow-sm hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[48px]"
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
