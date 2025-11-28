import { motion } from "framer-motion";

import {
  ArrowUpRight, PlayCircle, Briefcase, ShoppingBag, BookOpen, PhoneCall, CheckCircle, Headphones,
  BarChart3,
  LayoutDashboard,
  MessageSquare,
  Heart,
  PieChart,
  Gem, Users, HandFist
} from "lucide-react";
import Button_Gradient from "../Components/Button_Gradient";

import { useState } from "react";
import { OnbardingFaq } from "../data/Data";
import FAQ from "../Components/Faq";
import ContactCta from "../Components/ContactCta";
import ServiceOnboarding from "../Components/Tabs";
import PartnersSection from "../Components/PartenersIcon";
import WorkGalleryCarousel from "../Components/OnBoaringPortfolio";

const topImages = [
  "/onboarding/hero/c (1).png",
  "/onboarding/hero/c (2).png",
  "/onboarding/hero/c (3).png",
  "/onboarding/hero/c (4).png",
  "/onboarding/hero/c (5).png",
  "/onboarding/hero/c (6).png",
  "/onboarding/hero/c (7).png",
  "/onboarding/hero/c (8).png",
  "/onboarding/hero/c (9).png",
  "/onboarding/hero/c (10).png",
  "/onboarding/hero/c (11).png",
  "/onboarding/hero/c (12).png",
  "/onboarding/hero/c (13).png",
  "/onboarding/hero/c (14).png",
  "/onboarding/hero/c (15).png",
  "/onboarding/hero/c (16).png",
];
const bottomImages = [
  "/onboarding/hero/c (1).png",
  "/onboarding/hero/c (2).png",
  "/onboarding/hero/c (3).png",
  "/onboarding/hero/c (4).png",
  "/onboarding/hero/c (5).png",
  "/onboarding/hero/c (6).png",
  "/onboarding/hero/c (7).png",
  "/onboarding/hero/c (8).png",
  "/onboarding/hero/c (9).png",
  "/onboarding/hero/c (10).png",
  "/onboarding/hero/c (11).png",
  "/onboarding/hero/c (12).png",
  "/onboarding/hero/c (13).png",
  "/onboarding/hero/c (14).png",
  "/onboarding/hero/c (15).png",
  "/onboarding/hero/c (16).png",
];
const features = [
  {
    title: "Seller Account Setup",
    desc: " Complete onboarding and configuration of your seller accounts across leading e-commerce marketplaces to ensure a seamless start.",
  },
  {
    title: " E-Commerce SEO",
    desc: " Implementation of keyword-rich content and long-tail optimization strategies to improve organic visibility and search rankings within marketplaces.",
  },
  {
    title: "E-Commerce Advertising",
    desc: " Strategic planning and management of sponsored ads, brand campaigns, and performance marketing to boost product visibility and sales.",
  },
  {
    title: "Brand Registry & Protection",
    desc: " End-to-end support for brand registration, trademark integration, and proactive protection against unauthorized listings or infringements.",
  },
  {
    title: "Brand Store Creation",
    desc: " Design and development of a dedicated brand storefront that enhances product presentation and builds stronger brand identity.",
  },
  {
    title: "Catalog & Inventory Management",
    desc: "Accurate catalog structuring and real-time inventory tracking to maintain consistency, reduce errors, and prevent stockouts.",
  },
];

const features2 = [
  {
    icon: <Gem size={36} className="text-purple-600 mx-auto" />,
    title: " Sellers Onboarded",
    desc: "Successfully onboarded 10,000+ sellers across top e-commerce marketplaces.",
  },
  {
    icon: <BarChart3 size={36} className="text-purple-600 mx-auto" />,
    title: "Brand Growth",
    desc: " Enabled 10X revenue growth for over 500+ brands through strategic account management.",
  },
  {
    icon: <Users size={36} className="text-purple-600 mx-auto" />,
    title: "Experienced Team",
    desc: "A dedicated team of marketplace specialists bringing 10+ years of industry expertise and proven results.",
  },
  {
    icon: <MessageSquare size={36} className="text-purple-600 mx-auto" />,
    title: "Platform Expertise",
    desc: " Certified experts managing brands on Amazon, Myntra, Nykaa, Flipkart, Walmart, and more.",
  },
  {
    icon: <Heart size={36} className="text-purple-600 mx-auto" />,
    title: " End-to-End Support",
    desc: "We manage every aspect of your marketplace presence covering listings, optimization, marketing, and performance analysis.",
  },
  {
    icon: <PieChart size={36} className="text-purple-600 mx-auto" />,
    title: "Client Retention",
    desc: " Proud to maintain a 95% client retention rate, built on trust and measurable results.",
  },
];

const cards = [
  {
    icon: <PlayCircle size={28} />,
    title: "20+ Marketplaces Covered",
    desc: "Catering to diverse e-commerce platforms — from fashion to lifestyle, beauty, and beyond.",
    active: true,
  },
  {
    icon: <Briefcase size={28} />,
    title: "Dedicated Account Manager ",
    desc: "Dedicated expert to manage your brand and maximize results.",
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "3.75%+ Average Sales Growth",
    desc: "Helping brands achieve steady month-on-month performance improvement",
  },
  {
    icon: <BookOpen size={28} />,
    title: " 200+ Accounts Reinstated",
    desc: "Transformed flagged profiles into trusted, high-performing seller accounts.",
  },
];



const tabs = [
  {
    id: "dedication",
    title: "Dedication",
    content: {
      heading: "Dedication",
      text: "Our team ensures that your trading experience is backed by commitment and long-term support that truly makes a difference.",
      image: "/images/phone1.png",
    },
  },
  {
    id: "reputability",
    title: "Reputability",
    content: {
      heading: "Reputability",
      text: "Trust is everything in trading. We bring reliability and transparency so you can focus on what truly matters — your growth.",
      image: "/images/phone2.png",
    },
  },
  {
    id: "consistency",
    title: "Consistency",
    content: {
      heading: "Consistency",
      text: "Ever wondered about the way you can trade? We provide the environment, service, and support to help you trade with confidence.",
      image: "/images/phone3.png",
    },
  },
  {
    id: "analytics",
    title: "Trading analytics",
    content: {
      heading: "Trading Analytics",
      text: "Gain powerful insights into your trading behavior and optimize performance through advanced analytics tools.",
      image: "/images/phone4.png",
    },
  },
];


const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("consistency");
  const active = tabs.find((t) => t.id === activeTab);
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#58277C] to-[#210E2F] text-white py-10 flex flex-col items-center justify-center ">
        {/* === Background Carousels (behind the phone) === */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-108 bg-gradient-to-r from-[#68378b] to-[#9c8ea760] z-10 pointer-events-none"></div> */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div> */}

        <div className="absolute inset-0 flex flex-col justify-center mt-[-60px] overflow-hidden max-w-4xl m-auto gap-0 lg:gap-1">
          {/* Top carousel (moves left to right) */}
          <motion.div
            className="flex mb-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...topImages, ...topImages].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-auto lg:w-40 h-12 lg:h-20  object-cover mx-2 md:mx-3 shadow-lg"
              />
            ))}
          </motion.div>

          {/* Bottom carousel (moves right to left) */}
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...bottomImages, ...bottomImages].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-auto lg:w-40 h-12 lg:h-20  object-cover mx-2 md:mx-3  shadow-lg opacity-90"
              />
            ))}
          </motion.div>

        </div>

        {/* === Foreground Content === */}
        <div className="relative z-20 text-center px-6 ">
          {/* <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            EXPAND YOUR SALES BEYOND <br />
            BORDERS WITH <span className="text-yellow-400">ZERO HASSLE</span>
          </h1> */}

          {/* Phone Mockup (centered and above carousel) */}
          <div className="relative flex justify-center my-1">
            <img
              src="/onboarding/phone2.png"
              alt="Phone Mockup"
              className="relative z-30 h-[250px] lg:h-[470px]"
            />
          </div>
          {/* 
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Take your business online and unlock limitless opportunities to grow your brand.
              Showcase your products, connect with verified buyers, and access insights that
              help you sell smarter, faster, and globally—everything you need to succeed,
              in one seamless platform.
            </p> */}

          <div className="flex flex-wrap justify-center gap-4">
            <Button_Gradient text="Explore Our Services" link="to" />
            <button className="flex items-center bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Book Free Call With Us <PhoneCall className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>


      {/* 2rd section */}
      <section className="py-20 bg-white px-6 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug"
          >
            Setting New Benchmarks in E-Commerce Growth
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-500 mb-12"
          >
            Thousands of sellers, hundreds of success stories, one trusted partner — VOILAGlobal.
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
        ${!isLastInRow ? "border-r" : ""}
        ${!isBottomRow ? "border-b" : ""}`}
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
      </section>


      {/* services */}
      <ServiceOnboarding />

      <PartnersSection />



      <WorkGalleryCarousel />

      {/* <Pricing /> */}

      {/* 4th section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* === Left Content === */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Impact We Deliver for Our Clients
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At VOILAGlobal, we believe that true success on e-commerce platforms comes from data-backed strategies,
              seamless execution, and constant innovation. Our team of marketplace experts partners closely with every brand
              to deliver measurable results — from improved visibility and operational efficiency to exponential revenue growth.
              We leverage AI automation to enhance product listings, campaigns, and overall account performance, ensuring every
              decision drives growth. With years of experience and a proven track record, we’re not just service providers — we’re
              your growth partners in the ever-evolving e-commerce landscape.

            </p>

            <button className="flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition">
              Get Started <ArrowUpRight size={18} />
            </button>
          </div>

          {/* === Right Sticky Cards === */}
          <div className="relative ">
            <div className="sticky top-24  grid  grid-cols-1 lg:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 p-6 rounded-2xl shadow-md border transition-all duration-300 ${card.active
                    ? "bg-[#662D91] text-white border-transparent"
                    : "bg-purple-50 text-gray-800 border border-purple-100 hover:shadow-lg"
                    }`}
                  data-aos="fade-right"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${card.active ? "bg-white/20" : "bg-[#662D91] text-white"
                      }`}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className={`font-semibold text-lg ${card.active ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-sm ${card.active ? "text-purple-100" : "text-gray-600"
                      }`}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3nd section */}
      <section className="py-20 bg-white px-6 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-snug"
          >
            Scaling Brands with Smart E-Commerce Solutions
          </h2>

          {/* Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-left flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1 text-purple-600">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>






      {/* contact cta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 max-w-7xl mx-auto px-6 lg:px-4 bg-white mb-10 lg:mb-12 lg:mt-12">
        {/* Left Section */}
        <div className='h-full flex flex-col justify-between gap-6 p-0 lg:p-4'>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Real Partners for Your Growth Journey
            </h2>
            <p className="text-gray-600 mb-6">
              We deliver focused strategies and relentless execution to turn your business goals into measurable, lasting success.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">

            <Button_Gradient text={"Explore Our Services"} link={"/"} />
            {/* <button className="border border-[#662D91] text-[#662D91] px-6 py-3 rounded-md  flex items-center gap-2 transition-all duration-300 text-sm font-medium ">
                                  <Phone className="w-4 h-4" />
                                  Book Free Call With Us
                              </button> */}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-md rounded-xl p-6 puple_gradient " >
          <ContactCta />
        </div>
      </div>

      {/* Faqs */}
      <FAQ faqs={OnbardingFaq} />

    </>
  );
};

export default HeroSection;
