// VoilaStudioPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

/**
 * VoilaStudioPage
 * Single-file React page using Tailwind. Replace or split components if you like.
 */
export default function VoilaStudioPage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [filter, setFilter] = useState("all");
    const carouselRef = useRef(null);

    useEffect(() => {
        // close mobile when resizing to large screens
        const onResize = () => {
            if (window.innerWidth > 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const projects = [
        {
            footer: "Product Shoot →",
            imgs: [
                "https://voilastudio.in/voilastudio_myntra/images/product_ecomm/eCommerce_photography_flatlay_april25%20(19).webp",
                "https://voilastudio.in/voilastudio_myntra/images/product_ecomm/eCommerce_photography_trollys_17-07-2025%20(62).webp",
                "https://voilastudio.in/voilastudio_myntra/images/booking_product_images/eCommerce_photography_fmcgchipss_(6).webp",
            ],
        },
        {
            footer: "Model Shoot →",
            imgs: [
                "https://voilastudio.in/voilastudio_myntra/images/studio/3.webp",
                "https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_ecomm/eCommerce_photography_tshirts_01-08-2025%20(46).webp",
                "https://voilastudio.in/voilastudio_myntra/images/kids_ecomm/eCommerce_Photography_jeans%20(30).webp",
            ],
        },
        {
            footer: "Premium Shoot →",
            imgs: [
                "https://voilastudio.in/voilastudio_myntra/images/studio/1.webp",
                "https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_premium_ecomm/premium_20_may%20(38).webp",
                "https://voilastudio.in/voilastudio_myntra/images/kids_ecomm/kids_premium_ecomm/eCommerce_photography_chil_premiumshoot%20(39).webp",
            ],
        },
        {
            footer: "Video Shoot →",
            imgs: [
                "https://voilastudio.in/voilastudio_myntra/images/booking_product_images/eCommerce_photography_formalfashiomen_(9).webp",
                "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_formaltrousersmenfash_(10).webp",
                "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_lehangacholi_(21).webp",
            ],
        },
        {
            footer: "Ghost Shoots →",
            imgs: [
                "https://voilastudio.in/voilastudio_myntra/images/studio/2.webp",
                "https://voilastudio.in/voilastudio_myntra/images/product_ecomm/eCommerce_photography_ghostshoot_13-08-2025%20(3).webp",
                "https://voilastudio.in/voilastudio_myntra/images/product_ecomm/eCommerce_photography_ghostshoot_13-08-2025%20(25).webp",
            ],
        },
        {
            footer: "Creative Shoot →",
            imgs: [
                "https://voilastudio.in/voilastudio_myntra/images/studio/4.webp",
                "https://voilastudio.in/voilastudio_myntra/images/booking_product_images/eCommerce_photography_makeupdatasku_(1).webp",
                "https://voilastudio.in/voilastudio_myntra/images/booking_product_images/eCommerce_photography_candlestandfashionn_(5).webp",
            ],
        },
    ];

    const galleryItems = [
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_womencordsfashion_(5).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_womencordsfashion_(8).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_womencordsfashion_(9).webp", tag: "fruit" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_womencordsfashion_(4).webp", tag: "meat" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_partyweardresswoman_(4).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_partyweardresswoman_(7).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_partyweardresswoman_(8).webp", tag: "fruit" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_partyweardresswoman_(3).webp", tag: "meat" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_womencordsfashion_(1).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_womencordsfashion_(3).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_womencordsfashion_(7).webp", tag: "pantry" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_partyweardresswoman_(1).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_partyweardresswoman_(2).webp", tag: "all" },
        { src: "https://voilastudio.in/voilastudio_myntra/images/booking_models_images/eCommerce_photography_partyweardresswoman_(6).webp", tag: "pantry" },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* Video Hero */}
            <section className="max-w-7xl mx-auto p-6">
                <div className="relative rounded-xl overflow-hidden h-[50vh] md:h-[60vh]">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://voilastudio.in/old_website_assets/Video_shoot/video_for_videoPage.mp4"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full gap-6 p-6">
                        <div className="text-white max-w-xl">
                            <div className="uppercase text-sm tracking-wider text-indigo-200">75K+ REASONS TO CHOOSE US</div>
                            <h1 className="text-3xl md:text-4xl font-extrabold mt-2">The Edge Every Brand Needs</h1>
                            <p className="mt-3 text-base">Product, model, premium, ghost and creative shoots — tailored for commerce and brand growth.</p>

                            <div className="mt-4 flex gap-3">
                                <a className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-md font-semibold">Book Now</a>
                                <a className="inline-flex items-center px-4 py-2 border border-white text-white rounded-md">Connect</a>
                            </div>
                        </div>

                        <div className="bg-white text-gray-900 rounded-xl p-6 w-full md:w-[380px] shadow-lg">
                            <h3 className="font-bold text-lg mb-2">Let’s Work Together</h3>
                            <p className="text-sm text-gray-600 mb-4">Tell us about your project — our team will help plan and execute a shoot tailored to your SKU and timeline.</p>
                            <a className="inline-block px-4 py-2 border rounded font-medium" href="#">Connect Now →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects grid */}
            <section className="max-w-7xl mx-auto p-6">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-extrabold">The Edge Every Brand Needs</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, idx) => (
                        <div key={idx} className="border border-gray-300 bg-white">

                            {/* 2/3 + 1/3 layout */}
                            <div
                                className="
                                        grid 
                                        gap-2
                                        h-64 sm:h-72 md:h-80 lg:h-82 justify-evenly "
                                style={{
                                    gridTemplateColumns: "2fr 1fr",
                                    gridTemplateRows: "1fr 1fr",
                                }}
                            >
                                {/* LEFT IMAGE — takes 2/3 width & full height */}
                                <img
                                    src={p.imgs[0]}
                                    alt=""
                                    className="row-span-2 w-full h-full object-cover"
                                />

                                {/* RIGHT TOP IMAGE */}
                                <div className="w-full h-full flex items-center justify-center bg-white">
                                    <img
                                        src={p.imgs[1]}
                                        alt=""
                                        className="w-full h-full object-coverr"
                                    />
                                </div>

                                {/* RIGHT BOTTOM IMAGE */}
                                <div className="w-full h-full flex items-center j bg-white">
                                    <img
                                        src={p.imgs[2]}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>

                            <div className="text-center mt-12 mb-4 font-semibold text-gray-700">
                                {p.footer}
                            </div>
                        </div>
                    ))}
                </div>


            </section>

            {/* Featured gallery with filters */}
            <section className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Brand We Capture.</h3>
                        <div className="flex gap-3">
                            {["all", "pantry", "meat", "fruit"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-3 py-1 rounded text-sm ${filter === f ? "bg-black text-white" : "bg-white border"}`}
                                >
                                    {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {galleryItems.filter(item => filter === "all" ? true : item.tag === filter).map((g, i) => (
                            <div key={i} className="bg-white overflow-hidden border">
                                <img src={g.src} alt="" className="w-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carousels using Swiper */}
            <section className="max-w-7xl mx-auto p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">PRODUCT SHOOT</h3>
                    <div className="flex items-center gap-3">
                        <button onClick={() => carouselRef.current?.slidePrev()} className="px-3 py-1 border">←</button>
                        <button onClick={() => carouselRef.current?.slideNext()} className="px-3 py-1 border">→</button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    onSwiper={(s) => (carouselRef.current = s)}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 4.2 },
                    }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                >
                    {[
                        "https://voilastudio.in/assets/img/slider/s%20(12).webp",
                        "https://voilastudio.in/assets/img/slider/s%20(13).webp",
                        "https://voilastudio.in/assets/img/slider/s%20(29).webp",
                        "https://voilastudio.in/assets/img/slider/s%20(17).webp",
                        "https://voilastudio.in/assets/img/slider/s%20(25).webp",
                    ].map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white border overflow-hidden">
                                <img src={src} alt="" className="w-full h-56 object-cover" />
                                <div className="p-3">
                                    <h4 className="font-semibold">Product {i + 1}</h4>
                                    <a className="text-sm text-gray-600">Beauty</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* As-home grid */}
            <section className="max-w-7xl mx-auto p-6">
                <h3 className="text-xl font-bold mb-4">MODEL SHOOT</h3>

                <div className="grid gap-4 grid-cols-2 md:grid-cols-5">
                    <a className="block overflow-hidden rounded-lg shadow" href="/collections/tops">
                        <img src="https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_premium_ecomm/eCommerce_photography_male_premium_17-07-2025%20(97).webp" alt="Tops" className="w-full  object-cover" />
                        <div className="p-2 text-center font-semibold">Tops</div>
                    </a>
                    <a className="block overflow-hidden rounded-lg shadow" href="/collections/dresses">
                        <img src="https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_premium_ecomm/eCommerce_photography_custom_07-06-25%20(15).webp" alt="Dresses" className="w-full object-cover" />
                        <div className="p-2 text-center font-semibold">Dresses</div>
                    </a>
                    <a className="block overflow-hidden rounded-lg shadow" href="/collections/things">
                        <img src="https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_premium_ecomm/premium_20_may%20(37).webp" alt="Things" className="w-full  object-cover" />
                        <div className="p-2 text-center font-semibold">Things</div>
                    </a>
                    <a className="block overflow-hidden rounded-lg shadow" href="/collections/coats-jackets">
                        <img src="https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_premium_ecomm/eCommerce_photography_jeans_premium_men_25-07-2025%20(18).webp" alt="Jacket" className="w-full object-cover" />
                        <div className="p-2 text-center font-semibold">Jacket</div>
                    </a>
                    <a className="block overflow-hidden rounded-lg shadow" href="/collections/bottoms">
                        <img src="https://voilastudio.in/voilastudio_myntra/images/male_ecomm/male_premium_ecomm/eCommerce_photography_causalshirts_09-07-2025%20(154).webp" alt="Pant" className="w-full  object-cover" />
                        <div className="p-2 text-center font-semibold">Pant</div>
                    </a>
                </div>
            </section>

            {/* Stats & process flow */}
            <section className="max-w-7xl mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-6 border rounded overflow-hidden">
                    <div className="md:w-52 bg-white p-6 flex flex-col items-center justify-center border-r">
                        <h2 className="text-5xl font-extrabold">99<span className="text-2xl">%</span></h2>
                        <p className="text-sm mt-2">images delivered on time.</p>
                        <div className="mt-4 w-full">
                            <a className="block text-center py-2 border rounded" href="#">Book Now →</a>
                            <a className="block text-center py-2 border rounded mt-2" href="#">Connect Now →</a>
                        </div>
                    </div>

                    <div className="flex-1 bg-gray-100 p-6">
                        <h3 className="text-2xl font-bold mb-2">FULL VISIBILITY. ZERO STRESS</h3>
                        <p className="text-gray-700 mb-4">Track statuses. Reorder easily. Organize references — all in one platform.</p>
                        <a className="underline" href="#">Log in to portal →</a>

                        <div className="hidden md:flex items-center justify-between bg-white border mt-6 p-4 rounded">
                            {["Brief Confirmation", "Casting", "Item Delivery", "Payment & Scheduling", "Shoot Done", "Product Return"].map((label, idx) => (
                                <div key={idx} className="flex-1 text-center">
                                    <div className={`w-8 h-8 mx-auto rounded-full border flex items-center justify-center ${idx <= 1 ? "bg-black text-white" : "bg-white"}`}>
                                        {idx <= 1 ? "✓" : idx + 1}
                                    </div>
                                    <div className="text-xs mt-2">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ + Office */}
            <section className="max-w-7xl mx-auto p-6">
                <div className="text-center mb-6">
                    <p className="text-sm uppercase text-gray-500">frequently asked questions</p>
                    <h2 className="text-3xl font-bold">The Edge Every Brand Needs</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <ul className="space-y-3">
                            {[
                                { q: "What eCommerce platforms do you work with?", a: "We work with major platforms like Amazon, Flipkart, Myntra, Nykaa, Ajio, Meesho, and more." },
                                { q: "Can you help us sell on international marketplaces?", a: "Yes — Alibaba, Etsy, Amazon.com, Walmart Marketplace, eBay and more. We assist with account setup, listings, compliance and growth." },
                                { q: "Can I choose only the services I need?", a: "Absolutely. Our solutions are fully customizable." },
                                { q: "What kind of brands have you worked with?", a: "From early-stage startups to enterprise D2C brands across fashion, beauty, home and lifestyle." },
                                { q: "What makes your services different?", a: "We combine platform expertise with implementation — we execute, optimize and scale." },
                            ].map((item, i) => (
                                <li key={i} className="border rounded overflow-hidden">
                                    <button
                                        onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                                        className="w-full text-left p-4 flex justify-between items-center"
                                    >
                                        <span className="font-medium">{item.q}</span>
                                        <span className="text-gray-500">{activeAccordion === i ? "-" : "+"}</span>
                                    </button>

                                    {activeAccordion === i && (
                                        <div className="p-4 bg-white text-gray-700">{item.a}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <aside className="md:w-80 bg-white p-4 border rounded">
                        <h3 className="font-semibold">Our Office</h3>
                        <p className="text-sm mt-2">Intenim Technologies Pvt Ltd. Unit 1007-08A, WellDone Tech Park, Sector 48, Gurugram 122018, Haryana, India</p>

                        <div className="mt-4">
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+919810555448" className="text-indigo-700 block mt-1">+91 9810555448</a>
                        </div>

                        <div className="mt-3">
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:info@voilabiz.com" className="block mt-1">info@voilastudio.com</a>
                        </div>

                        <div className="mt-4">
                            <a className="inline-block mt-2 border px-3 py-2 rounded" href="https://voilabiz.com/">Click to Visit →</a>
                        </div>
                    </aside>
                </div>
            </section>


        </div>
    );
}
