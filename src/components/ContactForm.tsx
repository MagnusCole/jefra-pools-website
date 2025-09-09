import React, { useRef } from 'react';
import { trackLead } from '../utils/tracking';

const LIMA_DISTRICTS = [
  'Ancón', 'Ate', 'Barranco', 'Breña', 'Carabayllo', 'Chaclacayo',
  'Chorrillos', 'Cieneguilla', 'Comas', 'El Agustino', 'Independencia',
  'Jesús María', 'La Molina', 'La Victoria', 'Lima', 'Lince',
  'Los Olivos', 'Lurigancho', 'Lurín', 'Magdalena del Mar', 'Miraflores',
  'Pachacamac', 'Pucusana', 'Pueblo Libre', 'Puente Piedra', 'Punta Hermosa',
  'Punta Negra', 'Rímac', 'San Bartolo', 'San Borja', 'San Isidro',
  'San Juan de Lurigancho', 'San Juan de Miraflores', 'San Luis',
  'San Martín de Porres', 'San Miguel', 'Santa Anita', 'Santa María del Mar',
  'Santa Rosa', 'Santiago de Surco', 'Surquillo', 'Villa El Salvador',
  'Villa María del Triunfo'
];

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      // Enviar a Formspree
      const response = await fetch('https://formspree.io/f/mnnblegn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // ✅ Éxito: Disparar evento de Lead en Meta
        trackLead('contact-form', {
          content_name: 'Lead Real - Formulario Contacto Jefra Pools',
          content_category: 'Servicio Limpieza Piscinas',
          value: 0,
          currency: 'PEN'
        });

        // Limpiar formulario
        formRef.current.reset();

        // Mensaje de éxito
        alert('¡Gracias! Nos contactaremos contigo pronto.');
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario. Por favor intenta de nuevo.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded-lg"
            required
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            placeholder="tu@email.com"
            title="Por favor ingresa un email válido"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            className="w-full px-3 py-2 border rounded-lg"
            required
            pattern='(\+51\s?)?9\d{8}'
            placeholder="+51 999 888 777"
            title="Numero peruano: 999888777 o +51 999888777"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Distrito en Lima</label>
          <select
            name="district"
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Selecciona tu distrito</option>
            {LIMA_DISTRICTS.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mensaje</label>
          <textarea
            name="message"
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
            placeholder="Cuéntanos sobre tu piscina..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;