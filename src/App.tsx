// React imports
import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

// Components imports
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import HeroFunnel from './components/HeroFunnel';
import Process from './components/Process';
import ContactForm from './components/ContactForm';

// Lazy loaded components for performance optimization
const ProofGallery = lazy(() => import('./components/ProofGallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const OtrosServicios = lazy(() => import('./components/OtrosServicios'));

/**
 * Main App Component
 * Landing page for JefraPools - Pool cleaning service in La Molina, Lima
 * Optimized for conversion: visitor → WhatsApp lead
 */
function App() {

  return (
    <div className="App">
      {/* SEO and Meta Tags */}
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

      {/* Main Content */}
      <main>
        {/* Hero Section - First impression and main CTA */}
        <HeroFunnel />
        
        {/* Benefits Section - Why choose us */}
        <Benefits />
        
        {/* Process Section - How we work */}
        <Process />

        {/* Other Services Carousel - Complementary offerings */}
        <Suspense fallback={<div className="container-custom py-8 text-center text-gray-500">Cargando servicios…</div>}>
          <OtrosServicios />
        </Suspense>
        
        {/* Proof Gallery - Before/after photos (lazy loaded) */}
        <Suspense fallback={<div className="container-custom py-8 text-center text-gray-500">Cargando pruebas…</div>}>
          <ProofGallery />
        </Suspense>
        
        {/* Testimonials - Social proof (lazy loaded) */}
        <Suspense fallback={<div className="container-custom py-8 text-center text-gray-500">Cargando testimonios…</div>}>
          <Testimonials />
        </Suspense>
        
        {/* FAQ Section - Address objections */}
        <FAQ />

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Agenda tu cita hoy mismo
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo en minutos.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      
      {/* Footer intentionally omitted for focus and speed */}
    </div>
  );
}

export default App;
