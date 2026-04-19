import { NewsItem } from '../data/newsData';
import type { CSSProperties } from 'react';

interface NewsCardProps {
  news: NewsItem;
  imageStyle?: CSSProperties;
}

export default function NewsCard({ news, imageStyle }: NewsCardProps) {
  return (
    <div className="main-carousels-card group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-navy-dark/50">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          style={imageStyle}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-grow p-6 flex flex-col">
        <p className="text-gold text-sm font-semibold mb-2">{news.date}</p>
        <div className="titulo-main-carousel">
          {news.title}
        </div>
        <div className="texto-main-carousel">
          {news.description}
        </div>

        {/* Read More Link */}
        <a
          href={news.link || '#'}
          className="text-gold font-semibold hover:text-cream transition-colors inline-flex items-center group/link"
        >
          Ler mais
          <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
