import React from "react";

export default function RefundCancellationPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Header */}
        <header className="px-8 py-10 border-b border-slate-100">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Refund &amp; Cancellation Policy
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
              <li><a href="#scope" className="block hover:text-sky-600">1. Scope</a></li>
              <li><a href="#cancellation" className="block hover:text-sky-600">2. Cancellation</a></li>
              <li><a href="#refunds" className="block hover:text-sky-600">3. Refunds</a></li>
              <li><a href="#timeframes" className="block hover:text-sky-600">4. Timeframes &amp; Process</a></li>
              <li><a href="#nonrefundable" className="block hover:text-sky-600">5. Non-Refundable Items</a></li>
              <li><a href="#chargebacks" className="block hover:text-sky-600">6. Chargebacks</a></li>
              <li><a href="#disputes" className="block hover:text-sky-600">7. Disputes &amp; Exceptions</a></li>
              <li><a href="#contact" className="block hover:text-sky-600">8. Contact Us</a></li>
            </ul>
          </nav>

          {/* Content */}
          <article className="w-full md:w-2/3 p-8 prose prose-slate max-w-none text-sm">
            <section id="intro">
              <p>
                At <strong>VOILAGLOBAL</strong>, we aim to provide clear, fair, and prompt refund and cancellation processes.
                This policy explains when refunds are available, how cancellations are handled, and the steps to request a refund.
              </p>
            </section>

            <section id="scope" className="mt-8">
              <h2 className="text-lg font-semibold">1. Scope</h2>
              <p className="mt-2">
                This policy applies to services and products purchased directly from VOILAGLOBAL, including services provided under
                the VoilaStudio, VoilaBiz, VoilaRetail and VoilaKart verticals. Platform-specific rules (marketplaces such as Amazon,
                Flipkart, Myntra, etc.) may impose additional restrictions — where platform rules apply, those take precedence
                for transactions processed on those marketplaces.
              </p>
            </section>

            <section id="cancellation" className="mt-8">
              <h2 className="text-lg font-semibold">2. Cancellation</h2>
              <p className="mt-2">
                You may request cancellation of services prior to the work start date or within any agreed trial/preview period.
                Cancellation requests must be submitted in writing (email) to the contact below. The right to cancel depends on
                the stage of work and any pre-paid costs already incurred.
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li><strong>Before work begins:</strong> We will refund amounts paid minus any non-recoverable third-party or setup costs.</li>
                <li><strong>After work has begun:</strong> Cancellation may incur charges for time and resources already used; refunds, if any, will be prorated.</li>
              </ul>
            </section>

            <section id="refunds" className="mt-8">
              <h2 className="text-lg font-semibold">3. Refunds</h2>
              <p className="mt-2">
                Refunds are granted at VOILAGLOBAL’s discretion and are assessed on a case-by-case basis. Common situations where refunds
                may be considered include duplicate payments, clear billing errors, or failure to deliver contracted work as agreed.
              </p>
              <p className="mt-2">
                When a refund is approved, we will generally refund to the original payment method. If the original payment method is
                unavailable, we will issue refunds via a mutually agreed alternative.
              </p>
            </section>

            <section id="timeframes" className="mt-8">
              <h2 className="text-lg font-semibold">4. Timeframes &amp; Process</h2>
              <ol className="list-decimal ml-6 mt-2 space-y-2">
                <li>
                  <strong>How to request:</strong> Email <code>info@intenim.com</code> with order/project details, reason for refund/cancellation,
                  and any supporting documentation.
                </li>
                <li>
                  <strong>Acknowledgement:</strong> We will acknowledge receipt within 3 business days and may request additional information.
                </li>
                <li>
                  <strong>Assessment:</strong> Refund requests are reviewed and a decision is communicated within 7–14 business days of acknowledgement.
                </li>
                <li>
                  <strong>Refund processing:</strong> If approved, refunds are processed within 5–10 business days after approval; the actual
                  time to appear in your account depends on your bank or payment provider.
                </li>
              </ol>
            </section>

            <section id="nonrefundable" className="mt-8">
              <h2 className="text-lg font-semibold">5. Non-Refundable Items</h2>
              <p className="mt-2">
                The following are typically non-refundable:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Fees for completed work delivered as per agreement.</li>
                <li>Third-party marketplace or platform fees that have been paid and cannot be recovered.</li>
                <li>Digital products or deliverables where a license was granted and used.</li>
                <li>Costs for custom work started at the client's request.</li>
              </ul>
            </section>

            <section id="chargebacks" className="mt-8">
              <h2 className="text-lg font-semibold">6. Chargebacks</h2>
              <p className="mt-2">
                If you file a chargeback with your bank or card issuer, we will cooperate with the relevant financial institution to
                resolve the dispute. If a chargeback is reversed in our favor, you may be liable for the original amount and any
                associated fees.
              </p>
            </section>

            <section id="disputes" className="mt-8">
              <h2 className="text-lg font-semibold">7. Disputes &amp; Exceptions</h2>
              <p className="mt-2">
                Exceptions to this policy may be made in cases of demonstrable error, regulatory requirements, or where required by law.
                For disputes regarding service quality or delivery, please raise the issue with our support team so we can review and
                propose a resolution.
              </p>
            </section>

            <section id="contact" className="mt-8">
              <h2 className="text-lg font-semibold">8. Contact Us</h2>
              <p className="mt-2">To request cancellations or refunds, or if you have any questions:</p>
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
