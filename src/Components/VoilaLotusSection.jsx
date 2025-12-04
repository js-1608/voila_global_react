import React from "react";

export default function VoilaLotusSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto p-6 lg:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Text column */}
          <div>
            <p className="text-sm text-slate-500 font-medium">Partnership</p>
            <h2 className="mt-3 text-2xl lg:text-3xl font-semibold text-slate-900">
              VOILA x Lotus iMall — A Partnership Designed for Brand Success
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed text-sm text-justify">
              VOILA Global and Lotus iMall have come together to create a smooth and supportive onboarding ecosystem for modern brands. This partnership brings together VOILA’s expertise in seller onboarding and marketplace setup with Lotus iMall’s powerful, brand-focused e-commerce model. The result is a simple and structured process where brands get everything they need to start—easy registration, zero-commission benefits, nationwide logistics, AI-driven insights, and a seller-friendly platform built for growth.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm text-justify">
              VOILA helps brands get started on Lotus iMall smoothly and confidently, ensuring a simple onboarding journey from day one. Together, VOILA and Lotus iMall create a future where every brand—big or small—gets the right platform and the right support to begin, grow, and explore new opportunities.
            </p>


            <p className="mt-4 text-sm text-slate-500 text-justify">VOILA guides brands through onboarding and growth on Lotus iMall — simple, clear, supported.</p>
          </div>

          {/* Right column — benefits list (clean) */}
          <div>
            {/* <div className="border border-slate-100 rounded-lg p-6">
              <h3 className="text-lg font-medium text-slate-900">What the partnership delivers</h3>

              <div className="mt-4 space-y-4 text-slate-700">
                <SimpleItem title="Seller-friendly onboarding" desc="Guided steps and expert support from VOILA." />
                <SimpleItem title="Brand-focused marketplace" desc="Curated shopping experience to showcase products." />
                <SimpleItem title="Performance insights" desc="AI recommendations to improve conversion and growth." />
              </div>

              <div className="mt-6 text-sm text-slate-500">No hidden fees. Clear support. Ready to onboard.</div>
            </div> */}
            <img src="voila_verse.webp"/>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimpleItem({ title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <div className="font-medium text-slate-800">{title}</div>
        <div className="text-sm text-slate-500">{desc}</div>
      </div>
    </div>
  );
}
