import React, { useEffect, useRef } from 'react';

interface VideoOverlayProps {
  src: string; // relative to public/ or absolute URL
  opacity?: number; // 0..1
  playbackRate?: number; // speed of playback
  poster?: string; // optional poster image
  /** scale = 1.2 means 120% width/height (zoom) */
  scale?: number;
  /** objectPosition controls where the video is anchored, e.g. 'center', 'right center' */
  objectPosition?: string;
}

// VideoOverlay: renders a looping muted background video as a semi-transparent overlay.
// Usage: place video in public/videos/caustics.mp4 then <VideoOverlay src="/videos/caustics.mp4" opacity={0.12} playbackRate={1.0} />
const VideoOverlay: React.FC<VideoOverlayProps> = ({ src, opacity = 0.12, playbackRate = 1.0, poster, scale = 1.2, objectPosition = 'center' }) => {
  // Inline style for configurable opacity
  const style: React.CSSProperties = {
    opacity,
  };

  const ref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    try {
      v.playbackRate = playbackRate;
    } catch (e) {
      // ignore on browsers that disallow
    }
  }, [playbackRate]);

  const offsetPercent = (scale - 1) * 50; // e.g. scale=1.2 -> offset 10%

  // parse objectPosition (e.g. 'center right', 'top left') into horizontal/vertical
  const [horizontalRaw, verticalRaw] = objectPosition.split(' ').length === 2
    ? [objectPosition.split(' ')[0], objectPosition.split(' ')[1]]
    : [objectPosition.split(' ')[0] || 'center', 'center'];

  // normalize keywords (acceptable values: left/center/right and top/center/bottom)
  const horizontal = ['left', 'center', 'right'].includes(horizontalRaw) ? horizontalRaw : 'center';
  const vertical = ['top', 'center', 'bottom'].includes(verticalRaw) ? verticalRaw : 'center';

  const tx = horizontal === 'left' ? offsetPercent : horizontal === 'right' ? -offsetPercent : 0;
  const ty = vertical === 'top' ? offsetPercent : vertical === 'bottom' ? -offsetPercent : 0;

  const videoStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: `${scale * 100}%`,
    height: `${scale * 100}%`,
    // move from center and offset towards the requested focal area
    transform: `translate(calc(-50% + ${tx}% ), calc(-50% + ${ty}%))`,
    objectPosition,
    objectFit: 'cover',
  };

  return (
    <div className="video-overlay" style={style} aria-hidden="true">
      <video
        ref={ref}
        src={src}
        className="video-overlay__video"
        style={videoStyle}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        // disabling pointer events above ensures clicks pass through
      />
    </div>
  );
};

export default React.memo(VideoOverlay);
