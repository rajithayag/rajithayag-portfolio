import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm (
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(() => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: "" })
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-115">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent text-center">
                    Get In Touch</h2>

                    {/* Contact form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required value={formData.name} placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" required value={formData.email} placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" required value={formData.message} rows={5} placeholder="Your Message" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5" onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">Send</button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 mt-20">
                <a href="https://www.linkedin.com/in/rajithayag/" target="_blank" rel="nofollow">
                    <img className="w-15 h-auto block mx-auto relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://rajithayag.github.io/rajithayag-portfolio/images/linkdin.png" alt="LinkedIn-Profile" title="LinkedIn - Rajitha Gunasekara" />
                    </a>
                </div>

            </RevealOnScroll>
        </section>
    );
};