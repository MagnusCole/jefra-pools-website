import React, { useState, useCallback } from 'react';
import { XMarkIcon, MapPinIcon } from '@heroicons/react/24/solid';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  location: string;
}

/**
 * Gallery Component - SIMPLIFIED VERSION
 * Evidence-Based: Visual proof + Local references
 * Mobile-first: 70% traffic LATAM
 * Minimal design: Clean, focused on conversion
 */
const Gallery: React.FC = React.memo(() => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // WhatsApp integration
  const handleWhatsAppClick = useCallback(() => {
    const phone = "51999888777";
    const message = "¡Hola JefraPools! Vi la galería de trabajos y me interesa una cotización para mi piscina.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Simplified gallery images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/pool-real.jpg",
      alt: "Transformación completa de piscina en La Molina",
      title: "Transformación Familiar",
      location: "La Molina - Los Fresnos"
    },
    {
      id: 2,
      src: "/pool-real.jpg", 
      alt: "Piscina cristalina después del servicio profesional",
      title: "Agua Perfecta",
      location: "La Molina - Club Residencial"
    },
    {
      id: 3,
      src: "/pool-real.jpg",
      alt: "Mantenimiento profesional de piscina",
      title: "Servicio Semanal", 
      location: "La Molina - Rinconada"
    },
    {
      id: 4,
      src: "/pool-real.jpg",
      alt: "Piscina de condominio mantenida profesionalmente",
      title: "Condominio Premium",
      location: "La Molina - Torres del Sol"
    },
    {
      id: 5,
      src: "/pool-real.jpg", 
      alt: "Resultado perfecto después de limpieza profunda",
      title: "Limpieza Profunda",
      location: "La Molina - Los Granados"
    },
    {
      id: 6,
      src: "/pool-real.jpg",
      alt: "Piscina familiar segura para niños",
      title: "Seguridad Familiar", 
      location: "La Molina - Villa del Sol"
    }
  ];

  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <section 
      id="gallery" 
      className="py-20 lg:py-28 bg-white"
      role="region"
      aria-labelledby="gallery-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            id="gallery-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
          >
            Trabajos{' '}
            <span className="text-primary-600">Realizados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de <span className="font-bold text-primary-600">200 piscinas transformadas</span> en La Molina. 
            Resultados reales de familias reales.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary-600 transition-colors"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{image.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Piscinas transformadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Años experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Tiempo respuesta</div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Tu piscina será la próxima?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a las familias que ya disfrutan de piscinas cristalinas y seguras
          </p>

          <button 
            onClick={handleWhatsAppClick}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Ver Mi Cotización Gratuita
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
              aria-label="Cerrar imagen"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

Gallery.displayName = 'Gallery';
export default Gallery;
