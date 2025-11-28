import React from "react";
import ContactCta from "../Components/ContactCta";
import FAQ from "../Components/Faq";
import { SeoSmoFaq } from "../data/Data";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button_Gradient from "../Components/Button_Gradient";
import AnalyticsLanding from "./Seo_smo_hero";

const SeoSmo = () => {
    const services = [
        {
            title: "Social Media Strategy",
            desc: "A strong strategy is the foundation of successful social media marketing.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Social Media Advertising",
            desc: "Paid advertising helps businesses reach a wider audience and drive conversions.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            title: "Analytics & Reporting",
            desc: "Tracking and analyzing performance helps refine strategies and improve results.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 13l3-3 4 4 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Community Management",
            desc: "Building strong relationships with your audience helps improve brand loyalty.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 14c-1.5 1.5-3.5 2-4 2s-2.5-.5-4-2c-1.5-1.5-4-2-4-2v4h16v-4s-2.5.5-4 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Content Creation",
            desc: "Quality content is key to keeping your audience engaged.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Influencer Marketing",
            desc: "Partnering with influencers can increase brand credibility and reach new audiences.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];

    const tools = [
        { name: "Google Analytics", icon: "/seo_smo/googleanalytics.png" },
        { name: "Google Search Console", icon: "/seo_smo/console.png" },
        { name: "Ahrefs", icon: "/seo_smo/ahrefs.png" },
        { name: "SEMrush", icon: "/seo_smo/semrush.png" },
        { name: "Moz", icon: "/seo_smo/moz.png" },
        { name: "Ubersuggest", icon: "/seo_smo/ubbersuggest.png" },
        { name: "Screaming Frog", icon: "/seo_smo/screomingfrog.png" },
        { name: "Yoast SEO", icon: "/seo_smo/webranking.png" },
        { name: "Buffer", icon: "/seo_smo/deepcrawl.png" },
        { name: "Hootsuite", icon: "/seo_smo/hoostsuite.png" },
    ];
    return (
        <>

        <AnalyticsLanding/>

           



            <section className="py-12 px-6 lg:px-20 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <span className="inline-block bg-white border border-slate-200 text-sm text-slate-600 px-3 py-1 rounded-full">Services</span>
                        <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-slate-900">
                            Our Social Media <span className="italic text-indigo-600">Services</span>
                        </h2>
                        <p className="mt-2 text-slate-500 max-w-2xl">At Vextra, we offer a comprehensive range of social media services to help businesses of all sizes succeed online.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((s, idx) => (
                            <article key={s.title} data-aos="zoom-in" className="relative bg-white border border-slate-200 rounded-2xl shadow-sm overfow-hidden ">
                                <div className="p-6 min-h-[140px]" >
                                    <h3 className="text-slate-900 font-medium text-lg">{s.title}</h3>
                                    <p className="mt-2 text-slate-500 text-sm">{s.desc}</p>

                                    {/* bottom gradient bar */}
                                    <div className="absolute left-0 right-0 bottom-0 h-14 bg-gradient-to-t from-sky-100 to-transparent"></div>

                                    {/* circular icon that overlaps the gradient */}
                                    <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-[#662D91] flex items-center justify-center text-white shadow-md border-4 border-white">
                                        <div className="w-5 h-5 text-white">
                                            {s.icon}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}

                    <div className="flex justify-center">
                        <img

                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                            alt="SEO and SMO"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Right Side - Image */}

                    <div>
                        <div className="mb-4">
                            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-slate-900">
                                SEO & SMO <span className="italic text-indigo-600">Services</span>
                            </h2>
                        </div>
                        <p className="text-gray-700 mb-4">
                            In today's digital landscape, having a strong online presence is crucial for businesses to thrive. Our SEO (Search Engine Optimization) and SMO (Social Media Optimization) services are designed to enhance your visibility, drive organic traffic, and engage your target audience effectively.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our SEO strategies focus on optimizing your website's content, structure, and technical aspects to improve search engine rankings. We conduct thorough keyword research, on-page optimization, and link-building campaigns to ensure your website ranks higher in search results, attracting more potential customers.
                        </p>
                        <p className="text-gray-700 mb-4">
                            On the SMO front, we help you build a strong social media presence across various platforms. Our team creates engaging content, manages social media accounts, and implements targeted campaigns to increase brand awareness and foster community engagement. By leveraging the power of social media, we help you connect with your audience on a deeper level.
                        </p>

                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        SEO & SMO Tools We Use
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                        We use top industry tools to deliver the best performance, insights, and optimization for your brand.
                    </p>

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center"
                            >
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="w-36 h-16 object-contain mb-4" data-aos="zoom-in"
                                />
                                {/* <p className="text-sm font-medium text-slate-700">{tool.name}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

            <FAQ faqs={SeoSmoFaq} />
        </>
    );
}

export default SeoSmo;