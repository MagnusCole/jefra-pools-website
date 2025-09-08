// Google Apps Script para Jefra Pools Contact Form
//
// ⚠️ INSTRUCCIONES IMPORTANTES PARA CORS:
// 1. Publica este script como "Aplicación web" desde el editor de Apps Script
// 2. Configura: "Ejecutar como: yo", "Quién tiene acceso: cualquiera"
// 3. IMPORTANTE: Marca "Ejecutar aplicación como propietario del script"
// 4. Esto permite que el script maneje solicitudes CORS automáticamente
//
// URL del script después de publicar:
// https://script.google.com/macros/s/[SCRIPT_ID]/exec

// Función helper para crear respuestas JSON con CORS
function createJsonResponse(data, statusCode) {
  var jsonString = JSON.stringify(data);

  // Crear respuesta con ContentService
  var output = ContentService
    .createTextOutput(jsonString)
    .setMimeType(ContentService.MimeType.JSON);

  // Para CORS, necesitamos usar una técnica diferente
  // Google Apps Script maneja CORS automáticamente cuando se publica como web app
  // con permisos adecuados

  return output;
}

// Función para manejar preflight requests (CORS)
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Función para testing CORS
function doGet(e) {
  var data = {
    status: 'CORS OK',
    timestamp: new Date().toISOString(),
    message: 'Google Apps Script is working with CORS headers'
  };

  return createJsonResponse(data, 200);
}
function doPost(e) {
  try {
    // Log para debugging
    console.log('Datos recibidos:', e);

    // Verificar que hay datos
    if (!e || !e.postData) {
      return createJsonResponse({success: false, message: 'No data received'}, 400);
    }

    // Parsear los datos JSON
    var data;
    try {
      data = JSON.parse(e.postData.contents);
      console.log('Datos parseados:', data);
    } catch (parseError) {
      console.log('Error parseando JSON:', parseError);
      return createJsonResponse({success: false, message: 'Invalid JSON format'}, 400);
    }

    // Validar campos requeridos
    if (!data.name || !data.phone || !data.district) {
      console.log('Campos faltantes:', {name: data.name, phone: data.phone, district: data.district});
      return createJsonResponse({success: false, message: 'Missing required fields'}, 400);
    }

    // Obtener el spreadsheet (reemplaza con tu ID real)
    var spreadsheetId = '1VaDVeIn8-cZbPR1ViY2-ssH_Su-4pRSb_8Z-rWwqs64'; // ⚠️ REEMPLAZA ESTO CON TU ID REAL
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getSheetByName('Contactos') || spreadsheet.getSheets()[0];

    // Agregar timestamp
    var timestamp = new Date();

    // Agregar fila con los datos
    sheet.appendRow([
      timestamp,
      data.name,
      data.email || '',
      data.phone,
      data.district,
      data.message || ''
    ]);

    console.log('Datos guardados exitosamente');

    // Respuesta exitosa
    return createJsonResponse({success: true, message: 'Data saved successfully'}, 200);

  } catch (error) {
    console.error('Error en doPost:', error);
    return createJsonResponse({success: false, message: 'Server error: ' + error.toString()}, 500);
  }
}

// Función de prueba para verificar que el script funciona
function testFunction() {
  console.log('Apps Script funcionando correctamente');
  return 'OK';
}
