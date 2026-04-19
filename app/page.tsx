import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainCarousel from './components/MainCarousel';
import Schedule from './components/Schedule';
import NewsCarousel from './components/NewsCarousel';
import About from './components/About';
import SponsorsSimple from './components/SponsorsSimple';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-dark">
      <Navbar />
      <main>
        <Hero />
        <MainCarousel />
        <Schedule />
        <NewsCarousel />
        <div className="under-carousels">
          <About />
          <SponsorsSimple />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
