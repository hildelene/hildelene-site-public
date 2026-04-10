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
    name: 'Nautidesign Racing Hull 2026',
    year: '2026',
    description: 'High-performance racing vessel with advanced hydrodynamic design and state-of-the-art propulsion system.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    category: 'Racing',
  },
  {
    id: 2,
    name: 'Autonomous Vessel Platform',
    year: '2025',
    description: 'Experimental autonomous navigation platform integrating AI and real-time decision-making systems.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    category: 'Technology',
  },
  {
    id: 3,
    name: 'Sustainable Energy Initiative',
    year: '2025',
    description: 'Solar and hydrogen-powered prototype demonstrating eco-friendly naval engineering solutions.',
    image: 'https://images.unsplash.com/photo-1503437313881-503a774e6f60?w=400&h=300&fit=crop',
    category: 'Sustainability',
  },
  {
    id: 4,
    name: 'Advanced Materials Research',
    year: '2024',
    description: 'Development and testing of composite materials for improved strength-to-weight ratios in hull construction.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    category: 'Research',
  },
  {
    id: 5,
    name: 'CFD Optimization Project',
    year: '2024',
    description: 'Comprehensive computational fluid dynamics analysis for optimal hull performance and fuel efficiency.',
    image: 'https://images.unsplash.com/photo-1541829052-c1bdde3ac363?w=400&h=300&fit=crop',
    category: 'Engineering',
  },
  {
    id: 6,
    name: 'Team Management System',
    year: '2024',
    description: 'Integrated project management and collaboration platform for team coordination and documentation.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    category: 'Innovation',
  },
];
