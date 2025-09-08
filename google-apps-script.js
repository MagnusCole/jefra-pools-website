// Google Apps Script para Jefra Pools Contact Form
function doPost(e) {
  try {
    // Log para debugging
    console.log('Datos recibidos:', e);

    // Verificar que hay datos
    if (!e || !e.postData) {
      return ContentService
        .createTextOutput(JSON.stringify({success: false, message: 'No data received'}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Parsear los datos JSON
    var data;
    try {
      data = JSON.parse(e.postData.contents);
      console.log('Datos parseados:', data);
    } catch (parseError) {
      console.log('Error parseando JSON:', parseError);
      return ContentService
        .createTextOutput(JSON.stringify({success: false, message: 'Invalid JSON format'}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Validar campos requeridos
    if (!data.name || !data.phone || !data.district) {
      console.log('Campos faltantes:', {name: data.name, phone: data.phone, district: data.district});
      return ContentService
        .createTextOutput(JSON.stringify({success: false, message: 'Missing required fields'}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Obtener el spreadsheet (reemplaza con tu ID real)
    var spreadsheetId = '1VaDVeIn8-cZbPR1ViY2-ssH_Su-4pRSb_8Z-rWwqs64'; // ⚠️ REEMPLAZA ESTO
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
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error en doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, message: 'Server error: ' + error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de prueba para verificar que el script funciona
function testFunction() {
  console.log('Apps Script funcionando correctamente');
  return 'OK';
}
