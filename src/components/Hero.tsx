import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80&fm=webp"
          alt="Piscina limpia y cristalina con agua transparente y azul, perfectamente mantenida por servicios profesionales de limpieza"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-accent-600/30"></div>
      </div>

      <div className="relative container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-700 mb-8 shadow-lg animate-fade-in">
            <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-semibold mr-2">
              OFERTA LIMITADA
            </span>
            Para nuevos clientes • 7D 8H-6M
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight animate-slide-up">
            <span className="block">LIMPIAMOS TU</span>
            <span className="block text-gradient">PISCINA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium leading-relaxed animate-slide-up">
            Piscina libre de algas y bacterias, 
            <span className="text-primary-600 font-semibold"> lista para las visitas</span>
          </p>

          {/* Value Propositions */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-fade-in">
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">100% Seguro</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Equipo Profesional</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Garantía Total</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-cta text-lg px-10 py-5 shadow-2xl"
            >
              🏊‍♀️ Cotización Gratis
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Ver Servicios
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 animate-fade-in">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">⭐⭐⭐⭐⭐</span>
              <span>+100 clientes satisfechos</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-1">✓</span>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-1">📞</span>
              <span>Respuesta en 2 horas</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('problems')}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
          >
            <ChevronDownIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
