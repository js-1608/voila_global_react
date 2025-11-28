import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ---- Logo Imports ----

const logos = [
    'logos/1.webp',
    'logos/2.webp',
    'logos/3.webp',
    'logos/4.webp',
    'logos/5.webp',
    'logos/6.webp',
    'logos/7.webp',
    'logos/8.webp',
];

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,                    // Hide default arrows for clean look
        slidesToShow: 5,                  // Adjust for desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,                 // Must be 0 for continuous scroll
        speed: 10000,                       // High speed for smooth scrolling
        cssEase: 'linear',                // Linear for smooth continuous scroll
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (

        < Slider {...settings}>
            {
                logos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center px-4 py-4"
                    >
                        <div className="w-32 h-24 border rounded-lg bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
                            <img
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="max-h-20 max-w-[80%] object-contain"
                            />
                        </div>
                    </div>
                ))
            }
        </Slider >

    );
};

export default Carousel;
