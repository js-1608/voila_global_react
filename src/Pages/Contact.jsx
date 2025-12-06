// src/sections/ContactSection.jsx
import React from "react";
import MapEmbed from "../Components/Map";
import ContactCta from "../Components/ContactCta";
import ContactFormEmailJS from "../Components/ContactForm";
import ContactForm from "../Components/ContactUsForm";
import { Mail, Map, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 h-full">
          <div className="max-w-xl mx-auto">
            <p className="text-sm text-orange-500 font-medium">Get in Touch</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Let's Chat</h2>
            <p className="mt-4 text-sm text-gray-500">
              Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
            </p>

            <hr className="my-6 border-t border-gray-200" />

            {/* Contact form component (EmailJS wired) */}
            <ContactForm/>
          </div>
        </div>

        {/* Right: Image + Contact Cards */}
        <div className="flex flex-col gap-6">
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex items-center justify-center"
            style={{ minHeight: 320 }}
          >
            <div className="relative w-full h-full rounded-xl">
              {/* Decorative background circles */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 800"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

              {/* Your map embed component */}
              <MapEmbed />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 gap-4">
              <ContactCard title="Email" subtitle="info@voilabiz.com">
                <Mail className="text-blue-500"/>
              </ContactCard>

              <ContactCard title="Phone" subtitle="9810554548, 9821654548">
                <Phone className="text-blue-500"/>
              </ContactCard>

              <ContactCard
                title="Address"
                subtitle="Unit 1007A, 7B and 8A, WellDone TechPark, Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018"
              >
               <Map className="text-blue-500"/>
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
