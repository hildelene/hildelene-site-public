export default function SponsorsSimple() {
  return (
    <section id="sponsors" className="py-20 bg-navy-dark">
      <div className="section-padding-lr max-w-7xl mx-auto">
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
      </div>
    </section>
  );
}
