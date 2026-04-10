export interface WorkItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const workData: WorkItem[] = [
  {
    id: 1,
    title: 'Design Hidrodinamico',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    description: 'Simulacoes CFD avancadas e testes de propulsão para otimizar o desempenho hidrodinamico do casco.',
  },
  {
    id: 2,
    title: 'Engenharia de Estruturas',
    image: 'https://images.unsplash.com/photo-1578926314433-9f5eaf1b98da?w=600&h=400&fit=crop',
    description: 'Projetos estruturais de precisão utilizando os materiais mais avancados da industria naval.',
  },
  {
    id: 3,
    title: 'Sistema de Propulsão',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    description: 'Desenvolvimento de sistemas de propulsão inovadores com tecnologia de ponta para máximo desempenho.',
  },
  {
    id: 4,
    title: 'Prototipagem Rapida',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    description: 'Criacao de protótipos avancados para validacao rapida de conceitos e solucoes inovadoras.',
  },
];
