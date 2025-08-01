import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image - Subtle */}
      <div className="absolute inset-0">
        <img
          src="/pool-real.jpg"
          alt="Piscina limpia y cristalina mantenida por JefraPools en La Molina"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Simple Location Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-sm text-primary-700 mb-8">
            <span className="text-primary-500">📍</span>
            <span className="ml-2">La Molina, Lima</span>
          </div>

          {/* Natural Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-800 mb-6 leading-tight">
            <span className="block text-secondary-700">JefraPools</span>
            <span className="block text-primary-600 font-light">Cuidamos tu piscina</span>
          </h1>

          {/* Honest, Simple Subtitle */}
          <p className="text-lg md:text-xl text-secondary-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mantenimiento sencillo y confiable para tu piscina en La Molina.
            <span className="block mt-2 text-secondary-500">Más de 5 años cuidando piscinas familiares.</span>
          </p>

          {/* Single, Natural CTA */}
          <div className="mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-lg text-lg font-medium transition-colors duration-200 shadow-sm"
            >
              Conversar por WhatsApp
            </button>
            <p className="text-sm text-secondary-500 mt-4">
              Sin compromiso • Respuesta rápida
            </p>
          </div>

          {/* Simple Trust Elements */}
          <div className="flex justify-center items-center gap-8 text-sm text-secondary-600">
            <div className="flex items-center">
              <span className="text-primary-500 mr-2">⭐</span>
              <span>200+ familias</span>
            </div>
            <div className="flex items-center">
              <span className="text-accent-500 mr-2">⏰</span>
              <span>5+ años</span>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('gallery')}
            className="p-2 rounded-full bg-white/70 hover:bg-white/90 transition-colors duration-200"
          >
            <ChevronDownIcon className="h-5 w-5 text-secondary-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
