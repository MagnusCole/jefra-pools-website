import React, { useCallback } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

/**
 * Footer Component - SIMPLIFIED VERSION
 * Evidence-Based: Essential contact info + trust signals
 * Mobile-first: 70% traffic LATAM
 * Minimal design: Clean, professional, focused
 */
const Footer: React.FC = React.memo(() => {
  const currentYear = new Date().getFullYear();

  // WhatsApp contact
  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent(
      "¡Hola! Visité su página web y me interesa información sobre servicios de limpieza de piscina en La Molina."
    );
    window.open(`https://wa.me/51999888777?text=${message}`, '_blank');
  }, []);

  // Phone call
  const handleCallClick = useCallback(() => {
    window.location.href = 'tel:+51999888777';
  }, []);

  // Email
  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:contacto@jefrapools.com?subject=Consulta%20desde%20página%20web';
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-6">
              JefraPools
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas en mantenimiento y limpieza de piscinas en La Molina. 
              Más de 5 años convirtiendo piscinas en espacios perfectos para tu familia.
            </p>
            <div className="flex items-center text-gray-300">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>La Molina, Lima - Perú</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span>WhatsApp: (01) 999-888-777</span>
              </button>
              
              <button 
                onClick={handleCallClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span>Llamada: (01) 999-888-777</span>
              </button>
              
              <button 
                onClick={handleEmailClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <span>contacto@jefrapools.com</span>
              </button>
              
              <div className="flex items-center text-gray-300">
                <ClockIcon className="h-5 w-5 mr-3" />
                <span>Lun - Dom: 7:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Limpieza Express (S/ 180)</li>
              <li>Mantenimiento Semanal (S/ 220)</li>
              <li>Recuperación Total (S/ 350)</li>
              <li>Balanceado Químico</li>
              <li>Mantenimiento de Equipos</li>
              <li>Emergencias 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} JefraPools. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <span>200+ Clientes Satisfechos</span>
              <span>•</span>
              <span>5+ Años Experiencia</span>
              <span>•</span>
              <span>Garantía 100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Bar */}
      <div className="bg-primary-600 py-4">
        <div className="container-custom text-center">
          <button 
            onClick={handleWhatsAppClick}
            className="text-white font-bold hover:text-primary-200 transition-colors"
          >
            ¿Listo para una piscina perfecta? ¡Hablemos por WhatsApp!
          </button>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
