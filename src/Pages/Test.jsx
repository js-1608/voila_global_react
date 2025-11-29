import React from 'react';


export default function HeroCards(){
  return (
    <>
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Where Simplicity<br/>Meets Financial Power</h1>
          <p className="mt-4 text-gray-500">We’re redefining how people think about money—with clean design, powerful insights, and a clear mission to make finance better</p>
        </div>

        {/* Visual area */}
        <div className="mt-12 relative flex justify-center items-center">
          {/* soft vignette / angled background */}
          {/* <div className="absolute inset-x-0 top-20 flex justify-center pointer-events-none">
            <div className="w-full max-w-4xl h-40 md:h-56 bg-gradient-to-t from-purple-50 to-white transform -skew-y-6 rounded-3xl opacity-90" />
          </div> */}

          {/* cards stack */}
          <div className="relative z-10 flex items-center justify-center space-x-6 md:space-x-10 -mt-8">
            {/* left card */}
            <div className="relative transform -rotate-12 md:-rotate-6 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-orange-400 to-orange-300 w-48 md:w-56 h-28 md:h-36 flex items-center justify-center">
              <img src="/images/card-left-placeholder.png" alt="card left" className="w-full h-full object-cover opacity-0" />
              <div className="absolute left-4 top-3 text-white text-xs font-semibold">DISCOVER</div>
              <div className="absolute right-4 bottom-3 text-white font-bold text-lg">3</div>
            </div>

            {/* center card */}
            <div className="relative transform rotate-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-violet-500 to-indigo-500 w-56 md:w-64 h-36 md:h-44 flex items-center justify-center">
              <img src="/images/card-center-placeholder.png" alt="card center" className="w-full h-full object-cover opacity-0" />
              <div className="absolute left-4 top-3 text-white text-xs font-semibold">Apple Pay</div>
              <div className="absolute right-4 bottom-3 text-white font-bold text-xl">3208</div>
            </div>

            {/* right card */}
            <div className="relative transform rotate-12 md:rotate-6 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-gray-800 to-gray-700 w-48 md:w-56 h-28 md:h-36 flex items-center justify-center">
              <img src="/images/card-right-placeholder.png" alt="card right" className="w-full h-full object-cover opacity-0" />
              <div className="absolute left-4 top-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-gray-800">amazon</div>
              <div className="absolute right-4 bottom-3 text-white font-bold text-lg">3208</div>
            </div>
          </div>

          {/* floating brand badges */}
          <div className="absolute z-20 left-1/4 top-6 md:top-10 -translate-x-1/2">
            <Badge label="DISCOVER" className="-ml-6"/>
          </div>
          <div className="absolute z-20 top-0 md:top-6">
            <Badge label="Apple Pay" />
          </div>
          <div className="absolute z-20 right-1/4 top-6 md:top-10 translate-x-1/2">
            <Badge label="amazon" />
          </div>
          <div className="absolute z-20 right-0 top-24 md:top-28">
            <Badge label="PayPal" />
          </div>
        </div>

      </div>
    </section>
    <VerticalsMinimalLuxury/>
    <AwardsSection/>
    {/* <img src="https://voilastudio.in/assets/frontpage/assets/images/Newcategory/verticals.webp" alt="verticals" className="w-full "/> */}
    </>
  );
}

function Badge({ label, className = '' }){
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
    id: "voilabiz",
    title: "VOILABIZ",
    subtitle: "Enterprise Solutions",
    desc: "Custom catalog & media workflows, integrations and SLA-driven delivery.",
    href: "/voilabiz",
    icon: "/icons/voilabiz.svg",
  },
  {
    id: "voilaretail",
    title: "VOILARETAIL",
    subtitle: "Retail Services",
    desc: "In-store displays, visual merchandising and retail-ready imagery.",
    href: "/voilaretail",
    icon: "/icons/voilaretail.svg",
  },
  {
    id: "voilastudio",
    title: "VOILASTUDIO",
    subtitle: "Photography",
    desc: "Studio, model & lifestyle photography with premium retouching.",
    href: "/voilastudio",
    icon: "/icons/voilastudio.svg",
  },
  {
    id: "voilakart",
    title: "VOILAKART",
    subtitle: "E-commerce",
    desc: "Listing creation, 360° spins and conversion-focused assets.",
    href: "/voilakart",
    icon: "/icons/voilakart.svg",
  },
];

export  function VerticalsMinimalLuxury() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Vertical Expertise
          </h2>
          <p className="mt-3 text-gray-500">
            Four focused teams delivering specialized outcomes — choose the
            vertical that fits your growth stage.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <a
              key={it.id}
              href={it.href}
              className="group block bg-white rounded-2xl border border-gray-100 shadow-sm
                         p-8 text-left transition transform hover:-translate-y-2 hover:shadow-xl
                         focus:outline-none focus:ring-4 focus:ring-indigo-50"
              aria-label={`${it.title} — ${it.subtitle}`}
            >
              {/* icon area */}
              <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-lg
                              bg-gradient-to-b from-white to-gray-50 ring-1 ring-gray-100">
                {/* Use SVG for crispness; fallback to img if needed */}
                <img
                  src={it.icon}
                  alt={`${it.title} logo`}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect fill='%23E5E7EB' width='100%25' height='100%25'/%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* title */}
              <h3 className="mt-6 text-center text-lg font-semibold tracking-tight text-gray-900">
                {it.title}
              </h3>

              <div className="mt-1 text-center text-indigo-600 text-sm font-medium">
                {it.subtitle}
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">{it.desc}</p>

              <div className="mt-6 flex items-center justify-center">
                <span
                  className="text-sm text-gray-400 group-hover:text-indigo-600 group-focus:text-indigo-600
                             transition inline-flex items-center gap-2"
                >
                  Learn more
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

const logos = [
  '/logos/media1.png',
  '/logos/media2.png',
  '/logos/media3.png',
  '/logos/media4.png',
  '/logos/media5.png',
];

export  function AwardsSection(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold">Awards & Recognitions</h2>
          <p className="mt-3 text-gray-600">We’re proud to be recognised by industry bodies and partners for creative excellence and operational innovation.</p>
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

        {/* Partner / media logos */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
          <h5 className="text-sm text-gray-500">Featured in</h5>
          <div className="mt-4 flex items-center gap-6 flex-wrap justify-center">
            {logos.map((src, i) => (
              <div key={i} className="w-28 h-12 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition">
                <img src={src} alt={`logo ${i+1}`} className="max-h-10 object-contain"/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
