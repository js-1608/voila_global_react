import React, { useState } from "react";
import heroMockups from "/partners.png"; // put your composite image here

const partnersData = [
  {
    "name": "Alibaba",
    "logo": "/marketplace_logos/Alibaba_Logo.png",
    "description": "Our partnership with Alibaba opens up a global B2B network for sellers, connecting them with wholesale buyers across 190+ countries. Through this collaboration, VOILA enables businesses to navigate international trade, showcase their products effectively, and scale operations globally while leveraging Alibaba’s trusted platform.",
    "category": "global_ecommerce",
    "tags": ["Solution Partners", "Marketplace", "B2B", "Global"]
  },
  {
    "name": "Walmart",
    "logo": "/marketplace_logos/WalMart_Logo.png",
    "description": "VOILA connects sellers to Walmart’s vast online marketplace, providing access to millions of customers in the US and beyond. Sellers benefit from streamlined onboarding, product visibility, and efficient marketplace management, helping them grow their reach and establish a strong presence on one of the world’s leading retail platforms.",
    "category": "global_ecommerce",
    "tags": ["Solution Partners", "Marketplace", "Retail", "US Market"]
  },
  {
    "name": "Tata CLiQ",
    "logo": "/marketplace_logos/TataCliQ_Logo.png",
    "description": "Through Tata CLiQ, VOILA helps sellers position their products on a premium Indian marketplace offering fashion, electronics, and lifestyle items. By optimizing listings and enhancing visibility, sellers can engage with a quality-conscious audience and drive meaningful sales growth.",
    "category": "platform",
    "tags": ["Solution Partners", "Marketplace", "India", "Lifestyle"]
  },
  {
    "name": "Amazon",
    "logo": "/marketplace_logos/Amazon_Logo.png",
    "description": "Amazon serves millions of customers globally, and VOILA supports sellers in navigating this dynamic marketplace. From managing product listings to optimizing visibility and performance, VOILA ensures sellers can efficiently scale their operations and achieve sustainable growth on the platform.",
    "category": "platform",
    "tags": ["Solution Partners", "Marketplace", "Global", "E-commerce"]
  },
  {
    "name": "Blinkit",
    "logo": "/marketplace_logos/BlinkIt_Logo.png",
    "description": "VOILA brings sellers onto Blinkit, India’s ultra-fast grocery delivery service. By helping manage inventory, optimize listings, and ensure timely product availability, sellers can meet the high-speed demands of urban customers and grow within this fast-paced marketplace.",
    "category": "platform",
    "tags": ["Solution Partners", "Grocery", "Quick Commerce", "India"]
  },
  {
    "name": "Zepto",
    "logo": "/marketplace_logos/Zepto_Logo.png",
    "description": "Through Zepto, VOILA enables sellers to tap into the ultra-rapid grocery delivery segment, ensuring their products are listed accurately and reach customers quickly. This partnership helps sellers maintain operational efficiency and strengthen their presence on a high-demand platform.",
    "category": "platform",
    "tags": ["Solution Partners", "Quick Commerce", "Grocery", "India"]
  },
  {
    "name": "Nykaa",
    "logo": "/marketplace_logos/Nykaa_Logo.png",
    "description": "VOILA’s collaboration with Nykaa empowers sellers in India’s leading beauty and cosmetics marketplace. By facilitating smooth onboarding, enhancing product visibility, and providing guidance on marketplace strategies, sellers can connect with an engaged customer base and boost sales.",
    "category": "platform",
    "tags": ["Solution Partners", "Beauty", "Cosmetics", "India"]
  },
  {
    "name": "Meesho",
    "logo": "/marketplace_logos/Meesho_Logo.png",
    "description": "Meesho’s social commerce platform allows individuals and small businesses to sell online, and VOILA expands sellers’ reach across this growing network. By managing listings and optimizing product presence, sellers can effectively leverage Meesho’s social channels to drive engagement and sales.",
    "category": "platform",
    "tags": ["Solution Partners", "Social Commerce", "India", "SMB"]
  },
  {
    "name": "Ajio",
    "logo": "/marketplace_logos/aJIO_Logo.png",
    "description": "VOILA connects sellers with Ajio, Reliance’s fashion and lifestyle marketplace. Sellers benefit from optimized listings, stronger product presentation, and strategic guidance that enhances engagement with fashion-conscious shoppers across India.",
    "category": "platform",
    "tags": ["Solution Partners", "Fashion", "Lifestyle", "India"]
  },
  {
    "name": "Myntra",
    "logo": "/marketplace_logos/Myntra_Logo.png",
    "description": "Through Myntra, VOILA facilitates seamless seller integration, helping manage product listings and maintain high visibility. This collaboration allows sellers to reach India’s top fashion audience, engage shoppers effectively, and scale their e-commerce presence.",
    "category": "platform",
    "tags": ["Solution Partners", "Fashion", "E-commerce", "India"]
  },
  {
    "name": "eBay",
    "logo": "/marketplace_logos/Ebay_Logo.png",
    "description": "VOILA partners with sellers on eBay’s global marketplace to reach buyers worldwide. By providing guidance on listing management, visibility optimization, and marketplace navigation, sellers can expand their international footprint efficiently.",
    "category": "global_ecommerce",
    "tags": ["Solution Partners", "Marketplace", "Global", "Retail"]
  },
  {
    "name": "IndiaMart",
    "logo": "/marketplace_logos/IndiaMart_Logo.png",
    "description": "VOILA enables sellers to access IndiaMart, India’s largest B2B platform, providing opportunities to connect with thousands of buyers across industries. Sellers gain streamlined operations, better visibility, and scalable wholesale growth through this partnership.",
    "category": "platform",
    "tags": ["Solution Partners", "B2B", "India", "Wholesale"]
  },
  {
    "name": "Flipkart",
    "logo": "/marketplace_logos/FlipKart_Logo.png",
    "description": "Through Flipkart, VOILA supports sellers in managing listings, increasing product visibility, and maximizing reach on one of India’s largest marketplaces. This partnership helps sellers grow their business while navigating Flipkart’s dynamic ecosystem.",
    "category": "platform",
    "tags": ["Solution Partners", "Marketplace", "India", "Retail"]
  },
  {
    "name": "Etsy",
    "logo": "/marketplace_logos/Etsy_Logo.png",
    "description": "VOILA helps sellers showcase unique, handmade, and vintage products on Etsy, reaching a global audience of niche buyers. Through this collaboration, sellers receive guidance on listing management and marketplace strategies to drive exposure and sales.",
    "category": "global_ecommerce",
    "tags": ["Solution Partners", "Handmade", "Vintage", "Global"]
  },
  {
    "name": "LotusImall",
    "logo": "/marketplace_logos/lotus.png",
    "description": "VOILA’s collaboration with LotusImall helps sellers list and manage products on this growing Indian online retail platform. By enhancing visibility and streamlining marketplace operations, sellers can establish a strong presence and grow effectively.",
    "category": "platform",
    "tags": ["Solution Partners", "Marketplace", "India", "Retail"]
  },
   {
    "name": "Godrej  Nirmaan",
    "logo": "/marketplace_logos/nirmaan.png",
    "description": "Nirmaan is a business solution by Godrej that empowers Micro, Small, and Medium Enterprises (MSMEs) with tools, resources, and market opportunities to scale efficiently. VOILA’s collaboration with Nirmaan empowers MSMEs to strengthen their online presence and unlock opportunities for eCommerce growth.",
    "category": "Msme",
    "tags": ["Solution Partners", "Marketplace", "India", "Retail"]
  }
]


const categories = [
  { key: "all", label: "All" },
  { key: "global_ecommerce", label: "Global Ecommerce" },
  { key: "platform", label: "Ecommerce Partners" },
  { key: "Msme", label: "Solution Partners" },
];

const agencyPartners = [
  { name: "Atomic Robot", logo: "./marketplace_logos/WalMart_Logo.png" },
  { name: "BeTomorrow", logo: "./marketplace_logos/TataCliQ_Logo.png" },
  { name: "ConsultingWhiz", logo: "./marketplace_logos/Amazon_Logo.png" },
  { name: "Lickability", logo: "./marketplace_logos/BlinkIt_Logo.png" },
  { name: "Majestyk", logo: "./marketplace_logos/Ebay_Logo.png" },
  { name: "Phiture", logo: "./marketplace_logos/FlipKart_Logo.png" },
  { name: "RapptR", logo: "./marketplace_logos/IndiaMart_Logo.png" },
  { name: "Recuro", logo: "./marketplace_logos/Meesho_Logo.png" },
  { name: "Twigeo", logo: "./marketplace_logos/Nykaa_Logo.png" },
  { name: "Twigeo", logo: "./marketplace_logos/aJIO_Logo.png" },
  { name: "Twigeo", logo: "./marketplace_logos/Alibaba_Logo.png" },
  { name: "Twigeo", logo: "./marketplace_logos/Zepto_Logo.png" },
  { name: "Twigeo", logo: "./marketplace_logos/UniCommerce_Logo.png" },
  { name: "Twigeo", logo: "./marketplace_logos/Myntra_Logo.png" },
  { name: "Twigeo", logo: "./marketplace_logos/Payoneer_Logo.png" },
  { name: "Very Good Ventures", logo: "./marketplace_logos/Etsy_Logo.png" },
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
                <span className="block">Building Growth Through</span>
                <span className="block">
                  <span className="text-yellow-300"> Strategic</span>
                  <span className="ml-2"> Partnerships</span>
                </span>
              </h1>

              <p className="mt-4 text-sm  max-w-xl">
                With a diverse network of global and Indian partners, we provide
                brands access to powerful growth channels, trusted ecosystems,
                and opportunities to scale their digital journey.
              
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
                  {/* <div className="relative">
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
                                </div> */}
                </div>
              </form>

              {/* trust / rating */}
              {/* <div className="mt-6 flex items-center gap-4 text-sm text-violet-900">
                            <div className="flex items-center gap-1">
                               
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
                        </div> */}
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

        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-center">
          Our Trusted Marketplace Partners
        </h1>

        <section className="bg-white pb-20 pt-8 px-6 ">
          {/* Logos Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
            {agencyPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-xl hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-auto object-contain  rounded-2xl  border border-gray-500"
                  data-aos="zoom-in"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
           Our Network of Leading eCommerce Partners
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
           Leveraging 8+ years of experience with trusted eCommerce platforms, we guide sellers across top marketplaces for seamless access, optimized presence, and scalable growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 rounded-md border text-sm uppercase tracking-wide transition-all duration-300 ${
                filter === cat.key
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
                className="h-16 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
