import React, { useState, useCallback, useEffect } from 'react';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * Header Component - OPTIMIZED VERSION
 * Evidence-Based: Clean navigation + prominent CTA
 * Mobile-first: 70% traffic LATAM
 * Minimal design: Focus on conversion
 */
const Header: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar transparencia
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Cambia después de 50px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp integration
  const handleWhatsAppClick = useCallback(() => {
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Me interesa una cotización gratuita para limpieza de piscina.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'gallery', label: 'Trabajos' },
    { id: 'services', label: 'Servicios' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
        : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="JefraPools - Servicios profesionales de limpieza de piscinas"
              className="w-10 h-10 md:w-12 md:h-12"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-black transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>
                JefraPools
              </span>
              <span className={`text-xs md:text-sm font-medium -mt-1 transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-primary-700'
              }`}>
                Especialistas La Molina
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center space-x-2 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-800'
            }`}>
              <PhoneIcon className={`h-5 w-5 transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-primary-700'
              }`} />
              <span className="font-bold">+51 999 888 777</span>
            </div>
            <div className={`text-sm transition-colors ${
              isScrolled ? 'text-gray-500' : 'text-gray-600'
            }`}>
              <span>Disponible hoy</span>
            </div>
          </div>

          {/* Primary CTA (Desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              aria-label="Solicitar cotización gratuita por WhatsApp"
            >
              Cotización Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'hover:bg-gray-100 text-gray-700' 
                : 'hover:bg-white/20 text-gray-800'
            }`}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Navigation */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-700 mb-3">
                  <PhoneIcon className="h-5 w-5 text-primary-600" />
                  <span className="font-bold">+51 999 888 777</span>
                </div>
                
                {/* Mobile CTA */}
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Cotización Gratis WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
