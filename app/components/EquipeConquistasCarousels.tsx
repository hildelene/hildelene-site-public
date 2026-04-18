import { EquipeCarousel, ConquistasCarousel } from './HeroCarousel';

export default function EquipeConquistasCarousels() {
  return (
    <section id="main-carousels" className="py-20 bg-navy-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            <span className="text-gold">Equipe</span> & <span className="text-gold">Conquistas</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto" />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-navy-dark border border-gold/20 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 h-full flex flex-col group p-4">
              <h3 className="text-cream font-bold text-2xl mb-4 text-center">Equipe</h3>
              <EquipeCarousel />
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-navy-dark border border-gold/20 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 h-full flex flex-col group p-4">
              <h3 className="text-cream font-bold text-2xl mb-4 text-center">Conquistas</h3>
              <ConquistasCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
