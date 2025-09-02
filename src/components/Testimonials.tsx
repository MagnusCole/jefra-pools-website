import { ShieldCheckIcon, TrophyIcon, UsersIcon, StarIcon } from '@heroicons/react/24/solid';
import React, { useCallback } from 'react';
import { WHATSAPP_PHONE } from '../config/contact';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}

/**
 * Testimonials Component - SIMPLIFIED VERSION
 * Evidence-Based: Local testimonials + star ratings
 * Mobile-first: 70% traffic LATAM
 * Minimal design: Clean social proof without distractions
 */
const Testimonials: React.FC = React.memo(() => {
  // WhatsApp integration
  const handleWhatsAppClick = useCallback(() => {
    const phone = WHATSAPP_PHONE;
    const message = "¡Hola Jefra Pools! Quiero agendar mi visita técnica GRATIS + 1 limpieza extra para mantenimiento.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Simplified testimonials
  const testimonials: Testimonial[] = [
    {
      name: "Zoila",
      location: "La Molina",
  text: "Recomendé a Jefra Pools para que arreglen una bomba de agua; entonces los llamaron y solucionaron el problema <strong>¡Son unos Expertos!</strong>",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=160&h=160&fit=crop&crop=face",
      rating: 4.5
    },
    {
      name: "Roberto Torres", 
      location: "Chorrillos",
  text: "Vinieron muchos técnicos para que arreglen mi piscina y ninguno pudo; después vino Jefra Pools y en <strong>15 minutos</strong> solucionó el problema.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=160&h=160&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Patricia Vega",
      location: "Los Granados, La Molina", 
  text: "Como mamá, lo que más me importa es la <strong>seguridad</strong>. Mis gemelos de 4 años nadan tranquilos y <strong>sin irritaciones</strong>. Atención <strong>rapidísima</strong>.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=160&h=160&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-28 bg-white"
      role="region"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
  {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="testimonials-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
          >
            Lo que dicen{' '}
            <span className="text-primary-600">nuestros clientes</span>
          </h2>
          {/* Authority line removed per request */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-gray-900">

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: `"${testimonial.text}"` }} />

              {/* Author with stars */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <div className="relative">
                      <StarIcon className="w-4 h-4 text-gray-300" />
                      <StarIcon 
                        className="w-4 h-4 text-yellow-400 fill-current absolute top-0 left-0" 
                        style={{clipPath: 'inset(0 50% 0 0)'}} 
                      />
                    </div>
                  )}
                  {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
                    <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats with icons and 30+ years */}
  <div className="bg-white rounded-lg p-8 md:p-12 text-center mb-16 text-gray-900">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <UsersIcon className="w-7 h-7 text-primary-600 mb-2" />
              <div className="text-3xl font-bold text-primary-600 mb-1">200+</div>
              <div className="text-sm text-gray-600">Familias al año</div>
            </div>
            <div className="flex flex-col items-center">
              <TrophyIcon className="w-7 h-7 text-primary-600 mb-2" />
              <div className="text-3xl font-bold text-primary-600 mb-1">30+</div>
              <div className="text-sm text-gray-600">Años de experiencia</div>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheckIcon className="w-7 h-7 text-primary-600 mb-2" />
              <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Garantía satisfacción</div>
            </div>
            <div className="flex flex-col items-center">
              <UsersIcon className="w-7 h-7 text-primary-600 mb-2" />
              <div className="text-3xl font-bold text-primary-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Calificación promedio</div>
            </div>
          </div>
          <p className="text-gray-700 text-lg">Recupera tu tiempo y disfruta tu piscina sin preocupaciones.</p>
        </div>

        {/* CTA Section */}
  <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            ¿Quieres ser el próximo testimonio?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Únete a las familias que ya disfrutan de piscinas cristalinas y seguras
          </p>

          <button 
            onClick={handleWhatsAppClick}
            className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            ¡Quiero ser el próximo!
          </button>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;
