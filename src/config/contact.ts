// Fuente única de datos de contacto / WhatsApp
export const WHATSAPP_PHONE = '51946398228'; // solo dígitos para wa.me
export const WHATSAPP_DISPLAY = '+51 946 398 228';
export const WHATSAPP_MESSAGE_DEFAULT = '¡Hola Jefra Pools! Quiero agendar mi visita técnica GRATIS + 1 limpieza extra para mantenimiento.';

export const buildWhatsAppUrl = (message: string = WHATSAPP_MESSAGE_DEFAULT) =>
	`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export interface WhatsAppPresetMessage { id: string; text: string; }
export const WHATSAPP_PRESETS: WhatsAppPresetMessage[] = [
	{ id: 'inspeccion', text: 'Hola, quiero una inspección sin costo.' },
	{ id: 'limpieza-hoy', text: '¿Pueden agendar una limpieza?' },
];

