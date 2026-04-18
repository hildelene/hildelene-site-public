import { scheduleData } from '../data/scheduleData';

export default function Schedule() {
  return (
    <section className="schedule-section py-10 bg-navy-light text-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gold">Cronograma</h2>
        <ul className="space-y-6">
          {scheduleData.map((item, idx) => (
            <li key={idx} className="bg-navy rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 md:mb-0 md:w-1/4 text-gold font-semibold text-center md:text-left">
                {new Date(item.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
              <div className="md:w-3/4">
                <div className="font-bold text-lg text-cream">{item.title}</div>
                {item.description && <div className="text-sm text-gold-shadow mt-1">{item.description}</div>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
