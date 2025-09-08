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

  // ⚠️ CONFIGURACIÓN IMPORTANTE:
  // 1. El formulario envía datos directamente a Google Forms
  // 2. Los datos se guardan automáticamente en Google Sheets
  // 3. No hay redirección - el usuario se queda en el sitio
  // 4. Los IDs de los campos están configurados para tu formulario específico

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Enviando datos:', formData);
    
    try {
      // URL directa del Google Forms (sin redirección)
      const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d/1TNGtDucIh_5o0FZ4D4ELtws64Kjaj0QkJLPduB_mFhc/formResponse';
      
      const response = await fetch(GOOGLE_FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'entry.2005620554': formData.name,        // Nombre
          'entry.1045781291': formData.email,       // Correo electrónico
          'entry.1166974658': formData.phone,       // Teléfono
          'entry.839337160': formData.district,     // Distrito
          'entry.1065046570': formData.message,     // Mensaje
        }).toString(),
        redirect: 'manual'  // IMPORTANTE: Evita redirección automática
      });

      console.log('Respuesta del servidor:', response);
      console.log('Status:', response.status);

      // Google Forms responde con 200 si es exitoso
      if (response.status === 200 || response.status === 0) {
        console.log('Envío exitoso a Google Forms');

        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          district: '',
          message: ''
        });

        alert('¡Gracias! Nos contactaremos contigo pronto.');
      } else {
        throw new Error(`Error al enviar: ${response.status}`);
      }
    } catch (error) {
      console.error('Error completo:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      
      // Mostrar mensaje de error al usuario
      alert(`Error de conexión: ${errorMessage}\n\nPor favor, intenta de nuevo más tarde.`);
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