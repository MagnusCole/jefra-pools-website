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
      {/* Background Image - Simplified */}
      <div className="absolute inset-0">
        <img
          src="/pool-real.jpg"
          alt="Piscina limpia y cristalina mantenida por JefraPools en La Molina"
          className="w-full h-full object-cover opacity-15"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="relative container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Simplified Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-accent-100 border border-accent-200 rounded-full text-sm font-semibold text-accent-700 mb-8">
            <span className="text-accent-600">🎯</span>
            <span className="ml-2">Especialistas en La Molina</span>
          </div>

          {/* Main Headline - Simplified */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary-800 mb-6 leading-tight">
            <span className="block">JEFRAPOOLS</span>
            <span className="block text-primary-600">Piscina Perfecta</span>
          </h1>

          {/* Subtitle - Direct and Clear */}
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Mantenimiento profesional de piscinas en La Molina
            <span className="block mt-2 text-primary-600 font-semibold">Más de 200 clientes satisfechos</span>
          </p>

          {/* Simple Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-secondary-200">
              <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-secondary-700">100% Seguro</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-secondary-200">
              <div className="w-3 h-3 bg-secondary-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-secondary-700">5+ Años Experiencia</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-secondary-200">
              <div className="w-3 h-3 bg-accent-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-secondary-700">Garantía Total</span>
            </div>
          </div>

          {/* Single Strong CTA */}
          <div className="mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-cta text-xl px-12 py-6 shadow-xl"
            >
              📞 Cotización Gratuita WhatsApp
            </button>
            <p className="text-sm text-secondary-500 mt-4">
              ✅ Sin compromiso • Respuesta inmediata • La Molina y alrededores
            </p>
          </div>

          {/* Social Proof - Simple */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-secondary-600">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</span>
              <span className="font-medium">200+ Clientes</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-primary-500 mr-2">📍</span>
              <span className="font-medium">La Molina</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-accent-500 mr-2">⚡</span>
              <span className="font-medium">Servicio Rápido</span>
            </div>
          </div>
        </div>

        {/* Simplified Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('gallery')}
            className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200"
          >
            <ChevronDownIcon className="h-6 w-6 text-secondary-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
