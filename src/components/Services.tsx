import { 
  SparklesIcon, 
  WrenchScrewdriverIcon, 
  BeakerIcon,
  CheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: SparklesIcon,
      title: "Limpieza semanal o quincenal",
      price: "Desde $700 pesos",
      description: "Eliminamos algas y mosquitos",
      features: [
        "Aspirado completo del fondo",
        "Limpieza de paredes y escalones",
        "Vaciado de canastas skimmers",
        "Limpieza de línea de flotación",
        "Revisión de sistema de filtración"
      ],
      bgGradient: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Equipo profesional",
      price: "Instalación incluida",
      description: "Filtros, bombas y equipos nuevos, instalación en energía",
      features: [
        "Bombas de alta eficiencia",
        "Sistemas de filtración modernos",
        "Instalación profesional certificada",
        "Garantía de 2 años en equipos",
        "Mantenimiento preventivo incluido"
      ],
      bgGradient: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      icon: BeakerIcon,
      title: "Químicos inofensivos",
      price: "Mejor calidad",
      description: "De la mejor calidad para proteger la salud",
      features: [
        "Productos biodegradables",
        "Sin químicos agresivos",
        "Balanceado perfecto del pH",
        "Desinfección total garantizada",
        "Seguro para niños y mascotas"
      ],
      bgGradient: "from-purple-500 to-violet-500",
      popular: false
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            OFRECEMOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios completos de limpieza y mantenimiento para que tu piscina 
            esté siempre perfecta y lista para disfrutar
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative card hover:scale-105 transform transition-all duration-300 ${service.popular ? 'ring-4 ring-accent-400 ring-opacity-50' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MÁS POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.bgGradient} rounded-2xl mb-6 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-center mb-4">
                    <CurrencyDollarIcon className="h-5 w-5 text-green-600 mr-1" />
                    <span className="text-xl font-bold text-green-600">
                      {service.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="text-left space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white text-center mb-16 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Por qué elegir nuestros servicios?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Resultados Garantizados</h4>
              <p className="opacity-90">Si no quedas satisfecho, regresamos sin costo adicional</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h4 className="text-xl font-bold mb-2">Servicio Puntual</h4>
              <p className="opacity-90">Llegamos siempre a tiempo, respetamos tu horario</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-2">Precio Justo</h4>
              <p className="opacity-90">Sin sorpresas, precios transparentes y competitivos</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para tener la piscina de tus sueños?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Obtén una cotización personalizada completamente gratis. 
            Sin compromisos, sin letra pequeña.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-cta text-lg"
            >
              🏊‍♀️ Cotización Gratis
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="btn-secondary text-lg"
            >
              Ver Testimonios
            </button>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center mt-8 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <CheckIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">Respuesta garantizada en menos de 2 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
