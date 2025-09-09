// Usar fetch nativo (disponible en Node.js 18+ en Netlify Functions)

exports.handler = async (event, context) => {
  console.log('Track-lead function called with method:', event.httpMethod);

  // Manejar OPTIONS para CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }

  try {
    // Validar que el body existe
    if (!event.body) {
      console.error('No body provided');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No data provided' }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
    }

    console.log('Parsing request body...');
    const data = JSON.parse(event.body);
    const { name, email, phone, district, message, value, currency } = data;

    // Validar datos requeridos
    if (!name || !email) {
      console.error('Missing required fields:', { name: !!name, email: !!email });
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required' }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
    }

    console.log('Processing lead data for:', name, email);

    // Hash user data for privacy (Facebook requires hashed data)
    const crypto = require('crypto');
    const hash = (data) => {
      if (!data || typeof data !== 'string') return undefined;
      return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
    };

    const pixelId = '712815701724579'; // Your pixel ID
    // Removido test_event_code para producción
    // const testEventCode = 'TEST6009'; // Test code from Facebook

    // Construir user_data de forma segura
    const userData = {};
    if (email) userData.em = hash(email);
    if (phone) userData.ph = hash(phone);
    if (name) {
      const nameParts = name.trim().split(' ');
      userData.fn = hash(nameParts[0]);
      if (nameParts.length > 1) {
        userData.ln = hash(nameParts.slice(1).join(' '));
      }
    }

    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          user_data: userData,
          custom_data: {
            content_name: 'Lead Real - Formulario Contacto',
            district: district || '',
            message: message || '',
            value: value || 0, // Valor del lead (requerido por Facebook)
            currency: currency || 'PEN' // Divisa (requerido por Facebook)
          }
          // Removido test_event_code para producción
        },
      ],
    };

    console.log('Sending payload to Facebook:', JSON.stringify(payload, null, 2));

    // Usar fetch nativo (disponible en Node.js moderno)
    const response = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Facebook API response status:', response.status);

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Facebook API error:', response.status, errorText);
      return {
        statusCode: 200, // Retornar 200 para no romper el flujo del usuario
        body: JSON.stringify({
          success: false,
          error: 'Facebook tracking failed',
          details: `Status: ${response.status}`
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
    }

    // Intentar parsear respuesta como JSON, pero manejar errores
    let result;
    try {
      result = await response.json();
      console.log('Facebook API success response:', result);
    } catch (parseError) {
      console.error('Error parsing Facebook response:', parseError);
      result = { message: 'Event sent but response parsing failed' };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    };
  } catch (error) {
    console.error('Error in track-lead function:', error);

    // Determinar el tipo de error para mejor diagnóstico
    let errorMessage = 'Unknown error occurred';
    let statusCode = 500;

    if (error instanceof SyntaxError) {
      errorMessage = 'Invalid JSON in request body';
      statusCode = 400;
    } else if (error.message.includes('fetch')) {
      errorMessage = 'Network error when calling Facebook API';
    } else if (error.message.includes('hash')) {
      errorMessage = 'Error processing user data';
    }

    return {
      statusCode: statusCode,
      body: JSON.stringify({
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString()
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
};
