import React, { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoOverlay from './VideoOverlay';

// Minimal proof gallery using public/images assets with captions
const images: { src: string; caption: string }[] = [
  { src: 'images/3a6bd5ad-729a-49c3-a9e5-07b6b40d7acf.jpg', caption: 'Recuperación de brillo' },
  { src: 'images/7482029c-d9f0-4c51-b951-6985d88550d4.jpg', caption: 'Balanceo químico' },
  { src: 'images/a37b0152-c7c2-43a6-8095-8ed1fb416b49.jpg', caption: 'Mantenimiento semanal' },
  { src: 'images/aadf19d5-b8ee-4901-b8a2-1acc7f09162b.jpg', caption: 'Limpieza completa' },
  { src: 'images/Construccion2.png', caption: 'Construcción' },
  { src: 'images/ad2639cd-5294-4eab-bd0b-eed2e85cdeb0.jpg', caption: 'Filtrado y cepillado' },
  { src: 'images/aed6151e-23b6-419b-93e0-033abe1d207c.jpg', caption: 'Agua cristalina' },
  { src: 'images/b03a52b6-923b-4a69-a5e2-6477b652c813.jpg', caption: 'Hogar familiar' },
  { src: 'images/b651ee56-0c98-4bc4-8d01-87ee3d7bc715.jpg', caption: 'Mantenimiento preventivo' },
  { src: 'images/d00dd42c-080d-43bc-ac1f-fc21367258a9.jpg', caption: 'Shock de limpieza' },
  { src: 'images/d0b8119c-04fc-4b77-a8ec-9c9f4d7f4331.jpg', caption: 'Listo para usar' },
  { src: 'images/d5366dfa-97e8-473e-9286-c70af2b7adf0.jpg', caption: 'Agua perfecta' },
  { src: 'images/piscina-gozu.png', caption: 'Condominio' },
  { src: 'images/fb922e80-a67e-4d6d-a188-679e111f5554.jpg', caption: 'Detalle cristalino' },
  { src: 'images/fd186c97-4c8d-4ef2-a4d4-5b13f36140c3.jpg', caption: 'Post-mantenimiento' },
  { src: 'images/piscina-pacman.png', caption: 'Limpieza en condominio' },
];

// Componente interno para video adaptativo (detecta orientación)
interface AdaptiveVideoProps {
  src: string;
  poster?: string;
  borderClass?: string;
}

const AdaptiveVideo: React.FC<AdaptiveVideoProps> = ({ src, poster, borderClass }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [portrait, setPortrait] = useState(false);
  const handleMeta = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.videoWidth && v.videoHeight) {
      setPortrait(v.videoHeight > v.videoWidth);
    }
  };
  const baseVideoClasses = 'w-full object-cover block';
  /* Contenedores cuadrados para consistencia PC/móvil (recorte centrado) */
  const landscapeSizing = 'aspect-square';
  const portraitSizing = 'aspect-square';
  return (
    <figure className={`relative rounded-lg overflow-hidden shadow-md border ${borderClass || 'border-sky-100'} bg-black/5`}>
      <video
        ref={videoRef}
        className={`${baseVideoClasses} ${portrait ? portraitSizing : landscapeSizing}`}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        muted
        loop
        autoPlay
        controls
        onLoadedMetadata={handleMeta}
      />
    </figure>
  );
};

const ProofGallery: React.FC = React.memo(() => {
  const [open, setOpen] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false
  );
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Escape listener for lightbox
  const swiperRef = useRef<SwiperType | null>(null);
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
        swiperRef.current.allowTouchMove = !desktop; // false en desktop, true en mobile
      }
    };

    // Set initial state
    handleResize();
    
    // Listen for window resize
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

  // Dynamic mobile progress-based transforms (restaurado)
  useEffect(() => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (isDesktop) return;
    const mq = window.matchMedia('(max-width: 639px)');
    if (!mq.matches) return;
    const wrapperEl = wrapperRef.current;
    wrapperEl?.classList.add('pg-mobile-dyn');
    const root = wrapperEl?.querySelector('.proof-swiper') as HTMLElement | null;
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
          }
          const caption = slideEl.querySelector('.pg-caption') as HTMLElement | null;
          if (caption) { caption.style.opacity = ''; caption.style.pointerEvents = ''; }
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

  const few = images.length < 3;

  return (
    <section id="trabajos" aria-labelledby="proof-title" className="relative pt-8 pb-16 bg-primary-600 overflow-hidden">
      <VideoOverlay />
      <div className="relative z-10 container-custom">
        <div className="text-center mb-8">
          <h2 id="proof-title" className="text-3xl md:text-4xl font-black text-white">
            ¿Aún dudas? 🤔
          </h2>
          <p className="text-white/90 mt-2">Mira nuestros resultados</p>
        </div>

        {/* Bloque videos antes / después (adaptativo orientación) - OCULTADO TEMPORALMENTE */}
        <div className="hidden mb-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-center">
              <AdaptiveVideo src="/videos/antes.mp4" poster="/pool.png" borderClass="border-sky-100" />
              <p className="mt-2 text-sm font-semibold text-gray-700 tracking-wide uppercase">Antes</p>
            </div>
            <div className="flex flex-col items-center">
              <AdaptiveVideo src="/videos/despues.mp4" poster="/pool-real.jpg" borderClass="border-emerald-100" />
              <p className="mt-2 text-sm font-semibold text-gray-700 tracking-wide uppercase">Después</p>
            </div>
          </div>
        </div>

        <div ref={wrapperRef} className={`proof-swiper-wrapper ${few ? 'few' : ''} relative pg-mobile-effect`}>
          {/* Arrows (desktop) */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex z-20 absolute top-1/2 -translate-y-1/2 left-2 w-11 h-11 items-center justify-center rounded-full bg-white text-primary-600 shadow-[0_0_10px_2px_rgba(255,255,255,0.55)] hover:bg-gray-100 hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.65)] transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex z-20 absolute top-1/2 -translate-y-1/2 right-2 w-11 h-11 items-center justify-center rounded-full bg-white text-primary-600 shadow-[0_0_10px_2px_rgba(255,255,255,0.55)] hover:bg-gray-100 hover:shadow-[0_0_16px_4px_rgba(255,255,255,0.65)] transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80"
          >
            <span aria-hidden="true">›</span>
          </button>
          <Swiper
            modules={[A11y, Keyboard]}
            a11y={{ enabled: true }}
            keyboard={{ enabled: true }}
            centeredSlides
            /* Restaurado baseline estable anterior */
            slidesPerView={1.15}
            spaceBetween={0}
            watchSlidesProgress
            simulateTouch={!isDesktop}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 18 }
            }}
            className="proof-swiper overflow-visible"
            aria-roledescription="carousel"
            aria-label="Galería de resultados"
            onSwiper={(sw) => { 
              swiperRef.current = sw;
              // Set initial allowTouchMove based on current screen size
              sw.allowTouchMove = !isDesktop;
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={img.src} role="group" aria-label={`Trabajo ${i + 1} de ${images.length}`} className="cursor-pointer">
                <div className="slide-inner">
                  <figure
                    onClick={(e) => handleImageClick(i, e)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden select-none group"
                  >
                    <img
                      src={`/${img.src}`}
                      alt={img.caption}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                      sizes="(max-width:640px) 75vw, (max-width:1024px) 45vw, 30vw"
                    />
                    <figcaption className="pg-caption text-[11px] sm:text-xs text-white font-semibold bg-black/60 px-2 py-1 rounded">
                      {img.caption}
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {open !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Imagen ampliada"
            onClick={() => setOpen(null)}
          >
            <img
              src={`/${images[open].src}`}
              alt={images[open].caption}
              className="max-h-[85vh] w-auto object-contain shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
});

ProofGallery.displayName = 'ProofGallery';
export default ProofGallery;
