import { Link } from "react-router-dom";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const NZExp = () => {

    const experience = [
        {
            org: "Waikato Institute of Technology",
            role: "Service Desk Analyst — ITS",
            date: "Jan 2026 – Present · Hamilton",
            achievements: [
                "Front-line ITSM support for 10,000+ users across desktop, network, and digital systems",
                "Log, categorise, and analyse service requests in BrightPattern/Jira; surface incident trends to drive data-driven service improvements aligned with ITIL",
                "Monitor incident queues, triage and escalate complex issues to maintain SLA compliance",
                "Author and maintain IT knowledge base to reduce repeat ticket volumes and enable self-service resolution",
                "Collaborate with infrastructure and network engineering teams to resolve recurring system issues",
            ],
            tools: ["ITSM", "Arion", "BrightPattern", "Freshservice", "Koha", "Intune", "EntraID"],
        },
        {
            org: "Hamilton City Council",
            role: "Business Analyst Intern — Information Management & Compliance",
            date: "Aug 2025 – Nov 2025 · Hamilton",
            achievements: [
                "Delivered core BA work in NZ local government: elicited requirements from Digital Services stakeholders and translated compliance needs into testable data quality specifications",
                "Analysed 3,500+ digital records across SharePoint, file systems, and web platforms",
                "Developed Python (Pandas) and C# data validation scripts; identified 800+ data quality issues",
                "Produced structured gap analysis reports and presented process improvement findings to Digital Services leadership",
                "Documented data governance processes and produced a handover pack for the permanent team",
            ],
            tools: ["SharePoint", "Power BI", "Confluence", "Python (Pandas)", "C#"],
        },
        {
            org: "Waikato Institute of Technology",
            role: "Master of Applied Information Technology",
            date: "Feb 2025 – Jun 2026 · Hamilton",
            achievements: [
                "Advanced study in IT systems, data analysis, and digital transformation",
                "Applied coursework directly to real projects at HCC internship and Wintec ITS role",
                "Strong academic performance alongside professional work",
                "NZ qualification at NZQF Level 9",
            ],
            tools: ["NZQF Level 9", "Graduating Jun 2026"],
        },
    ];

    return (
    <section id="nzexp" className="min-h-screen flex items-center justify-center py-20 bg-white">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-accent text-center">
                New Zealand experience that matters</h2>

            <p className="text-drk-muted mb-12 text-center max-w-xl mx-auto">
                Current, verifiable NZ experience across local government and tertiary sectors — not just international background.
            </p>

            {/* Timeline */}
            <div className="space-y-12">
                {experience.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-accent pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow"></span>

                        <p className="text-sm font-bold text-muted mb-1">{item.date}</p>
                        <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                        <h4 className="text-md text-drk-muted mb-4">{item.org}</h4>

                        <ul className="list-disc list-inside text-drk-muted space-y-2 mb-4 text-justify">
                            {item.achievements.map((a, i) => (
                                <li key={i}>{a}</li>
                            ))}
                        </ul>

                        <p className="text-sm font-semibold text-primary mb-1">Tools & Technologies</p>
                        <ul className="list-disc list-inside text-sm text-drk-muted space-y-1">
                            {item.tools.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link to="/about" className="bg-primary text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(60,103,158,0.4)]">
                    International Experience & Qualification</Link>
            </div>
        </div>
        </RevealOnScroll>
    </section>);
};