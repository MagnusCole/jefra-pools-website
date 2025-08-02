import React, { useCallback } from 'react';
import { 
  SparklesIcon, 
  WrenchScrewdriverIcon, 
  BeakerIcon,
  CheckIcon
} from '@heroicons/react/24/solid';

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

/**
 * Services Component - SIMPLIFIED VERSION
 * Evidence-Based: Transparent pricing + Clear value proposition
 * Mobile-first: 70% traffic LATAM
 * Minimal design: Clean pricing without distractions
 */
const Services: React.FC = React.memo(() => {
  // WhatsApp integration
  const handleWhatsAppClick = useCallback(() => {
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Me interesa conocer más sobre los servicios y precios.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Simplified services array
  const services: Service[] = [
    {
      icon: SparklesIcon,
      title: "Limpieza Express",
      price: "S/ 180",
      description: "Limpieza completa y balanceado químico. Tu piscina perfecta en 24 horas.",
      features: [
        "Aspirado completo del fondo",
        "Limpieza de paredes y línea de agua",
        "Balanceado químico profesional",
        "Tratamiento anti-algas",
        "Revisión de equipos"
      ]
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Mantenimiento Semanal",
      price: "S/ 220",
      description: "Servicio completo semanal. Siempre lista para disfrutar.",
      features: [
        "Todo lo de Limpieza Express",
        "Mantenimiento de filtros",
        "Aspirado automático",
        "Reporte semanal digital",
        "Atención prioritaria"
      ],
      popular: true
    },
    {
      icon: BeakerIcon,
      title: "Recuperación Total",
      price: "S/ 350",
      description: "Para piscinas descuidadas. De turbia a cristalina garantizado.",
      features: [
        "Análisis químico completo",
        "Tratamiento shock intensivo",
        "Limpieza profunda de equipos",
        "Cambio de arena/cartuchos",
        "Garantía 100% resultado"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-gray-50"
      role="region"
      aria-labelledby="services-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="services-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
          >
            Servicios{' '}
            <span className="text-primary-600">Transparentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precios claros, sin sorpresas. Elige el servicio que mejor se adapte a tu piscina.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-lg p-8 border-2 transition-all duration-300 hover:shadow-lg ${
                service.popular 
                  ? 'border-primary-600 shadow-lg' 
                  : 'border-gray-200 hover:border-primary-600'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-lg mb-6 ${
                service.popular ? 'bg-primary-600' : 'bg-gray-100'
              }`}>
                <service.icon className={`h-8 w-8 ${
                  service.popular ? 'text-white' : 'text-gray-600'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <div className="mb-6">
                <div className="text-4xl font-black text-primary-600 mb-2">
                  {service.price}
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                onClick={handleWhatsAppClick}
                className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                  service.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Solicitar Servicio
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-white rounded-lg p-8 md:p-12 text-center border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Garantía 100% o Devolvemos tu Dinero
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Si no quedas completamente satisfecho con el resultado, 
            te devolvemos el 100% de tu dinero. Sin preguntas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-gray-600">Resultados visibles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Garantía de satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">5 años</div>
              <div className="text-gray-600">Experiencia en La Molina</div>
            </div>
          </div>

          <button 
            onClick={handleWhatsAppClick}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Cotización Gratuita WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
export default Services;
