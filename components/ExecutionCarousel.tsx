'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const IMAGES = [
  '/images/img_1.jpg', '/images/img_2.jpg', '/images/img_3.jpg', '/images/img_4.jpg', '/images/img_5.jpg',
  '/images/img_6.png', '/images/img_7.png', '/images/img_8.png', '/images/img_9.png', '/images/img_10.png',
  '/images/img_11.png', '/images/img_12.png', '/images/img_13.jpg', '/images/img_14.jpg', '/images/img_15.jpg',
  '/images/img_16.png', '/images/img_17.png', '/images/img_18.jpg', '/images/img-19.jpg', '/images/img-20.jpg',
  '/images/img_21.jpg', '/images/img_22.jpg', '/images/img_23.png'
];

export default function ExecutionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <div 
      className="flex-1 glass-card p-1 aspect-square md:aspect-video relative overflow-hidden group border-brand-navy/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images container */}
      <div 
        className="h-full w-full relative whitespace-nowrap transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {IMAGES.map((src, index) => (
          <div key={src} className="inline-block h-full w-full relative">
            <Image
              src={src}
              alt={`Execution Result ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-all pointer-events-none"></div>
      
      {/* Label Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white/20 font-black text-6xl md:text-8xl uppercase tracking-tighter select-none px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Execution
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-brand-red w-4' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        {IMAGES.length > 10 && (
          <span className="text-[10px] text-white/70 self-center">+ {IMAGES.length - 10} more</span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-red/50 w-full">
        <div 
          className="h-full bg-brand-red transition-all duration-[3000ms] ease-linear"
          style={{ width: isHovered ? '0%' : '100%' }}
          key={currentIndex}
        />
      </div>
    </div>
  );
}
