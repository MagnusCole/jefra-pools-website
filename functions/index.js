const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const fetch = require("node-fetch");

// Configuración global
setGlobalOptions({ maxInstances: 10 });

// Función del formulario de contacto
exports.contactForm = onRequest(async (req, res) => {
  // Habilitar CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Manejar preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, phone, district, message } = req.body;

    // Validar campos requeridos
    if (!name || !phone || !district) {
      logger.warn('Missing required fields', { name, phone, district });
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, phone, district'
      });
    }

    // URL de tu Google Apps Script
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbwjvbpNRBtM606TsNqWhmx10iBvr4NLH-fqgMcD3p5iAbNqhGw77qjG0gzy_CEsiItu4Q/exec';

    logger.info('Sending data to Google Apps Script', { name, email, phone, district });

    // Enviar a Google Apps Script
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

    if (!response.ok) {
      throw new Error(`Google Apps Script error: ${response.status}`);
    }

    const result = await response.text();
    logger.info('Data sent successfully to Google Apps Script');

    // Devolver respuesta exitosa
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: result
    });

  } catch (error) {
    logger.error('Error in contact form function', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});
