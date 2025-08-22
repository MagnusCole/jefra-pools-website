import React, { useEffect, useState } from 'react';
import { WHATSAPP_PHONE } from '../config/contact';

// Minimal proof gallery using public/images assets with captions
const images: { src: string; caption: string }[] = [
  { src: 'images/3a6bd5ad-729a-49c3-a9e5-07b6b40d7acf.jpg', caption: 'San Borja — Recuperación de brillo' },
  { src: 'images/7482029c-d9f0-4c51-b951-6985d88550d4.jpg', caption: 'Surco — Balanceo químico' },
  { src: 'images/a37b0152-c7c2-43a6-8095-8ed1fb416b49.jpg', caption: 'La Molina — Mantenimiento semanal' },
  { src: 'images/aadf19d5-b8ee-4901-b8a2-1acc7f09162b.jpg', caption: 'San Borja — Limpieza completa (2h)' },
  { src: 'images/Construccion2.png', caption: 'La Molina — Resultado' },
  { src: 'images/ad2639cd-5294-4eab-bd0b-eed2e85cdeb0.jpg', caption: 'Surco — Filtrado y cepillado' },
  { src: 'images/aed6151e-23b6-419b-93e0-033abe1d207c.jpg', caption: 'La Molina — Agua cristalina' },
  { src: 'images/b03a52b6-923b-4a69-a5e2-6477b652c813.jpg', caption: 'San Borja — Hogar familiar' },
  { src: 'images/b651ee56-0c98-4bc4-8d01-87ee3d7bc715.jpg', caption: 'La Molina — Mantenimiento preventivo' },
  { src: 'images/d00dd42c-080d-43bc-ac1f-fc21367258a9.jpg', caption: 'Surco — Shock de limpieza' },
  { src: 'images/d0b8119c-04fc-4b77-a8ec-9c9f4d7f4331.jpg', caption: 'La Molina — Listo para usar' },
  { src: 'images/d5366dfa-97e8-473e-9286-c70af2b7adf0.jpg', caption: 'San Borja — Agua perfecta' },
  { src: 'images/piscina-gozu.png', caption: 'La Molina — Condominio' },
  { src: 'images/fb922e80-a67e-4d6d-a188-679e111f5554.jpg', caption: 'Surco — Detalle cristalino' },
  { src: 'images/fd186c97-4c8d-4ef2-a4d4-5b13f36140c3.jpg', caption: 'La Molina — Post-mantenimiento' },
  { src: 'images/piscina-pacman.png', caption: 'San Isidro — Condominio' },
];

const ProofGallery: React.FC = React.memo(() => {
  return (
    <section id="trabajos" aria-labelledby="proof-title" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 id="proof-title" className="text-3xl md:text-4xl font-black text-gray-900">
            Resultados reales
          </h2>
          <p className="text-gray-600 mt-2">Trabajos reales de esta semana en La Molina, Surco y San Borja.</p>
  </div>
  <LightboxGrid images={images} />

        <div className="mt-8 text-center">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola, quiero reservar una inspección gratuita para mi piscina.')}`}
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-amber-400 text-amber-600 bg-white font-semibold shadow-sm hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[48px]"
          >
            Reservar gratis mi inspección
          </a>
        </div>
      </div>
    </section>
  );
});

ProofGallery.displayName = 'ProofGallery';
export default ProofGallery;

// Simple lightbox grid with clickable figures
function LightboxGrid({ images }: { images: { src: string; caption: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <Figure key={img.src} index={i} img={img} onOpen={() => setOpen(i)} />
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <img src={`/${images[open].src}`} alt={images[open].caption} className="max-h-[85vh] w-auto object-contain" />
        </div>
      )}
    </>
  );
}

function Figure({ img, index, onOpen }: { img: { src: string; caption: string }; index: number; onOpen: () => void }) {
  return (
    <figure className="group overflow-hidden rounded-lg border border-gray-200 bg-white relative cursor-zoom-in" onClick={onOpen}>
      <img
        src={`/${img.src}`}
        alt={`Trabajo de limpieza de piscina ${index + 1}`}
        className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        decoding="async"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <figcaption className="px-2 py-2 text-[11px] sm:text-xs text-gray-600">{img.caption}</figcaption>
    </figure>
  );
}
