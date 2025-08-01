import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carmen Rodriguez",
      location: "Los Fresnos, La Molina",
      rating: 5,
      text: "JefraPools transformó completamente nuestra piscina. Ahora es el lugar favorito de toda la familia. El servicio es impecable y muy profesional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Mendoza",
      location: "Rinconada del Lago, La Molina",
      rating: 5,
      text: "Después de probar varios servicios, JefraPools es el único que mantiene mi piscina cristalina todo el año. Los recomiendo al 100%.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Patricia Vega",
      location: "Los Granados, La Molina", 
      rating: 5,
      text: "Mis hijos pueden nadar sin preocupaciones. El agua siempre está perfecta y sin químicos agresivos. Excelente servicio de JefraPools.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Diego Silva",
      location: "Club La Molina",
      rating: 5,
      text: "Como administrador del club, confío en JefraPools para mantener nuestras piscinas en perfecto estado. Nunca hemos tenido problemas.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const beforeAfterImages = [
    {
      before: "/pool-real.jpg",
      after: "/pool-real.jpg",
      location: "Residencia Los Fresnos, La Molina"
    },
    {
      before: "/pool-real.jpg", 
      after: "/pool-real.jpg",
      location: "Torres de La Molina"
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            NUESTROS <span className="text-gradient">CLIENTES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de <span className="font-bold text-primary-600">200 familias en La Molina</span> confían en 
            <span className="block mt-2">JefraPools para mantener sus piscinas perfectas</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white hover:scale-105 transform transition-all duration-300">
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-lg">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Transformaciones Reales
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {beforeAfterImages.map((project, index) => (
              <div key={index} className="card bg-white">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {project.location}
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div>
                    <div className="relative">
                      <img
                        src={project.before}
                        alt="Antes de la limpieza"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        ANTES
                      </div>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div>
                    <div className="relative">
                      <img
                        src={project.after}
                        alt="Después de la limpieza"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    ✨ Transformación en 2 horas
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-600 rounded-3xl p-8 md:p-12 text-white text-center mb-16 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Resultados que hablan por sí solos
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm md:text-base opacity-90">Piscinas limpiadas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base opacity-90">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2h</div>
              <div className="text-sm md:text-base opacity-90">Tiempo promedio</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">Soporte disponible</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            ¿Quieres ser el próximo en tener una piscina perfecta?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Únete a las más de 100 familias que ya disfrutan de piscinas cristalinas y seguras
          </p>

          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-cta text-lg"
          >
            🏊‍♀️ Obtener Mi Cotización Gratis
          </button>

          {/* Trust Badge */}
          <div className="inline-flex items-center mt-6 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full">
            <StarIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">4.9/5 estrellas promedio en Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
