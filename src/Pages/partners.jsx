import React, { useState } from "react";
import heroMockups from "/partners.png"; // put your composite image here

const partnersData = [
    {
        name: "2Coders",
        logo: "https://via.placeholder.com/100x40?text=2Coders",
        description:
            "2Coders Studio is a custom software development company driven by a creative and meaningful approach for designing digital solutions with the users in mind.",
        category: "solution",
        tags: ["Solution Partners", "Dev Firm", "S&E Dev", "Studio"],
    },
    {
        name: "3Play Media",
        logo: "https://via.placeholder.com/100x40?text=3PlayMedia",
        description:
            "3Play Media is the premium, full-service video accessibility solution for enterprise clients.",
        category: "platform",
        tags: ["Platform Partners", "Accessibility", "Captioning", "Encoding"],
    },
    {
        name: "A Different Engine",
        logo: "https://via.placeholder.com/100x40?text=Engine",
        description:
            "A Different Engine is a digital product design and development agency building cross-platform experiences for media and entertainment brands.",
        category: "solution",
        tags: ["Solution Partners", "Dev Firm", "Monetization", "Studio"],
    },
    {
        name: "Abstract Partners",
        logo: "https://via.placeholder.com/100x40?text=Abstract",
        description:
            "Abstract Partners helps building commerce companies grow by providing engineering, product, and design support.",
        category: "solution",
        tags: ["Solution Partners", "Design", "Monetization", "Studio"],
    },
];

const categories = [
    { key: "all", label: "All" },
    { key: "strategic", label: "Strategic Alliances" },
    { key: "platform", label: "Platform Partners" },
    { key: "solution", label: "Solution Partners" },
];

const agencyPartners = [
    { name: "Atomic Robot", logo: "https://via.placeholder.com/120x40?text=Atomic+Robot" },
    { name: "BeTomorrow", logo: "https://via.placeholder.com/120x40?text=BeTomorrow" },
    { name: "ConsultingWhiz", logo: "https://via.placeholder.com/120x40?text=CW" },
    { name: "Lickability", logo: "https://via.placeholder.com/120x40?text=Lickability" },
    { name: "Majestyk", logo: "https://via.placeholder.com/120x40?text=Majestyk" },
    { name: "Phiture", logo: "https://via.placeholder.com/120x40?text=Phiture" },
    { name: "RapptR", logo: "https://via.placeholder.com/120x40?text=RapptR" },
    { name: "Recuro", logo: "https://via.placeholder.com/120x40?text=Recuro" },
    { name: "Twigeo", logo: "https://via.placeholder.com/120x40?text=Twigeo" },
    { name: "Very Good Ventures", logo: "https://via.placeholder.com/120x40?text=VGV" },
];

export default function PartnersPage() {
    const [filter, setFilter] = useState("all");

    const filteredPartners =
        filter === "all"
            ? partnersData
            : partnersData.filter((p) => p.category === filter);

    return (
        <>
            <section className="relative overflow-hidden max-w-7xl m-auto my-0 lg:my-12 rounded-3xl bg-gradient-to-r from-yellow-100 via-white to-yellow-100 shadow-xl">
                {/* background gradient */}


            <div className=" mx-auto px-6 lg:px-0  py-2 lg:py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12  items-center justify-evenly">
                    {/* LEFT: content */}
                    <div className="lg:col-span-6 px-4">
                        <h1 className="text-3xl sm:text-3xl lg:text-[44px] font-extrabold text-gray-800 leading-tight">
                            <span className="block">Your Strategic</span>
                            <span className="block">
                                <span className="text-yellow-300">Full-Stack</span> Digital
                                <span className="ml-2">Growth Partner</span>
                            </span>
                        </h1>

                        <p className="mt-4 text-sm  max-w-xl">
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
                        <div className="mt-6 flex items-center gap-4 text-sm text-violet-900">
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
                                <span className="font-semibold ">4.1/5</span>
                                <span className="text-violet-800 ml-1"> (14k Reviews)</span>
                            </div>
                        </div>
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
                                src={heroMockups}
                                alt="Website mockups previews"
                                className="  w-[80%] sm:w-[75%] lg:w-[80%] max-w-none drop-shadow-2xl m-auto"

                            />
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <div className="min-h-screen  text-gray-900 py-16 px-6">

                <section className="bg-white py-20 px-6 ">
                    {/* Logos Grid */}
                    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                        {agencyPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="w-full h-28 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition-all duration-300 hover:scale-110"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-10 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </section>


                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                        VOILA PARTNERS HELP YOU BUILD BETTER VIDEO. PERIOD.
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        VOILA's partners help you to tackle the challenges you run into while
                        creating the most flawless video experience for your customers.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setFilter(cat.key)}
                            className={`px-5 py-2 rounded-md border text-sm uppercase tracking-wide transition-all duration-300 ${filter === cat.key
                                ? "bg-[#662D91] text-white"
                                : "border-gray-300 hover:border-black"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Partners Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
                    {filteredPartners.map((partner, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 mb-4 object-contain"
                            />
                            <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                            <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {partner.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="border border-gray-300 text-xs px-2 py-1 rounded-md bg-gray-50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}


