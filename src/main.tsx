import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
// Estilos Swiper ya se importan vía index.css (@import 'swiper/css'; ...)
// Nota: pagination no se usa; se dejó fuera para reducir bundle
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
