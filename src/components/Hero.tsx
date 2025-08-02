import React, { useCallback, useMemo } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// TypeScript interface for component props (Evidence-based architecture)
interface HeroProps {
  className?: string;
  onWhatsAppClick?: () => void;
}

// React.memo for performance optimization (LATAM mobile networks)
const Hero: React.FC<HeroProps> = React.memo(({ 
  className = "",
  onWhatsAppClick 
}) => {
  // Performance-optimized event handlers with useCallback
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // WhatsApp integration optimized for Hispanic market preference
  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent(
      "Hola! Solicito cotización gratuita para limpieza de piscina en La Molina. Gracias!"
    );
    const whatsappUrl = `https://wa.me/51999888777?text=${message}`;
    
    // Analytics tracking for conversion optimization
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'hero_cta',
        value: 1
      });
    }
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onWhatsAppClick?.();
  }, [onWhatsAppClick]);

  // Memoized trust indicators for performance
  const trustIndicators = useMemo(() => [
    { icon: "🎯", text: "100% Seguro", color: "bg-primary-500" },
    { icon: "⭐", text: "5+ Años Experiencia", color: "bg-secondary-500" },
    { icon: "✅", text: "Garantía Total", color: "bg-accent-500" }
  ], []);

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-white ${className}`}
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Image - Performance optimized */}
      <div className="absolute inset-0">
        <img
          src="/pool-real.jpg"
          alt="Piscina limpia y cristalina mantenida por JefraPools en La Molina"
          className="w-full h-full object-cover opacity-15"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="relative container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Evidence-based Local Badge - Trust Signal */}
          <div className="inline-flex items-center px-6 py-3 bg-accent-100 border border-accent-200 rounded-full text-sm font-semibold text-accent-700 mb-8">
            <span className="text-accent-600" role="img" aria-label="Especialista">🎯</span>
            <span className="ml-2">Especialistas en La Molina</span>
          </div>

          {/* Main Headline - Evidence-based hierarchy */}
          <h1 
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary-800 mb-6 leading-tight"
          >
            <span className="block">JEFRAPOOLS</span>
            <span className="block text-primary-600">Piscina Perfecta</span>
          </h1>

          {/* Subtitle - Direct conversion messaging */}
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Mantenimiento profesional de piscinas en La Molina
            <span className="block mt-2 text-primary-600 font-semibold">Más de 200 clientes satisfechos</span>
          </p>

          {/* Trust Indicators - Evidence-based social proof */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm border border-secondary-200 min-h-[48px]"
                role="button"
                tabIndex={0}
              >
                <div className={`w-3 h-3 ${indicator.color} rounded-full mr-3`} aria-hidden="true"></div>
                <span className="text-sm font-medium text-secondary-700">{indicator.text}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA - Evidence-based conversion optimization */}
          <div className="mb-12">
            <button 
              onClick={handleWhatsAppClick}
              className="btn-cta text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 shadow-xl min-h-[48px] min-w-[48px]"
              aria-label="Solicitar cotización gratuita por WhatsApp"
              type="button"
            >
              <span role="img" aria-label="Teléfono">📞</span>
              <span className="ml-2">Cotización Gratuita WhatsApp</span>
            </button>
            <p className="text-xs sm:text-sm text-secondary-500 mt-4 max-w-md mx-auto">
              <span role="img" aria-label="Verificado">✅</span> Sin compromiso • Respuesta inmediata • La Molina y alrededores
            </p>
          </div>

          {/* Social Proof - LATAM market optimized */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-secondary-600">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm min-h-[44px]">
              <span className="text-yellow-500 mr-2" role="img" aria-label="5 estrellas">⭐⭐⭐⭐⭐</span>
              <span className="font-medium">200+ Clientes</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm min-h-[44px]">
              <span className="text-primary-500 mr-2" role="img" aria-label="Ubicación">📍</span>
              <span className="font-medium">La Molina</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm min-h-[44px]">
              <span className="text-accent-500 mr-2" role="img" aria-label="Velocidad">⚡</span>
              <span className="font-medium">Servicio Rápido</span>
            </div>
          </div>
        </div>

        {/* Accessibility-enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('gallery')}
            className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 min-h-[48px] min-w-[48px]"
            aria-label="Ver galería de trabajos realizados"
            type="button"
          >
            <ChevronDownIcon className="h-6 w-6 text-secondary-600" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
});

// Required for React.memo debugging and development
Hero.displayName = 'Hero';

export default Hero;
