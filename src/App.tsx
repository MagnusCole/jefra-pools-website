import { Helmet } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import { trackLead } from './utils/tracking';
import HeroFunnel from './components/HeroFunnel';
import OfferBanner from './components/OfferBanner';
import Benefits from './components/Benefits';
import Process from './components/Process';
import MidCTA from './components/MidCTA';
import FAQ from './components/FAQ';
// Removed OfferBanner, WhatsAppFloat, and StickyFooterCTA per request

const ProofGallery = lazy(() => import('./components/ProofGallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>JefraPools - Limpieza de Piscinas en La Molina, Lima | Servicio Profesional</title>
  <link rel="canonical" href="https://jefrapools.com/" />
        <meta 
          name="description" 
          content="JefraPools - Servicio profesional de limpieza y mantenimiento de piscinas en La Molina, Lima. Más de 200 clientes satisfechos. Cotización gratuita y sin compromiso."
        />
        <meta name="keywords" content="limpieza piscinas La Molina, mantenimiento piscinas Lima, JefraPools, servicio piscinas profesional, químicos piscina Lima" />
        <meta name="author" content="JefraPools - Servicios de Limpieza de Piscinas" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
  <meta property="og:title" content="JefraPools - Limpieza de Piscinas en La Molina, Lima" />
        <meta property="og:description" content="Servicio profesional de limpieza y mantenimiento de piscinas en La Molina. Más de 200 clientes satisfechos. Cotización gratuita." />
  <meta property="og:image" content="/pool-real.jpg" />
  <meta property="og:url" content="https://jefrapools.com/" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="JefraPools - Limpieza de Piscinas en La Molina" />
        <meta property="twitter:description" content="Servicio profesional de limpieza y mantenimiento de piscinas en La Molina, Lima. Cotización gratuita." />
  <meta property="twitter:image" content="/pool-real.jpg" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0891b2" />
      </Helmet>

  <main>
        {/* Top offer banner */}
        <OfferBanner />
        {/* Funnel hero */}
        <HeroFunnel />
        {/* Proceso de limpieza */}
  <Process />
        {/* Concrete benefits */}
  <Benefits />
  {/* Proof */}
        <Suspense fallback={<div className="container-custom py-8 text-center text-gray-500">Cargando pruebas…</div>}>
          <ProofGallery />
        </Suspense>
        {/* Mid-page CTA */}
        <MidCTA />
        {/* Testimonials short */}
        <Suspense fallback={<div className="container-custom py-8 text-center text-gray-500">Cargando testimonios…</div>}>
          <Testimonials />
        </Suspense>
        {/* FAQ objections */}
        <FAQ />

  {/* Final CTA repeat (primary) */}
  <section aria-labelledby="final-cta-title" className="py-10 bg-white">
          <div className="container-custom text-center">
            <h2 id="final-cta-title" className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Agenda tu inspección sin costo
            </h2>
            <p className="text-gray-600">La Molina y alrededores • Respuesta en minutos</p>
            <p className="text-gray-700 text-lg mt-1 mb-5">Recupera tu tiempo y disfruta tu piscina sin preocupaciones.</p>
            <button
              onClick={() => {
                const phone = '51999888777';
    const msg = 'Hola JefraPools, quiero reservar mi limpieza GRATIS ahora. ¿Pueden atender hoy en La Molina?';
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
                trackLead('final-cta');
              }}
        className="inline-flex items-center justify-center px-9 py-5 rounded-2xl bg-amber-400 text-gray-900 font-extrabold shadow-[0_10px_25px_rgba(245,158,11,0.45)] hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition min-h-[56px] text-xl"
        aria-label="Reservar mi limpieza GRATIS ahora"
            >
        📞 RESERVAR MI LIMPIEZA GRATIS AHORA
            </button>
          </div>
        </section>
      </main>
  {/* Footer intentionally omitted for focus and speed */}
    </div>
  );
}

export default App;
