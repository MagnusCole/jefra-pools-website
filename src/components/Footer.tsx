import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const phone = "5491234567890";
    const message = "Hola! Me interesa obtener información sobre sus servicios de limpieza de piscina.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">P</span>
              </div>
              <span className="text-2xl font-bold">PoolClean</span>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Especialistas en limpieza y mantenimiento de piscinas. 
              Más de 100 familias confían en nosotros para mantener 
              sus piscinas cristalinas y seguras.
            </p>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center bg-yellow-500/20 px-4 py-2 rounded-full">
                <span className="text-yellow-400 mr-2">⭐⭐⭐⭐⭐</span>
                <span className="text-sm font-medium">4.9/5 en Google</span>
              </div>
              <div className="flex items-center bg-green-500/20 px-4 py-2 rounded-full">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-sm font-medium">100+ clientes</span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <a 
                href="tel:+911234567890"
                className="flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span className="font-medium">+91 (123) 456-7890</span>
              </a>
              <a 
                href="mailto:hello@reallygreat.com"
                className="flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <span className="font-medium">hello@reallygreat.com</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <div className="font-medium">+91 (123) 456-7890</div>
                  <div className="text-sm text-gray-400">Línea directa</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <div className="font-medium">hello@reallygreat.com</div>
                  <div className="text-sm text-gray-400">Email general</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <div className="font-medium">Ciudad y alrededores</div>
                  <div className="text-sm text-gray-400">Área de servicio</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <ClockIcon className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <div className="font-medium">7 días a la semana</div>
                  <div className="text-sm text-gray-400">8:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Limpieza semanal
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Limpieza quincenal
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Equipo profesional
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Químicos inofensivos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Mantenimiento preventivo
                </a>
              </li>
              <li>
                <a href="#contact" className="text-accent-400 hover:text-accent-300 transition-colors duration-200 font-medium">
                  Cotización gratuita
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp & Quick Actions Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">¿Necesitas ayuda inmediata?</span>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center"
              >
                <span className="mr-2">💬</span>
                WhatsApp
              </button>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+911234567890"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center"
              >
                <PhoneIcon className="h-4 w-4 mr-2" />
                Llamar Ahora
              </a>
              
              <button
                onClick={scrollToTop}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-all duration-200"
              >
                ↑ Inicio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} PoolClean. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#contact" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                Contacto
              </a>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Servicio profesional de limpieza y mantenimiento de piscinas | 
              Especialistas en químicos seguros y equipos de última generación | 
              Garantía de satisfacción 100%
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
