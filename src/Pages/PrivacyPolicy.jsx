import React from "react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
                <header className="px-8 py-10 border-b border-slate-100">
                    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Privacy Policy</h1>
                    <p className="mt-2 text-sm text-slate-500">Last updated: <time dateTime="2025-11-14">November 14, 2025</time></p>
                </header>

                <div className="flex flex-col md:flex-row">
                    {/* Sidebar / TOC */}
                    <nav className="w-full md:w-1/3 border-r border-slate-100 p-6 bg-slate-50">
                        <p className="text-sm font-semibold text-slate-600 mb-3">On this page</p>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#information-we-collect" className="block hover:text-sky-600">1. Information We Collect</a>
                            </li>
                            <li>
                                <a href="#how-we-use" className="block hover:text-sky-600">2. How We Use Your Information</a>
                            </li>
                            <li>
                                <a href="#sharing" className="block hover:text-sky-600">3. Sharing Your Information</a>
                            </li>
                            <li>
                                <a href="#security" className="block hover:text-sky-600">4. Data Security</a>
                            </li>
                            <li>
                                <a href="#cookies" className="block hover:text-sky-600">5. Cookies & Tracking</a>
                            </li>
                            <li>
                                <a href="#rights" className="block hover:text-sky-600">6. Your Rights</a>
                            </li>
                            <li>
                                <a href="#third-party" className="block hover:text-sky-600">7. Third-Party Links</a>
                            </li>
                            <li>
                                <a href="#changes" className="block hover:text-sky-600">8. Changes to This Policy</a>
                            </li>
                            <li>
                                <a href="#contact" className="block hover:text-sky-600">9. Contact Us</a>
                            </li>
                        </ul>

                        {/* <div className="mt-6 flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-100"
              >
                Print
              </button>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert("Page link copied to clipboard");
                  } catch (e) {
                    alert("Unable to copy link");
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 text-white px-3 py-2 text-sm font-medium hover:opacity-95"
              >
                Copy link
              </button>
            </div> */}
                    </nav>

                    {/* Content */}
                    <article className="w-full md:w-2/3 p-8 prose prose-slate max-w-none text-sm">
                        <section id="intro">
                            <p className="">
                                At <strong>VOILAGLOBAL</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, protect,
                                and handle your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section id="information-we-collect" className="mt-8">
                            <h2 className="text-lg ">1. Information We Collect</h2>
                            <p className="mt-2">We may collect the following types of information:</p>
                            <ul className="text-sm ">
                                <li><strong>Personal details</strong> — name, email, phone number.</li>
                                <li><strong>Business information</strong> — brand name, service requirements.</li>
                                <li><strong>Website usage data</strong> — cookies, IP address, analytics.</li>
                            </ul>
                        </section>

                        <section id="how-we-use" className="mt-8">
                            <h2 className="text-lg ">2. How We Use Your Information</h2>
                            <p className="mt-2">We use your information to:</p>
                            <ul>
                                <li>Provide and improve our services.</li>
                                <li>Respond to inquiries and support requests.</li>
                                <li>Process onboarding or service-related communication.</li>
                                <li>Send updates, business communication, and marketing materials.</li>
                                <li>Improve website performance and user experience.</li>
                            </ul>
                        </section>

                        <section id="sharing" className="mt-8">
                            <h2 className="text-lg ">3. Sharing Your Information</h2>
                            <p className="mt-2">We do not sell or trade your personal information. We may share data only with:</p>
                            <ul>
                                <li>Internal teams for service delivery.</li>
                                <li>Trusted third-party partners (logistics, marketing, analytics).</li>
                                <li>Platforms where onboarding is being facilitated (e.g., Amazon, Flipkart, Alibaba).</li>
                            </ul>
                            <p className="mt-2">All sharing is done securely and only when necessary.</p>
                        </section>

                        <section id="security" className="mt-8">
                            <h2 className="text-lg ">4. Data Security</h2>
                            <p className="mt-2">We use industry-standard security measures to protect your data from unauthorized access, misuse, or alteration.</p>
                        </section>

                        <section id="cookies" className="mt-8">
                            <h2 className="text-lg ">5. Cookies &amp; Tracking</h2>
                            <p className="mt-2">Our website may use cookies for:</p>
                            <ul>
                                <li>Improved user experience.</li>
                                <li>Analytics and performance tracking.</li>
                                <li>Personalizing service communication.</li>
                            </ul>
                            <p className="mt-2">You may disable cookies through your browser settings, but some features may not work as intended.</p>
                        </section>

                        <section id="rights" className="mt-8">
                            <h2 className="text-lg ">6. Your Rights</h2>
                            <p className="mt-2">You may request:</p>
                            <ul>
                                <li>Access to your data.</li>
                                <li>Correction or deletion of your information.</li>
                                <li>Opt-out from marketing communication.</li>
                            </ul>
                        </section>

                        <section id="third-party" className="mt-8">
                            <h2 className="text-lg ">7. Third-Party Links</h2>
                            <p className="mt-2">Our website may contain links to external websites. We are not responsible for the privacy practices of third-party platforms.</p>
                        </section>

                        <section id="changes" className="mt-8">
                            <h2 className="text-lg ">8. Changes to This Policy</h2>
                            <p className="mt-2">We may update this policy occasionally. Changes will be posted on this page.</p>
                        </section>

                        <section id="contact" className="mt-8">
                            <h2 className="text-lg ">9. Contact Us</h2>
                            <p className="mt-2">For any questions about this Privacy Policy:</p>
                            <dl className="mt-3">
                                <div>
                                    <dt className="font-medium">Email</dt>
                                    <dd className="text-sm text-slate-600">info@intenim.com</dd>
                                </div>
                                <div className="mt-2">
                                    <dt className="font-medium">Phone</dt>
                                    <dd className="text-sm text-slate-600">+91 98105 54548</dd>
                                </div>
                            </dl>
                        </section>

                        <footer className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-500">
                            <p>
                                &copy; {new Date().getFullYear()} VOILAGLOBAL. All rights reserved. If you need a customized policy for specific
                                jurisdictions (e.g., GDPR or CCPA), please contact us so we can prepare a tailored version.
                            </p>
                        </footer>
                    </article>
                </div>
            </div>
        </main>
    );
}
