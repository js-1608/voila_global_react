// src/components/WhatYouGet.jsx
import React from "react";
import {
  BookUser,
  TruckElectric,
  HandCoins,
  Handshake,
  PackageOpen,
  LayoutPanelLeft,
} from "lucide-react";
import heroImg from "../assets/flipkart-hero.png"; //  import hero image
import flipkartIllustration from "../assets/flipkart-opportunities.png"; 

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





const WhatYouGet = () => {
  return (
    <>
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
                      src={heroImg}
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
    backgroundImage: `url(${flipkartIllustration})`,
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

    </>
  );
};

export default WhatYouGet;
