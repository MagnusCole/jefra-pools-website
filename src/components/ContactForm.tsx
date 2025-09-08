import React, { useState } from 'react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Enviando datos:', formData);
    
    try {
      const response = await fetch('/api/google-apps-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Respuesta del servidor:', response);

      const result = await response.json();
      console.log('Resultado parseado', result);

      if (result.success) {
        alert('¡Gracias! Nos contactaremos contigo pronto.');
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          district: '',
          message: ''
        });
      } else {
        alert('Hubo un error. Por favor, rellena bien tus datos.');
      }
    } catch (error) {
      console.error('Error completo', error);
      alert('Error de conexión: ' + (error instanceof Error ? error.message : 'Error desconocido'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Distrito en Lima</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
            placeholder="Cuéntanos sobre tu piscina..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  );
};

export default ContactForm;