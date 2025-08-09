import React from 'react';

const faqs = [
  {
    q: '¿Cuál es el precio después de la promo?',
    a: 'La limpieza puntual desde S/149 según tamaño. La inspección inicial es sin costo.'
  },
  {
    q: '¿Usan productos seguros?',
    a: 'Sí, químicos balanceados y certificados. pH y cloro exactos para evitar irritaciones.'
  },
  {
    q: '¿Qué zonas cubren?',
    a: 'La Molina y alrededores (Surco, San Borja). Escríbenos y confirmamos disponibilidad.'
  },
  {
    q: '¿Hay garantía?',
    a: 'Sí. Si no ves el agua clara, volvemos sin costo hasta dejarla perfecta.'
  }
];

const FAQ: React.FC = React.memo(() => {
  return (
    <section aria-labelledby="faq-title" className="py-14 bg-white">
      <div className="container-custom">
        <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-8">
          Preguntas frecuentes
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <dt className="font-semibold text-gray-900">{f.q}</dt>
              <dd className="text-gray-700 mt-1">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';
export default FAQ;
