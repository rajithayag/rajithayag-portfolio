import { Link } from "react-router-dom";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-white">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-accent text-center">
                    Projects & case studies</h2>
                    <p className="text-drk-muted mb-4 text-center">Real work, real outcomes — from NZ government data projects to decade-long systems delivery.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl bg-bg-alt border border-muted/30 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_2px_8px_rgba(60,103,158,0.2)] transition overflow-hidden flex flex-col">
                            <img
                                src={`${import.meta.env.BASE_URL}/images/baleen.png`}
                                alt="Baleen ERP system interface"
                                className="w-full h-74 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">Custom ERP System — Full BA & PM Lifecycle</h3>
                                <h4 className="text-md mb-2 text-drk-muted">Requirements Engineering · End-to-End BA Delivery</h4>
                                <p className="text-drk-muted mb-4 text-justify">Led the complete BA and PM lifecycle for a custom in-house ERP system — from requirements elicitation and stakeholder workshops through Agile delivery, system design, and staff training. The strongest demonstration of Requirements Engineering at scale, significantly improving internal workflow efficiency and customer response times.</p>
                                <div className="flex flex-wrap gap-2 mb-4"> 
                                    {["Requirements Engineering", "Agile/Scrum", "Jira", "Confluence", "HubSpot CRM"].map((tech,key) => (
                                        <span key={key} className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_2px_8px_rgba(60,103,158,0.15)] transition-all">
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-bg-alt border border-muted/30 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_2px_8px_rgba(60,103,158,0.2)] transition overflow-hidden flex flex-col">
                            <a href={`${import.meta.env.BASE_URL}/images/hcc-poster-full.jpg`} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`${import.meta.env.BASE_URL}/images/Poster for Networking Event.png`}
                                    alt="Protected Records Review poster — Hamilton City Council internship"
                                    className="w-full h-74 object-cover object-top hover:opacity-90 transition"
                                />
                            </a>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">HCC Digital Records Data Quality Project</h3>
                                <h4 className="text-md mb-2 text-drk-muted">Business Analysis · NZ Local Government</h4>
                                <p className="text-drk-muted mb-4 text-justify">Core BA engagement at Hamilton City Council. Elicited data quality requirements from compliance stakeholders, translated obligations into testable specifications, built Python/C# validation scripts, identified 800+ data issues across 3,500+ records, and presented process improvement recommendations to Digital Services leadership.</p>
                                <div className="flex flex-wrap gap-2 mb-4"> 
                                    {["SharePoint", "Confluence", "Power BI", "Python (Pandas)", "C#"].map((tech,key) => (
                                        <span key={key} className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_2px_8px_rgba(60,103,158,0.15)] transition-all">
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-bg-alt border border-muted/30 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_2px_8px_rgba(60,103,158,0.2)] transition overflow-hidden flex flex-col">
                            <img
                                src={`${import.meta.env.BASE_URL}/images/cert-mgt-website.jpg`}
                                alt="Certificate of Appreciation — Mai Globe Travels website development"
                                className="w-full h-74 object-cover"
                            />
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 text-primary">Mai Globe Travels Website</h3>
                                <h4 className="text-md mb-2 text-drk-muted">Business Analyst & Tech Lead · Corporate Travel Website</h4>
                                <p className="text-drk-muted mb-4 text-justify">Contributed as both Business Analyst and Tech Lead on the Mai Globe Travels corporate website — a multilingual travel booking platform supporting trip planning and tailor-made tour inquiries. Gathered requirements, helped shape the site to serve customer and business needs across regions, and tracked delivery using Jira.</p>
                                <div className="flex flex-wrap gap-2 mb-4"> 
                                    {["Laravel Framework", "PHP", "HTML", "JavaScript", "CSS", "Bootstrap", "OVH", "Jira"].map((tech,key) => (
                                        <span key={key} className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_2px_8px_rgba(60,103,158,0.15)] transition-all">
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-bg-alt border border-muted/30 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_2px_8px_rgba(60,103,158,0.2)] transition overflow-hidden flex flex-col">
                            <img
                                src={`${import.meta.env.BASE_URL}/images/cert-travablue.jpg`}
                                alt="Certificate of Appreciation — Travablue project"
                                className="w-full h-74 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">Travablue</h3>
                                <h4 className="text-md mb-2 text-drk-muted">Web Development · Travel Booking Platform</h4>
                                <p className="text-drk-muted mb-4 text-justify">Early in my career at Mai Globe Travels, I worked on the development of Travablue, a travel booking platform built on CodeIgniter — including Google Maps API integration for location-based features and payment gateway integration for online bookings. Recognised in 2014 for dedication and hard work on the project.</p>
                                <div className="flex flex-wrap gap-2 mb-4"> 
                                    {["CodeIgniter", "PHP", "HTML", "CSS", "Google Maps API", "Payment Gateway"].map((tech,key) => (
                                        <span key={key} className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_2px_8px_rgba(60,103,158,0.15)] transition-all">
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* <div className="p-6 rounded-xl bg-bg-alt border border-muted/30 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_2px_8px_rgba(60,103,158,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 text-primary">ITSM Service Improvement — Wintec Digital Services</h3>
                            <h4 className="text-md mb-2 text-gray-700">Service Desk · Wintec Digital Services</h4>
                            <p className="text-gray-700 mb-4 text-justify">Front-line ITSM across a 10,000+ user multi-campus environment. Logging and analysing incident patterns, maintaining knowledge base documentation, and collaborating with engineering teams to resolve recurring system issues — with a focus on data-driven service improvement aligned with ITIL principles.</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {["ITSM", "Azure", "Arion", "BrightPattern", "Freshservice", "Koha", "Intune", "EntraID"].map((tech,key) => (
                                    <span key={key} className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_2px_8px_rgba(60,103,158,0.15)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div> */}

                        {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
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
                            <h3 className="text-xl font-bold mb-2"> Sayura House </h3>
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
                        </div> */}


                    </div>

                </div>
            </RevealOnScroll>
        </section>

    );
};