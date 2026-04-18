export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-navy-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full justify-items-center">
          {/* Content */}
          <div className="animate-fade-in w-full flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
              Sobre a <span className="text-gold">Hildelene</span>
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mb-8" />

            <p className="text-cream/80 text-lg mb-6 leading-relaxed">
              A Hildelene Nautidesign e uma equipe de engenheiros, designers e inovadores
              apaixonados por evoluir a engenharia naval. Combinamos tecnologia de ponta com
              conhecimento maritimo tradicional para criar embarcacoes que ampliam os limites do
              que e possivel.
            </p>

            <p className="text-cream/80 text-lg mb-6 leading-relaxed">
              Nossa missao e demonstrar excelencia em engenharia por meio de inovacao,
              colaboracao e precisao. Cada projeto que desenvolvemos representa nosso compromisso
              com sustentabilidade, desempenho e avancos tecnologicos no setor naval.
            </p>

            <p className="text-cream/80 text-lg mb-8 leading-relaxed">
              Do projeto e simulacao aos testes e implementacao, nossa equipe integra
              competencias diversas para resolver desafios complexos e entregar solucoes relevantes.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors w-full flex flex-col items-center">
                <h3 className="text-gold font-bold mb-2">Innovation</h3>
                <p className="text-cream/70 text-sm">Superando limites com ideias transformadoras</p>
              </div>
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors w-full flex flex-col items-center">
                <h3 className="text-gold font-bold mb-2">Excelencia</h3>
                <p className="text-cream/70 text-sm">Busca constante pela qualidade em cada detalhe</p>
              </div>
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors w-full flex flex-col items-center">
                <h3 className="text-gold font-bold mb-2">Colaboracao</h3>
                <p className="text-cream/70 text-sm">Mais resultado por meio de trabalho em equipe</p>
              </div>
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors w-full flex flex-col items-center">
                <h3 className="text-gold font-bold mb-2">Sustentabilidade</h3>
                <p className="text-cream/70 text-sm">Construindo um futuro maritimo responsavel</p>
              </div>
            </div>
          </div>

          {/* ...existing code... */}
        </div>
      </div>
    </section>
  );
}
