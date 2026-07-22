export const NZExp = () => {

    return (
    <section id="nzexp" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent text-center">
                New Zealand experience that matters</h2>

            {/* NZ Work Experience column */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-gray-400 mb-4">Current, verifiable NZ experience across local government and tertiary sectors - not just international background.</h3>
                
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2 text-center"> Waikato Institute of Technology </h3>
                            <h4 className="text-gray-300 mb-2">Service Desk Agent — ITS</h4>
                            <h4 className="text-sm text-gray-400 mb-2">Jan 2026 – Present · Hamilton</h4>
                            <ul className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)] list-disc list-inside text-sm text-gray-300 space-y-2 text-justify">
                                <li>Front-line ITSM support for 10,000+ users across desktop, network, and digital systems</li>
                                <li>Log, categorise, and analyse service requests in BrightPattern/Jira; surface incident trends to drive data-driven service improvements aligned with ITIL</li>
                                <li>Monitor incident queues, triage and escalate complex issues to maintain SLA compliance</li>
                                <li>Author and maintain IT knowledge base to reduce repeat ticket volumes and enable self-service resolution</li>
                                <li>Collaborate with infrastructure and network engineering teams to resolve recurring system issues</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-2"> 
                                {["ITSM", "Arion", "BrightPattern", "Freshservice", "Koha", "Intune", "EntraID", "Current NZ role"].map((tech,key) => (
                                    <span key={key} className="text-sm bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2 text-center"> Hamilton City Council </h3>
                            <h4 className="text-gray-300 mb-2">Business Analyst Intern — Information Management & Compliance</h4>
                            <h4 className="text-sm text-gray-400 mb-2">Aug 2025 – Nov 2025 · Hamilton</h4>
                            <ul className="text-sm bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)] list-disc list-inside text-gray-300 space-y-2 text-justify">
                                <li>Delivered core BA work in NZ local government: elicited requirements from Digital Services stakeholders and translated compliance needs into testable data quality specifications</li>
                                <li>Analysed 3,500+ digital records across SharePoint, file systems, and web platforms</li>
                                <li>Developed Python (Pandas) and C# data validation scripts; identified 800+ data quality issues</li>
                                <li>Produced structured gap analysis reports and presented process improvement findings to Digital Services leadership</li>
                                <li>Documented data governance processes and produced a handover pack for the permanent team</li>
                            </ul>
                            <div className="flex flex-wrap gap-2  mt-2"> 
                                {["Sharepoint", "Power BI", "Confluence", "Python (Pandas)", "C#", "NZ Local Govt"].map((tech,key) => (
                                    <span key={key} className="text-sm bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">
                            <h3 className="text-xl font-bold mb-2 text-center"> Waikato Institute of Technology </h3>
                            <h4 className="text-gray-300 mb-2">Master of Applied Information Technology</h4>
                            <h4 className="text-sm text-gray-400 mb-2">Feb 2025 – Jun 2026 · Hamilton</h4>
                            <ul className="text-sm bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)] list-disc list-inside text-gray-300 space-y-2 text-justify">
                                <li>Advanced study in IT systems, data analysis, and digital transformation</li>
                                <li>Applied coursework directly to real projects at HCC internship and Wintec ITS role</li>
                                <li>Strong academic performance alongside professional work</li>
                                <li>NZ qualification at NZQF Level 9</li>
                            </ul>
                            <div className="flex flex-wrap gap-2  mt-2"> 
                                {["NZQF Level 9", "Graduating Jun 2026", "NZ qualification"].map((tech,key) => (
                                    <span key={key} className="text-sm bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="flex justify-center space-x-4 m-4">
                    <a href="#about" className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        International Experience & Qualification</a>
                </div>
            </div>
        </div>
    </section>);
};