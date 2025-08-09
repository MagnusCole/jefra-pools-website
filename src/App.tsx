import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import HeroClean from './components/HeroClean';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>JefraPools - Limpieza de Piscinas en La Molina, Lima | Servicio Profesional</title>
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
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="JefraPools - Limpieza de Piscinas en La Molina" />
        <meta property="twitter:description" content="Servicio profesional de limpieza y mantenimiento de piscinas en La Molina, Lima. Cotización gratuita." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0891b2" />
      </Helmet>

      <Header />
      <main>
        <HeroClean />
        <Gallery />
        <Benefits />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
