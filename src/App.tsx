import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Limpieza de Piscinas Profesional | Piscina libre de algas y bacterias</title>
        <meta 
          name="description" 
          content="Servicio profesional de limpieza y mantenimiento de piscinas. Piscina libre de algas y bacterias, lista para las visitas. Cotización gratuita."
        />
        <meta name="keywords" content="limpieza piscinas, mantenimiento piscinas, químicos piscina, servicio piscinas" />
        <meta name="author" content="Servicios de Limpieza de Piscinas" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Limpieza de Piscinas Profesional" />
        <meta property="og:description" content="Servicio profesional de limpieza y mantenimiento de piscinas. Cotización gratuita." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Limpieza de Piscinas Profesional" />
        <meta property="twitter:description" content="Servicio profesional de limpieza y mantenimiento de piscinas. Cotización gratuita." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0891b2" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Problems />
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
