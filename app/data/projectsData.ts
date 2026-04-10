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
    name: 'Casco de Competicao Nautidesign 2026',
    year: '2026',
    description: 'Embarcacao de alto desempenho com hidrodinamica avancada e sistema de propulsao de ultima geracao.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    category: 'Competicao',
  },
  {
    id: 2,
    name: 'Plataforma de Embarcacao Autonoma',
    year: '2025',
    description: 'Plataforma experimental de navegacao autonoma com IA e sistema de decisao em tempo real.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    category: 'Tecnologia',
  },
  {
    id: 3,
    name: 'Iniciativa de Energia Sustentavel',
    year: '2025',
    description: 'Prototipo com energia solar e hidrogenio, focado em solucoes de engenharia naval sustentavel.',
    image: 'https://images.unsplash.com/photo-1503437313881-503a774e6f60?w=400&h=300&fit=crop',
    category: 'Sustentabilidade',
  },
  {
    id: 4,
    name: 'Pesquisa em Materiais Avancados',
    year: '2024',
    description: 'Desenvolvimento e testes de materiais compostos para melhorar a relacao resistencia-peso na construcao de cascos.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    category: 'Pesquisa',
  },
  {
    id: 5,
    name: 'Projeto de Otimizacao CFD',
    year: '2024',
    description: 'Analise completa de dinamica dos fluidos computacional para otimizar desempenho do casco e eficiencia energetica.',
    image: 'https://images.unsplash.com/photo-1541829052-c1bdde3ac363?w=400&h=300&fit=crop',
    category: 'Engenharia',
  },
  {
    id: 6,
    name: 'Sistema de Gestao da Equipe',
    year: '2024',
    description: 'Plataforma integrada de gestao de projetos e colaboracao para coordenacao da equipe e documentacao tecnica.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    category: 'Inovacao',
  },
];
