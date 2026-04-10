'use client';

export default function OceanWaves() {
  return (
    <svg
      className="oceanWaves"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes wave1 {
            0% { d: path('M0,40 Q300,20 600,40 T1200,40 L1200,120 L0,120 Z'); }
            25% { d: path('M0,35 Q300,10 600,35 T1200,35 L1200,120 L0,120 Z'); }
            50% { d: path('M0,40 Q300,20 600,40 T1200,40 L1200,120 L0,120 Z'); }
            75% { d: path('M0,45 Q300,30 600,45 T1200,45 L1200,120 L0,120 Z'); }
            100% { d: path('M0,40 Q300,20 600,40 T1200,40 L1200,120 L0,120 Z'); }
          }
          @keyframes wave2 {
            0% { d: path('M0,60 Q300,40 600,60 T1200,60 L1200,120 L0,120 Z'); }
            25% { d: path('M0,55 Q300,30 600,55 T1200,55 L1200,120 L0,120 Z'); }
            50% { d: path('M0,60 Q300,40 600,60 T1200,60 L1200,120 L0,120 Z'); }
            75% { d: path('M0,65 Q300,50 600,65 T1200,65 L1200,120 L0,120 Z'); }
            100% { d: path('M0,60 Q300,40 600,60 T1200,60 L1200,120 L0,120 Z'); }
          }
          .wave1 { animation: wave1 6s infinite ease-in-out; fill: rgba(0,191,255,0.15); }
          .wave2 { animation: wave2 8s infinite ease-in-out; fill: rgba(242,190,115,0.1); }
        `}</style>
      </defs>
      <path className="wave1" d="M0,40 Q300,20 600,40 T1200,40 L1200,120 L0,120 Z" />
      <path className="wave2" d="M0,60 Q300,40 600,60 T1200,60 L1200,120 L0,120 Z" />
    </svg>
  );
}
