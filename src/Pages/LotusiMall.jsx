import {
    MessageSquare,

    TruckElectric,
    UserCheck,
    FolderGit2,
    BrainCircuit,
    ShieldMinus
    , BadgeCheckIcon,
    TruckIcon,

    SparklesIcon,

    MegaphoneIcon,
    UsersIcon
} from "lucide-react";

import {
    UserPlusIcon,
    ArchiveBoxIcon,
    ShoppingCartIcon,
    ChartBarIcon,

    BanknotesIcon,

} from "@heroicons/react/24/outline";


import FAQ from "../Components/Faq";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { LotusIMallFaq } from "../data/Data";
import { Link } from "react-router-dom";

import ContactFormEmailJS from "../Components/WalmartCta";
import { GlobeAltIcon } from "@heroicons/react/20/solid";


export default function LotusImall() {
    const href = `https://wa.me/${+919810554548}?text=${encodeURIComponent('Hi, can I get more information for LOTUSiMAll onboarding?')}`;

    const features2 = [
        {
            icon: <ShieldMinus size={36} className="text-gray-600 mx-auto" />,
            title: "0% Commission",
            desc: " Brands receive full trade price (TP)",
        },
        {
            icon: <FolderGit2 size={36} className="text-gray-600 mx-auto" />,
            title: "Direct Settlement",
            desc: " Faster payments with no hidden fees.",
        },
        {
            icon: <BrainCircuit size={36} className="text-gray-600 mx-auto" />,
            title: "Al-Powered Marketing ",
            desc: "Smarter visibility and better conversion.",
        },
        {
            icon: <MessageSquare size={36} className="text-gray-600 mx-auto" />,
            title: " Exclusive Brand Ownership ",
            desc: "Only verified brand owners can sell.",
        },
        {
            icon: <TruckElectric size={36} className="text-gray-600 mx-auto" />,
            title: "Exchange over Return",
            desc: "Hassle-free one-time exchange policy.",
        },
        {
            icon: <UserCheck size={36} className="text-gray-600 mx-auto" />,
            title: "Full Logistics Support ",
            desc: " We handle delivery, pickup, and coordination.",
        },
    ];

    const steps = [
        {
            title: "Vendor Onboarding",
            subtitle: "Register Vendor",
            number: "01",
            icon: <UserPlusIcon className="w-8 h-8" />,
            color: "bg-teal-600",
        },
        {
            title: "Product Listing",
            subtitle: "Add Products",
            number: "02",
            icon: <ArchiveBoxIcon className="w-8 h-8" />,
            color: "bg-slate-700",
        },
        {
            title: "Customer Purchase",
            subtitle: "Orders & Payment",
            number: "03",
            icon: <ShoppingCartIcon className="w-8 h-8" />,
            color: "bg-green-600",
        },
        {
            title: "Analytics",
            subtitle: "Insights",
            number: "04",
            icon: <ChartBarIcon className="w-8 h-8" />,
            color: "bg-cyan-600",
        },
        {
            title: "Settlement",
            subtitle: "Payout Processing",
            number: "05",
            icon: <BanknotesIcon className="w-8 h-8" />,
            color: "bg-gray-600",
        },
        {
            title: "Dispatch",
            subtitle: "Ship Orders",
            number: "06",
            icon: <TruckIcon className="w-8 h-8" />,
            color: "bg-indigo-700",
        },
    ];


    const benefits = [
        {
            id: 1,
            title: 'No Platform or Listing Fees',
            desc: 'Register and list products with zero upfront charges—risk-free onboarding for brands of every size.',
            Icon: BadgeCheckIcon
        },
        {
            id: 2,
            title: 'Zero Commission — Keep 100% of Your Profits',
            desc: 'A no-commission model so your margins remain intact. Price better and reinvest in growth.',
            Icon: SparklesIcon
        },
        {
            id: 3,
            title: 'Nationwide Delivery Network',
            desc: 'A strong logistics backbone to reach customers quickly and safely across India.',
            Icon: TruckIcon
        },
        {
            id: 4,
            title: 'Reach Tier 2 & Tier 3 Cities',
            desc: 'Expand into fast-growing markets beyond metros and tap into new customer segments.',
            Icon: GlobeAltIcon
        },
        {
            id: 5,
            title: 'Dedicated Storefront for Your Brand',
            desc: "Your brand gets a focused storefront to showcase identity, story, and products—build recall, not just sales.",
            Icon: UsersIcon
        },
        {
            id: 6,
            title: 'AI-Driven Insights for Smarter Decisions',
            desc: "Actionable data on customer behavior, demand patterns, pricing and stock planning.",
            Icon: ChartBarIcon
        },
        {
            id: 7,
            title: 'Promotional & Advertising Support',
            desc: 'Platform-led campaigns and seasonal promos to increase visibility and conversions.',
            Icon: MegaphoneIcon
        },
        {
            id: 8,
            title: 'Influencer & Affiliate Marketing',
            desc: 'Grow reach through influencer collabs and affiliate programs supported by the platform.',
            Icon: BadgeCheckIcon,
        },
    ];

    return (
        <div className="overflow-hidden">

            <header className="border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-1 py-4">
                    <div className="flex items-center justify-between">
                        {/* Left: Logos */}
                        <div className="flex items-center gap-4">
                            <img src="https://lotusimall.com/design/images/logo/Lotus-img.svg" alt="Nirmaan Logo" className="h-12 md:h-16 object-contain bg-black p-2 rounded-lg shadow_logo" />
                            <div className="h-12 border-l border-slate-200" aria-hidden />
                            <img src="/lotusimall/logo.png" alt="Voila Logo" className="h-12 md:h-16 object-contain" />
                        </div>

                        {/* Right: Contact */}
                        <div className="text-right text-sm text-slate-600 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <a href="mailto:info@intenim.com" className=" hover:text-slate-200">info@intenim.com</a>
                                <span className="hidden md:inline-block">/</span>
                                <a href="tel:+919810554548" className=" hover:text-slate-200">+91 9810554548</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className="font-sans bg-gray-50 text-gray-900">
                <img
                    src="/lotusimall/lotus/lotus banner.png"
                    className="w-full hidden md:block"
                />

                <img
                    src="/lotusimall/mobile_banner.png"
                    className="w-full block md:hidden"
                />

                {/* 2rd section */}
                <section className="py-20 bg-white  text-center">
                    <div className="max-w-7xl mx-auto">
                        {/* Title */}
                        <h2
                            data-aos="fade-up"
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-snug"
                        >
                            LOTUSiMALL MARKETPLACE MODEL
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-gray-500 mb-12"
                        >
                            SIMPLE. TRANSPARENT. PROFITABLE.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3">
                            {features2.map((feature, i) => {
                                const columns = 3; // number of columns in your grid on desktop
                                const isLastInRow = (i + 1) % columns === 0; // 3rd, 6th, 9th, ...
                                const isBottomRow = i >= features2.length - columns; // last row

                                return (
                                    <div
                                        key={i}
                                        data-aos="fade-up"
                                        data-aos-delay={i * 100}
                                        className={`flex flex-col items-center text-center p-2 lg:p-8 border-gray-200 bg-white hover:bg-gray-50 transition duration-300
                        ${!isLastInRow ? "lg:border-r" : ""}
                        ${!isBottomRow ? "lg:border-b" : ""}
                    `}
                                    >

                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                );
                            })}


                        </div>
                    </div>



                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <button className="mt-8 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
                            GET STARTED FOR FREE
                        </button>
                    </a>
                </section>

                <div className="w-full p-4 md:p-10 bg-white hidden md:block">
                    <div className="relative">
                        {/* Horizontal line (desktop only) */}
                        <div className="hidden md:block absolute top-1/2 left-6 right-6 h-1 bg-gray-300 -z-10 rounded" />

                        {/* Container: vertical on mobile, horizontal on md+ */}
                        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-evenly gap-8 md:gap-0 overflow-x-auto">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative w-full md:w-40 flex items-start md:flex-col md:items-center md:text-center"
                                >
                                    {/* Mobile: Title to the right, Desktop: Title on top */}
                                    <div className="flex-1 md:flex-none md:mb-6">
                                        <p className="font-semibold text-gray-800 md:text-sm text-base md:text-center">
                                            {step.title}
                                        </p>
                                    </div>

                                    {/* Connector for mobile (vertical) */}
                                    {index !== steps.length - 1 && (
                                        <div className="md:hidden absolute left-10 top-16 w-0 h-10 border-l-2 border-gray-300"></div>
                                    )}

                                    {/* Curved connector for desktop (horizontal) */}
                                    {index !== 0 && (
                                        <div className="hidden md:block absolute md:top-1/2 md:left-[-50%] md:w-1/2 md:h-16 md:border-t-2 md:border-gray-300"></div>
                                    )}

                                    {/* Circle */}
                                    <div
                                        className={`flex-shrink-0 ml-0 md:ml-0 md:mt-0 ${step.color} rounded-full p-1 shadow-lg`}
                                    >
                                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                                            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-6 px-2 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="md:w-1/2" data-aos="fade-right">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
                                Why partner with <span className="text-gray-600">Lotus I Mall</span>
                            </h2>
                            <p className="mt-4 text-gray-600 text-base sm:text-lg">
                                Choosing the right e-commerce partner can define how fast your brand grows in today’s competitive online market. Lotus iMall is built with one clear goal—to create an ecosystem where brands can grow confidently, earn more, and connect with customers across India without unnecessary complications or hidden costs.
                            </p>
                            <p className="mt-4 text-gray-600 text-base sm:text-lg">Lotus iMall is not just another marketplace. It is a brand-focused platform designed to support D2C businesses with a structure that prioritizes transparency, growth, and long-term success. Whether you are an emerging D2C label or an established business expanding digitally, Lotus iMall provides a stable and rewarding environment to scale your brand.</p>

                            <div className="mt-6 flex items-center gap-4">
                                <a
                                    href="#get-started"
                                    className="inline-block rounded-2xl px-6 py-3 border border-indigo-600 bg-indigo-600 text-white font-medium shadow-sm hover:shadow-lg transition-shadow"
                                    data-aos="zoom-in"
                                >
                                    Get started — it's free
                                </a>

                                <a
                                    href="#contact"
                                    className="inline-block rounded-2xl px-6 py-3 text-indigo-700 font-medium hover:underline"
                                    data-aos="zoom-in"
                                    data-aos-delay="120"
                                >
                                    Talk to our team
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2 grid grid-cols-1" data-aos="fade-left">
                           <img src="/lotusimall/lotus/why.jpg" className="h-112 m-auto rounded-2xl p-2  border-2 border-gray-400"/>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12" data-aos="fade-left">
                        {benefits.map((b, idx) => (
                            <article
                                key={b.id}
                                className="flex gap-4 p-4 md:p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                data-aos="fade-up"
                                data-aos-delay={idx * 70}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <b.Icon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900">{b.title}</h3>
                                    <p className="mt-1 text-gray-500 text-sm">{b.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 text-center" data-aos="fade-up">
                        <p className="text-gray-700 max-w-2xl mx-auto">"Not just a marketplace — a partner for long-term brand growth."</p>
                    </div>
                </div>
            </section>





            <ContactFormEmailJS />



            <FAQ faqs={LotusIMallFaq} />


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
                                        <a href="tel:+919810554548" className="text-white">+91 9810554548</a><br />
                                        <a href="tel:+919821554548" className="text-white">+91 9821554548</a><br />
                                        <a href="tel:+919821654548" className="text-white">+91 9821654548</a>
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white">
                                        Email :
                                        <a href="mailto:info@voilabiz.com" className="text-white">info@voilabiz.com</a> <br />
                                        <a href="mailto:info@intemim.com" className="text-white">info@intemim.com</a>
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
