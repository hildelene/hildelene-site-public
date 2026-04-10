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
            Our <span className="text-gold">Sponsors</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Thank you to our valued partners who support innovation in naval engineering.
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
                <p className="text-cream/50 text-xs">Sponsor</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-lg p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-cream mb-4">
            Become a <span className="text-gold">Sponsor</span>
          </h3>
          <p className="text-cream/70 max-w-2xl mx-auto mb-8">
            Partner with Hildelene Nautidesign and support the next generation of naval innovation.
            Our sponsorship programs offer unique opportunities to align your brand with excellence
            and cutting-edge engineering.
          </p>
          <button className="px-8 py-3 bg-gold text-navy-dark font-bold rounded-lg hover:bg-cream transition-all duration-200 transform hover:scale-105">
            Sponsorship Package
          </button>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              tier: 'Gold Sponsor',
              price: 'Custom',
              benefits: [
                'Logo placement on all materials',
                'Company booth at events',
                'Digital media exposure',
                'Quarterly reports',
              ],
            },
            {
              tier: 'Silver Sponsor',
              price: 'Custom',
              benefits: [
                'Website recognition',
                'Event attendance',
                'Social media features',
                'Annual report',
              ],
            },
            {
              tier: 'Bronze Sponsor',
              price: 'Custom',
              benefits: [
                'Website listing',
                'Newsletter mentions',
                'Community recognition',
              ],
            },
          ].map((sponsor, index) => (
            <div
              key={index}
              className="bg-navy-dark/50 border border-gold/20 rounded-lg p-8 hover:border-gold transition-colors group"
            >
              <h4 className="text-gold font-bold text-xl mb-2">{sponsor.tier}</h4>
              <p className="text-cream/70 text-sm mb-6">Starting at {sponsor.price}</p>
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
