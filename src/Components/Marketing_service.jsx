import {
    ChartNoAxesCombined,
    ChartNoAxesGantt,
    ExternalLink,
    HandCoins,
    NotepadTextDashed,
    SearchCheck,
    Settings,
    SquarePen,
} from "lucide-react";
import React, { useState } from "react";

const services = [
    { id: "overview", label: "Overview", icon: <ChartNoAxesGantt /> },
    { id: "seo-audit", label: "SEO Audits", icon: <SearchCheck /> },
    { id: "strategy", label: "Strategy Development", icon: <ChartNoAxesCombined /> },
    { id: "on-page", label: "On-Page SEO", icon: <NotepadTextDashed /> },
    { id: "off-page", label: "Off-Page SEO", icon: <ExternalLink /> },
    { id: "technical", label: "Technical SEO", icon: <Settings /> },
    { id: "content", label: "Content Creation", icon: <SquarePen /> },
    { id: "paid", label: "Paid Marketing", icon: <HandCoins /> },
];

const content = {
    overview: {
        title: "Overview",
        description:
            "Say goodbye to cookie-cutter SEO, and hello to strategies centered on your business goals.",
        points: [
            "Revenue-focused SEO approach tied to your bottom line",
            "Custom strategies built for your specific industry",
            "Data-driven optimization for measurable results",
            "Comprehensive tracking from rankings to sales",
        ],
        image:
            "https://www.omniconvert.com/media/image/42f4e6f282e62389d5f70cd39a951ef72cfe03d2-1456x1102.webp",
    },
    "seo-audit": {
        title: "Actionable SEO Audits",
        description:
            "Identify what's working and what isn't — from technical to off-page, we uncover growth opportunities.",
        points: [
            "Complete SEO strategy analysis",
            "On-page SEO evaluation (title tags, internal linking, etc.)",
            "Off-page SEO assessment (backlink quality and recency)",
            "Technical SEO review (robots.txt, page speed, etc.)",
            "Analytics installation and tracking verification",
        ],
        image:
            "https://www.omniconvert.com/wp-content/uploads/2024/04/omniconvert-nps-pre-post-delivery.png-1.webp",
    },
    strategy: {
        title: "Adaptive Strategy Development",
        description:
            "Future-proof your SEO with proactive strategies that evolve with search engine changes.",
        points: [
            "Strong foundational SEO implementation",
            "Proactive adaptation to algorithm changes",
            "Multi-channel tracking and optimization",
            "Continuous strategy refinement",
        ],
        image:
            "https://www.omniconvert.com/wp-content/uploads/2023/07/omniconvert-nps-store.png.webp",
    },
    "on-page": {
        title: "On-Page SEO Optimization",
        description:
            "Enhance every detail search engines evaluate with our comprehensive on-page approach.",
        points: [
            "Meta tags and header hierarchy optimization",
            "Keyword-rich content improvement",
            "Internal linking structure",
            "UX-driven layout refinements",
        ],
        image:
            "https://www.omniconvert.com/media/image/11928bff899b4fb44081003f5e1e7248c9d432ba-1436x973.webp",
    },
    "off-page": {
        title: "Off-Page SEO",
        description:
            "Strengthen your authority with powerful backlinks, outreach, and brand visibility.",
        points: [
            "High-quality link building campaigns",
            "Content outreach and promotion",
            "Comprehensive backlink audits",
            "Brand mention tracking and management",
        ],
        image:
            "https://www.omniconvert.com/media/image/8b8774a3d22d911f2d69dc43f26cd4a19f798836-1436x973.webp",
    },
    technical: {
        title: "Technical SEO",
        description:
            "Empower your site with the technical precision search engines demand.",
        points: [
            "Crawlability & robots.txt optimization",
            "Sitemap and structured data setup",
            "Page speed & mobile optimization",
            "Security and schema validation",
        ],
        image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=900",
    },
    content: {
        title: "Content Creation & Optimization",
        description:
            "Drive results with professionally crafted content optimized for engagement and SEO.",
        points: [
            "SEO-optimized blog posts & landing pages",
            "Content refresh and updates",
            "Editorial review and quality assurance",
            "ROI tracking per content piece",
        ],
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900",
    },
    paid: {
        title: "Paid Marketing Services",
        description:
            "Amplify reach and conversions with integrated paid campaigns that support organic growth.",
        points: [
            "Google Ads campaign management",
            "Social media advertising (Meta, LinkedIn, etc.)",
            "Remarketing and display campaigns",
            "A/B testing and conversion optimization",
        ],
        image: "https://images.unsplash.com/photo-1601933470928-c8aa9baf1f4f?w=900",
    },
};

export default function DigitalMarketingSolutions() {
    const [active, setActive] = useState("overview");
    const activeContent = content[active];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

            <div className="mb-12 animate-fadeIn">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Heading (Left) */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 md:w-2/5">
                        Digital Solutions
                    </h1>

                    {/* Text (Right) */}
                    <p className="text-gray-600 text-sm md:text-base md:w-3/5 text-left lg:text-right">
                        tempora veritatis excepturi sunt omnis voluptate nulla quibusdam labore, rem, delectus porro harum impedit? Harum, unde. Nesciunt, suscipit.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {/* LEFT MENU - Sticky Sidebar */}
                <div className="h-fit md:sticky md:top-24 self-start space-y-3">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActive(service.id)}
                            className={`w-full text-left flex justify-between items-center border-b border-gray-300 p-4 rounded-md transition-all duration-200 ${active === service.id
                                    ? "bg-white shadow-sm border-purple-600"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            <div className="flex items-center gap-2 font-semibold text-lg text-gray-800">
                                <span className="text-purple-800">{service.icon}</span>
                                {service.label}
                            </div>
                            {active === service.id ? (
                                <span className="bg-purple-600 text-white p-1 rounded-sm">
                                    ➜
                                </span>
                            ) : (
                                <span className="text-gray-500">↗</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <img
                        src={activeContent.image}
                        alt={activeContent.title}
                        className="w-full object-contain"
                    />

                    <div className="p-6 pb-0">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">
                            {activeContent.title}
                        </h3>
                        <p className="text-gray-600 mb-5">{activeContent.description}</p>

                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {activeContent.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
