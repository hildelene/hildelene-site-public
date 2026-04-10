export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-navy-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
              Sobre a <span className="text-gold">Hildelene</span>
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mb-8" />

            <p className="text-cream/80 text-lg mb-6 leading-relaxed">
              A Hildelene Nautidesign é uma equipe de engenheiros, projetistas e inovadores
              apaixonados pelo avanço da engenharia naval. Unimos tecnologia de ponta e
              conhecimento marítimo para criar embarcações que ampliam os limites do possível.
            </p>

            <p className="text-cream/80 text-lg mb-6 leading-relaxed">
              Nossa missão é demonstrar excelência em engenharia por meio de inovação,
              colaboração e precisão. Cada projeto representa nosso compromisso com sustentabilidade,
              desempenho e avanço tecnológico no setor naval.
            </p>

            <p className="text-cream/80 text-lg mb-8 leading-relaxed">
              Do projeto e da simulação aos testes e à implementação, nossa equipe reúne
              competências diversas para resolver desafios complexos e criar soluções relevantes.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors">
                <h3 className="text-gold font-bold mb-2">Innovation</h3>
                <p className="text-cream/70 text-sm">Superando limites com ideias transformadoras</p>
              </div>
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors">
                <h3 className="text-gold font-bold mb-2">Excelência</h3>
                <p className="text-cream/70 text-sm">Buscando precisão em cada detalhe</p>
              </div>
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors">
                <h3 className="text-gold font-bold mb-2">Colaboração</h3>
                <p className="text-cream/70 text-sm">Alcançando mais juntos, como um só time</p>
              </div>
              <div className="p-4 bg-navy-dark/50 border border-gold/20 rounded-lg hover:border-gold transition-colors">
                <h3 className="text-gold font-bold mb-2">Sustentabilidade</h3>
                <p className="text-cream/70 text-sm">Construindo um futuro marítimo responsável</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-fade-in">
            <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gold/20 to-navy-dark/50 border border-gold/30">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=600&fit=crop"
                alt="Hildelene Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-30" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy-dark p-4 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm font-semibold">Integrantes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
