import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { ChevronDownIcon, CheckCircleIcon, StarIcon, PlayIcon } from '@heroicons/react/24/solid';

/**
 * Hero Component - OPTIMIZED VERSION
 * Evidence-Based: Left content + right before/after slider
 * Mobile-first: 70% traffic LATAM
 * Psychology: Automatic before/after demonstration
 */
const Hero: React.FC = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // WhatsApp integration
  const handleWhatsAppClick = useCallback(() => {
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Me interesa una cotización gratuita para limpieza de piscina en La Molina.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Trust signals - simplified
  const trustSignals = useMemo(() => [
    { icon: CheckCircleIcon, text: '200+ piscinas transformadas' },
    { icon: StarIcon, text: '5+ años en La Molina' },
    { icon: CheckCircleIcon, text: 'Garantía de resultado' }
  ], []);

  // Before/After slides with clear messaging
  const slides = useMemo(() => [
    {
      id: 1,
      image: "/pool.png",
      type: "before",
      title: "ANTES: Agua turbia y algas",
      description: "Piscina descuidada, familia sin poder disfrutar"
    },
    {
      id: 2, 
      image: "/pool-real.jpg",
      type: "after",
      title: "DESPUÉS: Agua cristalina perfecta",
      description: "Transformación en 24 horas, familia feliz"
    }
  ], []);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length, isAutoPlaying]);

  const handleSlideClick = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-32 lg:pt-20 pb-20 lg:py-0 bg-white"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Disponible hoy en La Molina</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
              >
                Piscina{' '}
                <span className="text-primary-600">
                  Perfecta
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700">
                  en 24 Horas
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                De agua turbia y algas a{' '}
                <span className="font-bold text-primary-600">cristal perfecto</span>.
                <br className="hidden md:block" />
                Garantía 100% o devolvemos tu dinero.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-gray-200"
                >
                  <signal.icon className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{signal.text}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full lg:w-auto bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors min-h-[56px] flex items-center justify-center space-x-3"
                aria-label="Solicitar cotización gratuita por WhatsApp"
              >
                <span>Cotización Gratuita WhatsApp</span>
              </button>
              
              <p className="text-sm text-gray-500">
                Respuesta en menos de 5 minutos
              </p>
            </div>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollToSection('gallery')}
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <span>Ver trabajos realizados</span>
              <ChevronDownIcon className="h-5 w-5" />
            </button>
          </div>

          {/* RIGHT IMAGE AREA - Before/After Slider */}
          <div className="relative order-first lg:order-last">
            <div 
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl cursor-pointer group"
              onClick={handleSlideClick}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${currentSlideData.type === 'before' ? 'resultado después' : 'estado antes'}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSlideClick();
                }
              }}
            >
              {/* Current Image */}
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-full object-cover transition-all duration-500"
                loading="eager"
                style={currentSlideData.type === 'before' ? { 
                  filter: 'sepia(0.3) saturate(1.2) hue-rotate(60deg) brightness(0.8)' 
                } : {}}
              />

              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                    currentSlideData.type === 'before' 
                      ? 'bg-red-500' 
                      : 'bg-green-500'
                  }`}>
                    {currentSlideData.type === 'before' ? 'ANTES' : 'DESPUÉS'}
                  </div>
                  <h3 className="text-lg font-bold mb-1">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {currentSlideData.description}
                  </p>
                </div>
              </div>

              {/* Play indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                  <PlayIcon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Progress dots */}
              <div className="absolute top-4 right-4 flex space-x-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Click instruction */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500 font-medium">
                {isAutoPlaying ? 'Cambio automático cada 3 segundos' : 'Haz clic para ver la transformación'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
