import React, { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { WHATSAPP_PHONE } from '../config/contact';

type Slide = {
  title: string;
  description: string;
  img: string;
  alt: string;
  features?: string[];
};

const slides: Slide[] = [
  {
    title: 'Construcción',
    description: 'Soluciones desde obra nueva hasta reformas de terminación.',
  img: '/images/construction.png',
    alt: 'Construcción de piscina',
    features: [
  'Diseño personalizado según espacio y uso.',
  'Materiales antideslizantes y garantía de acabado.',
    ],
  },
  {
    title: 'Ionización de agua',
    description: 'Tecnologías para mantener agua estable y reducir químicos.',
    img: '/images/ionizador.png',
    alt: 'Ionización de agua en piscina',
    features: [
  'Menos químicos: agua más estable y cristalina.',
  'Ahorro en cloro y mantenimiento a medio plazo.',
    ],
  },
  {
    title: 'Reparación',
    description: 'Cartuchos de filtro, limpieza express deck/borde y reparaciones menores.',
    img: '/images/reparacion.png',
    alt: 'Reparación de filtro',
    features: [
  'Diagnóstico rápido y presupuesto claro.',
  'Repuestos originales o equivalentes certificados.',
    ],
  },
  {
    title: 'Servicios generales',
    description: 'Mantenimiento interno en seco y reparaciones preventivas.',
    img: '/images/servicios-generales.png',
    alt: 'Mantenimiento general de piscina',
  },
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

  return (
    <section id="otros-servicios" aria-labelledby="otros-servicios-title" className="py-6 bg-gray-50">
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
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-10 w-12 h-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-sky-400 shadow-[0_0_12px_2px_rgba(14,165,233,0.55)] hover:shadow-[0_0_16px_3px_rgba(14,165,233,0.70)] transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-10 w-12 h-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-sky-400 shadow-[0_0_12px_2px_rgba(14,165,233,0.55)] hover:shadow-[0_0_16px_3px_rgba(14,165,233,0.70)] transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
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
                        onClick={() => handleWhatsAppClickInner(s.title)}
                        className="w-full md:inline-flex mt-3 md:mt-0 items-center justify-center px-4 py-2 rounded-lg bg-amber-400 text-gray-900 text-sm font-semibold shadow hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition"
                        aria-label={`RESERVAR GRATIS AHORA - ${s.title}`}
                      >
                        RESERVAR GRATIS AHORA
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

// Shared WhatsApp handler
const handleWhatsAppClickInner = (service?: string) => {
  const phone = WHATSAPP_PHONE;
  const message = service
    ? `Hola JefraPools, quiero reservar gratis ahora para: ${service}`
    : 'Hola JefraPools, quiero reservar gratis ahora para mi piscina.';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
};

OtrosServicios.displayName = 'OtrosServicios';
export default OtrosServicios;
