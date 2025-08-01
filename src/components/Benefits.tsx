import { 
  SparklesIcon, 
  HeartIcon, 
  StarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Benefits = () => {
  const benefits = [
    {
      icon: SparklesIcon,
      title: "Piscina Siempre Lista",
      description: "Tu piscina perfecta para cuando lleguen las visitas. Sin preocupaciones, sin estrés.",
      color: "bg-primary-500"
    },
    {
      icon: HeartIcon,
      title: "Salud de tu Familia",
      description: "Agua cristalina y libre de bacterias. Tus hijos pueden nadar con total seguridad.",
      color: "bg-secondary-500"
    },
    {
      icon: UserGroupIcon,
      title: "Disfruta con Amigos",
      description: "Reuniones perfectas alrededor de una piscina impecable. Sé el anfitrión ideal.",
      color: "bg-accent-500"
    },
    {
      icon: ClockIcon,
      title: "Tiempo para Ti",
      description: "Olvídate del mantenimiento. Dedica tu tiempo libre a lo que realmente importa.",
      color: "bg-primary-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Inversión Protegida",
      description: "Mantén el valor de tu propiedad con un mantenimiento profesional constante.",
      color: "bg-secondary-600"
    },
    {
      icon: StarIcon,
      title: "Orgullo de Casa",
      description: "La piscina que siempre quisiste tener. Perfecta, limpia y lista para disfrutar.",
      color: "bg-accent-600"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            LO QUE <span className="text-gradient">OBTIENES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con <span className="font-bold text-primary-600">JefraPools</span>, no solo limpias tu piscina, 
            <span className="block mt-2 font-semibold">transformas tu estilo de vida</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${benefit.color} mb-6`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            🏊‍♀️ <span className="text-primary-600">¡Empieza a disfrutar hoy!</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Más de <span className="font-bold">200 familias en La Molina</span> ya disfrutan de estos beneficios.
            <span className="block mt-2">¡Tu piscina puede ser la siguiente!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cta text-lg px-10 py-5"
            >
              Quiero mi Cotización Gratuita
            </button>
            <div className="flex items-center text-sm text-gray-500">
              <span className="text-green-500 mr-1">✓</span>
              <span>Sin compromiso • Respuesta en 2 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
