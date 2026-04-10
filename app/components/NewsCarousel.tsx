'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import NewsCard from './NewsCard';
import { newsData } from '../data/newsData';

export default function NewsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [parallaxValues, setParallaxValues] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const updateParallax = useCallback(() => {
    if (!emblaApi) return;
    const progress = emblaApi.scrollProgress();
    const snaps = emblaApi.scrollSnapList();

    const nextValues = snaps.map((snap) => {
      const diffToTarget = snap - progress;
      return diffToTarget * -35;
    });

    setParallaxValues(nextValues);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    updateParallax();

    emblaApi.on('scroll', updateParallax);
    emblaApi.on('select', updateParallax);
    emblaApi.on('reInit', updateParallax);

    return () => {
      emblaApi.off('scroll', updateParallax);
      emblaApi.off('select', updateParallax);
      emblaApi.off('reInit', updateParallax);
    };
  }, [emblaApi, updateParallax]);

  const getParallaxStyle = (index: number) => {
    const fallback = 0;
    const value = parallaxValues[index] ?? fallback;
    return {
      transform: `scale(1.08) translateX(${value}%)`,
    };
  };

  return (
    <section
      id="news"
      className="py-20 bg-navy-dark border-t border-gold/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Ultimas <span className="text-gold">Noticias</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex touch-pan-y">
              {newsData.map((news, index) => (
                <div
                  key={news.id}
                  className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <NewsCard news={news} imageStyle={getParallaxStyle(index)} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gold p-2 text-navy-dark transition-all duration-200 hover:scale-110 hover:bg-cream sm:left-0 sm:-translate-x-12"
            aria-label="Noticia anterior"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gold p-2 text-navy-dark transition-all duration-200 hover:scale-110 hover:bg-cream sm:right-0 sm:translate-x-12"
            aria-label="Proxima noticia"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-gold w-8'
                    : 'bg-gold/40 w-2 hover:bg-gold/60'
                }`}
                aria-label={`Ir para noticia ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
