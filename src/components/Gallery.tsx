import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  location: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Fotos reales de JefraPools - misma imagen perfecta para todas
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/pool-real.jpg",
      alt: "Piscina limpia y cristalina mantenida por JefraPools en La Molina",
      title: "Piscina Residencial - La Molina",
      location: "Residencial Los Fresnos"
    },
    {
      id: 2,
      src: "/pool-real.jpg",
      alt: "Equipo profesional de JefraPools trabajando en limpieza",
      title: "Servicio Profesional",
      location: "Club La Molina"
    },
    {
      id: 3,
      src: "/pool-real.jpg",
      alt: "Piscina de condominio mantenida por JefraPools",
      title: "Condominio Premium",
      location: "Torres de La Molina"
    },
    {
      id: 4,
      src: "/pool-real.jpg",
      alt: "Antes y después del servicio de JefraPools",
      title: "Transformación Completa",
      location: "Rinconada del Lago"
    },
    {
      id: 5,
      src: "/pool-real.jpg",
      alt: "Piscina familiar perfectamente mantenida",
      title: "Piscina Familiar",
      location: "Los Granados"
    },
    {
      id: 6,
      src: "/pool-real.jpg",
      alt: "Equipo y químicos profesionales de JefraPools",
      title: "Equipos Profesionales",
      location: "Sede JefraPools"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            NUESTROS <span className="text-gradient">TRABAJOS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de <span className="font-bold text-primary-600">200 piscinas</span> transformadas en La Molina y alrededores
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            📸 <span className="font-semibold">¿Quieres ver tu piscina aquí?</span>
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-cta"
          >
            Solicita tu Cotización Gratuita
          </button>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">{selectedImage.title}</h3>
                <p className="text-lg opacity-90">{selectedImage.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
