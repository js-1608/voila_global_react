// TimelineStairsFull.jsx
import React from "react";

export default function TimelineStairsFull({ items: propsItems }) {
    const sampleItems = [
        {
            yearRange: "2017–2018",
            logos: [
                "/about/13.png",
                "/about/14.png",
                "/about/17.png",

            ],
            bullets: [
                "2017: First Client — Winsant",
                "2018: Retail Operations, Voila Studio & Production",
            ],
        },
        {
            yearRange: "2019–2020",
            logos: [
                "/about/11.png",
                "/about/12.png",
                "/about/16.png",
                "/about/2019.png",
                "/about/amazon.png",
                "/about/15.png",

            ],
            bullets: [
                "2018: Flipkart & Amazon Partner, HOMESHOP18 Partner",
                "2019: Senrysa Tech, Paytm, Myntra/Jabong, Voilakart Launched",
            ],
        },
        {
            yearRange: "2021–2022",
            logos: [
                "/about/20.png",
                "/about/21.png",
                "/about/22.png",
                "/about/2019.png",
                "/about/19.png",
                "/about/unicommerce.png",
            ],
            bullets: [
                "2019: Consultancy, RentItBae & Moksha Partners; Top 10 by Silicon India",
                "2019–20: AJIO, Unicommerce, IT Services",
                "2020: Alibaba Partnership, Payoneer Partnership, eBay Alliance",
                "2021: Amazon Global Partnership",
            ],
        },
        {
            yearRange: "2023–2025",
            logos: [
                "/about/nabad.png",
                "/about/Group 828.png",
                "/about/tarde.png",
                "/about/11.png",
                "/about/2020.png",
                "/about/10.png",

            ],
            bullets: [
                "2022: Daraz Partnership; Myntra/Flipkart Partnership",
                "2022: Amazon SF Program; IndiaMart Partnership",
                "2023: Bangalore Office Started",
                "2024: Partnership With New Ecommerce Partner Lotus imall",
                "2025: Walmart Official Partners",


            ],
        },
    ];

    const items = propsItems && propsItems.length ? propsItems : sampleItems;

    // tweak this to change how high each step rises (px)
    const STEP_PX = 36;

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10">
          Awards, Partnerships & Milestones
        </h2> */}

                {/* --- Large screens: stairs with same baseline (items aligned bottom, individually lifted) --- */}
                <div className="hidden lg:flex items-end gap-6 m-auto">
                    {items.map((col, idx) => {
                        const rise = idx * STEP_PX;
                        // For accessibility, expose the year as aria-label on the card container
                        return (
                            <div
                                key={idx}
                                className="w-72 min-w-[18rem] flex-shrink-0 mt-28"
                                style={{
                                    transform: `translateY(-${rise}px)`,
                                    zIndex: idx + 10,
                                }}
                                aria-label={`Milestone ${col.yearRange}`}
                            >
                                <div
                                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md transition-transform duration-300 hover:-translate-y-3"
                                    role="group"
                                >
                                    {/* logos */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {col.logos.map((l, i) => (
                                            <div
                                                key={i}
                                                className="w-18 h-18 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
                                                aria-hidden="true"
                                            >
                                                <img
                                                    src={l}
                                                    alt={`logo ${i}`}
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* bullets */}
                                    <div className="text-sm text-gray-700 space-y-2 mb-6">
                                        {col.bullets.map((b, i) => (
                                            <p key={i} className="leading-snug">
                                                {b}
                                            </p>
                                        ))}
                                    </div>

                                    {/* footer */}
                                    <div>
                                        <div className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 w-14 mb-2" />
                                        <div className="text-lg font-semibold">{col.yearRange}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- Mobile & Tablet: stacked grid for accessibility --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8">
                    {items.map((col, idx) => (
                        <article
                            key={idx}
                            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md"
                            aria-label={`Milestone ${col.yearRange}`}
                        >
                            <div className="flex flex-wrap gap-3 mb-4">
                                {col.logos.map((l, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
                                        aria-hidden="true"
                                    >
                                        <img
                                            src={l}
                                            alt={`logo ${i}`}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="text-sm text-gray-700 space-y-2 mb-6">
                                {col.bullets.map((b, i) => (
                                    <p key={i} className="leading-snug">
                                        {b}
                                    </p>
                                ))}
                            </div>

                            <div>
                                <div className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 w-14 mb-2" />
                                <div className="text-lg font-semibold">{col.yearRange}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
