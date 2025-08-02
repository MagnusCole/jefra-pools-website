import React, { useCallback } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
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
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Vi las recomendaciones y me interesa una cotización para mi piscina.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Simplified testimonials
  const testimonials: Testimonial[] = [
    {
      name: "Carmen Rodriguez",
      location: "Los Fresnos, La Molina",
      rating: 5,
      text: "Mi piscina estaba verde y mis hijos no podían usarla. En solo 2 horas la dejó cristalina. Ahora viene cada semana y nunca más tuvimos problemas.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Roberto Mendoza", 
      location: "Rinconada del Lago, La Molina",
      rating: 5,
      text: "Probé 3 servicios diferentes antes de encontrar JefraPools. Es el único que realmente mantiene el agua cristalina todo el año.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Patricia Vega",
      location: "Los Granados, La Molina", 
      rating: 5,
      text: "Como mamá, lo que más me importa es la seguridad. Usa químicos balanceados, mis gemelos de 4 años nadan tranquilos y sin irritaciones.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=80&h=80&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de <span className="font-bold text-primary-600">200 familias satisfechas</span> en La Molina confían en JefraPools
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              {/* Stars */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5.0</div>
              <div className="text-sm text-gray-600">Calificación promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Años experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Garantía satisfacción</div>
            </div>
          </div>
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
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Obtener Mi Cotización Gratis
          </button>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;
