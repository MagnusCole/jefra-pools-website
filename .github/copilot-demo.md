# 🧪 Demo para GitHub Copilot Coding Agent

## Instrucciones para probar Copilot

### 1. Abre VS Code en el workspace
```bash
cd d:\Projects\pool-landing
code pool-landing.code-workspace
```

### 2. Activa Copilot Chat (Ctrl+Shift+I)

### 3. Prueba estos comandos uno por uno:

#### Comando 1: Entender el proyecto
```
@workspace Explícame qué hace este proyecto y cuáles son sus objetivos principales
```

#### Comando 2: Generar código simple
```
@workspace Crea un componente simple llamado TestButton que siga los estándares del proyecto
```

#### Comando 3: Optimización específica
```
@workspace Muéstrame cómo optimizar un componente para móvil siguiendo las reglas del proyecto
```

#### Comando 4: Validación de negocio
```
@workspace ¿Qué elementos debe tener un formulario de contacto para el mercado peruano según las instrucciones del proyecto?
```

### 4. Observa cómo Copilot:
- ✅ Lee automáticamente todas las instrucciones de .github/
- ✅ Entiende el contexto de negocio (piscinas, La Molina, Perú)
- ✅ Aplica las reglas de performance (<1s, bundle <200KB)
- ✅ Usa los colores correctos (azul vs verde)
- ✅ Incluye accesibilidad (48px touch targets)
- ✅ Sigue patrones de TypeScript + React del proyecto

### 5. Si Copilot no responde correctamente:
```
@workspace Usa los patrones definidos en .github/coding-standards.md

@workspace Este es un proyecto de limpieza de piscinas en Perú, considera el contexto LATAM

@workspace Sigue las instrucciones de performance y mobile-first del proyecto
```

## Resultado esperado:
Copilot debería generar código que automáticamente:
- Use los colores del proyecto (#0ea5e9 azul, #f59e0b amarillo)
- Incluya +51 para números de Perú
- Tenga touch targets de 48px mínimo
- Use React.memo para performance
- Incluya ARIA labels para accesibilidad
- Integre WhatsApp como método de contacto preferido
