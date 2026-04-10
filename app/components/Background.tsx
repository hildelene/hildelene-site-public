'use client';

import OceanWaves from './OceanWaves';

interface BackgroundProps {
  scrollY?: number;
}

export default function Background({ scrollY = 0 }: BackgroundProps) {
  return (
    <div className="background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
      {/* Background Image */}
      <div className="bgImage">
        <img
          src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=1920&q=80"
          alt="Oceano Noturno"
          className="bgImg"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="bgGradient1" />
      <div className="bgGradient2" />

      {/* Ocean Waves */}
      <div className="waveContainer">
        <OceanWaves />
      </div>

      {/* Radial Glow Effects */}
      <div className="glowLeft" />
      <div className="glowRight" />
    </div>
  );
}
