import { CheckBadgeIcon, HeartIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/solid';
import React, { useCallback } from 'react';
import { WHATSAPP_PHONE } from '../config/contact';
import VideoOverlay from './VideoOverlay';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Benefits Component - Evidence-Based Emotional Psychology
 * Research: Emotional benefits → 20-35% engagement boost Hispanic markets
 * Focus: Family safety + social status + peace of mind
 * Mobile-first: 70% traffic LATAM optimization
 */
const Benefits: React.FC = React.memo(() => {
  // WhatsApp integration (consistent across components)
  const handleWhatsAppClick = useCallback(() => {
  const message = "¡Hola JefraPool! Quiero agendar mi visita técnica GRATIS + 1 limpieza extra para mantenimiento.";
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // (removed unused benefits list to keep component lean)

  return (





    <section id="beneficios" aria-labelledby="benefits-title" className="relative py-14 bg-primary-600 overflow-hidden">
      <VideoOverlay />
      <div className="relative z-10 container-custom">
        <div className="text-center mb-8 text-white">
          <h2 id="benefits-title" className="text-3xl md:text-4xl font-black">
            Beneficios garantizados
          </h2>
          <p className="opacity-90 mt-1">Lo esencial para una piscina perfecta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 1 */}
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-sky-100">
              <SparklesIcon className="w-8 h-8 text-sky-600" aria-hidden />
            </div>
            <h3 className="font-bold text-lg">Agua cristalina sin esfuerzo</h3>
            <p className="text-gray-600 mt-1">Disfruta tu piscina lista para usar, sin que tú hagas nada.</p>
            <p className="text-gray-600 text-sm mt-1">En menos de <span className="font-semibold">24 horas</span>.</p>
            {/* micro-CTA removed to keep a single section CTA */}
          </div>
          {/* 2 */}
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-sky-100">
              <HeartIcon className="w-8 h-8 text-sky-600" aria-hidden />
            </div>
            <h3 className="font-bold text-lg">Cuidamos a tu familia</h3>
            <p className="text-gray-600 mt-1">Baños sin irritaciones y con total tranquilidad.</p>
            <p className="text-gray-600 text-sm mt-1"><span className="font-semibold">Productos seguros</span> para tu familia.</p>
            {/* micro-CTA removed */}
          </div>
          {/* 3 */}
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-sky-100">
              <ShieldCheckIcon className="w-8 h-8 text-sky-600" aria-hidden />
            </div>
            <h3 className="font-bold text-lg">Sin preocupaciones</h3>
            <p className="text-gray-600 mt-1">Nos encargamos de todo para que no te falte tiempo libre.</p>
            <p className="text-gray-600 text-sm mt-1">Atención en <span className="font-semibold">menos de 24h</span>.</p>
            {/* micro-CTA removed */}
          </div>
          {/* 4 */}
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-sky-100">
              <CheckBadgeIcon className="w-8 h-8 text-sky-600" aria-hidden />
            </div>
            <h3 className="font-bold text-lg">Garantía de satisfacción</h3>
            <p className="text-gray-600 mt-1">Si no queda perfecta, repetimos gratis hasta dejarla impecable.</p>
            <p className="text-gray-600 text-sm mt-1"><span className="font-semibold">+100 mantenimientos</span> al mes.</p>
            {/* micro-CTA removed */}
          </div>
        </div>

    <div className="mt-8 flex justify-center">
          <button
            onClick={handleWhatsAppClick}
      className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-amber-300 text-amber-100 bg-transparent font-semibold shadow-sm hover:bg-amber-50/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 transition min-h-[48px]"
          >
      Solicitar gratis mi inspección
      <FaWhatsapp className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
});

Benefits.displayName = 'Benefits';
export default Benefits;
