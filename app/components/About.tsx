export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            Sobre a <span className="about-title-highlight">Hildelene</span>
          </h2>
          <div className="about-divider" />
          <p className="about-text">
            A Hildelene Nautidesign e uma equipe de engenheiros, designers e inovadores apaixonados por evoluir a engenharia naval. Combinamos tecnologia de ponta com conhecimento maritimo tradicional para criar embarcacoes que ampliam os limites do que e possivel.
          </p>
          <p className="about-text">
            Nossa missao e demonstrar excelencia em engenharia por meio de inovacao, colaboracao e precisao. Cada projeto que desenvolvemos representa nosso compromisso com sustentabilidade, desempenho e avancos tecnologicos no setor naval.
          </p>
          <p className="about-text">
            Do projeto e simulacao aos testes e implementacao, nossa equipe integra competencias diversas para resolver desafios complexos e entregar solucoes relevantes.
          </p>
          {/* Core Values */}
          <div className="about-values-grid">
            <div className="about-value-card">
              <h3 className="about-value-title">Innovation</h3>
              <p className="about-value-text">Superando limites com ideias transformadoras</p>
            </div>
            <div className="about-value-card">
              <h3 className="about-value-title">Excelencia</h3>
              <p className="about-value-text">Busca constante pela qualidade em cada detalhe</p>
            </div>
            <div className="about-value-card">
              <h3 className="about-value-title">Colaboracao</h3>
              <p className="about-value-text">Mais resultado por meio de trabalho em equipe</p>
            </div>
            <div className="about-value-card">
              <h3 className="about-value-title">Sustentabilidade</h3>
              <p className="about-value-text">Construindo um futuro maritimo responsavel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
