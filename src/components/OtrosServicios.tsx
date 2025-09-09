import React, { useRef, useState, useCallback } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Slide = {
  title: string;
  description: string;
  img: string;
  alt: string;
  features?: string[];
  whatsappMessage?: string; // Mensaje personalizado para CTA WhatsApp
  buttonText?: string; // Texto personalizado para el botón CTA
};

const slides: Slide[] = [
  {
    title: 'Construcción',
    description: 'Construcción desde inicio del proyecto hasta el fin de la obra.',
    img: '/images/construction.png',
    alt: 'Construcción de piscina',
    features: [
      'Diseño personalizado según espacio y uso.',
      'Materiales antideslizantes y garantía de acabado.',
    ],
    whatsappMessage: '¡Hola Jefra Pools! Estoy interesado en construir una piscina nueva. ¿Podemos hablar de opciones?',
    buttonText: 'QUIERO CONSTRUIR MI PISCINA'
  },
  {
    title: 'Transforma tu piscina en un spa rejuvenecedor',
    description: 'Ionización avanzada para reducir químicos agresivos y cuidar tu piel cada vez que entres a la piscina.',
    img: '/images/ionizador.png',
    alt: 'Ionización de agua en piscina',
    features: [
      'Cuida tu piel con cada baño.',
      'Ideal para pieles sensibles y familias exigentes.',
    ],
    whatsappMessage: '¡Hola Jefra Pools! Quiero ionizar el agua de mi piscina. Detalles por favor.',
    buttonText: 'QUIERO MI PISCINA SALUDABLE'
  },
  {
    title: 'Reparación',
    description: 'Detectamos anomalías no visibles de la piscina (ej. fugas).',
    img: '/images/reparacion.png',
    alt: 'Reparación de filtro',
    features: [
      'Diagnóstico rápido y presupuesto claro.',
      'Repuestos originales o equivalentes certificados.',
    ],
    whatsappMessage: '¡Hola Jefra Pools! Necesito reparar mi filtro dañado o piscina con problemas. ¿Cuándo pueden inspeccionar?',
    buttonText: 'Activa tu inspección gratuita'
  },
  {
    title: 'Servicios generales',
    description: 'Mantenimiento interno en seco y reparaciones preventivas.',
    img: '/images/servicios-generales.png',
    alt: 'Mantenimiento general de piscina',
    whatsappMessage: '¡Hola Jefra Pools! Busco servicios generales. ¿Qué opciones ofrecen?',
    buttonText: 'agenda gratis tu Diagnóstico'
  },
  {
    title: 'Temperado de piscinas premium',
    description: '¡Disfruta agua tibia todo el año! Con el servicio de temperado de Jefra Pools, transforma tu piscina en un oasis cálido',
    img: '/images/calefactor2.png',
    alt: 'Mantenimiento general de piscina',
    whatsappMessage: '¡Hola Jefra Pools! Quiero información sobre el servicio de temperado de piscinas para disfrutar agua tibia. Me gustaría coordinar.',
    buttonText: 'QUIERO AGUA TEMPERADA'
  }
];

// Simple ErrorBoundary local para capturar errores de Swiper y mostrar fallback
class SwiperErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; msg?: string }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(err: unknown) {
    return { hasError: true, msg: err instanceof Error ? err.message : String(err) };
  }
  componentDidCatch(error: unknown, info: unknown) {
    // Log en consola (ya tenemos panel global)
    console.error('[SwiperErrorBoundary]', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-300 rounded bg-red-50 text-red-700 text-sm" role="alert">
          Error en carrusel: {this.state.msg}
        </div>
      );
    }
    return this.props.children;
  }
}

const OtrosServicios: React.FC = React.memo(() => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleFormRedirect = useCallback(() => {
    document.getElementById('contacto')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    // Solo scroll, sin evento de lead que genere costo
  }, []);

  return (
    <section id="otros-servicios" aria-labelledby="otros-servicios-title" className="py-6 bg-gray-50" style={{ display: 'none' }}>
      <div className="container-custom">
        {/* Sección de otros servicios */}
        <div className="text-center mb-6">
          <h3 id="otros-servicios-title" className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Otros servicios
          </h3>
          <p className="text-gray-600 mt-2">Servicios complementarios pensados para mantener tu piscina en perfecto estado.</p>
        </div>

  <div className="mb-6 relative">
          {/* Botones navegación personalizados (desktop) */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-10 w-12 h-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-[0_0_12px_2px_rgba(14,165,233,0.55)] hover:bg-primary-600 hover:shadow-[0_0_18px_4px_rgba(14,165,233,0.70)] transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-10 w-12 h-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-[0_0_12px_2px_rgba(14,165,233,0.55)] hover:bg-primary-600 hover:shadow-[0_0_18px_4px_rgba(14,165,233,0.70)] transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80"
          >
            <span aria-hidden="true">›</span>
          </button>
          {/* Swiper con navegación y paginación externa (los bullets se muestran debajo) */}
          <SwiperErrorBoundary>
            <Swiper
              modules={[A11y, Keyboard]}
              onSwiper={(sw) => { swiperRef.current = sw; }}
              onSlideChange={(swiper) => setActive(swiper.activeIndex)}
              keyboard={{ enabled: true }}
              a11y={{ enabled: true }}
              slidesPerView={1}
              spaceBetween={24}
              className="!py-4 min-h-[300px]"
            >
            {slides.map((s) => (
              <SwiperSlide key={s.title}>
                <div className="max-w-3xl mx-auto h-auto md:h-[280px] bg-white rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-5 md:h-full flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h4>
                      <p className="text-gray-600 mb-4">{s.description}</p>
                      {s.features && (
                        <ul className="mt-2 space-y-2 text-sm text-gray-600 mb-3">
                          {s.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-400 mt-0.5">✅</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleFormRedirect}
                        className="w-full md:inline-flex mt-3 md:mt-0 items-center justify-center px-4 py-2 rounded-lg bg-amber-400 text-gray-900 text-sm font-semibold shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition uppercase"
                        aria-label={`Quiero mi piscina saludable - ${s.title}`}
                      >
                        {s.buttonText || 'Quiero mi piscina saludable'}
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 h-48 md:h-[280px]">
                    <img
                      src={s.img}
                      alt={s.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </SwiperErrorBoundary>
          {/* Paginación personalizada sin estilos absolutos de Swiper */}
          <div className="otros-bullet-zone mt-4 md:mt-6" aria-label="Paginación carrusel otros servicios">
            <div className="flex justify-center">
              {slides.map((_, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir al slide ${i + 1}`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => swiperRef.current?.slideTo(i)}
                    className={`mx-2 w-3 h-3 rounded-full transition-all duration-200 outline-none focus-visible:ring focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer ${isActive ? 'bg-amber-400 scale-125 opacity-100' : 'bg-amber-400/60 opacity-55 hover:opacity-80'} `}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OtrosServicios.displayName = 'OtrosServicios';
export default OtrosServicios;
