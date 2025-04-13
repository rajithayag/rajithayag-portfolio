import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent text-center">
                    Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2"> Baleen Cloud ERP </h3>
                            <p className="text-gray-400 mb-4 text-justify">Baleen is a custom-built web platform designed to enhance the travel booking experience for Mai Globe Travels. Engineered with scalability, performance, and user experience in mind, the platform integrates modern web technologies to streamline tour management, customer interactions, and operational efficiency.</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["Laravel Framework", "PHP", "HTML", "JavaScript", "CSS", "Bootstrap", "OVH"].map((tech,key) => (
                                    <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href="https://baleen.maiglobetravels.com/" target="_blank" rel="nofollow" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2"> Mai Globe Travels </h3>
                            <p className="text-gray-400 mb-4 text-justify">The Mai Globe Travels website is a dynamic, user-friendly travel booking platform designed to facilitate seamless trip planning and enable inquiries for tailor-made tour proposals. Built with modern web technologies, the website ensures a fast, responsive, and secure browsing experience across all devices.</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["Laravel Framework", "PHP", "HTML", "JavaScript", "CSS", "Bootstrap", "OVH"].map((tech,key) => (
                                    <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href="https://www.maiglobetravels.com/" target="_blank" rel="nofollow" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2"> Sayoura House </h3>
                            <p className="text-gray-400 mb-4 text-justify">The Sayura House website is a modern, user-friendly hospitality platform designed to offer a seamless booking experience and comprehensive insights into the property's offerings. Built on WordPress and integrated with the Little Hotelier API, the site ensures high performance, security, and responsiveness across all devices.</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["WordPress", "HTML", "JavaScript", "CSS", "OVH", "Little Hotelier"].map((tech,key) => (
                                    <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href="https://www.sayurahouse.com/" target="_blank" rel="nofollow" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2"> Poke 65 </h3>
                            <p className="text-gray-400 mb-4 text-justify">Poke65.com is a modern, high-performance food ordering platform designed to deliver a seamless user experience for browsing menus and placing orders. Built on WordPress, the website ensures optimal speed, security, and responsiveness across all devices.</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["WordPress", "HTML", "JavaScript", "CSS", "OVH", "PayPal"].map((tech,key) => (
                                    <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href="https://www.poke65.com/" target="_blank" rel="nofollow" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2"> Latrattoria 65 </h3>
                            <p className="text-gray-400 mb-4 text-justify">Latrattoria65.com is a modern, user-friendly restaurant platform designed to provide a seamless experience for browsing menus and placing online orders. Built on WordPress, the website ensures an engaging and efficient experience across all devices.</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["WordPress", "HTML", "JavaScript", "CSS", "OVH", "PayPal"].map((tech,key) => (
                                    <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href="https://www.latrattoria65.com/" target="_blank" rel="nofollow" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2"> Authentic Lanka </h3>
                            <p className="text-gray-400 mb-4 text-justify">Authenticlanka.com is a modern, user-centric platform designed to showcase and promote authentic Sri Lankan spices and products. The website offers an intuitive browsing experience for discovering products and making secure online purchases. Built on WordPress, the site ensures optimal performance, security, and responsiveness across all devices.</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["WordPress", "HTML", "JavaScript", "CSS", "OVH", "PayPal"].map((tech,key) => (
                                    <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href="https://www.authenticlanka.com/" target="_blank" rel="nofollow" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>


                    </div>

                </div>
            
        </section>

    );
};