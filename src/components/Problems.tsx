import { XMarkIcon, ExclamationTriangleIcon, FaceFrownIcon } from '@heroicons/react/24/outline';

const Problems = () => {
  const problems = [
    {
      icon: XMarkIcon,
      title: "Fines de semana arruinados",
      description: "Tu piscina sucia arruina los planes familiares y las reuniones con amigos",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      borderColor: "border-red-200"
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Bacterias que amenazan la salud de tu familia",
      description: "El agua contaminada puede causar infecciones, alergias y problemas de salud",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200"
    },
    {
      icon: FaceFrownIcon,
      title: "Mala impresión de la gente",
      description: "Una piscina descuidada da una imagen negativa de tu hogar o negocio",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="problems" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Una piscina sucia puede ocasionar:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No permitas que estos problemas arruinen tu tranquilidad y la de tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className={`card ${problem.bgColor} ${problem.borderColor} border-2 hover:scale-105 transform transition-all duration-300`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${problem.bgColor} rounded-full mb-6 shadow-lg`}>
                    <IconComponent className={`h-8 w-8 ${problem.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional Impact Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center mb-16 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Te imaginas llegar a casa después de un día difícil...
          </h3>
          <p className="text-lg md:text-xl mb-6 opacity-90 max-w-4xl mx-auto">
            y encontrar tu piscina llena de algas verdes, con un olor desagradable, 
            mientras tus hijos te piden nadar y tú no sabes qué decirles?
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-2xl mr-2">😰</span>
            <span className="font-medium">Esto no tiene que pasarte a ti</span>
          </div>
        </div>

        {/* Solution Transition */}
        <div className="text-center">
          <div className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-lg animate-pulse-slow">
            ⬇️ PERO HAY UNA SOLUCIÓN ⬇️
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Evita esto con nuestros servicios profesionales
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nuestro equipo de expertos se encarga de todo para que tú solo disfrutes 
            de una piscina perfecta, limpia y segura para toda la familia.
          </p>

          <button 
            onClick={() => scrollToSection('services')}
            className="btn-cta text-lg"
          >
            Ver Nuestros Servicios 🏊‍♀️
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
