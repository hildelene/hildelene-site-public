'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-navy-dark pt-16"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=1920&q=80"
          alt="Cenario maritimo noturno"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04050b]/70 via-[#050910]/65 to-[#060b14]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.2),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-4 pb-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center animate-fade-in">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-6xl lg:text-7xl">
            <span className="text-gold">Do zero</span> ao que
            <br className="hidden sm:block" />
            realmente importa<span className="text-gold">.</span>
          </h1>

          <div className="mx-auto mt-6 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/85 sm:text-2xl">
            Inovacao e engenharia que transformam sonhos em realidade.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full max-w-xs rounded-xl border border-sky-400/70 bg-sky-500/10 px-8 py-3 text-lg font-semibold text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.35)] transition hover:scale-105 hover:bg-sky-400/20">
              Acompanhar
            </button>
            <button className="w-full max-w-xs rounded-xl border border-gold/70 bg-gold/10 px-8 py-3 text-lg font-semibold text-gold shadow-[0_0_24px_rgba(212,175,55,0.25)] transition hover:scale-105 hover:bg-gold/20">
              Conhecer Projeto
            </button>
          </div>
        </div>

        <div className="mt-12 w-full max-w-4xl rounded-2xl border border-white/15 bg-black/45 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="hidden rounded-xl border border-gold/20 bg-black/40 p-4 text-left md:block">
              <h3 className="text-xl font-semibold text-gold">Pioneirismo</h3>
              <p className="mt-2 text-sm text-cream/75">
                Abrimos novos caminhos com coragem, visao e estrategia tecnica.
              </p>
            </article>

            <article className="rounded-xl border border-gold/40 bg-gradient-to-b from-black/80 to-black/60 p-5 text-center shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <h3 className="text-2xl font-semibold text-gold">Tecnologia Avancada</h3>
              <p className="mt-3 text-base text-cream/80">
                Desenvolvemos sistemas complexos e solucoes inovadoras.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold/60" />
                <span className="h-2 w-10 rounded-full bg-sky-300" />
                <span className="h-2 w-2 rounded-full bg-cream/35" />
              </div>
            </article>

            <article className="hidden rounded-xl border border-sky-300/30 bg-black/40 p-4 text-left md:block">
              <h3 className="text-xl font-semibold text-sky-200">Engenharia de Precisao</h3>
              <p className="mt-2 text-sm text-cream/75">
                Projetos com criterio rigoroso e precisao em cada etapa.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
