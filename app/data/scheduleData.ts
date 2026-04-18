
export type ScheduleItem = {
  date: string; // formato: '2026-05-10'
  title: string;
  description?: string;
  type: 'past' | 'today' | 'future';
};

export const scheduleData: ScheduleItem[] = [
  {
    date: '2026-03-10',
    title: 'Entrega do Projeto para Competição X',
    description: 'Data limite para envio do projeto técnico.',
    type: 'past'
  },
  {
    date: '2026-04-18',
    title: 'Pagamento da Taxa de Inscrição',
    description: 'Prazo final para pagamento da inscrição no evento Y.',
    type: 'today'
  },
  {
    date: '2026-08-01',
    title: 'Competição Nacional de Nautimodelismo',
    description: 'Participação da equipe no evento nacional.',
    type: 'future'
  },
  {
    date: '2026-09-20',
    title: 'Entrega de Relatório Final',
    description: 'Envio do relatório final do projeto.',
    type: 'future'
  }
];
