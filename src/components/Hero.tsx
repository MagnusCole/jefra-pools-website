import React, { useCallback, useState } from 'react';

/**
 * Hero Component - HARMONIOUS SIMPLIFIED VERSION
 * Design Principles: Color harmony, proportion harmony, content harmony
 * Evidence-Based: Maximum conversion through elegant simplicity
 * Mobile-first: 70% traffic LATAM
 */
const Hero: React.FC = React.memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp conversion optimization
  const handleWhatsAppClick = useCallback(() => {
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Quiero una cotización gratuita para mi piscina en La Molina.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="JefraPools - Limpieza profesional de piscinas"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pool-real.jpg"
          alt="Piscina cristalina después del servicio profesional JefraPools"
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          loading="eager"
          fetchPriority="high"
        />
        
        {/* Elegant Water Ripple Animation - Single centered ripple */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute w-96 h-96 border border-blue-400/30 rounded-full animate-ping"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full animate-pulse"></div>
        </div>
        
        {/* Clean overlay - Single gradient */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Perfectly centered and proportioned */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-12">
          
          {/* Main Headline - Golden ratio proportions */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block">Tu Piscina</span>
              <span className="block text-blue-400">Cristalina</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              en 24 horas
            </p>
          </div>

          {/* Single Trust Signal */}
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
            <span className="text-blue-400 text-xl">★</span>
            <span className="text-white text-lg font-medium">200+ clientes satisfechos en La Molina</span>
          </div>

          {/* Single Primary CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            aria-label="Contactar por WhatsApp para cotización gratuita"
          >
            <span className="mr-4 text-2xl">📞</span>
            Cotización Gratuita
          </button>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
