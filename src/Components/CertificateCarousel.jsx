// CertificatesCarouselCinematic.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function CertificatesCarouselCinematic({
  items = [
    "/awards/award_1.webp",
    "/awards/award_2.webp",
    "/awards/award_3.webp",
    "/awards/award_4.webp",
    "/awards/award_5.webp",
    "/awards/award_6.webp",
    "/awards/award_7.webp",
  ],
}) {
  return (
    <section className="py-12">
      <h3 className="text-center text-3xl md:text-4xl font-extrabold mb-8">
        Awards and Recognitions
      </h3>

      <div className="max-w-7xl mx-auto px-4">

        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay, Keyboard]}
          navigation
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 30,     // cinematic curve
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false, // remove dark shadows
          }}
          className="w-full"
        >
          {items.map((src, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[260px] sm:!w-[300px] md:!w-[340px] flex justify-center"
            >
              <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
                <img
                  src={src}
                  alt={`certificate-${idx}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* Make center slide pop slightly */
        .swiper-slide-active {
          transform: translateY(-6px) !important;
          filter: brightness(1.05);
        }

        /* Other slides slightly dimmed for cinematic feel */
        .swiper-slide:not(.swiper-slide-active) {
          filter: brightness(0.95);
        }

        /* Navigation button styling */
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          width: 40px;
          height: 40px;
          padding:8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
