import React, { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * Testimonials Component - WhatsApp Screenshots Carousel
 * Evidence-Based: Real WhatsApp conversations as social proof
 * Mobile-first: 70% traffic LATAM optimization
 * Carousel design: Interactive slides like ProofGallery
 */
const Testimonials: React.FC = React.memo(() => {
  const [open, setOpen] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false
  );
  const swiperRef = useRef<SwiperType | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // WhatsApp screenshots array - REAL IMAGES NOW INCLUDED
  const whatsappScreenshots: { src: string; alt: string }[] = [
    {
      src: 'images/whatsapp/whatsapp-1.jpg',
      alt: 'Conversación WhatsApp - Cliente satisfecho con limpieza de piscina'
    },
    {
      src: 'images/whatsapp/whatsapp-2.jpg',
      alt: 'Testimonio WhatsApp - Servicio rápido y profesional'
    },
    {
      src: 'images/whatsapp/whatsapp-3.jpg',
      alt: 'Reseña WhatsApp - Calidad garantizada en La Molina'
    },
    {
      src: 'images/whatsapp/whatsapp-4.jpg',
      alt: 'Comentario WhatsApp - Atención personalizada'
    },
    {
      src: 'images/whatsapp/whatsapp-5.jpg',
      alt: 'Mensaje WhatsApp - Resultados excepcionales'
    },
    {
      src: 'images/whatsapp/whatsapp-6.jpg',
      alt: 'Conversación WhatsApp - Recomendación de cliente'
    },
    {
      src: 'images/whatsapp/whatsapp-7.jpg',
      alt: 'Testimonio WhatsApp - Servicio confiable'
    },
    {
      src: 'images/whatsapp/whatsapp-8.jpg',
      alt: 'Reseña WhatsApp - Excelente mantenimiento'
    },
    {
      src: 'images/whatsapp/whatsapp-9.jpg',
      alt: 'Comentario WhatsApp - Satisfacción total'
    }
  ];

  // Escape listener for lightbox
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Desktop: disable drag/touch, enable arrows only
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.matchMedia('(min-width: 1024px)').matches;
      setIsDesktop(desktop);
      if (swiperRef.current) {
        swiperRef.current.allowTouchMove = !desktop;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (index: number, event: React.MouseEvent) => {
    if (isDesktop) {
      const slideElement = (event.currentTarget as HTMLElement).closest('.swiper-slide');
      if (slideElement && !slideElement.classList.contains('swiper-slide-active')) return;
    }
    setOpen(index);
  };

  // Dynamic mobile progress-based transforms (same as ProofGallery)
  useEffect(() => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (isDesktop) return;
    const mq = window.matchMedia('(max-width: 639px)');
    if (!mq.matches) return;
    const wrapperEl = wrapperRef.current;
    wrapperEl?.classList.add('pg-mobile-dyn');
    const root = wrapperEl?.querySelector('.testimonials-swiper') as HTMLElement | null;
    const styles = root ? getComputedStyle(root) : null;
    const ACTIVE_SCALE = styles ? parseFloat(styles.getPropertyValue('--pg-active-scale') || '1.06') : 1.06;
    const SIDE_SCALE = styles ? parseFloat(styles.getPropertyValue('--pg-side-scale') || '0.66') : 0.66;
    const BASE_SHIFT = styles ? parseFloat((styles.getPropertyValue('--pg-side-shift-max') || styles.getPropertyValue('--pg-side-shift') || '40%').replace('%','')) : 40;
    const SIDE_OPACITY = 0.50;
    const SIDE_BRIGHT = 0.60;
    const SIDE_SAT = 0.85;
    const ACTIVE_BRIGHT = 1.0;
    const ACTIVE_SAT = 1.05;
    const apply = () => {
      sw.slides.forEach((slideEl: HTMLElement) => {
        const progress = (slideEl as { progress?: number }).progress ?? 2;
        const p = Math.max(-1, Math.min(1, progress));
        const t = 1 - Math.abs(p);
        const e = Math.pow(t, 0.85);
        const scale = SIDE_SCALE + (ACTIVE_SCALE - SIDE_SCALE) * e;
        const shiftMagnitude = BASE_SHIFT * (1 - e);
        const direction = p > 0 ? -1 : 1;
        const shift = shiftMagnitude * direction;
        const opacity = SIDE_OPACITY + (1 - SIDE_OPACITY) * e;
        const bright = SIDE_BRIGHT + (ACTIVE_BRIGHT - SIDE_BRIGHT) * e;
        const sat = SIDE_SAT + (ACTIVE_SAT - SIDE_SAT) * e;
        const inner = slideEl.querySelector('.slide-inner') as HTMLElement | null;
        if (!inner) return;
        inner.style.transform = `translateX(${shift}%) scale(${scale})`;
        inner.style.opacity = opacity.toString();
        inner.style.zIndex = (10 + Math.round(e * 20)).toString();
        inner.style.filter = `brightness(${bright}) saturate(${sat})`;
        const caption = inner.querySelector('.pg-caption') as HTMLElement | null;
        if (caption) {
          caption.style.opacity = e > 0.90 ? '1' : '0';
          caption.style.pointerEvents = e > 0.90 ? 'auto' : 'none';
        }
      });
    };
    const onProgress = () => apply();
    const onSetTranslate = () => apply();
    const onTouchStart = () => { wrapperEl?.classList.add('pg-touching'); };
    const onTouchEnd = () => { wrapperEl?.classList.remove('pg-touching'); apply(); };
    sw.on('progress', onProgress);
    sw.on('setTranslate', onSetTranslate);
    sw.on('touchStart', onTouchStart);
    sw.on('touchEnd', onTouchEnd);
    apply();
    const handleResize = () => {
      const nowDesktop = window.matchMedia('(min-width: 1024px)').matches;
      if (nowDesktop) {
        sw.slides.forEach((slideEl: HTMLElement) => {
          const inner = slideEl.querySelector('.slide-inner') as HTMLElement | null;
          if (inner) {
            inner.style.transform = '';
            inner.style.opacity = '';
            inner.style.zIndex = '';
            inner.style.filter = '';
            const caption = inner.querySelector('.pg-caption') as HTMLElement | null;
            if (caption) { caption.style.opacity = ''; caption.style.pointerEvents = ''; }
          }
        });
        wrapperEl?.classList.remove('pg-mobile-dyn', 'pg-touching');
      } else {
        apply();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      sw.off('progress', onProgress);
      sw.off('setTranslate', onSetTranslate);
      sw.off('touchStart', onTouchStart);
      sw.off('touchEnd', onTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return (
    <section
      id="testimonials"
      className="py-12 lg:py-16 bg-white"
      role="region"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
          >
            Mira lo que dicen{' '}
            <span className="text-blue-600">nuestros clientes</span>
            <span className="block text-lg md:text-xl text-gray-600 font-normal mt-2">
              Desliza para ver más
            </span>
          </h2>
        </div>

        {/* WhatsApp Screenshots Carousel */}
                {/* WhatsApp Screenshots Carousel */}
        <div ref={wrapperRef} className="proof-swiper-wrapper relative pg-mobile-effect pb-4">
          {/* Navigation Arrows */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex z-20 absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white text-primary-600 shadow-lg hover:bg-gray-50 hover:shadow-xl transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span aria-hidden="true" className="text-2xl">‹</span>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex z-20 absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white text-primary-600 shadow-lg hover:bg-gray-50 hover:shadow-xl transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span aria-hidden="true" className="text-2xl">›</span>
          </button>

          <Swiper
            modules={[A11y, Keyboard, Pagination]}
            a11y={{ enabled: true }}
            keyboard={{ enabled: true }}
            centeredSlides
            slidesPerView={1.05}
            spaceBetween={0}
            watchSlidesProgress
            simulateTouch={!isDesktop}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3
            }}
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 24 }
            }}
            className="proof-swiper overflow-visible"
            aria-roledescription="carousel"
            aria-label="Testimonios de WhatsApp"
            onSwiper={(sw) => {
              swiperRef.current = sw;
              sw.allowTouchMove = !isDesktop;
            }}
          >
            {whatsappScreenshots.map((screenshot, i) => (
              <SwiperSlide key={screenshot.src} role="group" aria-label={`Testimonio ${i + 1} de ${whatsappScreenshots.length}`} className="cursor-pointer">
                <div className="slide-inner">
                  <figure
                    onClick={(e) => handleImageClick(i, e)}
                    className="relative max-w-full max-h-80 rounded-xl overflow-hidden select-none group bg-gray-50"
                  >
                    <img
                      src={`/${screenshot.src}`}
                      alt={screenshot.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto max-h-80 object-contain"
                      sizes="(max-width:640px) 280px, (max-width:1024px) 320px, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-lg mb-4">
            ¿Quieres ser el próximo cliente satisfecho?
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-gray-900 font-black px-8 py-4 rounded-2xl min-h-[56px] text-xl ring-2 ring-amber-300 shadow-[0_15px_35px_rgba(245,158,11,0.4)] transform transition duration-300 hover:scale-[1.05] active:scale-[0.98] uppercase tracking-wide"
          >
            Agenda GRATIS AHORA
          </button>
        </div>
      </div>

      {/* Lightbox for enlarged view */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={() => setOpen(null)}
        >
          <img
            src={`/${whatsappScreenshots[open].src}`}
            alt={whatsappScreenshots[open].alt}
            className="max-h-[90vh] w-auto object-contain shadow-2xl rounded-lg"
          />
        </div>
      )}
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;
