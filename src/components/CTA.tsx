import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  phone: string;
  email: string;
  poolSize: string;
  message: string;
}

const CTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 8,
    minutes: 0,
    seconds: 0
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Reset timer when it reaches 0
                return { days: 7, hours: 8, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit to Netlify Forms
      const formParams = new URLSearchParams();
      formParams.append('form-name', 'contact');
      formParams.append('name', data.name);
      formParams.append('phone', data.phone);
      formParams.append('email', data.email);
      formParams.append('poolSize', data.poolSize);
      formParams.append('message', data.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formParams.toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        
        // WhatsApp fallback for immediate contact
        const whatsappMessage = `¡Hola! Solicito cotización gratuita para limpieza de piscina.%0A%0ANombre: ${data.name}%0ATeléfono: ${data.phone}%0ATamaño: ${data.poolSize}%0AMensaje: ${data.message}`;
        setTimeout(() => {
          window.open(`https://wa.me/51999888777?text=${whatsappMessage}`, '_blank');
        }, 1000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to WhatsApp if form fails
      const whatsappMessage = `¡Hola! Solicito cotización gratuita para limpieza de piscina.%0A%0ANombre: ${data.name}%0ATeléfono: ${data.phone}`;
      window.open(`https://wa.me/51999888777?text=${whatsappMessage}`, '_blank');
    }
    
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const openWhatsApp = () => {
    const phone = "51999888777";
    const message = "Hola! Me interesa obtener una cotización gratuita para limpieza de piscina. ¿Podrían ayudarme?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-primary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-shadow-lg">
            ¡AGENDA TU COTIZACIÓN GRATUITA HOY Y
          </h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-yellow-300">
            DISFRUTA DE UNA PISCINA PERFECTA ANTES DEL FIN DE SEMANA!
          </h3>
        </div>

        {/* Urgency Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-16 text-center">
          <div className="inline-flex items-center bg-accent-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
            OFERTA PARA PRIMEROS CLIENTES
          </div>
          
          <h4 className="text-2xl md:text-3xl font-bold mb-8">
            TERMINA EN:
          </h4>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-4xl font-bold">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm opacity-75">DÍAS</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-4xl font-bold">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm opacity-75">HORAS</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-4xl font-bold">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm opacity-75">MIN</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl md:text-4xl font-bold">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm opacity-75">SEG</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Obtén tu cotización gratuita
            </h4>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h5 className="text-xl font-bold text-green-600 mb-2">
                  ¡Mensaje enviado exitosamente!
                </h5>
                <p className="text-gray-600">
                  Te contactaremos en menos de 2 horas para programar tu cotización gratuita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    {...register('name', { required: 'El nombre es requerido' })}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'El teléfono es requerido',
                      pattern: {
                        value: /^[+]?[0-9\s\-()]{10,}$/,
                        message: 'Ingresa un teléfono válido'
                      }
                    })}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                    placeholder="+51 999 888 777"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    {...register('email', {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ingresa un email válido'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                    placeholder="contacto@jefrapools.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tamaño de piscina
                  </label>
                  <select
                    {...register('poolSize')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Selecciona el tamaño</option>
                    <option value="pequeña">Pequeña (hasta 20m²)</option>
                    <option value="mediana">Mediana (20-40m²)</option>
                    <option value="grande">Grande (40m² o más)</option>
                    <option value="no-se">No estoy seguro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje adicional
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 resize-none"
                    placeholder="Cuéntanos sobre el estado actual de tu piscina o cualquier pregunta específica..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-cta text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Enviando...' : '🏊‍♀️ Obtener Cotización Gratis'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">
                O contáctanos directamente
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <PhoneIcon className="h-8 w-8 mr-4 text-yellow-300" />
                  <div>
                    <div className="font-bold text-lg">+51 999 888 777</div>
                    <div className="text-sm opacity-75">Disponible 7 días • 8AM-6PM</div>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <EnvelopeIcon className="h-8 w-8 mr-4 text-yellow-300" />
                  <div>
                    <div className="font-bold text-lg">contacto@jefrapools.com</div>
                    <div className="text-sm opacity-75">Respuesta en 2 horas o menos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500 rounded-3xl p-8 text-center shadow-2xl">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-2xl font-bold mb-4">
                ¿Prefieres WhatsApp?
              </h4>
              <p className="mb-6 opacity-90">
                Chatea con nosotros ahora y obtén respuestas instantáneas
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                💬 Chatear por WhatsApp
              </button>
            </div>

            {/* Guarantee */}
            <div className="bg-yellow-400 text-gray-900 rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold mb-4">
                Garantía de Satisfacción 100%
              </h4>
              <p className="text-sm">
                Si no quedas completamente satisfecho con nuestro servicio, 
                regresamos sin costo adicional hasta que quedes feliz.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
            <ClockIcon className="h-6 w-6 mr-2" />
            <span className="font-medium">Respuesta garantizada en menos de 2 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
