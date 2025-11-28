// src/components/Banner.jsx
import React from "react";
import bannerImg from "../assets/banner-laptop.png";

const Banner = () => {
  return (
    <section className="bg-linear-to-r from-violet-700 to-purple-800 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE: Heading + image */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide mb-2">
            Grow your brand
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Grow Your Brand <br />
            Beyond Borders with <br />
            <span className="text-yellow-300">Flipkart</span>
          </h1>

          <p className="text-sm sm:text-base max-w-md mb-6">
            Reach millions of customers with seamless onboarding, catalog setup,
            and dedicated account support.
          </p>

          <div className="mt-4">
            <img
              src={bannerImg}
              alt="Walmart marketplace dashboard"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Features + price box */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Feature title="End-to-end onboarding & catalog setup" />
            <Feature title="Support for 100+ item shipment to WFS" />
            <Feature title="Free $1,000 advertising credit" />
            <Feature title="Dedicated account manager for 3 months" />
          </div>

          <div className="border border-white/60 rounded-xl p-6 mt-6 text-center">
            <p className="text-sm font-semibold">Services Worth</p>
            <p className="text-2xl sm:text-3xl font-bold line-through text-red-300">
              INR 1,30,000
            </p>
            <p className=" animate-popup text-3xl sm:text-4xl font-extrabold mt-1 animate-shake"> 
              FREE
            </p>
            <p className="text-sm mt-3">
              Get 1.3 Lakh worth onboarding, ads & shipment support.
            </p>
            <button className="mt-4 bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-full">
              Limited Slots
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-purple-900 text-lg font-bold">
        ✓
      </div>
      <p className="text-sm sm:text-base">{title}</p>
    </div>
  );
};

export default Banner;
