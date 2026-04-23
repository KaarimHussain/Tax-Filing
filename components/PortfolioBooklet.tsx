'use client';

import React, { useEffect, useRef } from 'react';
import { PageFlip, SizeType } from 'page-flip';

const PAGES = [
  '/images/img_1.jpg', '/images/img_2.jpg', '/images/img_3.jpg', '/images/img_4.jpg',
  '/images/img_5.jpg', '/images/img_6.png', '/images/img_7.png', '/images/img_8.png',
  '/images/img_9.png', '/images/img_10.png', '/images/img_11.png', '/images/img_12.png'
];

export default function PortfolioBooklet() {
  const bookletRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);

  useEffect(() => {
    const initFlip = () => {
      if (bookletRef.current && !pageFlipRef.current) {
        const pages = bookletRef.current.querySelectorAll('.portfolio-page');
        if (pages.length === 0) return;

        pageFlipRef.current = new PageFlip(bookletRef.current, {
          width: 550,
          height: 733,
          size: SizeType.STRETCH,
          minWidth: 315,
          maxWidth: 1000,
          minHeight: 420,
          maxHeight: 1350,
          maxShadowOpacity: 0.5,
          showCover: true,
          mobileScrollSupport: false,
          usePortrait: true,
          startPage: 0,
          drawShadow: true,
          flippingTime: 1000,
          useMouseEvents: true,
          swipeDistance: 30,
          showPageCorners: true,
          disableFlipByClick: false,
        });

        pageFlipRef.current.loadFromHTML(pages as any);
      }
    };

    // Small timeout to ensure DOM is fully settled in Next.js/React environment
    const timer = setTimeout(initFlip, 100);

    return () => {
      clearTimeout(timer);
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
        } catch (e) {
          console.error('Error destroying pageflip:', e);
        }
        pageFlipRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-16 bg-slate-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Portfolio</h2>
        <p className="text-brand-navy/60">Flip through our 12-page execution portfolio</p>
      </div>
      
      <div className="relative w-full max-w-4xl px-4 flex justify-center">
        <div ref={bookletRef} className="shadow-2xl rounded-lg overflow-hidden">
          {PAGES.map((src, index) => (
            <div key={index} className="portfolio-page bg-white shadow-inner flex items-center justify-center border border-slate-200" data-density="hard">
              <div className="relative w-full h-full p-2">
                 {/* Using standard img for better compatibility with DOM-manipulating libraries */}
                 <img 
                    src={src} 
                    alt={`Portfolio Page ${index + 1}`} 
                    className="w-full h-full object-contain p-4"
                 />
                 <div className="absolute bottom-4 right-4 text-brand-navy/20 font-bold text-xl italic pointer-events-none">
                    {index + 1}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <button 
          onClick={() => pageFlipRef.current?.flipPrev()}
          className="bg-brand-navy text-white px-6 py-2 rounded-full hover:bg-brand-red transition-colors font-bold"
        >
          Previous
        </button>
        <button 
          onClick={() => pageFlipRef.current?.flipNext()}
          className="bg-brand-navy text-white px-6 py-2 rounded-full hover:bg-brand-red transition-colors font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}
