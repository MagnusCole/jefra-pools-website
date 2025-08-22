import React from 'react';

interface VideoOverlayProps {
	src?: string;               // Ruta del video (public/...)
	poster?: string;            // Poster opcional
	className?: string;         // Clases extra para el wrapper
	tintClass?: string;         // Clases para capa de color encima del video (debajo del contenido)
	disableTint?: boolean;      // Desactivar capa por defecto
	opacityClass?: string;      // Clase Tailwind para opacidad del video (ej: opacity-40)
}

/**
 * VideoOverlay decorativo para fondo secciones.
 * - No captura interacción (pointer-events-none)
 * - Accesible: aria-hidden porque es puramente visual
 * - Seguro: si falla el video se mantiene el color de fondo de la sección
 */
const VideoOverlay: React.FC<VideoOverlayProps> = React.memo(({ 
	src = '/videos/caustics.mp4',
	poster,
	className = '',
	// Menor opacidad y tint más suave para apariencia de "animación" sobre color base
	tintClass = 'absolute inset-0 bg-primary-700/30 mix-blend-multiply',
	disableTint,
	opacityClass = 'opacity-25',
}) => {
	return (
		<div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
					<video
						className={`w-full h-full object-cover object-center ${opacityClass}`}
				src={src}
				poster={poster}
				playsInline
				muted
				loop
				autoPlay
				preload="metadata"
			/>
			{!disableTint && <div className={tintClass} />}
		</div>
	);
});

VideoOverlay.displayName = 'VideoOverlay';
export default VideoOverlay;
