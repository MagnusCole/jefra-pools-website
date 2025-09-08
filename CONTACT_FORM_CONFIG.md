# Contact Form Configuration Guide

## 🚀 Configuración del Formulario de Contacto

### Paso 1: Actualizar Google Apps Script

1. **Ve a [Google Apps Script](https://script.google.com)**
2. **Abre tu proyecto existente** (o crea uno nuevo)
3. **Copia el contenido completo** del archivo `google-apps-script.js` actualizado
4. **Pégalo** en tu proyecto de GAS
5. **Guarda** los cambios

### Paso 2: Desplegar como Web App

1. Ve a **"Deploy" > "New deployment"**
2. Selecciona **"Web app"**
3. Configura:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. **Copia la URL del deployment** (termina en `/exec`)

### Paso 3: Actualizar ContactForm.tsx

1. **Abre** `src/components/ContactForm.tsx`
2. **Busca esta línea:**
   ```javascript
   const GAS_URL = 'https://script.google.com/macros/s/AKfycbzXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
   ```
3. **Reemplaza** con tu URL real:
   ```javascript
   const GAS_URL = 'https://script.google.com/macros/s/TU_SCRIPT_ID_REAL/exec';
   ```

### Paso 4: Verificar Configuración

#### Test 1: CORS Headers
Abre tu URL de GAS en el navegador:
```
https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```
Deberías ver una respuesta JSON como:
```json
{
  "status": "CORS OK",
  "timestamp": "2025-09-08T...",
  "message": "Google Apps Script is working with CORS headers"
}
```

#### Test 2: Formulario Completo
1. Ve a [jefrapools.com](https://jefrapools.com)
2. Llena y envía el formulario
3. **Debería funcionar sin errores**
4. Los datos aparecerán en tu Google Sheet

### 🔧 Características Configuradas

- ✅ **CORS headers completos** en todas las respuestas
- ✅ **Manejo robusto de errores** con fallback a WhatsApp
- ✅ **Redirección automática** a WhatsApp después del envío
- ✅ **Validación de datos** en el frontend
- ✅ **Logging detallado** para debugging

### 📊 Flujo de Funcionamiento

```
Usuario envía formulario
    ↓
ContactForm.tsx → fetch() → Google Apps Script
    ↓
doPost() procesa datos → Guarda en Spreadsheet
    ↓
Respuesta con CORS headers → ContactForm recibe confirmación
    ↓
Usuario ve mensaje de éxito → Redirección automática a WhatsApp
```

### 🆘 Solución de Problemas

#### Error: "Unexpected token '<'"
- ❌ **Causa:** Falta configuración CORS en Google Apps Script
- ✅ **Solución:** Asegúrate de que todas las funciones tengan headers CORS

#### Error: "Failed to fetch"
- ❌ **Causa:** URL incorrecta o script no desplegado
- ✅ **Solución:** Verifica la URL y el deployment del Web App

#### Error: "No data received"
- ❌ **Causa:** Problema en el envío de datos
- ✅ **Solución:** Revisa la configuración del fetch en ContactForm.tsx

### 📞 Contacto de Emergencia

Si algo no funciona, el formulario tiene **fallback automático a WhatsApp**, por lo que los usuarios siempre podrán contactarte aunque haya problemas técnicos.

### 🎯 Checklist Final

- [ ] Google Apps Script actualizado con CORS headers
- [ ] Script desplegado como Web App
- [ ] URL correcta en ContactForm.tsx
- [ ] Spreadsheet ID correcto en GAS
- [ ] Test de CORS exitoso
- [ ] Test de formulario completo exitoso

¡Tu formulario está listo para capturar leads efectivamente! 🚀
