import {
    MessageSquare,
    BookImage,
    HandFist,
    HandCoins,
    TruckElectric,
    UserCheck,
} from "lucide-react";
import FAQ from "../Components/Faq";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { WalmartUsFaq } from "../data/Data";
import { Link } from "react-router-dom";
import {
  BookUser,
  
  Handshake,
  PackageOpen,
  LayoutPanelLeft,
} from "lucide-react";
import ContactFormEmailJS from "../Components/WalmartCta";

// const [activeIndex, setActiveIndex] = useState(0);
const items = [
  {
    icon: <BookUser color="#f5c000" size={28} />,
    title: "Registration & Catalog Setup",
    desc: "We take care of onboarding, documentation and listing optimization so your products are ready to perform from day one.",
  },
  {
    icon: <TruckElectric color="#1F74BA" size={28} />,
    title: "Smooth First Shipment",
    desc: "End-to-end guidance for your first consignment to Walmart fulfilment, including packaging & labelling support.",
  },
  {
    icon: <HandCoins color="#f5c000" />,
    title: "Launch Savings & Credits",
    desc: "Access to launch offers, waived fees and ad credits to help you acquire your first customers faster.",
  },
  {
    icon: <Handshake color="#1F74BA" />,
    title: "Dedicated Growth Partner",
    desc: "A single point of contact to review performance, share insights and suggest growth experiments.",
  },
  {
    icon: <PackageOpen color="#f5c000" />,
    title: "Subsequent Shipment Support",
    desc: "Help with scaling shipments, inventory planning and replenishment so you never run out of stock.",
  },
  {
    icon: <LayoutPanelLeft color="#1F74BA" />,
    title: "Strategy & Performance Reviews",
    desc: "Regular check-ins to refine pricing, ads and catalog based on data – not guesswork.",
  },
];

// why choose us section hain
const reasons = [
  {
    title: "8+ Year Experience",
    desc: "More than 8 years of hands-on experience in managing marketplace operations, campaigns and seller growth.",
  },
  {
    title: "Fantastic Result",
    desc: "Data-driven decisions and continuous optimization to deliver measurable improvements in visibility and sales.",
  },
  {
    title: "Marketplace Experts",
    desc: "A dedicated team that understands Flipkart’s policies, algorithms and best practices inside out.",
  },
  {
    title: "Enhance Brand View",
    desc: "Better listings, A+ creatives and optimized content to strengthen your brand presence on Flipkart.",
  },
  {
    title: "Lowest ACOS Maintain",
    desc: "Smart bidding, negative keywords and campaign structuring to keep your ACOS under control while scaling.",
  },
  {
    title: "End to End Handling",
    desc: "From onboarding to scaling, we manage catalog, orders, ads and account health as your long-term partner.",
  },
];


// opportiniuties section
const opportunities = [
  {
    title: "Massive Customer Base",
    desc: "Flipkart gives you access to millions of shoppers across India so your products can reach a much wider audience.",
  },
  {
    title: "No Monthly Fees",
    desc: "You only pay marketplace fees on successful orders. No monthly subscription charges to start or scale.",
  },
  {
    title: "Lower Competition",
    desc: "With curated categories and regional demand, many niches have lower competition compared to other platforms.",
  },
  {
    title: "Simplified Process",
    desc: "From onboarding to order processing, our team helps you handle listings, shipping partners and support.",
  },
  {
    title: "Marketing & Visibility",
    desc: "Promotions, ads and deals to improve search ranking and visibility so your catalog gets discovered faster.",
  },
  {
    title: "Advanced Seller Tools",
    desc: "Dashboards, reports and insights to understand performance and make smarter pricing and inventory decisions.",
  },
];


export default function Flipkart() {
    const href = `https://wa.me/${+919810554548}?text=${encodeURIComponent('Hi, can I get more information for Walmart onboarding?')}`;

    const features2 = [
        {
            icon: <BookImage size={36} className="text-blue-600 mx-auto" />,
            title: "Registration and Cataloguing",
            desc: "We will handle the entire registration process, document verification by the Walmart team, and cataloguing of 30 or more products on Walmart.com.",
        },
        {
            icon: <HandFist size={36} className="text-blue-600 mx-auto" />,
            title: "Support for Initial Shipment",
            desc: " We will assist you with your first consignment, ensuring the successful shipment of 100+ items to Walmart Fulfilment Services (WFS). ",
        },
        {
            icon: <HandCoins size={36} className="text-blue-600 mx-auto" />,
            title: "$75000 Worth Savings/Benefits for 1st Year period. ",
            desc: "30% discount on Commission/referral Fees, 25% discount in Local Fulfilment Fees and 50% discount on Storage Fee ,Free Ad Credits ($1000)",
        },
        {
            icon: <MessageSquare size={36} className="text-blue-600 mx-auto" />,
            title: " Account Management Support ",
            desc: " Account Management support for Launch + 3 months to guide you through your initial phase and provide ongoing consultancy for growth. ",
        },
        {
            icon: <TruckElectric size={36} className="text-blue-600 mx-auto" />,
            title: "Support for Subsequent Shipments",
            desc: "We will help facilitate your 2nd and subsequent consignments, with shipments of up to 500+ items to Walmart Fulfilment Services (WFS). ",
        },
        {
            icon: <UserCheck size={36} className="text-blue-600 mx-auto" />,
            title: "Expert Guidance ",
            desc: " You’ll receive expert support from Walmart-trained executives who are committed to successful launch and growth of your business in the U.S. mar",
        },
    ];

    return (
        <div className="overflow-hidden">

            <header className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-1 py-4">
                    <div className="flex items-center justify-between">
                        {/* Left: Logos */}
                        <div className="flex items-center gap-4">
                            <img src="/flipkart/flipkartonboarding/flipkart.png" alt="Nirmaan Logo" className="h-12 md:h-12 object-contain" />
                            <div className="h-12 border-l border-slate-200" aria-hidden />
                            <img src="/flipkart/logo.png" alt="Voila Logo" className="h-12 md:h-16 object-contain pl-3" />
                        </div>

                        {/* Right: Contact */}
                        <div className="text-right text-sm text-slate-600 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <a href="mailto:info@intenim.com" className="hover:text-slate-800">info@intenim.com</a>
                                <span className="hidden md:inline-block">/</span>
                                <a href="tel:+919810554548" className="hover:text-slate-800">+91 9810554548</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="bg-linear-to-r from-violet-700 to-purple-800 text-white">
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
                                src="/flipkart/flipkartonboarding/banner-laptop.png"
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

            {/* -------- WHAT YOU GET SECTION -------- */}
            <section className="bg-slate-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Section header */}
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-violet-700 text-3xl sm:text-4xl font-extrabold uppercase tracking-wide animate-heartbeat">
                            What You Get
                        </p>

                        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
                            Everything you need to launch with confidence
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-600">
                            A complete launch + growth package designed to help you start
                            strong on FlipKart and keep scaling without guesswork.
                        </p>
                    </div>

                    {/* Cards grid */}
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((item) => (
                            <article
                                key={item.title}
                                className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-xl"
                            >
                                {/* subtle gradient strip on top */}
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-start gap-4">
                                    {/* Icon bubble */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold text-slate-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Bottom strip */}
                <div className="w-full bg-linear-to-r from-violet-700 to-purple-800 py-3 mt-12">
                    <p className="text-white text-center px-4 text-base sm:text-lg leading-relaxed font-medium">
                        <span className="font-extrabold">ZERO Fee</span> — All of the
                        services and credits above come at{" "}
                        <span className="font-extrabold">no charge</span> to you, with a
                        total value of approximately ₹1,35,000. Absolutely Free.
                    </p>
                </div>

                {/* Button below */}
                <div className="text-center mt-6">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition">
                        GET STARTED FOR FREE
                    </button>
                </div>
            </section>

            {/* -------- FLIPKART HERO SECTION -------- */}
            <section className="bg-linear-to-r from-violet-700 to-purple-800 text-amber-50 py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-4 lg:px-0 grid gap-10 lg:grid-cols-2 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                            End-to-End <span className="text-yellow-400">Flipkart</span>{" "}
                            Seller Account Management for Business Growth
                        </h1>

                        <p className="mt-5 text-sm sm:text-base text-slate-50 max-w-xl leading-relaxed">
                            Our <span className="text-yellow-500">Flipkart</span> Seller
                            Account Management Services are designed to help you succeed on
                            one of India’s leading e-commerce platforms. We provide listing
                            optimization, competitive pricing strategies, inventory
                            management, and order processing to ensure smooth and efficient
                            operations.
                        </p>

                        <p className="mt-3 text-sm sm:text-base text-slate-50 max-w-xl leading-relaxed">
                            Our expert team works on enhancing product visibility, improving
                            <span className="text-yellow-500"> Flipkart</span> search
                            rankings, and boosting sales with effective advertising campaigns.
                            Additionally, we offer feedback and review management, account
                            health monitoring, and customer support services to ensure a
                            seamless experience and maximum profitability. Let us help you
                            grow your business and achieve success on{" "}
                            <span className="text-yellow-500">Flipkart</span>.
                        </p>

                        <button className="mt-6 inline-flex items-center rounded-full border border-amber-300 px-6 py-2 text-sm font-medium hover:bg-amber-300 hover:text-black transition">
                            Talk to an expert
                        </button>
                    </div>

                    {/* RIGHT VISUAL CARD */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            {/* main card */}
                            <div className="rounded-3xl bg-[#f8f4ff] shadow-2xl overflow-hidden">
                                <div className="h-12 flex items-center justify-between px-6 border-b border-slate-200">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <span className="h-6 w-6 rounded-full bg-[#2874F0] text-white flex items-center justify-center text-xs">
                                            F
                                        </span>
                                        Flipkart Seller Hub
                                    </div>
                                    <span className="text-[11px] text-slate-400">
                                        Growth dashboard
                                    </span>
                                </div>

                                {/* screenshot / graphic */}
                                <div className="p-6">
                                    <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden">
                                        <img
                                            src="/flipkart/flipkartonboarding/flipkart_hero.png"
                                            alt="Flipkart account management preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* small overlay card */}
                            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-slate-900/95 text-slate-50 px-4 py-3 shadow-xl">
                                <p className="text-xs font-medium mb-1">
                                    Live Snapshot • Seller Performance
                                </p>
                                <div className="flex items-center justify-between text-[11px]">
                                    <div>
                                        <p className="text-slate-300">Orders this month</p>
                                        <p className="font-semibold text-emerald-400">+145%</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-300">Ad ROAS</p>
                                        <p className="font-semibold text-amber-300">4.3x</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-300">Account health</p>
                                        <p className="font-semibold text-sky-300">Excellent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------- WHY CHOOSE US SECTION – TILE LAYOUT -------- */}
            <section className="bg-slate-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-500 animate-popup">
                            Why choose us
                        </p>

                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                            Why Choose Us for your{" "}
                            <span className="text-violet-700">Flipkart Seller Account</span>{" "}
                            Management
                        </h2>

                        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                            Our team brings together experience, process and data so your Flipkart
                            account runs like a well-oiled growth machine instead of daily guesswork.
                        </p>
                    </div>

                    {/* TILES */}
                    <div className="grid gap-4 md:grid-cols-3 auto-rows-[minmax(140px,1fr)]">
                        {/* Big primary tile (first reason) */}
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-linear-to-br from-violet-600 to-purple-700 text-white p-6 flex flex-col justify-between shadow-lg">
                            <div className="flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                                    01
                                </span>
                                <h3 className="text-xl lg:text-4xl  font-semibold">
                                    {reasons[0].title}
                                </h3>
                            </div>
                            <p className="mt-4 text-lg lg:text-xl text-black-50 leading-relaxed">
                                {reasons[0].desc}
                            </p>
                            <div className="mt-4 h-[3px] w-24 rounded-full bg-linear-to-r from-amber-300 to-white animate-heartbeat" />
                        </div>

                        {/* Smaller tiles for the rest */}
                        {reasons.slice(1).map((reason, index) => (
                            <div
                                key={reason.title}
                                className={`
                        rounded-3xl bg-yellow-300 p-4 flex flex-col justify-evenly border border-slate-200
                        shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl
                        ${index % 2 === 0 ? "bg-violet-50/60" : "bg-amber-50/60"}
                      `}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="text-xl lg:text-md font-semibold text-slate-900">
                                        {reason.title}
                                    </h3>
                                    <span className="text-[11px] font-semibold text-slate-500">
                                        0{index + 2}
                                    </span>
                                </div>
                                <p className="mt-2 text-lg lg:text-sm text-slate-700 leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* -------- TAP INTO OPPORTUNITIES – STAGGERED TILES + BG IMAGE -------- */}
            <section
                className="relative bg-slate-50 py-16 overflow-hidden"
                style={{
                    backgroundImage: `url(${"/flipkart/flipkartonboarding/flipkart-opportunities.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "820px auto",
                    backgroundPosition: "right bottom",
                }}
            >
                {/* light overlay to keep text readable over image */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white via-white/80 to-white/40"></div>

                <div className="relative max-w-6xl mx-auto px-4 lg:px-0">
                    {/* Heading on the left, a bit higher */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 -mt-4">
                        Tap into endless opportunities with{" "}
                        <span className="text-[#2874F0]">Flipkart</span>
                    </h2>
                    <p className="max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                        Flipkart offers reach, tools and insights to grow your brand. These tiles
                        show the key advantages you unlock when you sell with a clear strategy.
                    </p>

                    {/* Staggered / stepped tiles */}
                    <div className="mt-4 flex flex-wrap gap-4 lg:gap-6 max-w-7xl">
                        {opportunities.map((item, idx) => (
                            <div
                                key={item.title}
                                className={
                                    "relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.75rem)] rounded-2xl bg-white border border-slate-200 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:border-violet-200 " +
                                    // push every 2nd tile down slightly on large screens for stepped effect
                                    (idx % 2 === 1 ? "lg:mt-8" : "")
                                }
                            >
                                {/* colored accent bar */}
                                <span className="absolute left-0 top-4 h-8 w-[3px] rounded-full bg-linear-to-b from-amber-400 to-orange-500"></span>

                                <div className="pl-3">
                                    <h3 className="text-sm sm:text-base font-semibold text-[#1b4fd8]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <ContactFormEmailJS />




            <FAQ faqs={WalmartUsFaq} />


            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
                className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .001 5.373 0 12c0 2.115.554 4.186 1.605 6.018L0 24l6.285-1.627A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12 0-1.81-.396-3.522-1.48-5.02zM12 22.063a10.01 10.01 0 01-4.92-1.31l-.352-.205L4.1 20.68l.583-2.53-.227-.403A9.98 9.98 0 012.063 12 9.937 9.937 0 1112 22.063z" />
                    <path d="M17.18 14.02c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18 0-.34-.04-.47-.04-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.62-.46-.16 0-.34 0-.52 0-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.28 0 1.34.98 2.64 1.12 2.82.14.18 1.93 3.04 4.68 4.26 3.25 1.4 3.25 0 3.83-1.1.31-.6.22-1.04.16-1.14-.07-.11-.26-.18-.57-.32z" fill="white" />
                </svg>
            </a>



            <footer
                className="relative text-white overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('hero_bg.png')" }}
            >
                {/* Main Footer Content */}
                <div className="relative max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {/* Logo + Social Media */}
                        <div className="md:col-span-1">
                            <div className="flex flex-col-reverse lg:flex-row justify-evenly gap-2">

                                {/* Social Media Icons */}
                                <div className="flex flex-row lg:flex-col gap-3">
                                    <Link
                                        to="https://www.facebook.com/VoilaStudio.in/"
                                        target='_blank'
                                        className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                    >
                                        <Facebook className="w-5 h-5  text-[#662D91] " />
                                    </Link>

                                    <Link
                                        to="https://www.instagram.com/VoilaStudio.in/"
                                        target='_blank'
                                        className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                    >
                                        <Instagram className="w-5 h-5 text-[#662D91] " />
                                    </Link>

                                    <Link
                                        to="https://x.com/studiovoila?lang=en"
                                        className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5 text-[#662D91]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </Link>

                                    <Link
                                        to="https://in.linkedin.com/showcase/voilastudio"
                                        className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5 text-[#662D91]" />
                                    </Link>

                                    <Link
                                        to="https://www.youtube.com/@VOILA_BIZ"
                                        className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                    >
                                        <Youtube className="w-5 h-5 text-[#662D91]" />
                                    </Link>
                                </div>

                                {/* Logo Box */}
                                <div className="bg-white p-3 rounded-xl shadow_logo w-28 h-28 flex items-center justify-center">
                                    <img src="/logo.png" alt="Logo" className="h-18 w-auto m-auto" />
                                </div>

                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Our Verticles</h3>
                            <ul className="space-y-2">
                                <li><Link target="_blank" to="https://voilastudio.in/" className="text-white hover:text-purple-200 flex items-center"> VOILA Studio</Link></li>
                                <li><Link target="_blank" to="https://voilabiz.com/" className="text-white hover:text-purple-200 flex items-center"> VOILA Biz</Link></li>
                                <li><Link target="_blank" to="https://voilaretail.com/" className="text-white hover:text-purple-200 flex items-center"> VOILA Retail</Link></li>
                                <li><Link target="_blank" to="https://voilakart.com/" className="text-white hover:text-purple-200 flex items-center"> VOILA Kart</Link></li>

                            </ul>
                        </div>

                        {/* Browse */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Policies</h3>
                            <ul className="space-y-2">
                                <li><Link target="_blank" to="/privacy-policy" className="text-white hover:text-purple-200 flex items-center"> Privacy Policy</Link></li>
                                <li><Link target="_blank" to="/terms-and-condition" className="text-white hover:text-purple-200 flex items-center"> Terms & Conditions</Link></li>
                                <li><Link target="_blank" to="/refund-policy" className="text-white hover:text-purple-200 flex items-center"> Cancellation & Refund Policy</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Contact</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-purple-200 text-sm mb-2">Unit 1007-1008A, WellDone TechPark, Sector 48, Gurugram, Haryana-122018, India</p>
                                </div>

                                <div>
                                    <p className="text-white">
                                        Phone : <br />
                                        <a href="tel:+919810554548" class="text-white">+91 9810554548</a><br />
                                        <a href="tel:+919821554548" class="text-white">+91 9821554548</a><br />
                                        <a href="tel:+919821654548" class="text-white">+91 9821654548</a>
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white">
                                        Email :
                                        <a href="mailto:info@voilabiz.com" class="text-white">info@voilabiz.com</a> <br />
                                        <a href="mailto:info@intemim.com" class="text-white">info@intemim.com</a>
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright */}
                <div className="relative border-t border-purple-500 border-opacity-30">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <p className="text-center text-purple-200 text-sm">
                            © Copyright 2025 by Intenim Technologies Pvt Ltd
                        </p>
                    </div>
                </div>

            </footer>
        </div>
    );
}


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
