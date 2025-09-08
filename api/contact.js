// Vercel API Route para proxy del formulario de contacto
// api/contact.js

export default async function handler(req, res) {
  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validar datos requeridos
    const { name, email, phone, district, message } = req.body;

    if (!name || !phone || !district) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, phone, district'
      });
    }

    // URL del Google Apps Script
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbwjvbpNRBtM606TsNqWhmx10iBvr4NLH-fqgMcD3p5iAbNqhGw77qjG0gzy_CEsiItu4Q/exec';

    // Hacer petición al Google Apps Script
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email: email || '',
        phone,
        district,
        message: message || ''
      })
    });

    // Obtener respuesta del Google Apps Script
    const responseText = await response.text();

    // Intentar parsear como JSON
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      // Si no es JSON válido, devolver el texto como está
      result = { success: true, message: 'Data sent successfully', rawResponse: responseText };
    }

    // Devolver respuesta al frontend
    res.status(200).json(result);

  } catch (error) {
    console.error('Error in contact API:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
}
