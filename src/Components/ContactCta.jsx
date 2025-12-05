// src/components/ContactCta.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactCta() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // { type: 'success'|'error', msg: string }
    const [errors, setErrors] = useState({});

    // read from environment (fallback to empty string so we can detect mis-config)
    const SERVICE_ID = "service_lwsxntn";
    const TEMPLATE_ID = "template_c85gcye";
    const PUBLIC_KEY = "ScBLQFoxFYyNJqhba";

    // Basic front-end validation using form entries
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
        // optional: require at least 6 digits if provided
        if (phone && phone.replace(/\D/g, "").length < 6) {
            errs.phone = "Please enter a valid phone number.";
        }



        return errs;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // detect missing configuration
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
                    "Email service not configured. Make sure REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID and REACT_APP_EMAILJS_PUBLIC_KEY are set in your environment.",
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
            // sendForm uses the form element; last arg is public key
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, PUBLIC_KEY);

            setStatus({ type: "success", msg: "Message sent — thank you! 🎉" });
            formEl.reset();
            setErrors({});
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus({
                type: "error",
                msg:
                    "Something went wrong sending the message. Try again later or contact us directly.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-transparent ">
            <h3 className="text-xl font-semibold mb-4 text-[#F4D525]">
                Ready to Elevate?
            </h3>
            <p className="text-white mb-6">
                Take the next step toward transforming your business with expert support
                tailored for real impact and growth.
            </p>


            <form
                className="space-y-3 mt-auto "
                ref={formRef}
                onSubmit={handleSubmit}
            // keep existing layout exactly the same
            >
                {/* Hidden subject for EmailJS templates (keeps your template happy) */}
                <input type="hidden" name="subject" value="Get Free Quote" />

                <div>
                    <input
                        name="user_name"
                        type="text"
                        placeholder="Name"
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 text-white focus:outline-none"
                        aria-invalid={errors.user_name ? "true" : "false"}
                    />
                    {errors.user_name && (
                        <p className="text-xs text-red-300 mt-1">{errors.user_name}</p>
                    )}
                </div>

                <div>
                    <input
                        name="user_email"
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 text-white focus:outline-none"
                        aria-invalid={errors.user_email ? "true" : "false"}
                    />
                    {errors.user_email && (
                        <p className="text-xs text-red-300 mt-1">{errors.user_email}</p>
                    )}
                </div>

                <div>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Enter Your Number"
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2  focus:outline-none text-white"
                        aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && (
                        <p className="text-xs text-red-300 mt-1">{errors.phone}</p>
                    )}
                </div>

                {status && (
                    <div
                        className={`mb-4 p-3 rounded ${status.type === "success"
                            ? "bg-white text-black"
                            : "bg-red-900/60 text-red-200"
                            }`}
                    >
                        {status.msg}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-1/2 py-3 bg-transparent text-white font-medium  border transition"
                >
                    {loading ? "Sending..." : "Get Free Quote"}
                </button>


            </form>
        </div>
    );
}
