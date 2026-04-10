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
    title: 'Nautidesign Completes New Hull Design',
    date: 'April 8, 2026',
    image: 'https://images.unsplash.com/photo-1604881928746-41efb107a5d0?w=400&h=300&fit=crop',
    description: 'Our engineering team successfully completed advanced hydrodynamic testing on the new hull design, achieving optimal performance metrics.',
    link: '#',
  },
  {
    id: 2,
    title: 'Sponsorship Partnership Announcement',
    date: 'April 1, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'We are excited to announce our new platinum sponsor, bringing cutting-edge propulsion technology to our competition vessel.',
    link: '#',
  },
  {
    id: 3,
    title: 'Team Wins Best Innovation Award',
    date: 'March 25, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Hildelene Nautidesign recognized for groundbreaking innovations in sustainable naval engineering at international competition.',
    link: '#',
  },
  {
    id: 4,
    title: 'New Lab Equipment Installation',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    description: 'State-of-the-art CFD simulation equipment installed, enhancing our design and testing capabilities.',
    link: '#',
  },
];
