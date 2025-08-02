/// <reference types="vite/client" />

// Global type declarations for analytics
declare global {
  const gtag: (command: string, action: string, parameters: Record<string, string | number>) => void;
  interface Window {
    gtag: (command: string, action: string, parameters: Record<string, string | number>) => void;
  }
}

export {};
