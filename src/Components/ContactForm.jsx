// src/components/ContactFormEmailJS.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactFormEmailJS() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', msg: string }

  // load from env (CRA / Vite note below)
 const serviceId = "service_lwsxntn";
    const templateId = "template_bc019cd";
    const publicKey = "ScBLQFoxFYyNJqhba";


  function getCheckedDocuments() {
    const docs = [];
    const boxes = formRef.current?.querySelectorAll("input[name='documents']:checked");
    if (boxes) {
      boxes.forEach(b => docs.push(b.value));
    }
    return docs.join(', ');
  }

  const validate = (formData) => {
    // basic required checks (removed brand_name and seller_type)
    // if (!formData.get('user_name')?.trim()) return 'Please enter your name';
    if (!formData.get('user_phone')?.trim()) return 'Please enter your mobile number';
    if (!formData.get('user_email')?.trim()) return 'Please enter your email';
    if (!formData.get('company_name')?.trim()) return 'Please enter company name';
    if (!formData.get('products_category')?.trim()) return 'Please enter product categories';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', msg: 'Email service is not configured (check .env).' });
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);

    // honeypot: if filled, treat as spam
    if (formData.get('website')) {
      return; // silently ignore spam
    }

    // append documents selected into a variable used by template
    formData.set('documents', getCheckedDocuments());

    const validationMessage = validate(formData);
    if (validationMessage) {
      setStatus({ type: 'error', msg: validationMessage });
      return;
    }

    setLoading(true);
    try {
      // EmailJS sendForm uses the actual form element
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setStatus({ type: 'success', msg: 'Thank you! We received your request. We will contact you soon.' });
      form.reset();
    } catch (err) {
      console.error('EmailJS error', err);
      setStatus({ type: 'error', msg: 'Something went wrong while sending the message. Try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-violet-700 p-2 min-h-[520px]">
      <div className="max-w-7xl mx-auto w-full text-center p-2 md:p-6">
        {/* Title */}
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-1 leading-snug">
          Connect Now
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-white">
          Let's Contect with our Ecommerce Account Management Expert for your Valuable Solution.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Right column - documents checklist & note */}
          <div>
            <div className="rounded-xl border border-blue-200 bg-gradient-to-b from-white to-blue-50 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
               
                <h4 className="text-slate-800 font-semibold">Documents Needed for Registration:</h4>
              </div>

              <ul className="space-y-3 mt-2">
                {[
                  'GST Certificate',
                  'PAN Card of Proprietor',
                  'Latest 3 Months Bank Statement',
                  'Utility Bill (if address differs)',
                  'IEC and AD Code'
                ].map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <input name="documents" checked type="checkbox" value={doc} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600" />
                    <label className="text-slate-700">{doc}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-md border border-yellow-300 bg-yellow-50 p-4">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-yellow-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M9 2a7 7 0 100 14A7 7 0 009 2z" />
                  </svg>
                </div>
                <p className="text-sm text-yellow-800">Note: Please have these documents ready. We'll guide you through the submission process during your kick-off meeting.</p>
              </div>
            </div>
          </div>
          {/* Left column - inputs */}
          <div>
            <div className="space-y-4">
              {/* Row 1 → Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600">Email ID *</label>
                  <input
                    name="user_email"
                    type="email"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 placeholder-slate-400 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-600">Mobile No. *</label>
                  <input
                    name="user_phone"
                    type="tel"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 placeholder-slate-400 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
              </div>

              {/* Company (full width) */}
              <div>
                <label className="block text-sm text-slate-600">Company Name *</label>
                <input
                  name="company_name"
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 placeholder-slate-400 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Products Category (full width) */}
              <div>
                <label className="block text-sm text-slate-600">Products Category *</label>
                <input
                  name="products_category"
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 placeholder-slate-400 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-slate-600">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 placeholder-slate-400 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                type="submit"
                className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg shadow-md hover:shadow-lg disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Connect Now'}
              </button>
            </div>
          </div>

          

          {/* hidden inputs and honeypot */}
          <input type="hidden" name="documents" value="" />
          <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        </form>

        {/* status message (below the card) */}
        <div className="mt-6 text-center">
          {status && (
            <div className={`${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} inline-block px-4 py-2 rounded`}>
              {status.msg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
