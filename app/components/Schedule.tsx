import { useState } from 'react';
import { scheduleData } from '../data/scheduleData';

export default function Schedule() {
  const [showPast, setShowPast] = useState(false);
  const past = scheduleData.filter(e => e.type === 'past');
  const today = scheduleData.find(e => e.type === 'today');
  const future = scheduleData.filter(e => e.type === 'future');

  return (
    <section className="schedule-section-mobile py-10 bg-navy-light text-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gold">Cronograma 2026</h2>
        <div className="timeline-mobile relative mx-auto">
          {/* Linha vertical */}
          <div className="timeline-line absolute left-1/2 top-0 h-full w-1 bg-gold -translate-x-1/2 z-0" />

          {/* Passado (colapsável) */}
          {past.length > 0 && (
            <div className="timeline-past mb-4">
              <button className="timeline-toggle" onClick={() => setShowPast(v => !v)}>
                {showPast ? 'Ocultar passado' : 'Mostrar passado'}
              </button>
              {showPast && past.map((item, idx) => (
                <TimelineItem key={item.date} item={item} position={idx} />
              ))}
            </div>
          )}

          {/* Hoje */}
          {today && <TimelineItem item={today} position={past.length} isToday />}

          {/* Futuro */}
          {future.map((item, idx) => (
            <TimelineItem key={item.date} item={item} position={past.length + 1 + idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, position, isToday }: { item: any, position: number, isToday?: boolean }) {
  return (
    <div className="timeline-item-mobile flex items-center mb-8 relative" style={{ zIndex: 1 }}>
      {/* Círculo */}
      <div className="timeline-circle-mobile flex items-center justify-center absolute left-1/2 -translate-x-1/2" style={{ top: 0, width: 32, height: 32 }}>
        {isToday ? (
          <img src="/midia/logo_hildelene_vetor_cmyk.svg" alt="Hoje" className="w-7 h-7 rounded-full bg-white p-1 border-2 border-gold" />
        ) : (
          <span className={`block w-6 h-6 rounded-full border-2 ${item.type === 'past' ? 'border-gray-400 bg-gray-700' : 'border-gold bg-navy-light'}`}></span>
        )}
      </div>
      {/* Conteúdo */}
      <div className="timeline-content-mobile ml-16 flex-1">
        <div className="text-xs text-gold font-bold mb-1">{new Date(item.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
        <div className="font-bold text-base text-cream">{item.title}</div>
        {item.description && <div className="text-xs text-gold-shadow mt-1">{item.description}</div>}
        {isToday && <div className="text-xs text-gold mt-1 font-semibold">Hoje</div>}
      </div>
    </div>
  );
}
