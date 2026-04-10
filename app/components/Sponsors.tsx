export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="py-20 bg-navy-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Nossos <span className="text-gold">Patrocinadores</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Agradecemos aos parceiros que impulsionam a inovacao em engenharia naval.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Sponsors Placeholder Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-32 bg-navy-dark/50 border-2 border-dashed border-gold/30 rounded-lg flex items-center justify-center hover:border-gold transition-colors group"
            >
              <div className="text-center">
                <p className="text-gold text-sm font-semibold mb-2">Logo {index + 1}</p>
                <p className="text-cream/50 text-xs">Patrocinador</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-lg p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-cream mb-4">
            Seja <span className="text-gold">Patrocinador</span>
          </h3>
          <p className="text-cream/70 max-w-2xl mx-auto mb-8">
            Associe sua marca a Hildelene Nautidesign e apoie a proxima geracao da inovacao naval.
            Nossos programas de patrocinio oferecem oportunidades unicas para conectar sua empresa
            a excelencia e a engenharia de ponta.
          </p>
          <button className="px-8 py-3 bg-gold text-navy-dark font-bold rounded-lg hover:bg-cream transition-all duration-200 transform hover:scale-105">
            Pacote de Patrocinio
          </button>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              tier: 'Patrocinador Ouro',
              price: 'Sob consulta',
              benefits: [
                'Logo em todos os materiais',
                'Espaco da empresa nos eventos',
                'Exposicao digital da marca',
                'Relatorios trimestrais',
              ],
            },
            {
              tier: 'Patrocinador Prata',
              price: 'Sob consulta',
              benefits: [
                'Destaque no site',
                'Participacao em eventos',
                'Mencoes nas redes sociais',
                'Relatorio anual',
              ],
            },
            {
              tier: 'Patrocinador Bronze',
              price: 'Sob consulta',
              benefits: [
                'Listagem no site',
                'Mencoes na newsletter',
                'Reconhecimento institucional',
              ],
            },
          ].map((sponsor, index) => (
            <div
              key={index}
              className="bg-navy-dark/50 border border-gold/20 rounded-lg p-8 hover:border-gold transition-colors group"
            >
              <h4 className="text-gold font-bold text-xl mb-2">{sponsor.tier}</h4>
              <p className="text-cream/70 text-sm mb-6">A partir de {sponsor.price}</p>
              <ul className="space-y-3">
                {sponsor.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-cream/70 text-sm">
                    <span className="text-gold mr-3">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
