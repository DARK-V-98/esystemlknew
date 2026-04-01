import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Background from './components/Background';
import Footer from './components/Footer';
import SEO from './components/SEO';
import UpdateNotice from './components/UpdateNotice';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load sections for performance
const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Process = lazy(() => import('./components/Process'));
const Stats = lazy(() => import('./components/Stats'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Pricing = lazy(() => import('./components/Pricing'));
const Blog = lazy(() => import('./components/Blog'));
const CTA = lazy(() => import('./components/CTA'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <SEO />
        <UpdateNotice />
        <div className="bg-background text-foreground font-sans selection:bg-accent selection:text-white">
          <Preloader />
          <Background />
          <Navbar />
          <main>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Hero />
              <Stats />
              <Skills />
              <Services />
              <Portfolio />
              <Process />
              <Testimonials />
              <FAQ />
              <Pricing />
              <Blog />
              <CTA />
              <About />
              <Contact />
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}
