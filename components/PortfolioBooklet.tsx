'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PAGES = [
  '/images/img_1.jpg', '/images/img_2.jpg', '/images/img_3.jpg', '/images/img_4.jpg',
  '/images/img_5.jpg', '/images/img_6.png', '/images/img_7.png', '/images/img_8.png',
  '/images/img_9.png', '/images/img_10.png', '/images/img_11.png', '/images/img_12.png'
];

export default function PortfolioBooklet() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="relative w-full flex justify-center">
        <Carousel className="w-full">
          <CarouselContent>
            {PAGES.map((src, index) => (
              <CarouselItem key={index} className="flex justify-center items-center">
                <div className="relative aspect-[3/4] md:aspect-[4/3] w-full max-h-[70vh] bg-white shadow-2xl rounded-lg overflow-hidden border border-slate-200">
                  <img
                    src={src}
                    alt={`Portfolio Page ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-4 right-4 text-brand-navy/20 font-bold text-xl italic pointer-events-none">
                    {index + 1}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 hover:bg-brand-navy hover:text-white border-brand-navy" />
            <CarouselNext className="-right-12 hover:bg-brand-navy hover:text-white border-brand-navy" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
