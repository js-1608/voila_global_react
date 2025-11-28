import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EcommercePartner({ data = [], heading = '' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileGrid, setIsMobileGrid] = useState(false);
  const [visible, setVisible] = useState(3);

  // breakpoints (px) — tune as needed
  const MOBILE_BREAKPOINT = 640; // below this -> grid view
  const TABLET_BREAKPOINT = 768; // between MOBILE and TABLET -> 2 visible
  const DESKTOP_BREAKPOINT = 1024; // >= TABLET thresh -> 3 visible

  // update viewport mode/visible count
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      const mobile = w < MOBILE_BREAKPOINT;
      setIsMobileGrid(mobile);

      if (w >= DESKTOP_BREAKPOINT) {
        setVisible(3);
      } else if (w >= TABLET_BREAKPOINT) {
        setVisible(2);
      } else {
        // when not mobile-grid and smaller than tablet, show 1 visible (but we choose grid for mobile)
        setVisible(1);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset slide index when data changes or when switching between grid & carousel
  useEffect(() => {
    setCurrentSlide(0);
  }, [data, isMobileGrid]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, data.length - visible);
    setCurrentSlide((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // percent transform for carousel (works with visible count)
  const translatePercent = currentSlide * (100 / visible);

  return (
    <div className="bg-gradient-to-br from-[#210E2F] to-[#58277C] text-white p-6 md:p-12 lg:p-8">
      <div className="max-w-7xl mx-auto pt-2 pb-2">
        <div className="grid lg:grid-cols-3 gm:gap-4 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="text-white sm:col-span-12 lg:col-span-1 space-y-6">
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-semibold leading-tight">
              {heading}
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light">Authorized Partner</h2>
              <p className="text-sm text-purple-100 leading-relaxed">
                VOILA, your trusted eCommerce channel partner, helps brands sell seamlessly across India's top marketplaces like Flipkart, Amazon, and Myntra.
              </p>
            </div>

            <button className="mt-4 px-8 py-3 border-2 mb-6 border-white text-white rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>

          {/* Right Content - either grid (mobile) or carousel */}
          <div className="relative col-span-2">
            {/* Show navigation only for carousel mode */}
            {!isMobileGrid && (
              <div className="absolute top-8 flex flex-col-reverse -left-5 gap-2 z-10">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white text-purple-700 flex items-center justify-center hover:bg-purple-100 transition-all shadow-lg disabled:opacity-50"
                  aria-label="Previous slide"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white text-purple-700 flex items-center justify-center hover:bg-purple-100 transition-all shadow-lg disabled:opacity-50"
                  aria-label="Next slide"
                  disabled={currentSlide >= Math.max(0, data.length - visible)}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Carousel container (desktop/tablet) */}
            {!isMobileGrid ? (
              <div className="relative overflow-hidden">
                <div
                  className="flex gap-4 transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${translatePercent}%)`,
                    // allow smooth GPU acceleration
                    willChange: 'transform',
                  }}
                >
                  {data.map((platform, index) => (
                    <div
                      key={`${platform.name}-${index}`}
                      className={`flex-shrink-0`}
                      style={{
                        // width = 100% / visible - gap isn't accounted exactly, but tailwind gaps are fine visually
                        width: `${100 / visible}%`,
                        padding: '0 0.5rem',
                      }}
                      data-aos="zoom-in"
                    >
                      <div className="relative rounded-2xl overflow-hidden group w-full h-[300px] border-white border-1">
                        {/* Background image (per-card) */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${platform.image})`,
                          }}
                          role="img"
                          aria-label={platform.name}
                        />

                        {/* gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-end p-2 md:p-3 text-white">
                          <h3 className="text-md md:text-xl mb-1">{platform.name}</h3>
                          <p className="text-xs text-gray-200 mb-2 leading-relaxed">
                            {platform.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Mobile: Grid view (no carousel) */
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                {data.map((platform, index) => (
                  <div key={`${platform.name}-${index}`} data-aos="zoom-in">
                    <div className="relative rounded-2xl overflow-hidden group w-full h-[200px] md:h-[220px] border-white border-1">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${platform.image})`,
                        }}
                        role="img"
                        aria-label={platform.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                      <div className="relative h-full flex flex-col justify-end p-4 text-white">
                        <h3 className="text-sm font-medium">{platform.name}</h3>
                        <p className="text-xs text-gray-200 leading-relaxed">{platform.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
