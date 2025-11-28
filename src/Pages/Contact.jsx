/*
  ContactSection.react.jsx
  Single-file React + Tailwind component that recreates the provided design.

  How to use:
  1. Place an image named `contact-hero.png` in `src/assets/` (or update the import path below).
  2. Ensure Tailwind CSS is configured in your project.
  3. Import and render <ContactSection /> where needed.

  Notes: this is a presentational component. Replace the form submit handler
  to integrate with your backend or form service.
*/

import React from 'react';
import MapEmbed from '../Components/Map';

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 h-full">
          <div className="max-w-xl mx-auto">
            <p className="text-sm text-orange-500 font-medium">Get in Touch</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Let's Chat</h2>
            <p className="mt-4 text-sm text-gray-500">Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.</p>

            <hr className="my-6 border-t border-gray-200" />

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted (mock)'); }}>
              <div className="grid grid-cols-2 gap-4">
                <input aria-label="First name" placeholder="First name" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <input aria-label="Last name" placeholder="Last name" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>

              <div>
                <input aria-label="Email" placeholder="Email address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>

              <div>
                <textarea aria-label="Message" placeholder="Leave us message" rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input id="agree" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="agree" className="text-sm text-gray-600">I agree to our friendly <a href="#" className="underline">privacy policy</a></label>
              </div>

              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Image + Contact Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex items-center justify-center" style={{ minHeight: 320 }}>
            <div className="relative w-full h-full rounded-xl">
              {/* Decorative background circles */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#e6f0ff" />
                    <stop offset="100%" stopColor="#f5fbff" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#g)" />
                <g transform="translate(0,40)" opacity="0.6">
                  <circle cx="200" cy="150" r="220" fill="none" stroke="#cfe6ff" strokeWidth="28" />
                  <circle cx="520" cy="150" r="120" fill="none" stroke="#cfe6ff" strokeWidth="18" />
                </g>
              </svg>

              {/* Image */}
              <MapEmbed />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 gap-4">

              <ContactCard title="Email" subtitle="info@voilabiz.com">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="min-w-[20px]">
                  <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 7.5l-9 6-9-6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ContactCard>

              <ContactCard title="Phone" subtitle=" 9810554548, 9821654548">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="min-w-[20px]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19 19 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.21.44 2.39.94 3.49a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.36 6.36l1.27-1.27a2 2 0 0 1 2.11-.45c1.1.5 2.28.82 3.49.94A2 2 0 0 1 22 16.92z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ContactCard>

              <ContactCard title="Address" subtitle="Unit 1007A, 7B and 8A, WellDone TechPark, Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="min-w-[20px]">
                  <path d="M21 10c0 7-9 11-9 11s-9-4-9-11a9 9 0 0 1 18 0z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ContactCard>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ children, title, subtitle }) {
  return (
    <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
      <div className="p-2 bg-white rounded-lg shadow-sm">{children}</div>
      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
