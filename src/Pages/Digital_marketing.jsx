import React, { useState } from 'react';
import { Check } from 'lucide-react';
import FAQ from '../Components/Faq';
import { digital, WebisteServie } from '../data/Data';
import Review from '../Components/Review';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Pricing from '../Components/Pricing';
import DigitalMarketingSolutions from '../Components/Marketing_service';
import { Users, Rocket, Brain, Settings } from "lucide-react";
import Service from '../Components/Services';

export default function DigitalMarketing() {

    const stats2 = [
        {
            percentage: '50%',
            direction: 'down',
            metric: 'Cost Per Action',
            company: 'valuele',
            logo: 'https://www.magazinecafestore.com/cdn/shop/files/MagazineCafe_Logo_with_R_1_270x_2x_270x_2x_1603354e-3a4a-42e1-9ab4-a3b2ac5ff394_260x@2x.png'
        },
        {
            percentage: '30%',
            direction: 'up',
            metric: 'Increase in Leads',
            company: 'ICICI Prudential',
            logo: 'https://voilastudio.co.in/assets/img/voila_studio_logo.svg'
        },
        {
            percentage: '100%',
            direction: 'up',
            metric: 'Content Viewability',
            company: 'Prestige',
            logo: 'https://shop.ttkprestige.com/media/logo/stores/1/Prestige-Logo-PNG-HD.png'
        },
        {
            percentage: '15%',
            direction: 'up',
            metric: 'Increase in Subscriptions',
            company: 'Flinto',
            logo: 'https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339'
        },
        {
            percentage: '700%',
            direction: 'up',
            metric: 'Return on Ad Spend',
            company: 'Lifeboost',
            logo: 'https://kalpraag.com/cdn/shop/files/kalpraag-Logo__1_-removebg-preview.png'
        }
    ];

    const features = [
        {
            icon: <Users className="w-8 h-8 text-purple-900" />,
            title: "1st Party Audience Targeting Solutions",
            desc: "Use first-party data, AI, and privacy-safe tech to reach the right audiences and improve performance.",
            gradient: "from-purple-200 to-purple-50",
        },
        {
            icon: <Rocket className="w-8 h-8 text-purple-900" />,
            title: "Ad Experiences that Drive Performance",
            desc: "Custom creatives, asset tools, and brand safety features optimize campaigns and boost results across the funnel.",
            gradient: "from-purple-100 to-white",
        },
        {
            icon: <Brain className="w-8 h-8 text-purple-900" />,
            title: "Powerful Performance AI",
            desc: "Our AI uses years of data to deliver targeted, scalable ads that drive ROI and growth.",
            gradient: "from-purple-200 to-white",
        },
        {
            icon: <Settings className="w-8 h-8 text-purple-900" />,
            title: "Smart, Simple Campaign Management",
            desc: "Simple, transparent tools give full control for smooth campaign setup, optimization, and performance tracking.",
            gradient: "from-purple-100 to-purple-50",
        },
    ];



    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className=" bg-[#005645] rounded-bl-[200px] rounded-br-[200px] mb-16">

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center  px-6 py-10">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Performance{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-white px-6 py-2">Beyond</span>
                                <span className="absolute inset-0 bg-[#662D91] rounded-lg transform -skew-x-3"></span>
                            </span>
                            <br />
                            Search and Social
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
                            Grow your business through performance advertising technology
                            that delivers measurable outcomes.
                        </p>

                        {/* CTA Button */}
                        <button className="bg-lime-300 text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-lime-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                            CONNECT NOW
                        </button>
                    </div>
                </div>

                {/* Bottom Wave Decoration */}
                {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-100"></div> */}
            </div>

            {/* <div className="bg-white py-8 px-6 ">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-10 text-center">
                        Advertisers Winning with Realize
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {stats2.map((stat, index) => (
                            <div
                                key={index}
                                className="hover:bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-shadow border border-gray-200"
                            >
                                <div className="flex items-center gap-2 mb-2">
                         
                                    <span className="text-4xl md:text-5xl font-bold ">
                                        {stat.percentage}
                                    </span>
                                </div>

                                <p className="text-sm md:text-base font-medium mb-4 min-h-[48px] flex items-center text-gray-600">
                                    {stat.metric}
                                </p>

                                <div className="mt-auto">
                                    <img
                                        src={stat.logo}
                                        alt={stat.company}
                                        className="h-10 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         */}

            <DigitalMarketingSolutions />

            {/* Why Choose Us */}
            <section className="max-w-7xl m-auto py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12  animate-fadeIn">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            {/* Heading (Left) */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 md:w-2/5">
                                Why Choose Our Digital Marketing Services?
                            </h1>

                            {/* Text (Right) */}
                            <p className="text-gray-600 text-sm md:text-base md:w-3/5 text-left lg:text-right">
                                tempora veritatis excepturi sunt omnis voluptate nulla quibusdam labore, rem, delectus porro harum impedit? Harum, unde. Nesciunt, suscipit.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-gray-300 group bg-gradient-to-b from-[#f8f8f8] to-transparent rounded-2xl p-6  shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-101 cursor-pointer ">
                            <h3 className="text-2xl font-bold mb-4 text-purple-500">Our Agency</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 ">
                                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>Dedicated account manager with in-house team</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>All-in-one platform for ROI tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>Custom strategies built from your objectives</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>24/7 help desk and direct phone line</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-gray-300 group bg-gradient-to-b from-[#f8f8f8] to-transparent rounded-2xl p-6  shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-101 cursor-pointer ">
                            <h3 className="text-2xl font-bold mb-4">Typical Agency</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Dedicated manager needing your time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Third-party tools with subscription costs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Copy-and-paste checklist approach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Unreliable when issues arise</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-gray-300 group bg-gradient-to-b from-[#f8f8f8] to-transparent rounded-2xl p-6  shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-101 cursor-pointer ">
                            <h3 className="text-2xl font-bold mb-4">In-House Team</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Limited time to optimize 200+ factors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Mix of free and paid tools</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Limited resources and skillsets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">•</span>
                                    <span>Documentation gaps causing delays</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

           <section className="py-16 px-6 bg-gray-50 flex justify-center items-center">
                <div className="relative grid grid-cols-2 grid-rows-2 gap-0 max-w-4xl">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className={`relative w-96 h-96 flex flex-col p-8 justify-center items-center text-center rounded-full bg-gradient-to-br ${f.gradient} hover:bg-gradient-to-br hover:${f.hoverGradient} transition-all duration-300 shadow-md border border-white`}
                        >
                            <div className="mb-3 bg-white rounded-full p-3 shadow-sm">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 px-4">
                                {f.title}
                            </h3>
                            <p className="text-xs text-gray-600 mt-2 px-6">{f.desc}</p>
                        </div>
                    ))}

                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <div className=" text-black font-light text-3xl px-6 py-3  text-center">
                            Why <br />realize ?
                        </div>
                    </div>
                </div>
            </section> 



            {/* Pricing Section */}
            <Pricing />

            <Service serviceContent={WebisteServie} heading="Performance-Driven In Digital Market"
                subheading="Our digital marketing approach is built to attract, convert, and retain. With the right mix of performance and creativity, your brand stays ahead."
            />

            {/* Testimonial */}
            <Review />

            {/* FAQ Section */}
            <FAQ faqs={digital} />
        </div>
    );
}