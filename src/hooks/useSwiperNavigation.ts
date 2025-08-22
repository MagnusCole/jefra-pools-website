import { useCallback, useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

/**
 * useSwiperNavigation
 * Encapsula la lógica frágil de adjuntar navegación personalizada a una instancia de Swiper.
 * Previene errores de re-inicialización y oculta detalles internos.
 *
 * Evidencia: reducir superficie de errores repetitivos → menos fallos por mutaciones tardías.
 */
export interface UseSwiperNavigationReturn {
  /** Callback para pasar a Swiper.onSwiper */
  handleInit: (instance: SwiperType) => void;
  /** Ref interna con instancia actual (solo lectura externa si se necesita) */
  getSwiper: () => SwiperType | null;
  /** Forzar actualización manual de navegación (raro, fallback) */
  refreshNavigation: () => void;
}

export function useSwiperNavigation(
  prevButtonRef: React.RefObject<HTMLElement | null>,
  nextButtonRef: React.RefObject<HTMLElement | null>
): UseSwiperNavigationReturn {
  const swiperRef = useRef<SwiperType | null>(null);
  const attachedRef = useRef(false);

  const attach = useCallback(() => {
    if (attachedRef.current) return;
    const swiper = swiperRef.current;
    if (!swiper) return;
    const prevEl = prevButtonRef.current;
    const nextEl = nextButtonRef.current;
    if (!prevEl || !nextEl) return; // esperar a que existan
    try {
      // Solo mutar los elementos necesarios (evita sobreescribir params)
      // @ts-expect-error Swiper internals permiten asignar
      swiper.params.navigation.prevEl = prevEl;
      // @ts-expect-error idem
      swiper.params.navigation.nextEl = nextEl;
      swiper.navigation.init();
      swiper.navigation.update();
      attachedRef.current = true;
    } catch (err) {
      console.error('[useSwiperNavigation] attach failed', err);
    }
  }, [prevButtonRef, nextButtonRef]);

  // Intentar en cada render (cheap) hasta que se adjunte
  useEffect(() => { attach(); });

  const handleInit = useCallback((instance: SwiperType) => {
    swiperRef.current = instance;
    attach();
  }, [attach]);

  const refreshNavigation = useCallback(() => {
    attachedRef.current = false;
    attach();
  }, [attach]);

  return {
    handleInit,
    getSwiper: () => swiperRef.current,
    refreshNavigation,
  };
}

export default useSwiperNavigation;