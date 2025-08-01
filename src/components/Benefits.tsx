import { 
  HeartIcon, 
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Benefits = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: "Agua saludable",
      description: "Para que tu familia disfrute sin preocupaciones",
      color: "text-primary-600"
    },
    {
      icon: UserGroupIcon,
      title: "Siempre lista",
      description: "Para cuando lleguen las visitas inesperadas",
      color: "text-accent-600"
    },
    {
      icon: ClockIcon,
      title: "Tiempo para ti",
      description: "Nosotros nos ocupamos del mantenimiento",
      color: "text-secondary-600"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary-800 mb-4">
            ¿Por qué nosotros?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Cuidamos tu piscina para que puedas disfrutar de lo importante
          </p>
        </div>

        {/* Simple Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              {/* Simple Icon */}
              <div className="flex justify-center mb-4">
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-secondary-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gentle CTA */}
        <div className="text-center">
          <p className="text-secondary-600 mb-6">
            ¿Te gustaría saber más?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Conversemos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
