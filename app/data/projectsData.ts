export interface Project {
  id: number;
  name: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Casco de competição 2026',
    year: '2026',
    description: 'Embarcação de alto desempenho com projeto hidrodinâmico avançado e sistema de propulsão de última geração.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    category: 'Competição',
  },
  {
    id: 2,
    name: 'Plataforma de embarcação autônoma',
    year: '2025',
    description: 'Plataforma experimental de navegação autônoma integrando IA e sistemas de decisão em tempo real.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    category: 'Tecnologia',
  },
  {
    id: 3,
    name: 'Iniciativa de energia sustentável',
    year: '2025',
    description: 'Protótipo movido a energia solar e hidrogênio, demonstrando soluções ecológicas para engenharia naval.',
    image: 'https://images.unsplash.com/photo-1503437313881-503a774e6f60?w=400&h=300&fit=crop',
    category: 'Sustentabilidade',
  },
  {
    id: 4,
    name: 'Pesquisa em materiais avançados',
    year: '2024',
    description: 'Desenvolvimento e teste de materiais compósitos para melhorar a relação resistência/peso na construção de cascos.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    category: 'Pesquisa',
  },
  {
    id: 5,
    name: 'Projeto de otimização CFD',
    year: '2024',
    description: 'Análise completa de dinâmica dos fluidos computacional para desempenho ideal do casco e eficiência de combustível.',
    image: 'https://images.unsplash.com/photo-1541829052-c1bdde3ac363?w=400&h=300&fit=crop',
    category: 'Engenharia',
  },
  {
    id: 6,
    name: 'Sistema de gestão da equipe',
    year: '2024',
    description: 'Plataforma integrada de gestão de projetos e colaboração para coordenação da equipe e documentação.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    category: 'Inovação',
  },
];
