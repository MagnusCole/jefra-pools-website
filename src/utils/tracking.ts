// Lightweight analytics helpers focused on Meta Pixel Lead tracking
// Defensive: avoid errors if fbq is not loaded

export type LeadSource = 'contact-form';

export const trackLead = (source: LeadSource, extra?: Record<string, unknown>) => {
  try {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void };
    if (typeof w.fbq === 'function') {
      w.fbq('track', 'Lead', {
        content_name: extra?.content_name || 'Lead Real - Formulario Contacto',
        source,
        ...extra,
      });
    }
  } catch {
    // no-op
  }
};
