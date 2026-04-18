import { EquipeCarousel, ConquistasCarousel } from './HeroCarousel';

export default function EquipeConquistasCarousels() {
  return (
    <section id="main-carousels" className="main-carousels-section">
      <div className="main-carousels-container">
        <div className="news-carousel-header">
          <h2 className="news-carousel-title">
            A <span className="news-carousel-title-gold">Equipe</span>
          </h2>
          <div className="news-carousel-divider" />
        </div>
        <div className="main-carousels-list">
          <div className="main-carousels-card">
            <EquipeCarousel />
          </div>
          <div className="main-carousels-card">
            <h2 className="news-carousel-title">
              <span className="news-carousel-title-gold">Conquistas</span>
            </h2>
            <div className="news-carousel-divider" />
            <ConquistasCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
