import { useState } from 'react';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">JefraPools</span>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <PhoneIcon className="h-5 w-5 text-primary-600" />
              <span className="font-medium">+51 999 888 777</span>
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-medium">7 días • 8AM-6PM</span>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Cotización Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2 px-3 py-2 text-gray-600">
                <PhoneIcon className="h-5 w-5 text-primary-600" />
                <span className="font-medium">+51 999 888 777</span>
              </div>
              <div className="px-3 py-2 text-sm text-gray-500">
                <span className="font-medium">7 días • 8AM-6PM</span>
              </div>
              <div className="px-3 py-3">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-primary"
                >
                  Cotización Gratis
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
