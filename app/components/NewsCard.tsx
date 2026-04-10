import Image from 'next/image';
import { NewsItem } from '../data/newsData';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="bg-navy-dark border border-gold/20 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 h-full flex flex-col group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-navy-dark/50">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-grow p-6 flex flex-col">
        <p className="text-gold text-sm font-semibold mb-2">{news.date}</p>
        <h3 className="text-cream font-bold text-lg mb-3 group-hover:text-gold transition-colors line-clamp-2">
          {news.title}
        </h3>
        <p className="text-cream/70 text-sm mb-4 flex-grow line-clamp-3">
          {news.description}
        </p>

        {/* Read More Link */}
        <a
          href={news.link || '#'}
          className="text-gold font-semibold hover:text-cream transition-colors inline-flex items-center group/link"
        >
          Read more
          <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
