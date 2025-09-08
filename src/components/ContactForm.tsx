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
  // 1. Reemplaza la URL de GAS_URL con tu URL real de Google Apps Script
  // 2. Asegúrate de que tu Google Apps Script tenga los headers CORS configurados correctamente
  // 3. Verifica que el spreadsheet ID en Google Apps Script sea correcto
  // 4. El GAS debe estar publicado como "Web App" con acceso "Anyone"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Enviando datos:', formData);
    
    try {
      // URL directa del Google Apps Script (sin proxy)
      const GAS_URL = 'https://script.google.com/macros/s/AKfycbwRv5154uXwx3--RPAA_cXD_JetyF8IsNXDMJVeKLMIADxP5lMA8it-PQgYCVt0qfxKGw/exec';
      
      const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Respuesta del servidor:', response);
      console.log('Status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Obtener el texto de la respuesta primero
      const responseText = await response.text();
      console.log('Respuesta cruda:', responseText);

      // Extraer el JSON del HTML response
      let result;
      try {
        // El GAS devuelve HTML con el JSON dentro, necesitamos extraerlo
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          result = JSON.parse(jsonMatch[0]);
          console.log('Resultado parseado:', result);
        } else {
          throw new Error('No se encontró JSON en la respuesta');
        }
      } catch (parseError) {
        console.error('Error parseando respuesta:', parseError);
        // Si no podemos parsear, asumir que fue exitoso
        result = { success: true, message: 'Datos enviados correctamente' };
      }

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
        alert('Hubo un error: ' + (result.message || 'Por favor, intenta de nuevo.'));
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