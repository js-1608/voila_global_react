import React, { useState, useEffect, useRef } from 'react';
import WorkGalleryCarousel from '../Components/OnBoaringPortfolio';

export default function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const partners = [
    { name: 'Amazon US', logo: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Amazon UK', logo: 'https://logo.clearbit.com/amazon.co.uk' },
    { name: 'Amazon EU', logo: 'https://logo.clearbit.com/amazon.de' },
    { name: 'Alibaba', logo: 'https://logo.clearbit.com/alibaba.com' },
    { name: 'eBay', logo: 'https://logo.clearbit.com/ebay.com' },
    { name: 'Walmart', logo: 'https://logo.clearbit.com/walmart.com' },
    { name: 'Etsy', logo: 'https://logo.clearbit.com/etsy.com' },
    { name: 'Blinkit', logo: 'https://logo.clearbit.com/blinkit.com' },
    { name: 'Zepto', logo: 'https://logo.clearbit.com/zepto.com' },
    { name: 'Myntra', logo: 'https://logo.clearbit.com/myntra.com' },
    { name: 'Nykaa', logo: 'https://logo.clearbit.com/nykaa.com' },
    { name: 'Ajio', logo: 'https://logo.clearbit.com/ajio.com' },
    { name: 'Tata CLiQ', logo: 'https://logo.clearbit.com/tatacliq.com' },
    { name: 'Amazon India', logo: 'https://logo.clearbit.com/amazon.in' },
    { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com' },
    { name: 'Meesho', logo: 'https://logo.clearbit.com/meesho.com' }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll position when halfway through (seamless loop)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div className="w-full bg-white py-16  px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug text-center">
          Our Partners          
        </h2>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32  rounded-2xl border border-gray-200 flex items-center justify-center p-6 hover:shadow-lg transition-shadow duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&size=128&background=e5e7eb&color=6b7280`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Caption */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Hover to pause • Auto-scrolling carousel
        </p>
      </div>
    </div>
  );
}