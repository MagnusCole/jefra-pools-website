// Allow importing plain CSS files in TypeScript (Vite + React)
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Specific declarations for Swiper's CSS entrypoints to satisfy tsc
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';

export {};
