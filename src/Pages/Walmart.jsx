import {
  MessageSquare,
  BookImage,
  HandFist,
  HandCoins,
  TruckElectric,
  UserCheck,
} from "lucide-react";
import FAQ from "../Components/Faq";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { WalmartUsFaq } from "../data/Data";
import { Link } from "react-router-dom";

import ContactFormEmailJS from "../Components/WalmartCta";


export default function Walmart() {
  const href = `https://wa.me/${+919810554548}?text=${encodeURIComponent('Hi, can I get more information for Walmart onboarding?')}`;

  const features2 = [
    {
      icon: <BookImage size={36} className="text-blue-600 mx-auto" />,
      title: "Registration and Cataloguing",
      desc: "We will handle the entire registration process, document verification by the Walmart team, and cataloguing of 30 or more products on Walmart.com.",
    },
    {
      icon: <HandFist size={36} className="text-blue-600 mx-auto" />,
      title: "Support for Initial Shipment",
      desc: " We will assist you with your first consignment, ensuring the successful shipment of 100+ items to Walmart Fulfilment Services (WFS). ",
    },
    {
      icon: <HandCoins size={36} className="text-blue-600 mx-auto" />,
      title: "$75000 Worth Savings/Benefits for 1st Year period. ",
      desc: "30% discount on Commission/referral Fees, 25% discount in Local Fulfilment Fees and 50% discount on Storage Fee ,Free Ad Credits ($1000)",
    },
    {
      icon: <MessageSquare size={36} className="text-blue-600 mx-auto" />,
      title: " Account Management Support ",
      desc: " Account Management support for Launch + 3 months to guide you through your initial phase and provide ongoing consultancy for growth. ",
    },
    {
      icon: <TruckElectric size={36} className="text-blue-600 mx-auto" />,
      title: "Support for Subsequent Shipments",
      desc: "We will help facilitate your 2nd and subsequent consignments, with shipments of up to 500+ items to Walmart Fulfilment Services (WFS). ",
    },
    {
      icon: <UserCheck size={36} className="text-blue-600 mx-auto" />,
      title: "Expert Guidance ",
      desc: " You’ll receive expert support from Walmart-trained executives who are committed to successful launch and growth of your business in the U.S. mar",
    },
  ];

  return (
    <div className="overflow-hidden">

      <header className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-1 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logos */}
            <div className="flex items-center gap-4">
              <img src="/walmart/walmartlogo.png" alt="Nirmaan Logo" className="h-12 md:h-12 object-contain" />
              <div className="h-12 border-l border-slate-200" aria-hidden />
              <img src="/walmart/logo.png" alt="Voila Logo" className="h-12 md:h-16 object-contain pl-3" />
            </div>

            {/* Right: Contact */}
            <div className="text-right text-sm text-slate-600 hidden lg:block">
              <div className="flex items-center gap-4">
                <a href="mailto:info@intenim.com" className="hover:text-slate-800">info@intenim.com</a>
                <span className="hidden md:inline-block">/</span>
                <a href="tel:+919810554548" className="hover:text-slate-800">+91 9810554548</a>
              </div>
            </div>
          </div>
        </div>
      </header>


      <div className="font-sans bg-gray-50 text-gray-900">
        <img
          src="/walmart/Walmartbanner.jpg"
          className="w-full hidden md:block"
        />

        <img
          src="/walmart/mobile_banner.png"
          className="w-full block md:hidden"
        />

        {/* 2rd section */}
        <section className="py-20 bg-white px-6 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug"
            >
              What You Get
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-500 mb-12"
            >
              Here’s a breakdown of what you will receive as part of our Launch + 3 Months Plan: <br />
              Your pathway to success on Walmart.com With Voila
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

          <h2 className="text-xl  mt-6 lg:mt-4"><span className="text-red-700 font-bold">ZERO Fee</span>  All of the services and credits above come at<b> no charge </b>to you, with a total
            value of approximately <s className="text-red-700">₹1,35,000.</s> Absolutely Free</h2>

          <a href={href} target="_blank" rel="noopener noreferrer">
            <button className="mt-8 bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
              GET STARTED FOR FREE
            </button>
          </a>
        </section>



        <section className="bg-[#f3f9fc] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Left: Illustration */}
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start" data-aos="fade-right">
                <div className="relative  flex items-center justify-center">
                  {/* <div className="rounded-full overflow-hidden w-72 h-72 bg-white shadow-md flex items-center justify-center"> */}
                  <img
                    src="whyus.png"
                    alt="person holding tablet"
                    className="w-full h-full object-cover"
                  />
                  {/* </div> */}

                  {/* Decorative small icons (optional) */}
                  <div className="absolute -left-4 -top-3 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 3h14v4H3V3zM3 9h14v8H3V9z" />
                    </svg>
                  </div>

                  <div className="absolute -right-3 -bottom-2 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 3h14v4H3V3zM3 9h14v8H3V9z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right: Stats grid */}
              <div className="w-full lg:w-2/3" data-aos="fade-left">
                <h3 className="text-center lg:text-left text-2xl lg:text-3xl font-semibold text-slate-800 mb-8">
                  Tap into endless opportunities with Walmart
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="flex items-start gap-6 bg-transparent">
                    <div className="flex items-center">
                      <div className="w-1.5 h-20 bg-yellow-400 rounded-sm mr-4 hidden md:block" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-light text-blue-600">Massive Customer Base </div>
                      <div className="mt-2 text-sm text-slate-500 max-w-md">
                        Walmart.com gives you access to millions of shoppers who trust the Walmart brand for its
                        reputation for affordability and quality.
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-start gap-6 bg-transparent">
                    <div className="flex items-center">
                      <div className="w-1.5 h-20 bg-yellow-400 rounded-sm mr-4 hidden md:block" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-light text-blue-600">No Monthly Fees </div>
                      <div className="mt-2 text-sm text-slate-500 max-w-md">
                        There are no monthly or subscription fees. You only pay a referral fee based on your sales,
                        which varies by product category. This keeps your costs low while maximizing your
                        potential profits.
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-start gap-6 bg-transparent">
                    <div className="flex items-center">
                      <div className="w-1.5 h-20 bg-yellow-400 rounded-sm mr-4 hidden md:block" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-light text-blue-600">Lower Competition </div>
                      <div className="mt-2 text-sm text-slate-500 max-w-md">
                        Walmart's marketplace has fewer sellers than many of its competitors, meaning your
                        products will stand out more easily and have a better chance to be   <span className="text-blue-600 underline">discovered by
                          customers.</span>
                      </div>
                    </div>
                  </div>


                  {/* Card 4 */}
                  <div className="flex items-start gap-6 bg-transparent">
                    <div className="flex items-center">
                      <div className="w-1.5 h-20 bg-yellow-400 rounded-sm mr-4 hidden md:block" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-light text-blue-600">Simplified Process</div>
                      <div className="mt-2 text-sm text-slate-500 max-w-md">
                        Onboarding and listing products is quick and straightforward, so you can start selling in a
                        matter of days, with the help of <span className="text-[#662D91] font-bold">VOILA</span>, Walmart’s authorized channel partner.
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="flex items-start gap-6 bg-transparent">
                    <div className="flex items-center">
                      <div className="w-1.5 h-20 bg-yellow-400 rounded-sm mr-4 hidden md:block" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-light text-blue-600">Marketing and Visibility</div>
                      <div className="mt-2 text-sm text-slate-500 max-w-md">
                        <b>Free 2-Day Shipping </b>can significantly increase conversion rates and search visibility,
                        making it easier for customers to choose your products.<br />
                        <b>Walmart's Sponsored Products program </b>lets you promote your items directly to
                        buyers, driving targeted traffic to your listings.
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="flex items-start gap-6 bg-transparent">
                    <div className="flex items-center">
                      <div className="w-1.5 h-20 bg-yellow-400 rounded-sm mr-4 hidden md:block" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-light text-blue-600">Advanced Seller Tools</div>
                      <div className="mt-2 text-sm text-slate-500 max-w-md">
                        Gain access to data analytics and insights to track sales trends, customer behavior, and
                        optimize your strategies. Walmart Fulfillment Services (WFS) also offers storage, packing,
                        shipping, and customer service, allowing you to focus on growing your business.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


      </div>



      <ContactFormEmailJS />




      <FAQ faqs={WalmartUsFaq} />


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
                    <a href="tel:+919810554548" class="text-white">+91 9810554548</a><br />
                    <a href="tel:+919821554548" class="text-white">+91 9821554548</a><br />
                    <a href="tel:+919821654548" class="text-white">+91 9821654548</a>
                  </p>
                </div>

                <div>
                  <p className="text-white">
                    Email :
                    <a href="mailto:info@voilabiz.com" class="text-white">info@voilabiz.com</a> <br />
                    <a href="mailto:info@intemim.com" class="text-white">info@intemim.com</a>
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
