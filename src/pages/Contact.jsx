import { useState, useRef } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please complete the reCAPTCHA before sending.");
            return;
        }

        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(() => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: "" });
            recaptchaRef.current.reset();
            setCaptchaToken(null);
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."))
        .finally(() => setIsSending(false));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
            <RevealOnScroll>
                <div className="max-w-2xl w-full mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-accent text-center">
                        Get In Touch
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="Name"
                                className="w-full bg-white border border-muted/40 rounded px-5 py-4 text-lg text-gray-900 transition focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                placeholder="Email"
                                className="w-full bg-white border border-muted/40 rounded px-5 py-4 text-lg text-gray-900 transition focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={7}
                                placeholder="Your Message"
                                className="w-full bg-white border border-muted/40 rounded px-5 py-4 text-lg text-gray-900 transition focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <div className="flex justify-center">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                onChange={(token) => setCaptchaToken(token)}
                                onExpired={() => setCaptchaToken(null)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full bg-primary text-white py-4 px-6 rounded font-medium text-lg transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(60,103,158,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSending ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>

            </RevealOnScroll>
        </section>
    );
};