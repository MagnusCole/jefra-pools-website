import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  PhoneIcon, 
  EnvelopeIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  phone: string;
  email: string;
  poolSize: string;
  message: string;
}

const CTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

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
        
        // WhatsApp contact
        const whatsappMessage = `Hola, soy ${data.name}. Me interesa el servicio de mantenimiento de piscina. Mi teléfono: ${data.phone}`;
        setTimeout(() => {
          window.open(`https://wa.me/51999888777?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        }, 1000);
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback to WhatsApp
      const whatsappMessage = `Hola, soy ${data.name}. Me interesa el servicio de mantenimiento de piscina.`;
      window.open(`https://wa.me/51999888777?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const openWhatsApp = () => {
    const phone = "51999888777";
    const message = "Hola, me interesa conocer más sobre el servicio de mantenimiento de piscinas";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary-800 mb-4">
            ¿Conversamos?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu piscina y te daremos una cotización honesta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-secondary-50 rounded-lg p-8">
            <h3 className="text-xl font-medium text-secondary-800 mb-6">
              Déjanos un mensaje
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircleIcon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-primary-600 mb-2">
                  Mensaje enviado
                </h4>
                <p className="text-secondary-600 text-sm">
                  Te contactaremos pronto por WhatsApp
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Nombre
                  </label>
                  <input
                    {...register('name', { required: 'Tu nombre es necesario' })}
                    type="text"
                    className="w-full px-3 py-2 rounded border border-secondary-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-secondary-900"
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'Tu teléfono es necesario',
                      pattern: {
                        value: /^[+]?[0-9\s\-()]{9,}$/,
                        message: 'Formato: 999888777'
                      }
                    })}
                    type="tel"
                    className="w-full px-3 py-2 rounded border border-secondary-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-secondary-900"
                    placeholder="999 888 777"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Email (opcional)
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-3 py-2 rounded border border-secondary-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-secondary-900"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Tamaño de piscina
                  </label>
                  <select
                    {...register('poolSize')}
                    className="w-full px-3 py-2 rounded border border-secondary-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-secondary-900"
                  >
                    <option value="">Elige una opción</option>
                    <option value="pequeña">Pequeña</option>
                    <option value="mediana">Mediana</option>
                    <option value="grande">Grande</option>
                    <option value="no-se">No estoy seguro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Cuéntanos un poco más
                  </label>
                  <textarea
                    {...register('message')}
                    rows={3}
                    className="w-full px-3 py-2 rounded border border-secondary-300 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-secondary-900 resize-none"
                    placeholder="¿Cómo está tu piscina actualmente?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded font-medium transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-secondary-800 mb-6">
                O llámanos directamente
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-3 text-primary-600" />
                  <div>
                    <div className="font-medium text-secondary-800">+51 999 888 777</div>
                    <div className="text-sm text-secondary-600">Lunes a sábado, 8am-6pm</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-3 text-primary-600" />
                  <div>
                    <div className="font-medium text-secondary-800">contacto@jefrapools.com</div>
                    <div className="text-sm text-secondary-600">Respuesta en el día</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Option */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-secondary-800 mb-3">
                Preferimos WhatsApp
              </h4>
              <p className="text-sm text-secondary-600 mb-4">
                Es más fácil coordinar y enviarte fotos del progreso
              </p>
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors duration-200"
              >
                Escribir por WhatsApp
              </button>
            </div>

            {/* Simple promise */}
            <div className="text-center text-sm text-secondary-600">
              <p>Te contactaremos dentro del día para coordinar una visita</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
