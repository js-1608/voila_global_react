import React from "react";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
                
                {/* Header */}
                <header className="px-8 py-10 border-b border-slate-100">
                    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                        Terms & Conditions
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Last updated: <time dateTime="2025-11-14">November 14, 2025</time>
                    </p>
                </header>

                <div className="flex flex-col md:flex-row">
                    {/* Sidebar / TOC */}
                    <nav className="w-full md:w-1/3 border-r border-slate-100 p-6 bg-slate-50">
                        <p className="text-sm font-semibold text-slate-600 mb-3">On this page</p>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#intro" className="block hover:text-sky-600">Introduction</a></li>
                            <li><a href="#use" className="block hover:text-sky-600">1. Use of Website</a></li>
                            <li><a href="#services" className="block hover:text-sky-600">2. Services</a></li>
                            <li><a href="#payments" className="block hover:text-sky-600">3. Payments & Refunds</a></li>
                            <li><a href="#ip" className="block hover:text-sky-600">4. Intellectual Property</a></li>
                            <li><a href="#liability" className="block hover:text-sky-600">5. Limitation of Liability</a></li>
                            <li><a href="#thirdparty" className="block hover:text-sky-600">6. Third-Party Platforms</a></li>
                            <li><a href="#termination" className="block hover:text-sky-600">7. Termination of Services</a></li>
                            <li><a href="#changes" className="block hover:text-sky-600">8. Changes to Terms</a></li>
                            <li><a href="#contact" className="block hover:text-sky-600">9. Contact Us</a></li>
                        </ul>
                    </nav>

                    {/* Content */}
                    <article className="w-full md:w-2/3 p-8 prose prose-slate max-w-none text-sm">

                        {/* Intro */}
                        <section id="intro">
                            <p>
                                Welcome to <strong>VOILAGLOBAL</strong>. By accessing or using our website or services, 
                                you agree to comply with the following Terms & Conditions.
                            </p>
                        </section>

                        {/* 1 */}
                        <section id="use" className="mt-8">
                            <h2 className="text-lg font-semibold">1. Use of Website</h2>
                            <p>You agree to use this website responsibly and not engage in:</p>
                            <ul className="list-disc ml-6">
                                <li>Unauthorized access</li>
                                <li>Misuse or modification of content</li>
                                <li>Activities that harm or disrupt website functionality</li>
                            </ul>
                        </section>

                        {/* 2 */}
                        <section id="services" className="mt-8">
                            <h2 className="text-lg font-semibold">2. Services</h2>
                            <p>All services offered through VoilaStudio, VoilaBiz, VoilaKart, and VoilaRetail are subject to:</p>
                            <ul className="list-disc ml-6">
                                <li>Service agreements</li>
                                <li>Pricing discussions</li>
                                <li>Client approval processes</li>
                                <li>Platform-specific guidelines (Amazon, Myntra, Flipkart, etc.)</li>
                            </ul>
                        </section>

                        {/* 3 */}
                        <section id="payments" className="mt-8">
                            <h2 className="text-lg font-semibold">3. Payments & Refunds</h2>
                            <p>Payments must be made as per the agreed terms.</p>
                            <p className="mt-1">Refunds are evaluated case-by-case and are not guaranteed once services have begun.</p>
                        </section>

                        {/* 4 */}
                        <section id="ip" className="mt-8">
                            <h2 className="text-lg font-semibold">4. Intellectual Property</h2>
                            <p>
                                All content on this website—including text, images, graphics, and branding—is the property 
                                of <strong>VOILAGLOBAL</strong>. You may not copy, reproduce, or distribute 
                                content without prior written permission.
                            </p>
                        </section>

                        {/* 5 */}
                        <section id="liability" className="mt-8">
                            <h2 className="text-lg font-semibold">5. Limitation of Liability</h2>
                            <p>VOILAGLOBAL is not responsible for:</p>
                            <ul className="list-disc ml-6">
                                <li>Losses arising from incorrect information provided by the client</li>
                                <li>Marketplace policy changes</li>
                                <li>Delays caused by third-party platforms or service providers</li>
                                <li>Business outcomes beyond operational control</li>
                            </ul>
                        </section>

                        {/* 6 */}
                        <section id="thirdparty" className="mt-8">
                            <h2 className="text-lg font-semibold">6. Third-Party Platforms</h2>
                            <p>
                                Marketplace onboarding or services (Amazon, Flipkart, Myntra, Alibaba, etc.) 
                                are subject to the rules and decisions of those platforms.
                            </p>
                        </section>

                        {/* 7 */}
                        <section id="termination" className="mt-8">
                            <h2 className="text-lg font-semibold">7. Termination of Services</h2>
                            <p>VOILAGLOBAL reserves the right to decline or terminate services in case of:</p>
                            <ul className="list-disc ml-6">
                                <li>Misuse of services</li>
                                <li>Non-payment</li>
                                <li>Violation of policies</li>
                                <li>Illegal or prohibited products</li>
                            </ul>
                        </section>

                        {/* 8 */}
                        <section id="changes" className="mt-8">
                            <h2 className="text-lg font-semibold">8. Changes to Terms</h2>
                            <p>
                                We may revise these Terms & Conditions anytime. Updates will be posted on this page.
                            </p>
                        </section>

                        {/* 9 */}
                        <section id="contact" className="mt-8">
                            <h2 className="text-lg font-semibold">9. Contact Us</h2>
                            <p>For any questions regarding these Terms & Conditions:</p>
                            <dl className="mt-3">
                                <div>
                                    <dt className="font-medium">Email</dt>
                                    <dd className="text-sm text-slate-600">info@intenim.com</dd>
                                </div>
                                <div className="mt-2">
                                    <dt className="font-medium">Phone</dt>
                                    <dd className="text-sm text-slate-600">+91 9810554548</dd>
                                </div>
                            </dl>
                        </section>

                        <footer className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-500">
                            <p>© {new Date().getFullYear()} VOILAGLOBAL. All rights reserved.</p>
                        </footer>
                    </article>
                </div>
            </div>
        </main>
    );
}
