import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useCallback, useMemo, useState } from 'react';
import VideoOverlay from './VideoOverlay';

type FaqItem = {
  id: string;
  q: string;
  a: React.ReactNode;
};

const FAQ: React.FC = React.memo(() => {
  const items = useMemo<FaqItem[]>(() => [
    {
      id: 'tiempo',
      q: '¿Cuánto tiempo toma el servicio?',
      a: (
        <p>
          Inspección rápida y limpieza profunda en 1 hora aproximadamente. Podemos iniciar el mismo día si hay cupo.
          No necesitas estar presente todo el tiempo.
        </p>
      )
    },
    {
      id: 'dificultad',
      q: '¿Es complicado para mí coordinar?',
      a: (
        <p>
          Nada complicado. Llevamos todo (equipos y productos). Solo coordinas el acceso y te avisamos al terminar, con fotos del resultado.
        </p>
      )
    },
    {
      id: 'resultado',
      q: '¿Y si el agua no queda clara?',
      a: (
        <p>
          Garantía de satisfacción: si no queda perfecta, repetimos gratis hasta dejarla impecable.
        </p>
      )
    },
    {
      id: 'esfuerzo',
      q: '¿Tengo que hacer algún esfuerzo o preparar algo?',
      a: (
        <p>
          No. Nosotros hacemos el cepillado, aspirado, filtrado y balance. Sin mover muebles ni vaciar la piscina.
        </p>
      )
    },
    {
      id: 'sacrificio',
      q: '¿Debo dejar de usar la piscina por mucho tiempo?',
      a: (
        <p>
          Solo durante el servicio y breve tiempo de estabilización. En la mayoría de casos, queda lista el mismo día.
        </p>
      )
    },
    {
      id: 'incluye',
      q: '¿Qué incluye el servicio estándar?',
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">Inspección</span>: diagnóstico del agua y revisión básica de equipos.
          </li>
          <li>
            <span className="font-semibold">Limpieza</span>: cepillado, aspirado y filtrado para recuperar el brillo.
          </li>
          <li>
            <span className="font-semibold">Mantenimiento</span>: balance químico y recomendaciones para que se mantenga cristalina.
          </li>
        </ul>
      )
    },
    {
      id: 'finsemana',
      q: '¿Puedo reservar para este fin de semana?',
      a: (
        <p>
          Sí. Agenda ahora por WhatsApp y confirmamos tu horario disponible para sábado o domingo.
        </p>
      )
    },
    {
      id: 'precio',
      q: '¿Cuál es el precio después de la promo?',
      a: (
        <p>
          Limpieza puntual desde S/149 (según tamaño). La inspección inicial es sin costo y sin compromiso.
        </p>
      )
    },
    {
      id: 'zonas',
      q: '¿Qué zonas cubren?',
      a: (
        <p>
          La Molina y alrededores (Surco, San Borja). Escríbenos por WhatsApp y confirmamos disponibilidad hoy.
        </p>
      )
    },
    {
      id: 'seguridad',
      q: '¿Usan productos seguros?',
      a: (
        <p>
          Sí. Productos balanceados y certificados. pH y cloro exactos para evitar irritaciones en piel y ojos.
        </p>
      )
    }
  ], []);

  const [open, setOpen] = useState<Set<string>>(new Set(['tiempo']));
  const toggle = useCallback((id: string) => {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  return (
    <section aria-labelledby="faq-title" className="relative py-14 bg-primary-600 overflow-hidden">
      <VideoOverlay />
      <div className="relative z-10 container-custom">
        <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-white text-center mb-8">
          Preguntas frecuentes
        </h2>

  <div className="max-w-3xl mx-auto divide-y divide-gray-200 border border-gray-200 rounded-xl bg-white">
          {items.map(({ id, q, a }) => {
            const isOpen = open.has(id);
            const btnId = `faq-btn-${id}`;
            const panelId = `faq-panel-${id}`;
            return (
              <div key={id} className="px-4 sm:px-6">
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(id)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between text-left min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  <span className="font-semibold text-gray-900 pr-4">{q}</span>
                  <ChevronDownIcon className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'} text-gray-700`}
                >
                  <div className="pr-2 sm:pr-6">
                    {a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  {/* CTA removed here to keep hierarchy; closing push will be the global primary CTA */}
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';
export default FAQ;
