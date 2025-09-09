const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, phone, district, message } = JSON.parse(event.body);

    // Hash user data for privacy (Facebook requires hashed data)
    const crypto = require('crypto');
    const hash = (data) => crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');

    const pixelId = '712815701724579'; // Your pixel ID
    const testEventCode = 'TEST6009'; // Test code from Facebook

    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            em: email ? hash(email) : undefined,
            ph: phone ? hash(phone) : undefined,
            fn: name ? hash(name.split(' ')[0]) : undefined,
            ln: name && name.split(' ').length > 1 ? hash(name.split(' ').slice(1).join(' ')) : undefined,
          },
          custom_data: {
            content_name: 'Lead Real - Formulario Contacto',
            district: district,
            message: message,
          },
          test_event_code: testEventCode,
        },
      ],
    };

    // For test, no access_token needed with test_event_code
    const response = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (error) {
    console.error('Error sending to Facebook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send event' }),
    };
  }
};
