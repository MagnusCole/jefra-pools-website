import React, { useCallback, useState } from 'react';

/**
 * Hero Component - MINIMAL HARMONY VERSION
 * Evidence-Based: Clean design principles + subtle water animation
 * Harmony: Colors, proportions, minimal elements
 * Mobile-first: 70% traffic LATAM
 */
const Hero: React.FC = React.memo(() => {
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pool-real.jpg"
          alt="Piscina cristalina JefraPools"
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          loading="eager"
        />
        
        {/* Subtle Water Ripple */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-32 h-32 border border-blue-300/30 rounded-full animate-ping"></div>
            <div className="absolute w-64 h-64 border border-blue-400/20 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
          </div>
        </div>
        
        {/* Clean overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Minimal and Balanced */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          
          {/* Main Headline - Clean Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Tu Piscina</span>
            <span className="block text-blue-400">Cristalina</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-200">
              en 24 Horas
            </span>
          </h1>
          
          {/* Simple Description */}
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Servicio profesional en La Molina
            <br />
            <span className="text-blue-300">200+ clientes satisfechos</span>
          </p>

          {/* Single CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span className="mr-3">📞</span>
            Cotización WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
