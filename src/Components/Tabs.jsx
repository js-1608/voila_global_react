// import React, { useState } from 'react';
// // service section data
// import EcommercePartner from "../Components/ServiceCarouselOnboarding";

// const MarketPLace = [
//     {
//         name: 'AMAZON',
//         description: 'Showcase your products on marketplace that is completely technology-driven and highly successful globally and India\'s most visited shopping destination.',
//         image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
//     },
//     {
//         name: 'FLIPKART',
//         description: 'Become a seller on India\'s biggest eCommerce platform, Flipkart. Whether manufacturer, vendor, or supplier, grow your business with unmatched visibility.',
//         image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
//     },
//     {
//         name: 'MEESHO',
//         description: 'Join India\'s fastest growing e-commerce platform and reach millions of customers across the country with zero commission.',
//         image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
//     }
// ];
// const FashionPortal = [
//     {
//         name: 'Myntra ',
//         description: 'Showcase your products on marketplace that is completely technology-driven and highly successful globally and India\'s most visited shopping destination.',
//         image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
//     },
//     {
//         name: 'Nykaa ',
//         description: 'Become a seller on India\'s biggest eCommerce platform, Flipkart. Whether manufacturer, vendor, or supplier, grow your business with unmatched visibility.',
//         image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
//     },
//     {
//         name: 'Ajio ',
//         description: 'Sell fashion and lifestyle products on Myntra, one of India\'s leading fashion e-commerce platforms with millions of active users.',
//         image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
//     },
//     {
//         name: 'Tatacliq',
//         description: 'Join India\'s fastest growing e-commerce platform and reach millions of customers across the country with zero commission.',
//         image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
//     },
// ];
// const QuickCommerce = [
//     {
//         name: 'BLINKIT',
//         description: 'Showcase your products on marketplace that is completely technology-driven and highly successful globally and India\'s most visited shopping destination.',
//         image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
//     },
//     {
//         name: 'ZEPTO',
//         description: 'Become a seller on India\'s biggest eCommerce platform, Flipkart. Whether manufacturer, vendor, or supplier, grow your business with unmatched visibility.',
//         image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
//     },

// ];
// const GlobalPortal = [
//     {
//         name: 'WALMART',
//         description: 'Join India\'s fastest growing e-commerce platform and reach millions of customers across the country with zero commission.',
//         image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
//     },
//     {
//         name: 'AMAZON.COM',
//         description: 'Showcase your products on marketplace that is completely technology-driven and highly successful globally and India\'s most visited shopping destination.',
//         image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
//     },
//     {
//         name: 'ALIBABA.COM ',
//         description: 'Become a seller on India\'s biggest eCommerce platform, Flipkart. Whether manufacturer, vendor, or supplier, grow your business with unmatched visibility.',
//         image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
//     },
//     {
//         name: 'EBAY',
//         description: 'Sell fashion and lifestyle products on Myntra, one of India\'s leading fashion e-commerce platforms with millions of active users.',
//         image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
//     },
//     {
//         name: 'ETSY',
//         description: 'Showcase your fashion and lifestyle products on Ajio, Reliance\'s premium online fashion destination.',
//         image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
//     }
// ];

// export default function ServiceOnboarding() {
//   const [activeTab, setActiveTab] = useState('FashionPortal');

//   const tabs = [
//     { id: 'MarketPlace', label: 'MarketPlace' },
//     { id: 'FashionPortal', label: 'FashionPortal' },
//     { id: 'QuickCommerce', label: 'QuickCommerce' },
//     { id: 'GlobalPlatforms', label: 'GlobalPlatforms' }
//   ];

//   const content = {
//     MarketPlace: <EcommercePartner data={MarketPLace} heading="MarketPlace OnBoarding Consultancy" />,
//     FashionPortal: <EcommercePartner data={FashionPortal} heading="Fashion Portal OnBoarding Consultancy" />,
//     QuickCommerce: <EcommercePartner data={QuickCommerce} heading="QuickCommerce OnBoarding Consultancy" />,
//     GlobalPlatforms: <EcommercePartner data={GlobalPortal} heading="GlobalPortal OnBoarding Consultancy" />
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="w-full">
//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-3 ">
//           <div className="inline-flex sm:overflow-x-scroll lg:overflow-hidden bg-white rounded-full  border-2 border-[#662D91]">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-8 py-3 transition-colors rounded-full font-medium ${activeTab === tab.id
//                   ? 'bg-[#662D91] text-white'
//                   : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Card */}
//         {/* IMPORTANT: add a key here so carousel remounts when tab changes */}
//         <div key={activeTab} className="bg-gray-900 shadow-2xl overflow-hidden">
//           {content[activeTab]}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
// service section data
import EcommercePartner from "./ServiceCarouselOnboarding";

const MarketPLace = [
    {
        name: 'AMAZON', description: " Get your products live on Amazon quickly and efficiently. We handle seller registration, sample listings, catalog creation, and brand registration support. Our team ensures your listings are optimized for compliance, visibility, and maximum sales.",
        image: "https://img1.wsimg.com/isteam/ip/a7e03c85-c0f2-437a-b493-450c4bd554c6/37.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
    },
    {
        name: 'FLIPKART', description: " Simplify your Flipkart journey with end-to-end onboarding. We handle seller registration, bulk uploads, sample listings, and content optimization. Our pricing strategy and compliance checks help your products perform effectively on the platform.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
    },
    {
        name: 'MEESHO', description: "Kickstart your social commerce sales on Meesho. We handle account setup, cataloging, sample listings, pricing, and promotional planning. Our team ensures your products reach customers efficiently and your brand grows on the platform.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
    },
];

const FashionPortal = [
    {
        name: 'Myntra', description: " Launch your fashion brand on Myntra seamlessly. We manage vendor registration, product listings, sample listings, and creative content uploads. Category approvals and compliance checks ensure your brand reaches the right audience effortlessly.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
        name: 'Nykaa', description: " Streamline your beauty brand’s entry into Nykaa. From account setup and sample listings to SEO-rich product content and high-quality images, we provide complete brand registration support. We make sure your products are compliant, discoverable, and ready to sell.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
        name: 'Ajio', description: " Start selling on Ajio with ease. We provide vendor registration, product cataloging, sample listings, and creative content uploads. Our brand registration support ensures smooth platform entry and optimized visibility.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
        name: 'Tatacliq', description: " Expand your brand presence on Tata CLiQ effortlessly. We manage seller registration, product listings, sample listings, and creative asset uploads. Category approvals and compliance support ensure a seamless launch and visibility.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
    },
];

const QuickCommerce = [
    {
        name: 'BLINKIT', description: " Simplify your Blinkit onboarding. Our team handles account creation, product listings, sample listings, and PO support. We ensure your products are compliant, visible, and efficiently managed for quick commerce success.",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80"
    },
    {
        name: 'ZEPTO', description: " Get your products onboard Zepto quickly. We manage account setup, product listings, sample listings, and PO support. Compliance checks and catalog management ensure your products are ready for instant delivery customers.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80"
    },
];

const GlobalPortal = [
    {
        name: 'WALMART', description: " Enter Walmart’s global marketplace with ease. We manage seller registration, catalog uploads, sample listings, and content optimization. Compliance checks and shipping setup ensure your products reach international customers efficiently.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
    },
    {
        name: 'AMAZON.COM', description: " Expand globally with Amazon Global. We manage international account setup, catalog localization, sample listings, and brand registration support. Cross-border compliance and shipping integration help you reach customers worldwide.",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80"
    },
    {
        name: 'ALIBABA.COM', description: " Connect with buyers worldwide through Alibaba. We provide international account setup, multilingual product listings, sample listings, and brand registration support. Our logistics and compliance support help your products succeed globally.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80"
    },
    {
        name: 'EBAY', description: " Launch your products on eBay smoothly. We provide store setup, product listings, sample listings, and content optimization. Our team ensures international shipping, compliance, and visibility for global reach.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
        name: 'ETSY', description: " Sell your handmade or niche products globally on Etsy. We handle store setup, SEO-optimized listings, sample listings, and brand registration support. Platform-specific compliance ensures smooth operations and discoverability.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
    },
];

export default function ServiceOnboarding() {
    const [activeTab, setActiveTab] = useState('FashionPortal');
    const [isMobile, setIsMobile] = useState(false);

    // mobile breakpoint: < 640 -> stacked mobile mode
    const MOBILE_BREAKPOINT = 640;

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const tabs = [
        { id: 'MarketPlace', label: 'MarketPlace' },
        { id: 'FashionPortal', label: 'FashionPortal' },
        { id: 'QuickCommerce', label: 'QuickCommerce' },
        { id: 'GlobalPlatforms', label: 'GlobalPlatforms' }
    ];

    const contentMap = {
        MarketPlace: <EcommercePartner data={MarketPLace} heading="MarketPlace OnBoarding Consultancy" />,
        FashionPortal: <EcommercePartner data={FashionPortal} heading="Fashion Portal OnBoarding Consultancy" />,
        QuickCommerce: <EcommercePartner data={QuickCommerce} heading="QuickCommerce OnBoarding Consultancy" />,
        GlobalPlatforms: <EcommercePartner data={GlobalPortal} heading="GlobalPortal OnBoarding Consultancy" />
    };

    // Mobile: render all sections one after another (stacked)
    if (isMobile) {
        return (
            <div className="flex items-center justify-center">
                <div className="w-full space-y-6">
                    {/* Each section will render its own mobile grid via EcommercePartner */}
                    <div className="bg-gray-900 shadow-2xl overflow-hidden">{contentMap.MarketPlace}</div>
                    <div className="bg-gray-900 shadow-2xl overflow-hidden">{contentMap.FashionPortal}</div>
                    <div className="bg-gray-900 shadow-2xl overflow-hidden">{contentMap.QuickCommerce}</div>
                    <div className="bg-gray-900 shadow-2xl overflow-hidden">{contentMap.GlobalPlatforms}</div>
                </div>
            </div>
        );
    }

    // Desktop/Tablet: render tabs + single active panel
    return (
        <div className="flex items-center justify-center">
            <div className="w-full">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-3 ">
                    <div className="inline-flex sm:overflow-x-scroll lg:overflow-hidden bg-white rounded-full border-2 border-[#662D91]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-3 transition-colors rounded-full font-medium ${activeTab === tab.id
                                    ? 'bg-[#662D91] text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Card (key forces remount so carousel resets) */}
                <div key={activeTab} className="bg-gray-900 shadow-2xl overflow-hidden">
                    {contentMap[activeTab]}
                </div>
            </div>
        </div>
    );
}

