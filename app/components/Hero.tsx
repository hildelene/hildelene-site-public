'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark pt-16"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Subtitle */}
          <p className="text-gold text-lg font-semibold mb-4 tracking-widest uppercase">
            Welcome to Excellence in Naval Engineering
          </p>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            Hildelene <span className="text-gold">Nautidesign</span>
          </h1>

          {/* Description */}
          <p className="text-cream/80 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Pioneering the future of naval engineering through innovation, precision, and
            technological excellence. A team dedicated to pushing boundaries and proving
            that extraordinary achievements are possible through collaboration and vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gold text-navy-dark font-bold rounded-lg hover:bg-cream transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
            <button className="px-8 py-3 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-navy-dark transition-all duration-200 transform hover:scale-105">
              Become a Sponsor
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
