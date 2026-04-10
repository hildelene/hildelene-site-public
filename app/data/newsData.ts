export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  link?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Nautidesign conclui novo projeto de casco',
    date: '08/04/2026',
    image: 'https://images.unsplash.com/photo-1604881928746-41efb107a5d0?w=400&h=300&fit=crop',
    description: 'Nossa equipe concluiu com sucesso os testes hidrodinâmicos avançados do novo casco, alcançando métricas de desempenho ideais.',
    link: '#',
  },
  {
    id: 2,
    title: 'Anúncio de parceria com patrocinadores',
    date: '01/04/2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Temos o prazer de anunciar um novo patrocinador master, trazendo tecnologia de propulsão de ponta para a embarcação de competição.',
    link: '#',
  },
  {
    id: 3,
    title: 'Equipe conquista prêmio de melhor inovação',
    date: '25/03/2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'A Hildelene Nautidesign foi reconhecida por inovações de destaque em engenharia naval sustentável em competição internacional.',
    link: '#',
  },
  {
    id: 4,
    title: 'Instalação de novos equipamentos de laboratório',
    date: '15/03/2026',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    description: 'Instalamos novos equipamentos de simulação CFD, ampliando nossas capacidades de projeto e teste.',
    link: '#',
  },
];
