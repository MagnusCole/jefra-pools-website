import { 
  SparklesIcon, 
  WrenchScrewdriverIcon, 
  BeakerIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: SparklesIcon,
      title: "Limpieza semanal",
      price: "Desde S/200",
      description: "Mantenimiento regular para tu piscina familiar",
      features: [
        "Aspirado de fondo y paredes",
        "Limpieza de línea de flotación", 
        "Balanceado químico",
        "Revisión de equipos"
      ]
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Reparaciones",
      price: "Según necesidad",
      description: "Arreglos y mejoras cuando las necesites",
      features: [
        "Bombas y filtros",
        "Reparaciones eléctricas",
        "Automatización básica",
        "Garantía incluida"
      ]
    },
    {
      icon: BeakerIcon,
      title: "Químicos seguros",
      price: "Incluido",
      description: "Productos de calidad para toda la familia",
      features: [
        "Certificados y seguros",
        "Balanceado perfecto del pH",
        "Seguros para niños",
        "Asesoría incluida"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary-800 mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Servicios simples y confiables para el cuidado de tu piscina
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-secondary-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="text-center mb-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 text-primary-600 mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-secondary-800 mb-2">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <p className="text-lg font-medium text-accent-600 mb-2">
                    {service.price}
                  </p>

                  {/* Description */}
                  <p className="text-secondary-600 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm">
                      <CheckIcon className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Promise */}
        <div className="bg-primary-50 rounded-lg p-8 text-center mb-12">
          <h3 className="text-xl font-medium text-secondary-800 mb-4">
            Nuestro compromiso
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-secondary-700">Trabajo bien hecho</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <p className="text-secondary-700">Puntualidad</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💰</div>
              <p className="text-secondary-700">Precio justo</p>
            </div>
          </div>
        </div>

        {/* Gentle CTA */}
        <div className="text-center">
          <p className="text-secondary-600 mb-6">
            ¿Quieres conocer más detalles?
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Hagamos una cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
