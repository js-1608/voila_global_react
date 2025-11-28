import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WorkGalleryCarousel() {
    const [selectedWorkIndex, setSelectedWorkIndex] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef(null);

    const works = [
        {
            id: 1,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (1).webp'
        },
        {
            id: 2,
            category: 'Myntra',
            brand: 'Color Palette Studio',
            image: '/onboarding/work/work (2).webp'

        },
        {
            id: 3,
            category: 'Myntra',
            brand: 'Hi Peter App',
            image: '/onboarding/work/work (3).webp'
        },
        {
            id: 4,
            category: 'Myntra',
            brand: 'Medical Illustrations',
            image: '/onboarding/work/work (4).webp'
        },
        {
            id: 5,
            category: 'Myntra',
            brand: 'Dashboard UI',
            image: '/onboarding/work/work (5).webp'

        },
        {
            id: 6,
            category: 'Myntra',
            brand: 'Land of Lost',
            image: '/onboarding/work/work (6).webp'
        }, {
            id: 7,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (7).webp'
        },
         {
            id: 8,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (8).webp'
        },
         {
            id: 9,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (9).webp'
        },
         {
            id: 10,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (10).webp'
        }, {
            id: 11,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (11).webp'
        }, {
            id: 12,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (12).webp'
        }, {
            id: 13,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (13).webp'
        }, {
            id: 14,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (14).webp'
        }, {
            id: 15,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (15).webp'
        }, {
            id: 16,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (16).webp'
        }, {
            id: 17,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (17).webp'
        }, {
            id: 18,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (18).webp'
        }, {
            id: 19,
            category: 'Myntra',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (19).webp'
        }, {
            id: 20,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (20).webp'
        }, {
            id: 21,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (21).webp'
        }, {
            id: 22,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (22).webp'
        }, {
            id: 23,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (23).webp'
        }, {
            id: 24,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (24).webp'
        }, {
            id: 25,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (25).webp'
        }, {
            id: 26,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (26).webp'
        }, {
            id: 27,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (27).webp'
        }, {
            id: 28,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (28).webp'
        }, {
            id: 29,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (29).webp'
        }, {
            id: 30,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (30).webp'
        }, {
            id: 31,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (31).webp'
        }, {
            id: 32,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (32).webp'
        }, {
            id: 33,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (33).webp'
        }, {
            id: 34,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (34).webp'
        }, {
            id: 35,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (35).webp'
        }, {
            id: 36,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (36).webp'
        }, {
            id: 37,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (37).webp'
        },
        {
            id: 38,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (39).webp'
        },{
            id: 40,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (40).webp'
        },{
            id: 41,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (41).webp'
        },{
            id: 42,
            category: 'Naykaa',
            brand: 'JG Comes Health',
            image: '/onboarding/work/work (42).webp'
        },
    ];

    // Duplicate works for seamless loop
    const duplicatedWorks = [...works, ...works, ...works];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isPaused) return;

        let scrollPosition = 0;
        const scrollSpeed = 2.5;

        const scroll = () => {
            scrollPosition += scrollSpeed;

            // Reset when scrolled through one set
            const singleSetWidth = (works.length * 176); // w-40 (160px) + gap-4 (16px)
            if (scrollPosition >= singleSetWidth) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
        };

        const intervalId = setInterval(scroll, 20);
        return () => clearInterval(intervalId);
    }, [isPaused, works.length]);

    const openPopup = (index) => {
        setSelectedWorkIndex(index % works.length);
    };

    const closePopup = (e) => {
        if (e.target === e.currentTarget) {
            setSelectedWorkIndex(null);
        }
    };

    const nextWork = () => {
        setSelectedWorkIndex((prev) =>
            prev === works.length - 1 ? 0 : prev + 1
        );
    };

    const previousWork = () => {
        setSelectedWorkIndex((prev) =>
            prev === 0 ? works.length - 1 : prev - 1
        );
    };

    const getPrevIndex = (index) => index === 0 ? works.length - 1 : index - 1;
    const getNextIndex = (index) => index === works.length - 1 ? 0 : index + 1;

    return (
        <div className="w-full  py-8 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug text-center">
                1Lakhs+ Brands live on Ecommerce Portals
            </h2>
            <div className="max-w-7xl mx-auto">
                {/* Infinite Scrolling Container */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Gradient Overlays */}
                    {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div> */}
                    {/* <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div> */}

                    {/* Scrolling Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-hidden py-4"
                        style={{ scrollBehavior: 'auto' }} data-aos="fade-up"
                    >
                        {duplicatedWorks.map((work, index) => (
                            <div
                                key={`${work.id}-${index}`}
                                onClick={() => openPopup(index)}
                                className="flex-shrink-0 w-96 h-64 cursor-pointer group relative"
                            >
                

                                {/* Main Card with blur effect */}
                                <div
                                    className="relative bg-white bg-opacity-40 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300  shadow-xl "
                                    style={{ backdropFilter: 'blur(8.3px)' }}
                                >
                                    {/* Image Container - no padding */}
                                    <div className="aspect[16/9]">
                                        <img
                                            src={work.image}
                                            alt={work.category}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Category Label */}
                                    <div className="px-3 py-2 bg-white bg-opacity-60 backdrop-blur-sm">
                                        <h3 className="text-xs font-semibold text-gray-800 truncate">
                                            {work.category}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {selectedWorkIndex !== null && (
                <div
                    onClick={closePopup}
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                >
                    <div className="relative w-full max-w-6xl">
                        {/* Three Card Layout */}
                        <div className="flex items-center justify-center gap-6">
                            {/* Previous Card - Light Opacity */}
                            <div className="flex-shrink-0 w-64 opacity-30 transform scale-90 transition-all">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                                    <div className="">
                                        <img
                                            src={works[getPrevIndex(selectedWorkIndex)].image}
                                            alt="Previous"
                                            className="w-full  object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Current Card */}
                            <div className="flex-shrink-0 w-[500px] transition-all">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="">
                                        <img
                                            src={works[selectedWorkIndex].image}
                                            alt={works[selectedWorkIndex].category}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Brand Info */}
                                    <div className="p-6">
                                        {/* <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                            {works[selectedWorkIndex].brand}
                                        </h2> */}
                                        <p className="text-gray-600">{works[selectedWorkIndex].category}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Next Card - Light Opacity */}
                            <div className="flex-shrink-0 w-64 opacity-30 transform scale-90 transition-all">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                                    <div className="aspect-[4/3]">
                                        <img
                                            src={works[getNextIndex(selectedWorkIndex)].image}
                                            alt="Next"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                previousWork();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
                        >
                            <ChevronLeft size={28} className="text-gray-800" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextWork();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
                        >
                            <ChevronRight size={28} className="text-gray-800" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}