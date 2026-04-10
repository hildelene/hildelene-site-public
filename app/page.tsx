import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsCarousel from './components/NewsCarousel';
import About from './components/About';
import Projects from './components/Projects';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-dark">
      <Navbar />
      <main>
        <Hero />
        <NewsCarousel />
        <About />
        <Projects />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
