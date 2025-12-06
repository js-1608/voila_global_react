// src/Components/ContactCta.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', msg: string }
  const [errors, setErrors] = useState({});

  // Your EmailJS config (as provided). You can swap these constants to use process.env.* if you prefer.
  const SERVICE_ID = "service_lwsxntn";
  const TEMPLATE_ID = "template_c85gcye";
  const PUBLIC_KEY = "ScBLQFoxFYyNJqhba";

  function validate(formData) {
    const errs = {};
    const name = formData.get("user_name") || "";
    if (!name.trim() || name.trim().length < 2) {
      errs.user_name = "Please enter your name (min 2 characters).";
    }

    const email = formData.get("user_email") || "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errs.user_email = "Please enter a valid email address.";
    }

    const phone = formData.get("phone") || "";
    if (phone && phone.replace(/\D/g, "").length < 6) {
      errs.phone = "Please enter a valid phone number.";
    }

    const message = formData.get("message") || "";
    if (!message.trim() || message.trim().length < 5) {
      errs.message = "Please enter a message (min 5 characters).";
    }

    return errs;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check keys (simple safety check)
    if (
      !SERVICE_ID ||
      SERVICE_ID === "REACT_APP_EMAILJS_SERVICE_ID" ||
      !TEMPLATE_ID ||
      TEMPLATE_ID === "REACT_APP_EMAILJS_TEMPLATE_ID" ||
      !PUBLIC_KEY ||
      PUBLIC_KEY === "REACT_APP_EMAILJS_PUBLIC_KEY"
    ) {
      setStatus({
        type: "error",
        msg:
          "Email service not configured. Make sure service/template/public key are set correctly.",
      });
      return;
    }

    const formEl = formRef.current;
    const formData = new FormData(formEl);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    setLoading(true);
    setStatus(null);

    try {
      // sendForm will collect fields by name and send them to your template
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, PUBLIC_KEY);
      setStatus({ type: "success", msg: "Message sent — thank you! 🎉" });
      formEl.reset();
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        msg: "Something went wrong sending the message. Try again later or contact us directly at info@voilabiz.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            name="user_name"
            aria-label="Full name"
            placeholder="Full name"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.user_name && <p className="text-xs text-red-600 mt-1">{errors.user_name}</p>}
        </div>

        <div>
          <input
            name="user_email"
            aria-label="Email"
            placeholder="Email address"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.user_email && <p className="text-xs text-red-600 mt-1">{errors.user_email}</p>}
        </div>

        <div>
          <input
            name="phone"
            aria-label="Phone Number"
            placeholder="Phone Number (optional)"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <textarea
            name="message"
            aria-label="Message"
            placeholder="Leave us message"
            rows={5}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>

        {/* <div className="flex items-center gap-3">
          <input
            id="agree"
            name="consent"
            type="checkbox"
            value="yes"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="text-sm text-gray-600">
            I agree to our friendly <a href="#" className="underline">privacy policy</a>
          </label>
        </div> */}

        {status && (
          <div className={`rounded-md px-4 py-2 text-sm ${status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            {status.msg}
          </div>
        )}

        <div>
          <button
            disabled={loading}
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* <p className="mt-3 text-xs text-gray-400">
         if delivery fails, contact us at <strong>info@voilabiz.com</strong> or call <strong>9810554548 / 9821654548</strong>.
        </p> */}
      </form>
    </div>
  );
}
