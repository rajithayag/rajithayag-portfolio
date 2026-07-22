import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {

    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mt-25 md:mt-0 mb-2 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent leading-right">
                    Rajitha Gunasekara
                </h1>
                {/* <img className="w-50 h-auto block mx-auto relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://rajithayag.github.io/rajithayag-portfolio/images/rj.png" alt="Rajitha-Gunasekara" title="Rajitha Gunasekara"/> */}
                <h2 className="text-gray-300 text-lg font-bold mb-2">ICT Professional</h2>
                <h3 className="text-gray-300 text-md font-bold mb-6 max-w-lg mx-auto">Bridging technical teams and business stakeholders to deliver digital solutions  |  12+ years global IT experience</h3>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify"> 
                I specialise in Requirements Engineering and managing the full lifecycle of complex systems - from eliciting stakeholder needs to delivering working solutions. Combining a Master of Applied IT (Wintec, 2026) with 12+ years of global experience - including current local government and tertiary sector roles in New Zealand - I excel at translating complex operational problems into clear technical specifications. Core expertise in Requirements Engineering and managing the full lifecycle of complex systems, demonstrated through leading end-to-end delivery of a custom ERP system.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#nzexp" className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                       View NZ Experience</a>

                    <a href="#contact" className="border border-blue-500/50 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact Me</a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
    );
    
};