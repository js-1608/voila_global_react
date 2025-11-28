import React, { useEffect, useState } from "react";

const WhyChooseVoila = () => {
    const images = [
        "Ellipse 277.png", // replace with real image paths
        "Ellipse 278.png",
        "Ellipse 279.png",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Arrange images so active one comes in front
    const getZIndex = (index) => {
        if (index === activeIndex) return "z-30";
        if ((index + 1) % images.length === activeIndex) return "z-20";
        return "z-10";
    };

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Overlapping Circular Images */}
                <div className="relative hidden lg:flex items-center justify-center h-full">

                    {/* Top Text Over Images */}
                    <p className="absolute top-[0px] left-0 w-full text-sm text-gray-500 text-center md:text-left">
                        Trusted by emerging and{" "}
                        <span className="text-red-500 font-semibold">5000+ leading brands</span>{" "}
                        alike — with years of experience in scaling businesses across categories and platforms.
                    </p>

                    <div className="relative mt-16 w-[400px] h-[300px] m-auto items-center justify-center flex">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Slide ${index}`}
                                className={`
                                absolute top-0  h-[390px]  object-cover transition-all duration-700 ease-in-out
                                ${getZIndex(index)}
                                ${index === activeIndex ? "translate-x-10 scale-110" : index === (activeIndex + 1) % 3 ? "-translate-x-40 " : "-translate-x-20 "}
                            `}
                                style={{
                                    clipPath: "circle(50% at center)",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Why Should You Choose Voila?
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Voila offers a unique blend of services including e-commerce support,
                        expert digital marketing, and professional photoshoot services, making
                        it a one-stop-shop for business growth.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Every business is different. We customize digital marketing campaigns
                        that align perfectly with your brand, target audiences, and goals for
                        maximum impact.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Our photoshoot services capture your brand’s essence with high-quality,
                        creative imagery that enhances your marketing and helps you stand out.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        From strategy to execution, Voila’s experienced team partners with you
                        closely to ensure your business grows sustainably and achieves real results.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseVoila;
