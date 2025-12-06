import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
    '/logos/1.webp', '/logos/2.webp', '/logos/3.webp', '/logos/4.webp',
    '/logos/5.webp', '/logos/6.webp', '/logos/7.webp', '/logos/8.webp',
];

const Carousel = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,   // non-zero; safer on mobile
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        variableWidth: false,
        adaptiveHeight: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    // Force a reflow / resize after mount (helps slick recalc widths).
    useEffect(() => {
        const resizeOnce = () => window.dispatchEvent(new Event('resize'));
        // After mount
        setTimeout(resizeOnce, 100);
        // Also trigger after all images finish loading (in case images determine width)
        let loaded = 0;
        const imgs = document.querySelectorAll('.slick-img');
        if (imgs.length === 0) { resizeOnce(); }
        imgs.forEach(img => {
            if (img.complete) {
                loaded++;
            } else {
                img.addEventListener('load', () => {
                    loaded++;
                    if (loaded === imgs.length) resizeOnce();
                }, { once: true });
            }
        });
        // cleanup not strictly needed here
    }, []);

    return (
        <Slider ref={sliderRef} {...settings} className="py-2">
            {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center px-3 py-3">
                    <div className="w-auto h-28 border rounded-lg bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
                        <img
                            className="slick-img max-h-18 max-w-[80%] object-contain"
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            draggable={false}
                        />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
