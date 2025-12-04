import React, { useRef, useEffect, useState } from "react";
import {
  MessageSquare,
  BookImage,
  HandFist,
  HandCoins,
  TruckElectric,
  UserCheck,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  BookUser,
  Handshake,
  PackageOpen,
  LayoutPanelLeft,
} from "lucide-react";
import FAQ from "../Components/Faq";
import { VriddhiFaq } from "../data/Data";
import { Link } from "react-router-dom";
import ContactFormEmailJS from "../Components/ContactForm";

// data arrays
const items = [
  {
    icon: <BookUser color="#f5c000" size={28} />,
    title: "Expert Guidance",
    desc: "10 hours of dedicated enablement support to guide you through the entire Flipkart onboarding process. Get clarity and support to ensure a smooth start without any confusion.",
  },
  {
    icon: <TruckElectric color="#1F74BA" size={28} />,
    title: "Account Setup",
    desc: "Complete Flipkart account registration at zero cost, with all required formalities handled. We manage the setup so sellers can focus on their products and business.",
  },
  {
    icon: <HandCoins color="#f5c000" />,
    title: "Documentation & Brand Approval",
    desc: "Assistance with all necessary seller documents and submission to Flipkart for verification. Obtain official brand approval so product can be listed under your brand name.",
  },
  {
    icon: <Handshake color="#1F74BA" />,
    title: "Product Listings",
    desc: "Up to 10 products professionally listed and optimized according to Flipkart guidelines. We ensure your products are displayed correctly with engaging content and images.",
  },
  {
    icon: <PackageOpen color="#f5c000" />,
    title: "Go Live Support",
    desc: "Step-by-step assistance to make your store live on Flipkart quickly and efficiently. We ensure everything is set for your products to reach customers without delay.",
  },
  {
    icon: <LayoutPanelLeft color="#1F74BA" />,
    title: "Ongoing Support",
    desc: "Continuous support to manage the account and resolve any onboarding queries. We stay available to ensure a smooth start and seamless store management.",
  },
];

const reasons = [
  {
    title: "8+ Years of Marketplace Expertise",
    desc: "With over eight years of practical experience in handling marketplace operations, advertising, and seller growth, we know exactly what it takes to build and scale a successful Flipkart business.",
  },
  {
    title: "Proven Performance Track Record",
    desc: "We rely on data-backed strategies, continuous optimization, and real-time insights to deliver consistent improvements in visibility, orders, and overall performance.",
  },
  {
    title: "Dedicated Flipkart Specialists",
    desc: "A trained team that understands Flipkart’s policies, ecosystem, algorithms, and growth levers—ensuring your account always stays compliant and ahead.",
  },
  {
    title: "10,000+ Accounts Onboarded, Managed & Scaled",
    desc: "Our experience spans thousands of seller journeys—onboarding, nurturing, and scaling accounts across categories with optimized catalogs, sharp content, and better marketplace positioning.",
  },
  {
    title: "Optimized Ad Spend & Controlled ACOS",
    desc: "Well-structured campaigns, smart bidding, and negative keyword strategies allow us to maintain low ACOS while ensuring consistent growth in impressions and conversions.",
  },
  {
    title: "Complete End-to-End Account Management",
    desc: "From onboarding and cataloging to ads, order flow, growth strategy, and account health—we handle everything so you can focus on your business while we manage the operations.",
  },
];

const opportunities = [
  {
    title: "Massive Customer Base",
    desc: "Flipkart gives you access to millions of shoppers across India so your products can reach a much wider audience.",
  },
  {
    title: "Zero Commission Fees",
    desc: "Enjoy 0% commission on products priced below ₹1000, helping you maximize margins right from the start.",
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
  // WhatsApp href (was missing previously)
  const href = `https://wa.me/919810554548?text=${encodeURIComponent(
    "Hi, can I get more information for Walmart onboarding?"
  )}`;

  const features2 = [
    {
      icon: <BookImage size={36} className="text-blue-600 mx-auto" />,
      title: "Registration and Cataloguing",
      desc: "We will handle the entire registration process, document verification by the Walmart team, and cataloguing of 30 or more products on Walmart.com.",
    },
    {
      icon: <HandFist size={36} className="text-blue-600 mx-auto" />,
      title: "Support for Initial Shipment",
      desc: "We will assist you with your first consignment, ensuring the successful shipment of 100+ items to Walmart Fulfilment Services (WFS).",
    },
    {
      icon: <HandCoins size={36} className="text-blue-600 mx-auto" />,
      title: "$75,000 Worth Savings/Benefits (1st Year)",
      desc: "30% discount on commission/referral fees, 25% discount in local fulfilment fees and 50% discount on storage fee, plus free ad credits.",
    },
    {
      icon: <MessageSquare size={36} className="text-blue-600 mx-auto" />,
      title: "Account Management Support",
      desc: "Account management support for launch + 3 months to guide you through your initial phase and provide ongoing consultancy for growth.",
    },
    {
      icon: <TruckElectric size={36} className="text-blue-600 mx-auto" />,
      title: "Support for Subsequent Shipments",
      desc: "We will help facilitate your 2nd and subsequent consignments, with shipments of up to 500+ items to Walmart Fulfilment Services (WFS).",
    },
    {
      icon: <UserCheck size={36} className="text-blue-600 mx-auto" />,
      title: "Expert Guidance",
      desc: "You’ll receive expert support from Walmart-trained executives who are committed to successful launch and growth of your business.",
    },
  ];

  return (
    <div className="overflow-hidden">
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-1 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logos */}
            <div className="flex items-center gap-4">
              <img
                src="/flipkart/flipkartonboarding/flipkart.png"
                alt="Nirmaan Logo"
                className="h-12 md:h-12 object-contain"
              />
              <div className="h-12 border-l border-slate-200" aria-hidden />
              <img
                src="/flipkart/logo.png"
                alt="Voila Logo"
                className="h-12 md:h-16 object-contain pl-3"
              />
            </div>

            {/* Right: Contact */}
            <div className="text-right text-sm text-slate-600 hidden lg:block">
              <div className="flex items-center gap-4">
                <a
                  href="mailto:info@intenim.com"
                  className="hover:text-slate-800"
                >
                  info@intenim.com
                </a>
                <span className="hidden md:inline-block">/</span>
                <a href="tel:+919810554548" className="hover:text-slate-800">
                  +91 9810554548
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="bg-[#2A55E5] text-white shadow-lg">
        <div className="max-w-6xl mx-auto py-10 lg:py-12 grid lg:grid-cols-2 gap-4 items-center justify-between px-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-2">
              Launch. Sell. Succeed.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-2">
              Begin Your <br />
              <span className="text-yellow-300">Flipkart</span> Selling <br />
              Journey for Free
            </h1>

            <p className="text-sm sm:text-base max-w-md mb-6">
              Take your products to millions of buyers and grow your brand
              presence on India’s leading e-commerce platform.
            </p>

            <div className="mt-4">
              <img
                src="/flipkart/flipkartonboarding/banner-laptop.png"
                alt="marketplace dashboard"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 px-2">
            <div className="space-y-2">
              <Feature title="Flipkart Account Setup at Zero Cost" />
              <Feature title="10 Hours of Expert Enablement Support" />
              <Feature title="Optimized Product Listings for Up to 10 Items" />
              <Feature title="Dedicated Support for Account Management" />
            </div>

            <div className="border border-white/60 rounded-xl p-6 mt-4 text-center">
              <p className="text-sm font-semibold">Services Worth</p>
              <p className="text-2xl sm:text-3xl font-bold line-through text-red-300">
                INR 10,000
              </p>
              <p className="animate-popup text-3xl sm:text-4xl font-extrabold mt-1 animate-shake">
                FREE
              </p>
              <p className="text-sm mt-3">
                Get INR 10,000 Value Flipkart Launch Package Free.
              </p>
              <button className="mt-4 bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-full">
                Limited Slots
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              What <span className="font-extrabold text-blue-500">You</span> Get
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Flipkart Launch Support
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Focus on growing your business while we provide the framework and
              assistance to launch on Flipkart efficiently.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4">
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

          <div className="w-full py-3 mt-12">
            <p className="text-black text-center px-4 text-base sm:text-lg leading-relaxed font-medium">
              <span className="font-extrabold text-blue-500">
                Avail Walmart Certification
              </span>{" "}
              at no cost and unlock this exclusive
              <span className="font-extrabold text-amber-300">
                {" "}
                FREE onboarding service.
              </span>
            </p>
          </div>

          <div className="text-center mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition">
              GET STARTED FOR FREE
            </button>
          </div>
        </div>
      </section>

      {/* VRIDDHI */}
      <section className="bg-[#2A55E5] text-amber-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Walmart <span className="text-yellow-400">Vriddhi</span>{" "}
              Empowering MSMEs to Scale & Grow
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-50 max-w-xl leading-relaxed">
              Walmart Vriddhi is a free supplier development program designed
              for MSMEs, combining digital learning with business tools to
              modernize, scale, and grow businesses across India. Sellers can
              develop skills through on-demand learning and personalized
              mentoring, connect with market access and Flipkart onboarding
              support, enable opportunities to scale on eCommerce platforms, and
              grow through networks and platforms to build a thriving business.
            </p>

            <button className="mt-6 inline-flex items-center rounded-full border border-amber-300 px-6 py-2 text-sm font-medium hover:bg-amber-300 hover:text-black transition">
              Talk to an expert
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
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

                <div className="p-6">
                  <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden">
                    <img
                      src="/flipkart/flipkartonboarding/flipkart_hero.jpg"
                      alt="Flipkart account management preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

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

      {/* -------- OPPORTUNITIES – PURE CSS HORIZONTAL CAROUSEL -------- */}
      <section className="bg-slate-50 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Tap into{" "}
              <span className="text-amber-400">Endless Opportunities</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Flipkart ofers reach,tools and insights to grow your brand these
              tiles shows the key advantages you unlock when you sell with a
              clear strategy.
            </p>
          </div>

          {/* -------- HORIZONTAL SCROLL-SNAP CAROUSEL (PURE CSS) -------- */}
          <div
            className="
        flex gap-6
        overflow-x-auto
        snap-x snap-mandatory
        hide-scrollbar
        horizontal-scroll
        py-4
      "
          >
            {opportunities.map((item, i) => (
              <div
                key={i}
                className="
            snap-center
            min-w-[260px] sm:min-w-[300px] lg:min-w-[360px]
            bg-white rounded-2xl shadow-md border border-slate-200
            p-6
            animate-card
            hover:scale-105 hover:shadow-xl transition-all duration-300
          "
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#2874F0]/10 text-[#2874F0] flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-sm sm:text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600">
                  {item.desc}
                </p>

                <div className="flex gap-3 mt-4">
                  {/* <button className="px-4 py-2 bg-slate-100 rounded-md text-xs text-slate-700">
              Detail
            </button>
            <button className="px-4 py-2 bg-slate-100 rounded-md text-xs text-slate-700">
              Benefit
            </button> */}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            Scroll horizontally → to explore more
          </p>
        </div>

        {/* CSS */}
        <style>{`
    /* Hide scrollbar */
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }

    /* Convert mouse wheel vertical scroll → horizontal scroll (PURE CSS TRICK) */
    .horizontal-scroll {
      scroll-snap-type: x mandatory;
      overscroll-behavior-x: contain;
    }

    /* Card animation */
    @keyframes fadeSlideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-card {
      animation: fadeSlideUp 0.6s ease forwards;
    }
  `}</style>
      </section>
      <ContactFormEmailJS />

      <FAQ faqs={VriddhiFaq} />

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform"
      >
        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .001 5.373 0 12c0 2.115.554 4.186 1.605 6.018L0 24l6.285-1.627A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12 0-1.81-.396-3.522-1.48-5.02zM12 22.063a10.01 10.01 0 01-4.92-1.31l-.352-.205L4.1 20.68l.583-2.53-.227-.403A9.98 9.98 0 012.063 12 9.937 9.937 0 1112 22.063z" />
          <path
            d="M17.18 14.02c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18 0-.34-.04-.47-.04-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.62-.46-.16 0-.34 0-.52 0-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.28 0 1.34.98 2.64 1.12 2.82.14.18 1.93 3.04 4.68 4.26 3.25 1.4 3.25 0 3.83-1.1.31-.6.22-1.04.16-1.14-.07-.11-.26-.18-.57-.32z"
            fill="white"
          />
        </svg>
      </a>

      <footer
        className="relative text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('hero_bg.png')" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex flex-col-reverse lg:flex-row justify-evenly gap-2">
                <div className="flex flex-row lg:flex-col gap-3">
                  <Link
                    to="https://www.facebook.com/VoilaStudio.in/"
                    target="_blank"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 text-[#662D91]" />
                  </Link>

                  <Link
                    to="https://www.instagram.com/VoilaStudio.in/"
                    target="_blank"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 text-[#662D91]" />
                  </Link>

                  <Link
                    to="https://x.com/studiovoila?lang=en"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-[#662D91]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
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

                <div className="bg-white p-3 rounded-xl shadow_logo w-28 h-28 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-18 w-auto m-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Our Verticles</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    target="_blank"
                    to="https://voilastudio.in/"
                    className="text-white hover:text-purple-200 flex items-center"
                  >
                    VOILA Studio
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://voilabiz.com/"
                    className="text-white hover:text-purple-200 flex items-center"
                  >
                    VOILA Biz
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://voilaretail.com/"
                    className="text-white hover:text-purple-200 flex items-center"
                  >
                    VOILA Retail
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://voilakart.com/"
                    className="text-white hover:text-purple-200 flex items-center"
                  >
                    VOILA Kart
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Policies</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    target="_blank"
                    to="/privacy-policy"
                    className="text-white hover:text-purple-200 flex items-center"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="/terms-and-condition"
                    className="text-white hover:text-purple-200 flex items-center"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="/refund-policy"
                    className="text-white hover:text-purple-200 flex items-center"
                  >
                    Cancellation & Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>
              <div className="space-y-4 text-sm">
                <p className="text-purple-200">
                  Unit 1007-1008A, WellDone TechPark, Sector 48, Gurugram,
                  Haryana-122018, India
                </p>

                <div>
                  <p className="text-white">
                    Phone : <br />
                    <a href="tel:+919810554548" className="text-white">
                      +91 9810554548
                    </a>
                    <br />
                    <a href="tel:+919821554548" className="text-white">
                      +91 9821554548
                    </a>
                    <br />
                    <a href="tel:+919821654548" className="text-white">
                      +91 9821654548
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-white">
                    Email : <br />
                    <a href="mailto:info@voilabiz.com" className="text-white">
                      info@voilabiz.com
                    </a>
                    <br />
                    <a href="mailto:info@intemim.com" className="text-white">
                      info@intemim.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
