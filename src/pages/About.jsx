import { RevealOnScroll } from "../components/RevealOnScroll";

export const About = () => {

    const workExperience = [
        {
            role: "IT Project Manager",
            org: "Mai Globe Travels (Pvt) Ltd. — Colombo, Sri Lanka",
            date: "Mar 2015 – Jan 2025",
            achievements: [
                "Successfully led multiple web and software development projects, balancing dual responsibilities as both Project Manager and Technical Lead due to a strong background in full-stack development",
                "Facilitated Agile project delivery by organizing and leading daily stand-ups, sprint planning, retrospectives, and other Scrum ceremonies while proactively identifying and resolving project impediments to ensure team productivity",
                "Collaborated closely with development teams to establish realistic project timelines, leveraging technical expertise to assess task complexity, mitigate risks, and troubleshoot development challenges",
                "Actively contributed to development tasks during high-pressure periods to support timely project delivery and ensure alignment with project goals and client expectations",
                "Conducted business analysis, market and competitor research reporting",
                "Conducted staff training on the ERP system",
                "Tracked customer inquiries & feedback using HubSpot CRM",
            ],
            keyProjects: [
                { name: "MGT Corporate Website (Custom Built)", desc: "Oversaw the end-to-end development and management of Mai Globe Travels' multilingual corporate website (English, French, German), hosted across three domains. Customized the Laravel-based CMS to support localized content and enhanced user engagement across regions" },
                { name: "Baleen ERP System (Custom Built)", desc: "Led the development and implementation of an in-house ERP system tailored to the company's operations, significantly improving internal workflow efficiency and response time to customer inquiries" },
                { name: "WordPress Web Projects (Templates + Custom CSS)", desc: "Managed and developed multiple WordPress-based websites, including Sayura House (boutique hotel), Poke 65, Latrattoria 65 (restaurants), and Authentic Lanka website, using advanced customization through plugins and custom CSS to meet branding and user experience requirements" },
                { name: "MGT Internet Payment Gateway (Custom Built)", desc: "Managed the enhancement and ongoing maintenance of the company's internet payment gateway, ensuring secure and seamless online transactions through system-generated payment links" },
            ],
        },
        {
            role: "eMarketing Executive",
            org: "Mai Globe Travels (Pvt) Ltd. — Colombo, Sri Lanka",
            date: "Mar 2013 – Feb 2015",
            achievements: [
                "Developed and maintained the corporate website and blog of Mai Globe Travels",
                "Developed communication supports such as blog posts, social media posts, corporate website content, newsletters, articles, and press releases",
                "Conducted market research and data analysis reports",
                "Creative content writing",
            ],
        },
    ];

    const education = [
        {
            role: "Master of Applied Information Technology",
            org: "Waikato Institute of Technology, Hamilton, New Zealand",
            date: "June 2026",
            coursework: "Project Management for IT, Business Intelligence, Management of Information Systems, Networks & Infrastructure, Security and Forensics, IT Industry Placements, Internships and Projects, Research Project",
        },
        {
            role: "Master of Business Administration",
            org: "Asia e University, Kuala Lumpur, Malaysia",
            date: "Graduated 2024",
            coursework: "Entrepreneurship and Innovation, Managerial Economics, International Business, Strategic Management, Accounting and Finance for Managers, Marketing Management, Managing People in Organisations, International Marketing, Enterprise Risk Management, Supply Chain Management, Quality and Change Management",
        },
        {
            role: "Comprehensive Master Java Developer",
            org: "The Institute of Software Engineering, Colombo, Sri Lanka",
            date: "Graduated 2017",
            coursework: "Programming Fundamentals & Designs, Object Oriented Programming (OOP), Exception & Error Handling, Collections and Framework, Multi-Threaded Programming, MySQL, UI Design & UX, Database Programming, Software Development, Data Analysing and Reporting, Network Programming, Java Design Patterns, Layered Architecture, Client-Server Application Development, Software Development Principles",
        },
    ];

    const skillCategories = [
        {
            title: "Project Management",
            icon: "👨‍💼",
            skills: [
                "Project Management (Agile, Waterfall, and Hybrid)",
                "Requirement Gathering & Prioritization",
                "Market & Competitor Research",
                "High analytical and problem solving skills",
                "Data-Driven Decision-Making",
                "Experience managing and implementing an ERP system",
                "Strategic Project Planning, Execution and Value delivery",
                "Risk Management and Mitigation",
                "Resource Allocation and Budgeting",
                "Business & Systems Analysis",
                "Project Lifecycle Management",
                "Stakeholder Management",
                "Meeting facilitiation (Scrum ceremonies)",
                "Team Leadership & Mentoring",
                "Process Optimization",
                "Conflict Resolution",
            ],
        },
        {
            title: "Business Analyst",
            icon: "📈",
            skills: [
                "Requirements Engineering",
                "Requirements elicitation",
                "User stories",
                "Gap analysis",
                "Process mapping",
                "Stakeholder management",
                "Business case writing",
                "As-is / To-be analysis",
                "Data validation",
                "Agile / Scrum",
            ],
        },
        {
            title: "Service Desk Analyst",
            icon: "🎧",
            skills: [
                "Incident management",
                "ITSM / ITIL",
                "Technical troubleshooting",
                "Knowledge base management",
                "Service request analysis",
                "Desktop · Intune · macOS & Network support",
                "User experience focus",
            ],
        },
        {
            title: "Web Development",
            icon: "🌐",
            skills: [
                "Software and Web Technologies",
                "Programming Knowledge",
                "Knowledge in Software Development Lifecycle",
                "Knowledge with version control tools",
                "UI / UX / Responsive Design",
                "Web hosting and technologies",
                "Database Systems",
            ],
        },
        {
            title: "Frontend Technologies",
            skills: ["React", "TypeScript", "JavaScript", "TailwindCSS", "Bootstrap", "HTML5", "CSS"],
        },
        {
            title: "Backend Technologies",
            skills: ["PHP", "C#", "Java", "SQL", "React", "Laravel", "WordPress"],
        },
        {
            title: "Data & Reporting",
            skills: ["Python (Pandas)", "SQL", "Power BI", "Excel", "Data validation", "Data profiling", "Dashboard design"],
        },
        {
            title: "Platforms & Tools",
            skills: ["SharePoint", "Jira", "Confluence", "Trello", "HubSpot CRM", "Koha", "Asana", "Arion"],
        },
        {
            title: "Development",
            skills: ["Python", "C#", "PHP / Laravel", "JavaScript", "React", "SQL", "HTML / CSS", "WordPress"],
        },
        {
            title: "Delivery Methods",
            skills: ["Agile / Scrum", "Sprint planning", "Retrospectives", "Stakeholder reporting", "Change management", "ERP implementation"],
        },
        {
            title: "Platforms & Softwares",
            skills: [
                "Azure Cloud", "SharePoint", "BrightPattern", "FreshService", "Koha", "Python", "SQL",
                "Power BI", "Jira", "Confluence", "Trello", "Asana", "Slack", "Microsoft Office",
                "Figma", "HubSpot CRM", "PhpStorm", "VS Code", "Cloudflare", "FileZilla", "Git and GitHub",
            ],
        },
    ];

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-accent text-center">
                International Experience & Qualifications</h2>

            <p className="text-drk-muted text-lg mb-16 pl-4 pr-4 md:pl-20 md:pr-20 mx-auto text-justify">
            I'm the person who sits between "the business needs this" and "here's how the tech makes it happen." Twelve-plus years connecting non-technical people with technical teams, making sure new systems feel like progress, not a headache. Below: my international work experience, education, and the skills I bring to make that happen.
            </p>

            {/* Work Experience Timeline */}
            <h3 className="text-2xl font-bold mb-8 text-primary">👨‍💻 Work Experience</h3>
            <div className="space-y-12 mb-16">
                {workExperience.map((job, idx) => (
                    <div key={idx} className="border-l-2 border-accent pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow"></span>

                        <p className="text-sm font-bold text-muted mb-1">{job.date}</p>
                        <h4 className="text-xl font-bold text-primary">{job.role}</h4>
                        <h5 className="text-md text-drk-muted mb-4">{job.org}</h5>

                        <ul className="list-disc list-inside text-drk-muted space-y-2 mb-4 text-justify">
                            {job.achievements.map((a, i) => (
                                <li key={i}>{a}</li>
                            ))}
                        </ul>

                        {job.keyProjects && (
                            <>
                                <p className="text-sm font-semibold text-primary mb-2">Key Projects & Achievements</p>
                                <ul className="list-disc list-inside text-drk-muted space-y-2 text-justify">
                                    {job.keyProjects.map((p, i) => (
                                        <li key={i}><strong>{p.name}:</strong> {p.desc}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Education Timeline */}
            <h3 className="text-2xl font-bold mb-8 text-primary">🎓 Education</h3>
            <div className="space-y-12 mb-16">
                {education.map((ed, idx) => (
                    <div key={idx} className="border-l-2 border-accent pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow"></span>

                        <p className="text-sm font-bold text-muted mb-1">{ed.date}</p>
                        <h4 className="text-xl font-bold text-primary">{ed.role}</h4>
                        <h5 className="text-md text-drk-muted mb-2">{ed.org}</h5>
                        <p className="text-sm italic text-drk-muted text-justify">
                            <strong>Coursework:</strong> {ed.coursework}
                        </p>
                    </div>
                ))}
            </div>

            {/* Skills & Tools */}
            <h2 className="text-3xl font-bold text-primary text-center mb-10">Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {skillCategories.map((cat, idx) => (
                    <div key={idx}>
                        <h3 className="text-lg font-bold mb-3 text-primary">
                            {cat.icon ? `${cat.icon} ` : ""}{cat.title}
                        </h3>
                        <ul className="list-disc list-inside text-drk-muted space-y-1">
                            {cat.skills.map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        </RevealOnScroll>
    </section>);
};