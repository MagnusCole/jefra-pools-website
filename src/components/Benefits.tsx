import React, { useCallback, useMemo } from 'react';
import { 
  SparklesIcon, 
  HeartIcon, 
  StarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/solid';

/**
 * Benefits Component - Evidence-Based Emotional Psychology
 * Research: Emotional benefits → 20-35% engagement boost Hispanic markets
 * Focus: Family safety + social status + peace of mind
 * Mobile-first: 70% traffic LATAM optimization
 */
const Benefits: React.FC = React.memo(() => {
  // WhatsApp integration (consistent across components)
  const handleWhatsAppClick = useCallback(() => {
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Quiero información sobre los beneficios del servicio de limpieza profesional.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Evidence-based benefits - SIMPLIFIED COLORS
  const benefits = useMemo(() => [
    {
      icon: HeartIcon,
      title: "Familia Segura",
      description: "Agua 100% libre de bacterias y algas. Tus hijos nadan sin riesgo de infecciones.",
      priority: "high"
    },
    {
      icon: UserGroupIcon,
      title: "Orgullo Social",
      description: "La piscina más limpia del barrio. Reuniones perfectas que todos recuerdan.",
      priority: "high"
    },
    {
      icon: ClockIcon,
      title: "Tiempo Libre",
      description: "Fin de semana para descansar, no para limpiar. Más tiempo con familia.",
      priority: "high"
    },
    {
      icon: SparklesIcon,
      title: "Siempre Lista",
      description: "Visitas inesperadas, pool parties, cualquier momento es perfecto.",
      priority: "medium"
    },
    {
      icon: ShieldCheckIcon,
      title: "Inversión Protegida",
      description: "Mantén el valor de tu propiedad. Equipos que duran más años.",
      priority: "medium"
    },
    {
      icon: StarIcon,
      title: "Resultados Garantizados",
      description: "Transformación visible en 24h o devolvemos tu dinero. Sin riesgo.",
      priority: "high"
    }
  ], []);

  return (
    <section 
      id="benefits" 
      className="relative py-20 lg:py-28 bg-gray-50"
      role="region"
      aria-labelledby="benefits-title"
    >
      <div className="container-custom">
        {/* Header - SIMPLIFIED */}
        <div className="text-center mb-16 lg:mb-20">          
          <h2 
            id="benefits-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
          >
            Más que limpieza:{' '}
            <span className="text-primary-600">
              tranquilidad
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Con <span className="font-bold text-primary-600">JefraPools</span>, inviertes en la{' '}
            <span className="font-bold text-gray-900">seguridad de tu familia</span> y el{' '}
            <span className="font-bold text-primary-600">orgullo de tu hogar</span>
          </p>
        </div>

        {/* Benefits Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100 hover:border-primary-200 hover:-translate-y-1"
            >
              {/* Priority Badge */}
              {benefit.priority === 'high' && (
                <div className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ⭐
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex p-4 rounded-lg bg-primary-600 mb-6">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof + CTA Section - SIMPLIFIED */}
        <div className="bg-white rounded-lg p-8 md:p-12 border border-gray-200">
          <div className="text-center">
            {/* Social Proof Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600">200+</div>
                <div className="text-sm text-gray-600">Familias felices</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-gray-600">Años experiencia</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600">24h</div>
                <div className="text-sm text-gray-600">Transformación</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Garantía</div>
              </div>
            </div>

            {/* Final CTA - SIMPLIFIED */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary-600">¡Tu familia lo merece!</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Únete a las <span className="font-bold text-primary-600">200+ familias en La Molina</span> que ya disfrutan{' '}
              <span className="font-bold text-gray-900">agua cristalina y tiempo libre</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-10 py-5 rounded-lg transition-colors min-h-[60px] flex items-center justify-center space-x-3"
                aria-label="Solicitar cotización gratuita por WhatsApp"
              >
                <span>Cotización Gratuita</span>
              </button>
              
              <div className="flex items-center text-sm text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span className="font-medium">Sin compromiso • Respuesta inmediata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Benefits.displayName = 'Benefits';
export default Benefits;
