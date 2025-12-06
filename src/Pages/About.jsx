import React from 'react';
import { Link } from "react-router-dom";
import CertificateCarousel from '../Components/CertificateCarousel';
import TimelineStairs from '../Components/Journey';

export default function About() {
    const vertical = [
        {
            id: "VoilaStudio",
            title: "VOILA Studio",
            subtitle: "Ecommerce Studio",
            desc: "India’s leading eCommerce photography studio, specializing in product and fashion shoots for categories like apparel, accessories, beauty, lifestyle, home, electronics, and more. Our team of skilled photographers, stylists, editors, and professional models delivers high-quality visuals that make your products stand out and drive brand growth across major eCommerce platforms.",
            href: "https://voilastudio.in/",
            icon: "/verticles/studio.png",
        },
        {
            id: "VoilaBiz",
            title: "VOILA Biz",
            subtitle: "Ecommerce Solutions",
            desc: " The growth engine for MSMEs and Startups, driving up to 7x growth for brands through brand building, scaling strategies, consultancy, website development, digital marketing, marketplace onboarding, and international business support.",
            href: "https://voilabiz.com/",
            icon: "/verticles/biz.png",
        },
        {
            id: "VOILA Kart",
            title: "VOILA Retail",
            subtitle: "Reatil",
            desc: "We act as an eDistributor, eWholesaler, and eRetailer by buying products and selling them online in India and international markets. As the merchant on record, we help artisans, SMEs, and manufacturers scale their business, find international buyers, and export their products with ease.",
            href: "https://voilaretail.com/",
            icon: "/verticles/retail.png",
        },
        {
            id: "voilakart",
            title: "VOILAKART",
            subtitle: "E-commerce",
            desc: " VOILAKart offers a wide range of products, including home and kitchen solutions, wooden and leatherite items, kids’ games, gaming consoles, pet care, and auto accessories. Carefully curated for quality and convenience, it makes shopping simple, reliable, and suited for modern households.",
            href: "https://voilakart.com/",
            icon: "/verticles/kart.png",
        },
    ];

    return (
        <>
            <section className="relative overflow-hidden max-w-7xl m-auto my-0 lg:my-12 ">
                {/* background gradient */}


                <div className=" mx-auto px-6 lg:px-0  py-2 lg:py-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12  items-center justify-evenly">
                        {/* LEFT: content */}
                        <div className="lg:col-span-6 px-4">
                            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                                <span className="block">Your Strategic</span>
                                <span className="block">
                                    <span className="text-[#662D91]"> Digital</span>
                                    <span className="ml-2">Growth Partner</span>
                                </span>
                            </h1>

                            <p className="mt-4 text-sm  max-w-xl">
                                VOILAGlobal is a complete ecosystem for growth. From emerging startups and MSMEs to established brands, we empower businesses of every size to grow, scale, and thrive in the digital-first era <br /><br />
                                With a client-first approach and a trusted network of 5,000+ brands across India, we simplify complexity and create clear pathways for measurable success. Beyond just services, we focus on brand building, consultancy, digital scaling, and international expansion — helping businesses transform their vision into reality.

                            </p>
                        </div>

                        {/* RIGHT: mockup image */}
                        <div className="lg:col-span-6 ">
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
                                    src="voila_verse.webp"
                                    alt="Website mockups previews"
                                    className="  w-[80%] sm:w-[75%] lg:w-[80%] max-w-none  m-auto"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className=" text-gray-800 max-w-7xl m-auto">
                {/* APPROACH / VALUES */}
                <section id="approach" className="bg-gradient-to-r from-white to-gray-50 py-12">
                    <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow">
                            <h3 className="text-2xl font-bold">Our Approach to Business Growth</h3>
                            <p className="mt-4 text-gray-600 text-sm">
                                VoilaGlobal has joined hands with Godrej Nirmaan to empower MSMEs and startups across India to establish and expand their presence in the digital commerce space.<br />
                                Through this partnership, we aim to simplify the journey for emerging businesses — from marketplace onboarding to brand growth — helping them go from local to global.<br />
                                We provide end-to-end support for sellers to launch and manage their presence on major Indian marketplaces such as Amazon, Myntra, Nykaa, Ajio, and Flipkart, as well as on global platforms like Walmart, Alibaba, Etsy, and eBay.
                            </p>

                            <h3 className="text-lg mt-6 text-purple-900 font-medium">Our initiative focuses on:</h3>
                            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { k: 'Empower MSMEs', v: 'Empower MSMEs and Startups by building a strong foundation for digital growth.' },
                                    { k: 'Brand Development ', v: 'Scale Brands with strategies that combine creativity, technology, and data.' },
                                    { k: 'Account & Catalog Management', v: 'Consult & Guide businesses through their e-commerce and international trade journeys.' },
                                    { k: 'Global Expansion', v: 'Facilitate Global Expansion by connecting Indian manufacturers, artisans, and SMEs with buyers across the world.' }
                                ].map((it) => (
                                    <div key={it.k} className="p-4 border rounded-lg">
                                        <h4 className="font-semibold">{it.k}</h4>
                                        <p className="mt-2 text-sm text-gray-600">{it.v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <aside className="hidden lg:block">
                            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow">
                                <h4 className="font-semibold">Why VOILA</h4>
                                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                                    <li>ISO-style studio lighting</li>
                                    <li>Fast turnarounds & bulk pricing</li>
                                    <li>Dedicated account manager</li>
                                    <li>Secure cloud delivery</li>
                                </ul>

                                <div className="mt-6">
                                    <Link to="/contact-us" className="block text-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium">Get a Quote</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>

            <section className="py-20 bg-white max-w-7xl m-auto">
                <div className="container mx-auto ">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            Our Core Verticals
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Four focused teams delivering specialized outcomes — choose the
                            vertical that fits your growth stage.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {vertical.map((it) => (
                            <a
                                key={it.id}
                                href={it.href}
                                target='_blank'
                                className="group block bg-white rounded-2xl border border-gray-100 shadow-sm
                         p-2 text-left transition transform hover:-translate-y-2 hover:shadow-xl
                         focus:outline-none focus:ring-4 focus:ring-indigo-50"
                                aria-label={`${it.title} — ${it.subtitle}`}
                            >
                                {/* icon area */}
                                <div className="flex items-center justify-center  mx-auto rounded-lg
                              bg-gradient-to-b from-white to-gray-50 ring-1 ring-gray-100">
                                    {/* Use SVG for crispness; fallback to img if needed */}
                                    <img
                                        src={it.icon}
                                        alt={`${it.title} logo`}
                                        className="object-contain"
                                    />

                                </div>

                                {/* title */}
                                <h3 className="mt-6 text-center text-lg font-semibold tracking-tight text-gray-900">
                                    {it.title}
                                </h3>

                                <div className="mt-1 text-center text-indigo-600 text-sm font-medium ">
                                    {it.subtitle}
                                </div>

                                <p className="mt-4  text-sm text-gray-500 text-justify">{it.desc}</p>

                                <div className="mt-6 flex items-center justify-center">
                                    <span
                                        className="text-sm text-gray-400 group-hover:text-indigo-600 group-focus:text-indigo-600
                             transition inline-flex items-center gap-2"
                                    >
                                        Visit  Website
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* small tertiary CTA */}
                    <div className="mt-10 max-w-3xl mx-auto text-center">
                        <p className="text-sm text-gray-500">
                            Not sure which vertical fits your needs?{" "}
                            <Link to="/contact-us" className="text-indigo-600 font-medium">
                                Get a tailored suggestion →
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-6xl mx-auto">
                        <h2 className="text-3xl font-extrabold">Our Vision</h2>
                        <p className="mt-3 text-gray-600 text-sm">
                            Whether you are an emerging entrepreneur, a growing MSME, or a global brand, our mission is to amplify your brand presence, drive sustainable growth, and open new horizons in both domestic and international markets. At VOILAGlobal, we don’t just provide services — we become your strategic partner, combining technology, creativity, and market expertise to turn business vision into measurable success.
                            <br /><br />We aim to empower brands of all sizes to compete confidently in the digital-first world, scale efficiently, and expand across borders with ease. By building lasting partnerships, delivering actionable strategies, and enabling seamless access to new markets, we ensure that every brand we work with not only grows but thrives in an increasingly competitive landscape.
                        </p>
                    </div>
                </div>
            </section>

            <TimelineStairs />

            <div className=" mx-auto ">
                <CertificateCarousel />

            </div>

        </>

    );
}
