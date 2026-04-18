import { EquipeCarousel, ConquistasCarousel } from './HeroCarousel';

export default function EquipeConquistasCarousels() {
  return (
    <section id="main-carousels" className="main-carousels-section">
      <div className="main-carousels-container">
        <div className="main-carousels-header">
          <h2 className="main-carousels-title">A <span className="main-carousels-title-gold">Equipe</span></h2>
          <div className="main-carousels-divider" />
        </div>
        <div className="main-carousels-list">
          <div className="main-carousels-card">
            <EquipeCarousel />
          </div>
          <div className="main-carousels-card">
            <h2 className="main-carousels-card-title">Conquistas</h2>
            <ConquistasCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
