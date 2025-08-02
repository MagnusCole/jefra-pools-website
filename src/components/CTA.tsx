import React, { useCallback } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

/**
 * CTA Component - SIMPLIFIED VERSION
 * Evidence-Based: Clear contact options + risk reversal
 * Mobile-first: 70% traffic LATAM
 * Minimal design: Focus on conversion without distractions
 */
const CTA: React.FC = React.memo(() => {
  // WhatsApp integration (primary contact method LATAM)
  const handleWhatsAppClick = useCallback(() => {
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Me interesa una cotización gratuita para mi piscina en La Molina.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Phone call
  const handlePhoneClick = useCallback(() => {
    window.location.href = 'tel:+51999888777';
  }, []);

  // Email
  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:contacto@jefrapools.com?subject=Cotización%20Piscina%20La%20Molina';
  }, []);

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-28 bg-primary-600"
      role="region"
      aria-labelledby="cta-title"
    >
      <div className="container-custom">
        <div className="text-center text-white mb-16">
          <h2 
            id="cta-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
          >
            ¿Listo para tener la{' '}
            <span className="text-accent-400">piscina perfecta?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Únete a las 200+ familias en La Molina que ya disfrutan agua cristalina y tiempo libre
          </p>
          
          {/* Guarantee */}
          <div className="inline-flex items-center bg-white/10 px-6 py-3 rounded-lg mb-12">
            <span className="text-lg font-bold">
              Garantía 100% o devolvemos tu dinero
            </span>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp - Primary */}
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <PhoneIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              WhatsApp (Recomendado)
            </h3>
            <p className="text-gray-600 mb-6">
              Respuesta inmediata<br />
              Fotos y presupuesto al instante
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Chatear Ahora
            </button>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <PhoneIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Llamar Directo
            </h3>
            <p className="text-gray-600 mb-6">
              Lun - Dom: 7:00 AM - 7:00 PM<br />
              Atención personalizada
            </p>
            <button 
              onClick={handlePhoneClick}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              (01) 999-888-777
            </button>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <EnvelopeIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Email
            </h3>
            <p className="text-gray-600 mb-6">
              Respuesta en 24 horas<br />
              Cotización detallada
            </p>
            <button 
              onClick={handleEmailClick}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Enviar Email
            </button>
          </div>
        </div>

        {/* Service Area */}
        <div className="bg-white/10 rounded-lg p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <MapPinIcon className="h-6 w-6 mr-2" />
            <h3 className="text-xl font-bold">
              Área de Servicio
            </h3>
          </div>
          <p className="text-lg opacity-90 mb-6">
            Atendemos toda La Molina y distritos aledaños
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded">Los Fresnos</div>
            <div className="bg-white/10 px-4 py-2 rounded">Rinconada del Lago</div>
            <div className="bg-white/10 px-4 py-2 rounded">Los Granados</div>
            <div className="bg-white/10 px-4 py-2 rounded">La Planicie</div>
          </div>
        </div>

        {/* Final Trust Signals */}
        <div className="text-center text-white mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <ClockIcon className="h-6 w-6 mr-2" />
              <span>Respuesta en minutos</span>
            </div>
            <div className="flex items-center justify-center">
              <PhoneIcon className="h-6 w-6 mr-2" />
              <span>5+ años en La Molina</span>
            </div>
            <div className="flex items-center justify-center">
              <EnvelopeIcon className="h-6 w-6 mr-2" />
              <span>200+ clientes satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CTA.displayName = 'CTA';
export default CTA;
