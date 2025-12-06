import { Camera } from 'lucide-react';
import React from 'react';


export default function HeroCards() {
  return (
    <>

      <VerticalsMinimalLuxury />
      <AwardsSection />
      {/* <img src="https://voilastudio.in/assets/frontpage/assets/images/Newcategory/verticals.webp" alt="verticals" className="w-full "/> */}
    </>
  );
}

function Badge({ label, className = '' }) {
  return (
    <div className={`inline-flex items-center justify-center bg-white/95 shadow-xl rounded-full px-4 py-2 text-sm font-medium ${className}`}>
      <span className="mr-2 h-4 w-4 rounded-full bg-gray-200 flex items-center justify-center text-xs">{label.charAt(0)}</span>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}



// VerticalsMinimalLuxury.jsx

/**
 * Minimal Luxury — 4 verticals card grid for VOILABIZ / VOILARETAIL / VOILASTUDIO / VOILAKART
 *
 * Usage:
 *  - Make sure Tailwind is configured in your project.
 *  - Import: import VerticalsMinimalLuxury from './VerticalsMinimalLuxury';
 *  - Place <VerticalsMinimalLuxury /> where needed.
 *
 * Replace icon paths with your real SVG/PNG. Keep icons fairly large (e.g. 64x64 or svg).
 */

const items = [
  {
    id: "VoilaStudio",
    title: "VOILA Studio",
    subtitle: "Ecommerce Studio",
    desc: "India’s leading eCommerce photography studio, specializing in product and fashion shoots for categories like apparel, accessories, beauty, lifestyle, home, electronics, and more. Our team of skilled photographers, stylists, editors, and professional models delivers high-quality visuals that make your products stand out and drive brand growth across major eCommerce platforms.",
    href: "https://voilastudio.in/",
    icon: "/verticles/studio.png",
  },
  {
    id: "VoilaBiz",
    title: "VOILA Biz",
    subtitle: "Ecommerce Solutions",
    desc: " The growth engine for MSMEs and Startups, driving up to 7x growth for brands through brand building, scaling strategies, consultancy, website development, digital marketing, marketplace onboarding, and international business support.",
    href: "https://voilabiz.com/",
    icon: "/verticles/biz.png",
  },
  {
    id: "VOILA Kart",
    title: "VOILA Retail",
    subtitle: "Reatil",
    desc: "We act as an eDistributor, eWholesaler, and eRetailer by buying products and selling them online in India and international markets. As the merchant on record, we help artisans, SMEs, and manufacturers scale their business, find international buyers, and export their products with ease.",
    href: "https://voilaretail.com/",
    icon: "/verticles/retail.png",
  },
  {
    id: "voilakart",
    title: "VOILAKART",
    subtitle: "E-commerce",
    desc: " VOILAKart offers a wide range of products, including home and kitchen solutions, wooden and leatherite items, kids’ games, gaming consoles, pet care, and auto accessories. Carefully curated for quality and convenience, it makes shopping simple, reliable, and suited for modern households.",
    href: "https://voilakart.com/",
    icon: "/verticles/kart.png",
  },
];

export function VerticalsMinimalLuxury() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto ">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Core Verticals
          </h2>
          <p className="mt-3 text-gray-500">
            Four focused teams delivering specialized outcomes — choose the
            vertical that fits your growth stage.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <a
              key={it.id}
              href={it.href}
              target='_blank'
              className="group block bg-white rounded-2xl border border-gray-100 shadow-sm
                         p-2 text-left transition transform hover:-translate-y-2 hover:shadow-xl
                         focus:outline-none focus:ring-4 focus:ring-indigo-50"
              aria-label={`${it.title} — ${it.subtitle}`}
            >
              {/* icon area */}
              <div className="flex items-center justify-center  mx-auto rounded-lg
                              bg-gradient-to-b from-white to-gray-50 ring-1 ring-gray-100">
                {/* Use SVG for crispness; fallback to img if needed */}
                <img
                  src={it.icon}
                  alt={`${it.title} logo`}
                  className="object-contain"
                />

              </div>

              {/* title */}
              <h3 className="mt-6 text-center text-lg font-semibold tracking-tight text-gray-900">
                {it.title}
              </h3>

              <div className="mt-1 text-center text-indigo-600 text-sm font-medium ">
                {it.subtitle}
              </div>

              <p className="mt-4  text-sm text-gray-500 text-justify">{it.desc}</p>

              <div className="mt-6 flex items-center justify-center">
                <span
                  className="text-sm text-gray-400 group-hover:text-indigo-600 group-focus:text-indigo-600
                             transition inline-flex items-center gap-2"
                >
                  Visit  Website
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* small tertiary CTA */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Not sure which vertical fits your needs?{" "}
            <a href="/contact" className="text-indigo-600 font-medium">
              Get a tailored suggestion →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}




// AwardsSection.jsx
// Modern "Awards & Recognitions" section built with Tailwind CSS.
// Usage: import AwardsSection from './AwardsSection' and place <AwardsSection /> in your page.

const awards = [
  { year: '2024', title: 'Best Ecommerce Studio', issuer: 'India Media Awards', desc: 'Recognized for excellence in product photography and fast turnarounds.' },
  { year: '2023', title: 'Top Creative Agency', issuer: 'Retail Design Forum', desc: 'Honoured for creative direction across major retail campaigns.' },
  { year: '2022', title: 'Innovation in Visual Commerce', issuer: 'CommerceX', desc: 'Awarded for tooling and automation in catalog workflows.' },
];

const certificate = [
  '/awards/award_1.webp',
  '/awards/award_2.webp',
  '/awards/award_3.webp',
  '/awards/award_4.webp',
  '/awards/award_5.webp',
  '/awards/award_6.webp',
  '/awards/award_7.webp',
];

export function AwardsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold">Our Vision</h2>
          <p className="mt-3 text-gray-600 text-sm">
            Whether you are an emerging entrepreneur, a growing MSME, or a global brand, our mission is to amplify your brand presence, drive sustainable growth, and open new horizons in both domestic and international markets. At VOILAGlobal, we don’t just provide services — we become your strategic partner, combining technology, creativity, and market expertise to turn business vision into measurable success.
            <br /><br />We aim to empower brands of all sizes to compete confidently in the digital-first world, scale efficiently, and expand across borders with ease. By building lasting partnerships, delivering actionable strategies, and enabling seamless access to new markets, we ensure that every brand we work with not only grows but thrives in an increasingly competitive landscape.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Highlight award card */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold">Recent Highlights</h3>
            <p className="mt-2 text-sm text-gray-500">Selected awards that reflect our capabilities across photography, retail and technology.</p>

            <ol className="mt-6 space-y-4">
              {awards.map((a, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center font-semibold text-indigo-600">{a.year}</div>
                  <div>
                    <div className="font-semibold">{a.title} <span className="text-sm text-gray-400">— {a.issuer}</span></div>
                    <div className="mt-1 text-sm text-gray-600">{a.desc}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex items-center gap-4">
              <a href="/awards" className="text-indigo-600 font-medium">View full awards list →</a>
              <span className="text-sm text-gray-400">|</span>
              <a href="/press" className="text-sm text-gray-600">Press mentions</a>
            </div>
          </div>

          {/* Accolades / badges */}
          <aside className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
            <div className="rounded-full bg-yellow-50 p-4 ring-1 ring-yellow-100">
              {/* medal svg */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2l2.39 4.85L19 8l-3.2 2.77L16.78 16 12 13.77 7.22 16l1-5.23L5 8l4.61-.15L12 2z" stroke="#D97706" strokeWidth="0.5" fill="#F59E0B" />
              </svg>
            </div>
            <h4 className="mt-4 font-semibold">Trusted & Awarded</h4>
            <p className="mt-2 text-sm text-gray-500 text-center">Recognitions across creative and tech categories for consistent delivery and innovation.</p>
            <div className="mt-4 w-full">
              <a href="/case-studies" className="block text-center rounded-md bg-indigo-600 text-white px-4 py-2">See case studies</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
