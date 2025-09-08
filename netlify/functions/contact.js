const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Solo permitir POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Manejar preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    // Parsear los datos del formulario
    const formData = JSON.parse(event.body);

    // Validar datos requeridos
    if (!formData.name || !formData.phone || !formData.district) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
        },
        body: JSON.stringify({
          success: false,
          message: 'Faltan datos requeridos: nombre, teléfono y distrito'
        }),
      };
    }

    // URL del Google Apps Script
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbwjvbpNRBtM606TsNqWhmx10iBvr4NLH-fqgMcD3p5iAbNqhGw77qjG0gzy_CEsiItu4Q/exec';

    console.log('Enviando datos a Google Apps Script:', formData);

    // Enviar datos al Google Apps Script
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseText = await response.text();
    console.log('Respuesta de GAS:', responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Error parseando respuesta:', parseError);
      result = { success: false, message: 'Error en el servidor' };
    }

    // Devolver respuesta al frontend
    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    };

  } catch (error) {
    console.error('Error en la función:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        message: 'Error interno del servidor: ' + error.message
      }),
    };
  }
};
