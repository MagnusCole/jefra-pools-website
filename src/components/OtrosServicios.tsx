import React, { useRef } from 'react';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
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

const OtrosServicios: React.FC = React.memo(() => {
  return (
    <section id="otros-servicios" aria-labelledby="otros-servicios-title" className="py-6 bg-gray-50">
      <div className="container-custom">
  {/* Custom navigation buttons controlled via refs to avoid default text rendering issues */}
        <div className="text-center mb-6">
          <h3 id="otros-servicios-title" className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Otros servicios
          </h3>
          <p className="text-gray-600 mt-2">Servicios complementarios pensados para mantener tu piscina en perfecto estado.</p>
        </div>

        <div className="mb-6 relative">
          <CustomNavSwiper />
        </div>

        
      </div>
    </section>
  );
});

// Extracted to isolate navigation logic
const CustomNavSwiper: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ el: paginationRef.current, clickable: true, renderBullet: (i, cls) => `<span class='${cls} otros-custom-bullet' aria-label='Slide ${i + 1}'></span>` }}
        onBeforeInit={(swiper) => {
          // @ts-expect-error dynamic assign
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error dynamic assign
          swiper.params.navigation.nextEl = nextRef.current;
          // @ts-expect-error dynamic assign
          swiper.params.pagination.el = paginationRef.current;
        }}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        slidesPerView={1}
        spaceBetween={24}
        className="!py-4"
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
  {/* Custom nav buttons (only set we render) */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Anterior"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-md border border-primary-500 bg-white/80 text-primary-600 font-bold items-center justify-center shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition select-none z-10"
      >
        <span aria-hidden="true" className="text-xl">&#60;</span>
      </button>
      <button
        ref={nextRef}
        type="button"
        aria-label="Siguiente"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-md border border-primary-500 bg-white/80 text-primary-600 font-bold items-center justify-center shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition select-none z-10"
      >
        <span aria-hidden="true" className="text-xl">&#62;</span>
      </button>
  <div ref={paginationRef} id="otros-servicios-pagination" className="mt-4 flex justify-center" />
    </div>
  );
};

// Shared WhatsApp handler used inside extracted component
const handleWhatsAppClickInner = (service?: string) => {
  const phone = WHATSAPP_PHONE;
  const message = service
    ? `Hola JefraPools, quiero reservar gratis ahora para: ${service}`
    : 'Hola JefraPools, quiero reservar gratis ahora para mi piscina.';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
};

OtrosServicios.displayName = 'OtrosServicios';
export default OtrosServicios;
