import { useState, useEffect } from 'react';
import { Camera, Users, TrendingUp, ArrowRight, Phone, Store } from 'lucide-react';
import Client from '../Components/Client';
import Review from '../Components/Review';
import FAQ from '../Components/Faq';
import ContactCta from '../Components/ContactCta';
import Service from '../Components/Services';
import Button_Gradient from '../Components/Button_Gradient';
import { EcommerceService, GlobalFaq, WebisteServie } from '../data/Data';
import WhyChooseVoila from '../Components/WhyChooseUs';
import { bussinessIndustries } from '../data/Data';
const Global = () => {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            name: 'VOILA Studio',
            icon: <Camera className="w-4 h-4" />,
            content: {
                title: 'Capture Perfectly',
                description: 'Professional photoshoots that highlight your brand\'s personality and create stunning visual content.',
                features: [
                    'Capture Perfectly - Professional photoshoots that highlight your brand\'s personality',
                    'Create Seamlessly - High-quality visual content creation for all your needs',
                    'Impress Instantly - Stunning images that elevate your marketing and captivate your audience',
                ],
            },
            phoneImage: 'studio_hero.png',
        },
        {
            name: 'VOILA Kart',
            icon: <Store className="w-4 h-4" />,
            content: {
                title: 'Onboard Efficiently',
                description: 'Streamlined onboarding processes that help your customers get started quickly and successfully.',
                features: [
                    'Setup Seamlessly - Guide new users through your platform with intuitive flows',
                    'Educate Effectively - Comprehensive tutorials and support materials',
                    'Support Continuously - Ongoing assistance to ensure customer success'
                ],
            },
            phoneImage: 'phone (2).png',
        },
        {
            name: 'VOILA Biz',
            icon: <TrendingUp className="w-4 h-4" />,
            content: {
                title: 'Market Strategically',
                description: 'Data-driven marketing strategies that amplify your brand and drive measurable growth.',
                features: [
                    'Target Precisely - Reach your ideal audience with precision-focused campaigns',
                    'Scale Intelligently - Growth strategies that adapt and evolve with your business',
                    'Convert Effectively - Turn prospects into loyal customers with proven tactics'
                ],
            },
            phoneImage: 'phone (2).png',
        }, {
            name: 'VOILA Retail',
            icon: <Users className="w-4 h-4" />,
            content: {
                title: 'Market Strategically',
                description: 'Data-driven marketing strategies that amplify your brand and drive measurable growth.',
                features: [
                    'Target Precisely - Reach your ideal audience with precision-focused campaigns',
                    'Scale Intelligently - Growth strategies that adapt and evolve with your business',
                    'Convert Effectively - Turn prospects into loyal customers with proven tactics'
                ],
            },
            phoneImage: 'retail.png',
        }
    ];



    // Auto-switch tabs every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % services.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [services.length]);

    const currentService = services[activeTab];

    return (
        <>
            <div className={`max-w-7xl mx-auto px-6 py-8 lg:py-8 bg-white transition-all duration-1000 ease-in-out`}>
                <div className="max-w-7xl mx-auto">
                    {/* Header Pills */}
                    <div className="gap-3 mb-2 hidden lg:flex">
                        {services.map((service, index) => (
                            <button
                                key={service.name}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === index
                                    ? 'bg-[#ED174B] text-white shadow-lg scale-105'
                                    : 'bg-white text-black hover:bg-white/30'
                                    }`}
                            >
                                {service.icon}
                                {service.name}
                            </button>
                        ))}
                    </div>

                    <div
                        className="grid lg:grid-cols-2 gap-12 items-center rounded-4xl p-10 bg-cover bg-center shadow-lg"
                        style={{
                            backgroundImage: "url('/hero_bg.png')",
                        }}
                    >
                        {/* Left Content */}
                        <div className="text-white space-y-6 ">
                            <p className=" text-white/90 max-full lg:max-w-2/3 light_text">
                                Voila captures your brand's story with professional photoshoots
                                that bring visual appeal and authenticity to every frame.
                            </p>            {/* Profile Images */}
                            <div className="flex -space-x-3">
                                {[6, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full    flex items-center justify-center  font-semibold transform transition-transform duration-300 hover:scale-110"
                                    >
                                        <img
                                            src={typeof i === 'string' ? i : `https://i.pravatar.cc/150?img=${i}`}
                                            alt={`Profile ${i}`}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <h1 className=" text_heading">
                                    All Your<br />
                                    Business<br />
                                    Needs to Grow
                                </h1>

                                <div className="flex flex-wrap gap-4">
                                    <Button_Gradient text={"Explore Our Partners"} link={"/partners"} />
                                    <a
                                        href="https://wa.me/919810554548?text=Hi%20I%20Need%20ecommerce%20support"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 text-sm font-medium">
                                            <Phone className="w-4 h-6" />
                                            Book Free Call With Us
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* Right Content - Phone and Features */}
                        <div className="relative z-10 hidden lg:block">
                            {/* Phone Mockup - Extended outside container */}
                            <div className="relative mx-auto w-80 h-[590px] shadow-2xl transform transition-all duration-1000 ease-in-out hover:scale-105 -my-24 z-20">
                                <img
                                    src={currentService.phoneImage}
                                    alt='Phone Mockup'
                                    className="absolute inset-0 w-full h-auto object-contain "
                                />
                            </div>

                            {/* Features Card - Left Side */}
                            <div className="absolute -left-40 top-1/3 transform -translate-y-1/2 w-80 bg-white rounded-2xl p-3 shadow-2xl transition-all duration-1000 ease-in-out z-30">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-[12px] font-semibold text-gray-800">Step by Step</h3>
                                    <span className="text-[12px] text-black font-medium">Pricing</span>
                                </div>

                                <div key={activeTab} className="space-y-3">
                                    {currentService.content.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 opacity-100 animate-pulse"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-[10px] text-black leading-relaxed font-medium">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* "Sell Smarter, Scale Faster" Card - Top Right */}
                            <div className="absolute -right-20 top-1 bg-white rounded-xl p-2 shadow-lg max-w-[250px] transition-all duration-1000 ease-in-out z-30">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">📦</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[12px] font-semibold text-gray-800">Sell Smarter, Scale Faster</h4>
                                        <p className="text-[10px] text-gray-600">One partner for integrations, account management, and continuous growth.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Platform Card - Bottom Right */}
                            <div className="absolute -right-4 bottom-1 rounded-xl  shadow-lg transition-all duration-1000 ease-in-out z-30 max-w-[250px]">
                                {/* <h4 className="font-semibold text-sm mb-2 text-gray-800">Platforms</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-600">Channel Integrations</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">Seamless Connections</p>
                                </div> */}

                                <div className="mt-3 bg-red-500 rounded-lg p-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[12px] text-white font-medium ">Start Scaling Up Today</span>
                                        <TrendingUp className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-[10px] text-white/90">Accelerate your business growth with seamless platform integration and real-time analytics.</p>
                                </div>
                            </div>

                            {/* Navigation Dots */}
                            <div className="flex justify-center gap-2 mt-8">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTab === index ? 'bg-white scale-110' : 'bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Client />
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6   transition-all duration-1000 ease-in-out">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {bussinessIndustries.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-3xl border border-[#A2A2A2] shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                            >
                                <div className="p-6 flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="w-full h-72">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Service serviceContent={WebisteServie} heading="Performance-Driven In Digital Market"
                subheading="Our digital marketing approach is built to attract, convert, and retain. With the right mix of performance and creativity, your brand stays ahead."
            />
            <Service serviceContent={EcommerceService} heading="Powering Your Brand's E-commerce Journey" subheading="Build, manage, and grow your online business with confidence. Our comprehensive services are designed to keep your brand agile and ahead in today’s competitive marketplaces." />
            {/* <Service serviceContent={WebisteServie} heading="Performance-Driven In Digital Market" /> */}

            <WhyChooseVoila />
            <Review />

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

                        {/* <Button_Gradient text={"Explore Our Services"} link={"/"} /> */}
                        <a href="tel:+919810554548">
                            <button className="border border-[#662D91] text-[#662D91] px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 text-sm font-medium">
                                <Phone className="w-4 h-4" />
                                Book Free Call With Us
                            </button>
                        </a>

                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="bg-white shadow-md rounded-xl p-6 puple_gradient " >
                    <ContactCta />
                </div>
            </div>
            <FAQ faqs={GlobalFaq} />


        </>
    );
};

export default Global;