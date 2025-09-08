import React, { useCallback } from 'react';
import { trackLead } from '../utils/tracking';

const Process: React.FC = React.memo(() => {
  const handleFormRedirect = useCallback(() => {
    document.getElementById('contacto')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    trackLead('process-cta');
  }, []);

  return (
  <section aria-labelledby="process-title" className="pt-8 pb-6 sm:pt-10 sm:pb-8 bg-white">
      <div className="container-custom">
  <h2 id="process-title" className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-8 uppercase">
          Todo esto incluido en la OFERTA
        </h2>

        <ol className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: (
                <>
                  <span className="text-green-600 font-black">¡GRATUITA!</span>{' '}
                  Visita Técnica de Diagnóstico y Planificación{' '}
                </>
              ),
              desc: [
                'Un especialista de Jefra Pools realizará una evaluación exhaustiva del estado de tu piscina, identificando cualquier necesidad y diseñando un plan de mantenimiento totalmente personalizado para ti.',
                'Esta valiosa visita inicial también cuenta como la primera de tus 4 visitas de servicio incluidas en el plan, es el inicio hacia la perfección de tu piscina.',
                'Al finalizar esta visita, recibirás una cotización transparente para tu plan de mantenimiento, sin sorpresas.'
              ],
              highlight: (
                <>
                  ¡<span className="line-through">Valor S/140</span> | Ahora GRATIS!
                </>
              ),
              icon: '🔍'
            },
            {
              title: (
                <>
                  <span className="text-blue-600 font-black">¡+3 Visitas</span>{' '}
                  de Mantenimiento Profesional Integrales!
                </>
              ),
              desc: [
                'Además de tu visita inicial, nuestro equipo realizará tres servicios de mantenimiento adicionales para garantizar que tu piscina esté siempre en su punto óptimo.',
                'Cada visita incluye limpieza completa, revisión de sistemas, balance químico y mantenimiento preventivo.'
              ],
              highlight: 'Servicio Premium Completo',
              icon: '⚡'
            },
            {
              title: (
                <>
                  <span className="text-red-600 font-black">¡1 Limpieza Extra</span>{' '}
                  <span className="text-red-600 font-black">Adicional GRATIS!</span>
                </>
              ),
              desc: [
                '¿Un evento especial o simplemente deseas un brillo extra? Ademas de las 4 visitas, te obsequiamos una limpieza adicional para que tu piscina resplandezca.',
                'Perfecta para ocasiones especiales.'
              ],
              highlight: '¡BONO EXTRA Sin Costo!',
              icon: '✨'
            },
            {
              title: 'Informes Detallados Post-Visita',
              desc: [
                'Después de cada servicio, recibirás un informe claro y transparente con los trabajos realizados, el estado de tu piscina y nuestras recomendaciones.',
                'Mantén el control total y la tranquilidad sobre el cuidado de tu piscina, siempre informado.'
              ],
              highlight: 'Transparencia Total',
              icon: '📋'
            }
          ].map((step, i) => (
            <li key={i} className="relative rounded-2xl border-2 border-gray-100 bg-gradient-to-r from-white to-gray-50/50 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Badge de highlight */}
              <div className="absolute -top-3 left-6 bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                {step.highlight}
              </div>

              {/* Número con ícono */}
              <div className="absolute -left-4 top-6 sm:top-8 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white text-lg sm:text-xl font-black shadow-lg ring-2 ring-amber-300">
                <span className="text-sm">{step.icon}</span>
              </div>

              <div className="pl-8 sm:pl-10">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Lista de beneficios */}
                <ul className="space-y-2">
                  {step.desc.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm sm:text-base leading-relaxed">
                      <span className="text-amber-500 mr-2 mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

    <div className="text-center mt-10">
          <div className="mb-4">
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              ¡Agenda tu Visita de Diagnóstico GRATUITA ANTES DE QUE LA OFERTA TERMINE!
            </h3>
            <p className="text-gray-600 text-lg">
              No dejes que el tiempo se acabe, tu piscina perfecta te espera ✨
            </p>
          </div>

          <button
              onClick={handleFormRedirect}
              className="bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-gray-900 font-black px-8 py-4 rounded-2xl min-h-[56px] text-xl ring-2 ring-amber-300 shadow-[0_15px_35px_rgba(245,158,11,0.4)] transform transition duration-300 hover:scale-[1.05] active:scale-[0.98] uppercase tracking-wide"
            >
              ¡Reservar GRATIS AHORA!
          </button>
        </div>
      </div>
    </section>
  );
});

Process.displayName = 'Process';
export default Process;
