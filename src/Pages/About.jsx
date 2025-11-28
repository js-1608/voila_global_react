import React from 'react';
import HeroCards from './Test';

// AboutPage.jsx
// Single-file React component (no TypeScript) styled with Tailwind CSS.
// Drop this into your React app (e.g. src/components/AboutPage.jsx) and ensure Tailwind is configured.

export default function About() {
    return (
        <>
            <section className="relative overflow-hidden max-w-7xl m-auto my-0 lg:my-12 ">
                {/* background gradient */}


                <div className=" mx-auto px-6 lg:px-0  py-2 lg:py-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12  items-center justify-evenly">
                        {/* LEFT: content */}
                        <div className="lg:col-span-6 px-4">
                            <h1 className="text-3xl sm:text-3xl lg:text-[44px] font-extrabold text-gray-800 leading-tight">
                                <span className="block">Your Strategic</span>
                                <span className="block">
                                    <span className="text-[#662D91]">Full-Stack</span> Digital
                                    <span className="ml-2">Growth Partner</span>
                                </span>
                            </h1>

                            <p className="mt-4 text-sm  max-w-xl">
                                We deliver integrated web and marketing solutions that drive real
                                results, making your brand visible, trusted, and chosen in a
                                competitive digital landscape.
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

            <main className=" text-gray-800">
                {/* APPROACH / VALUES */}
                <section id="approach" className="bg-gradient-to-r from-white to-gray-50 py-12">
                    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow">
                            <h3 className="text-2xl font-bold">Our approach</h3>
                            <p className="mt-4 text-gray-600">We blend creative thinking with repeatable process—so your catalog scales without surprises. Clear briefs, standardized lighting setups and an obsessive focus on pixel-perfect retouching.</p>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { k: 'Right Mindset', v: 'Customer-first, metrics-led creative.' },
                                    { k: 'Right Concept', v: 'Designs that are simple, secure and scalable.' },
                                    { k: 'Right Team', v: 'Talented specialists in studio, retouch and production.' },
                                    { k: 'Right Delivery', v: 'On-time with consistent quality.' }
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
                                    <a href="#contact" className="block text-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium">Get a Quote</a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>

            <HeroCards/>
        </>

    );
}

function Stat({ label, value }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold">{value}</div>
            <div className="mt-1 text-sm text-gray-500">{label}</div>
        </div>
    );
}
