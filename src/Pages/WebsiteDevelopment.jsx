import FAQ from "../Components/Faq.jsx";
import Hero from "../Components/Hero.jsx";
import Portfolio from "../Components/Portfolio.jsx";
import Pricing from "../Components/Pricing.jsx";
import Service from "../Components/Services.jsx";
import { useState } from "react";
import { ChevronDown, ChevronUp, Globe, Code, Layout, Play } from "lucide-react";
import ContactCta from "../Components/ContactCta.jsx";
import {
  BarChart3,
  MessageSquare,
  Heart,
  PieChart,
  Gem, Users
} from "lucide-react";
// data files
import { WebisteFaq, WebisteServie } from "../data/Data.js";
import TechnologiesWeCater from "../Components/Section.jsx";
import HeroWeb from "../Components/Hero_Web.jsx";
import { CheckCircle, Sparkles, Shield, Timer, Layers, Zap } from "lucide-react";



export default function WebsiteDevelopment() {
  const [open, setOpen] = useState("strategy");

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const features2 = [
    {
      icon: "https://dkpxaouzpedok.cloudfront.net/wp-content/uploads/2022/10/UXUI-Design-Ideation.svg",
      title: " Website Developemnt",
      desc: "Successfully onboarded 10,000+ sellers across top e-commerce marketplaces.",
    },
    {
      icon: "https://dkpxaouzpedok.cloudfront.net/wp-content/uploads/2022/11/Flutter_App-Development.svg",
      title: "Custom App Development",
      desc: " Enabled 10X revenue growth for over 500+ brands through strategic account management.",
    },
    {
      icon: "https://dkpxaouzpedok.cloudfront.net/wp-content/uploads/2022/11/Software-Product-Architecture-Design.svg",
      title: "Experienced Team",
      desc: "A dedicated team of marketplace specialists bringing 10+ years of industry expertise and proven results.",
    },
    {
      icon: "https://binmile.com/wp-content/uploads/2022/10/Application-Maintenance.svg",
      title: "Platform Expertise",
      desc: " Certified experts managing brands on Amazon, Myntra, Nykaa, Flipkart, Walmart, and more.",
    },
    {
      icon: "https://dkpxaouzpedok.cloudfront.net/wp-content/uploads/2022/10/Application-Migration-Services.svg",
      title: " SaaS UI UX Design Services",
      desc: "We manage every aspect of your marketplace presence covering listings, optimization, marketing, and performance analysis.",
    },
    {
      icon: "https://dkpxaouzpedok.cloudfront.net/wp-content/uploads/2022/10/Enterprise-Software-Solutions.svg",
      title: "Website Support & Maintenance",
      desc: " Proud to maintain a 95% client retention rate, built on trust and measurable results.",
    },
  ];



  const features = [
    {
      title: "Expert Developers",
      desc: "Our skilled front-end & back-end developers deliver websites that are secure, scalable, and high-performing.",
      icon: <Shield className="w-8 h-8 text-violet-600" />,
    },
    {
      title: "Customized Website Design",
      desc: "We design websites tailored to your brand’s vision with engaging UI & seamless UX.",
      icon: <Sparkles className="w-8 h-8 text-violet-600" />,
    },
    {
      title: "Reliable Support",
      desc: "From updates to troubleshooting, we ensure your website always runs smoothly.",
      icon: <CheckCircle className="w-8 h-8 text-violet-600" />,
    },
    {
      title: "Quality-Driven Approach",
      desc: "Every line of code and design element is crafted to meet the highest standards.",
      icon: <Layers className="w-8 h-8 text-violet-600" />,
    },
    {
      title: "On-Time Delivery",
      desc: "We respect deadlines and ensure your website is ready to launch as planned.",
      icon: <Timer className="w-8 h-8 text-violet-600" />,
    },
    {
      title: "Scalable Solutions",
      desc: "Whether you’re a startup or an enterprise, our websites grow with your business.",
      icon: <Zap className="w-8 h-8 text-violet-600" />,
    },
  ];

  return (
    <>
      <HeroWeb />
      {/* <Hero /> */}



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
                  <div className="mb-4">
                    <img src={feature.icon} className="w-16 h-16" />
                  </div>
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



      <TechnologiesWeCater />
      <section className="bg-white text-slate-800 py-10 px-6 relative overflow-hidden">
        {/* Decorative Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50 opacity-60 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto">
          {/* SECTION: Why Choose Us */}
          <div className="mt-1 text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Why Choose Us
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">We don’t just build websites — we build growth engines.</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-7 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition relative group"
              >
                <div>{item.icon}</div>
                <h3 className="font-semibold text-xl mt-4">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>

                {/* glow */}
                <div className="absolute inset-0 bg-violet-100 opacity-0 group-hover:opacity-20 blur-2xl transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* <Pricing /> */}



      <Service serviceContent={WebisteServie} heading="Performance-Driven In Digital Market"
        subheading="Our digital marketing approach is built to attract, convert, and retain. With the right mix of performance and creativity, your brand stays ahead." />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 mb-12 ">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get a Conversion-Focused Website That Drives Real Growth
          </h2>
          <p className="text-gray-600 mb-6">
            We deliver focused strategies and relentless execution to turn your business goals into measurable, lasting success.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {/* Strategy */}
            <div>
              <button
                onClick={() => toggle("strategy")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200 text-left"
              >
                <span className="flex items-center gap-2 font-medium">
                  <Layout className="w-5 h-5" /> Strategy
                </span>
                {open === "strategy" ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {open === "strategy" && (
                <p className="mt-2 text-gray-600 text-sm">
                  Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim
                  gravida pellentesque.
                </p>
              )}
            </div>

            {/* Design */}
            <div>
              <button
                onClick={() => toggle("design")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200 text-left"
              >
                <span className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-gray-500" /> Design
                </span>
                {open === "design" ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {open === "design" && (
                <p className="mt-2 text-gray-600 text-sm">
                  Nulla facilisi. Proin vel ligula eu nisl fermentum bibendum.
                </p>
              )}
            </div>

            {/* Development */}
            <div>
              <button
                onClick={() => toggle("development")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200 text-left"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-500" /> Development
                </span>
                {open === "development" ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {open === "development" && (
                <p className="mt-2 text-gray-600 text-sm">
                  Vivamus mattis urna vel nulla aliquet, sit amet posuere sem
                  fermentum.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-md rounded-xl p-6 puple_gradient " >
          <ContactCta />
        </div>
      </div>

      <FAQ faqs={WebisteFaq} />

    </>
  );
}