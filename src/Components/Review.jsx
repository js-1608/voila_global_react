import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Nareneder Chauhan",
      title: "Online Seller",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      testimonial: "I recently used VOILA Studio for a fashion photoshoot, and the experience was nothing short of amazing. The team was punctual, and creative, and made the models feel comfortable, resulting in natural, vibrant shots. Would definitely recommend it to anyone!",
      bgColor: "bg-purple-100"
    },
    {
      id: 2,
      name: "karan kumar",
      title: "Marketing Manager",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXSl7xwAkmBaWtDDBZ640lgI3pYg8IiNm2ePSztIiLOCbQ5HxNwTw=w65-h65-p-rp-mo-br100",
      testimonial: "I was searching for e-commerce website development for a long time back. I turned to many firms but unsatisfied then I got to know about Voila biz. They provide the best services in e-commerce website development. Really happy with their service.",
      bgColor: "bg-purple-100"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      title: "Brand Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      testimonial: "The photoshoot captured our brand's essence perfectly. The team was professional, creative, and delivered stunning visuals for marketing.",
      bgColor: "bg-purple-100"
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "E-commerce Owner",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      testimonial: "Outstanding customer service and results. The team helped us achieve our sales targets within the first quarter. Exceptional work!",
      bgColor: "bg-purple-100"
    },
    {
      id: 5,
      name: "Amit Patel",
      title: "Startup Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      testimonial: "From strategy to execution, everything was handled professionally. Our brand growth exceeded expectations. Highly satisfied!",
      bgColor: "bg-purple-100"
    },
    {
      id: 6,
      name: "Sneha Singh",
      title: "Business Owner",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      testimonial: "The comprehensive approach to digital marketing transformed our online presence. Great team, excellent results!",
      bgColor: "bg-purple-100"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    const itemsPerSlide = isMobile ? 1 : 3; // 1 on mobile, 3 on desktop
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="relative group mt-12">
      {/* Profile Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Card Shadow */}
      <div className="absolute inset-0 bg-[#662D9166] rounded-3xl transform rotate-6 opacity-40"></div>
      <div className="absolute inset-0 bg-purple-150 rounded-3xl transform rotate-1 opacity-60"></div>

      {/* Main Card */}
      <div className="relative bg-white rounded-3xl p-6 pt-16 md:p-8 md:pt-16 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[300px] flex flex-col">
        <div className="flex-1 mb-6">
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            "{testimonial.testimonial}"
          </p>
        </div>
        <div className="text-center">
          <h4 className="font-bold text-[#ED174B] text-lg mb-1">
            {testimonial.name}
          </h4>
          {/* <p className="text-gray-500 text-sm">{testimonial.title}</p> */}
        </div>
        <div className="absolute top-4 left-6 text-purple-200 text-4xl font-serif">"</div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Voices of Success...
          </h2>
          <p className="text-gray-600 max-w-xl text-sm md:text-base">
            Real stories, real results from those who trusted us to grow their business.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 self-end">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#662D91] hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#662D91] hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-3"} gap-8 md:gap-16`}>
        {getVisibleTestimonials().map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Review;
