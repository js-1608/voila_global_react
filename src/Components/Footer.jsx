import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="relative text-white overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/hero_bg.png')" }}
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

                    {/* Browse */}
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
                                    <br/>
                                    +91 9810554548 <br/>
                                    +91 9821554548 <br/>
                                    +91 9821654548</p>
                            </div>

                            <div>
                                <p className="text-white">Email : info@voilabiz.com</p>
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
    );
};

export default Footer;
