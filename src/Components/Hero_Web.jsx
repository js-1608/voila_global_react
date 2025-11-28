// import React, { useState, useEffect } from 'react';
// import { Play, Pause } from 'lucide-react';
// import Button_Gradient from './Button_Gradient';
// import { Search, Star } from 'lucide-react';

// export default function HeroWeb() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const slides = [
//     {
//       title: 'Modern Applications',
//       subtitle: 'Applications made easy',
//       buttonText: 'Connect with our experts',
//       tabLabel: 'Global Research',
//       bgGradient: 'from-orange-500/20 via-blue-500/20 to-purple-500/20'
//     },
//     {
//       title: 'Innovative Solutions',
//       subtitle: 'Technology that transforms',
//       buttonText: 'Explore our solutions',
//       tabLabel: 'Modern Applications',
//       bgGradient: 'from-blue-500/20 via-purple-500/20 to-pink-500/20'
//     },
//     {
//       title: 'Expert Recognition',
//       subtitle: 'Industry-leading insights',
//       buttonText: 'Meet our analysts',
//       tabLabel: 'Analyst Recognition',
//       bgGradient: 'from-purple-500/20 via-pink-500/20 to-orange-500/20'
//     }
//   ];

//   useEffect(() => {
//     if (!isPlaying) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isPlaying, slides.length]);

//   const handleTabClick = (index) => {
//     setActiveIndex(index);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://cdn.vectorstock.com/i/500p/35/83/modern-software-development-vector-24033583.jpg"
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
//         <div className={`absolute inset-0 bg-gradient-to-br ${slides[activeIndex].bgGradient} transition-all duration-1000`}></div>
//       </div>

//       {/* Bokeh Effect Overlay */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-purple-400 rounded-full blur-3xl"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-20">
//         {/* Main Content */}
//         <div className="flex-1 flex flex-col justify-center max-w-3xl">
//           <h1 className="text-white text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700 transform">
//             {slides[activeIndex].title}
//           </h1>
//           <p className="text-white/90 text-xl lg:text-2xl mb-8 transition-all duration-700">
//             {slides[activeIndex].subtitle}
//           </p>
//           <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-50 transition-colors w-fit group">
//             {slides[activeIndex].buttonText}
//             <span className="transform group-hover:translate-x-1 transition-transform">→</span>
//           </button>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="flex items-center gap-8">
//           {/* Tabs */}
//           <div className="flex gap-8">
//             {slides.map((slide, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleTabClick(index)}
//                 className="relative text-white font-medium pb-2 transition-colors hover:text-white/80"
//               >
//                 {slide.tabLabel}
//                 {/* Underline */}
//                 <span
//                   className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${activeIndex === index ? 'w-full' : 'w-0'
//                     }`}
//                 ></span>
//               </button>
//             ))}
//           </div>

//           {/* Play/Pause Button */}
//           <button
//             onClick={togglePlayPause}
//             className="w-12 h-12 border-2 border-white/50 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
//             aria-label={isPlaying ? 'Pause' : 'Play'}
//           >
//             {isPlaying ? (
//               <Pause className="w-5 h-5 text-white fill-white" />
//             ) : (
//               <Play className="w-5 h-5 text-white fill-white ml-0.5" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Progress Indicators */}
//       <div className="absolute bottom-32 right-12 flex flex-col gap-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-1 h-12 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-purple-500' : 'bg-white/30'
//               }`}
//           ></div>
//         ))}
//       </div>
//     </div>



//   );
// }


// HeroWithMockups.jsx
import React from "react";
import heroMockups from "/biz_hero.png"; // put your composite image here

export default function HeroWithMockups() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#321647]   to-[#662D91]"
        aria-hidden="true"
      />


      <div className="max-w-7xl mx-auto px-6 lg:px-0  py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12  items-center">
          {/* LEFT: content */}
          <div className="lg:col-span-5">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              <span className="block">Building High-Performance </span>
              <span className="block">
                <span className="text-yellow-300">Websites </span> for Smarter Business Success
              </span>
            </h1>

            <p className="mt-4 text-sm  text-violet-100 max-w-xl">
              We deliver integrated web and marketing solutions that drive real
              results, making your brand visible, trusted, and chosen in a
              competitive digital landscape.
            </p>

            {/* search / CTA */}
            <form
              className="mt-8 flex items-center gap-3 max-w-xl"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <label htmlFor="search" className="sr-only">
                Search services
              </label>

              <div className="flex-1">
                <div className="relative">
                  <input
                    id="search"
                    type="text"
                    placeholder="Try Java Developer, React  etc."
                    className="w-full rounded-full py-3 pl-4 pr-36 text-sm sm:text-base bg-white/95 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    aria-label="Search services"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm px-4 py-2 shadow"
                    aria-label="Get your quote"
                  >
                    GET YOUR QUOTE
                  </button>
                </div>
              </div>
            </form>

            {/* trust / rating */}
            <div className="mt-6 flex items-center gap-4 text-sm text-violet-200">
              <div className="flex items-center gap-1">
                {/* 5 stars (use inline svg) */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.538 1.118L10 15.347l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.645 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <div>
                <span className="font-semibold text-white">4.1/5</span>
                <span className="text-violet-200 ml-1"> (14k Reviews)</span>
              </div>
            </div>
          </div>

          {/* RIGHT: mockup image */}
          <div className="lg:col-span-7 relative">
            {/* decorative glare/overlay for depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-3/4 h-full ml-auto rounded-l-3xl backdrop-blur-sm opacity-10" />
            </div>

            {/* image wrapper to control perspective and shadows */}
            <div className="relative w-full">
              <img
                src={heroMockups}
                alt="Website mockups previews"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 lg:translate-x-12 w-[80%] sm:w-[75%] lg:w-[100%] max-w-none drop-shadow-2xl"

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
