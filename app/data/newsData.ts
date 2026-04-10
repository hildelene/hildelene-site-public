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
    date: '8 de abril de 2026',
    image: 'https://images.unsplash.com/photo-1604881928746-41efb107a5d0?w=400&h=300&fit=crop',
    description: 'Nossa equipe de engenharia concluiu testes hidrodinamicos avancados no novo casco, alcancando metricas de desempenho de alto nivel.',
    link: '#',
  },
  {
    id: 2,
    title: 'Anuncio de nova parceria de patrocinio',
    date: '1 de abril de 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Temos satisfacao em anunciar nosso novo patrocinador platinum, que agrega tecnologia de propulsao de ponta ao nosso barco de competicao.',
    link: '#',
  },
  {
    id: 3,
    title: 'Equipe conquista premio de melhor inovacao',
    date: '25 de marco de 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'A Hildelene Nautidesign foi reconhecida por inovacoes de destaque em engenharia naval sustentavel durante competicao internacional.',
    link: '#',
  },
  {
    id: 4,
    title: 'Instalacao de novos equipamentos de laboratorio',
    date: '15 de marco de 2026',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    description: 'Novos equipamentos de simulacao CFD foram instalados para ampliar nossa capacidade de projeto, analise e testes.',
    link: '#',
  },
];
