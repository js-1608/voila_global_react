import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Footer: mobile-first layout per user's spec,
 * but uses original 4-column desktop grid at md+ exactly like before.
 */
const Footer = () => {
  return (
    <footer
      className="relative text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero_bg.png')" }}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-10">

        {/* ========== MOBILE LAYOUT (visible below md) ========== */}
        <div className="md:hidden">

          {/* Top row: logo | address */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white p-2 rounded-xl shadow_logo w-20 h-20 flex items-center justify-center">
                <img src="/logo.png" alt="Voila logo" className="h-14 w-auto" />
              </div>
            </div>

            <div className="flex-1 text-right">
              <p className="text-purple-200 text-sm leading-relaxed">
                Unit 1007-1008A, WellDone TechPark,
                Sector 48, Gurugram, Haryana-122018, India
              </p>
            </div>
          </div>

          {/* Social icons (centered) */}
          <div className="mt-6 flex justify-center gap-4">
            <SocialIcon href="https://www.facebook.com/VoilaStudio.in/" label="Facebook">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/VoilaStudio.in/" label="Instagram">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://x.com/studiovoila?lang=en" label="X / Twitter">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://in.linkedin.com/showcase/voilastudio" label="LinkedIn">
              <Linkedin />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/@VOILA_BIZ" label="YouTube">
              <Youtube />
            </SocialIcon>
          </div>

          {/* Two-column links (Quick Links | Policies) */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-purple-200">Home</Link></li>
                <li><Link to="/about" className="hover:text-purple-200">Our Story</Link></li>
                <li><Link to="/business" className="hover:text-purple-200">Business</Link></li>
                <li><Link to="/partners" className="hover:text-purple-200">Partnership</Link></li>
                <li><Link to="/blog" className="hover:text-purple-200">Blog</Link></li>
                <li><Link to="/contact-us" className="hover:text-purple-200">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Policies</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="hover:text-purple-200">Privacy Policy</Link></li>
                <li><Link to="/terms-and-condition" className="hover:text-purple-200">Terms & Conditions</Link></li>
                <li><Link to="/refund-policy" className="hover:text-purple-200">Cancellation & Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom row: contact numbers (left) | email (right) */}
          <div className="mt-6 flex items-start justify-between gap-4 border-t border-purple-500 border-opacity-20 pt-4">
            <div className="flex-1">
              <p className="text-white text-sm">
                Phone:
                <br />
                <span className="block">+91 9810554548</span>
                <span className="block">+91 9821554548</span>
                <span className="block">+91 9821654548</span>
              </p>
            </div>

            <div className="flex-1 text-right">
              <p className="text-white text-sm">
                Email:
                <br />
                <a href="mailto:info@voilabiz.com" className="underline hover:text-purple-200">info@voilabiz.com</a>
              </p>
            </div>
          </div>
        </div>
        {/* ========== END MOBILE LAYOUT ========== */}


        {/* ========== DESKTOP LAYOUT (md and up) - unchanged structure ========== */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Logo + Social Media (column 1) */}
            <div className="md:col-span-1">
              <div className="flex flex-col-reverse lg:flex-row justify-evenly gap-2">
                <div className="flex flex-row lg:flex-col gap-3">
                  <a
                    href="https://www.facebook.com/VoilaStudio.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 text-[#662D91]" />
                  </a>

                  <a
                    href="https://www.instagram.com/VoilaStudio.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 text-[#662D91]" />
                  </a>

                  <a
                    href="https://x.com/studiovoila?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-[#662D91]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href="https://in.linkedin.com/showcase/voilastudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-[#662D91]" />
                  </a>

                  <a
                    href="https://www.youtube.com/@VOILA_BIZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5 text-[#662D91]" />
                  </a>
                </div>

                <div className="bg-white p-3 rounded-xl shadow_logo w-28 h-28 flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="h-18 w-auto m-auto" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white hover:text-purple-200 flex items-center"> Home</Link></li>
                <li><Link to="/about" className="text-white hover:text-purple-200 flex items-center"> Our Story</Link></li>
                <li><Link to="/business" className="text-white hover:text-purple-200 flex items-center"> Business</Link></li>
                <li><Link to="/partners" className="text-white hover:text-purple-200 flex items-center"> Partnership</Link></li>
                <li><Link to="/blog" className="text-white hover:text-purple-200 flex items-center"> Blog</Link></li>
                <li><Link to="/contact-us" className="text-white hover:text-purple-200 flex items-center"> Contact Us</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Policies</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-white hover:text-purple-200 flex items-center"> Privacy Policy</Link></li>
                <li><Link to="/terms-and-condition" className="text-white hover:text-purple-200 flex items-center"> Terms & Conditions</Link></li>
                <li><Link to="/refund-policy" className="text-white hover:text-purple-200 flex items-center"> Cancellation & Refund Policy</Link></li>
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
                  <p className="text-white">Phone :
                    <br />
                    +91 9810554548 <br />
                    +91 9821554548 <br />
                    +91 9821654548</p>
                </div>

                <div>
                  <p className="text-white">Email : info@voilabiz.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* ========== END DESKTOP LAYOUT ========== */}

      </div>

      {/* Copyright (shared) */}
      <div className="relative border-t border-purple-500 border-opacity-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-center text-purple-200 text-sm">
            © Copyright 2025 by Intenim Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- Helper: SocialIcon ---------------- */
const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
  >
    <div className="text-[#662D91] w-5 h-5">{children}</div>
  </a>
);
