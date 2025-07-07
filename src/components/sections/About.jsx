
export const About = () => {

    const frontendSkills = [
        "React",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "Bootstrap",
        "HTML5",
        "CSS",
    ];

    const backendSkills = [
        "PHP",
        "Java",
        "MySQL",
        "Laravel",
        "WordPress",
    ];

    const softwareTools = [
        "PhpStorm",
        "VS Code",
        "Cloudflare",
        "FileZilla",
        "Git and GitHub",
    ];

    const skills = [
        "Software and Web Technologies",
        "Programming Knowledge",
        "Knowledge in Software Development Lifecycle",
        "Knowledge with version control tools",
        "UI / UX / Responsive Design",
        "Web hosting and technologies",
        "Database Systems",
    ];

    const projectManagementSkills = [
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
    ];

    const projectManagementSoftwares = [
        "Jira",
        "Trello",
        "Asana",
        "Slack",
        "Microsoft Teams",
        "Confluence",
        "Figma",
        "Power BI",
        "HubSpot CRM",
    ];

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-600 bg-clip-text text-transparent text-center">
                About Me</h2>
        
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img className="w-80 h-auto block mx-auto relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://rajithayag.github.io/rajithayag-portfolio/images/rj.png" alt="Rajitha-Gunasekara" title="Rajitha Gunasekara"/>
                    
                    <p className="text-gray-300 mt-2 mb-2 text-justify">
                        Adaptable and detail-oriented professional with a proactive, solutions-driven mindset. 10+ years of experience in web and software development environment with proven ability to manage end-to-end website projects and lead in-house ERP system development while handling responsibilities independently and collaboratively. 
                        A collaborative team player with strong leadership and managerial skills. An excellent communicator with strong analytical and multitasking abilities.
                    </p>
                    
                </div>

            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                {/* Project Management column */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-2">&#128104;&#127997;&#8205;&#128188; Project Management</h3>
                    {/* PM Skills */}
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {projectManagementSkills.map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* PM Software */}
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Softwares</h3>
                        <div className="flex flex-wrap gap-2">
                            {projectManagementSoftwares.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            
                {/* Web Development column */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-2">&#127760; Web Development</h3>

                   {/* Skills */}
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Software */}
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Softwares</h3>
                        <div className="flex flex-wrap gap-2">
                            {softwareTools.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key) => (
                                <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Education column */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">&#127891; Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                        <li className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <strong> Master of Applied Information Technology </strong> - Waikato Institute of Technology, Hamilton, New Zealand (Reading)
                            <p className="text-sm italic text-cyan-400"><strong>Coursework:</strong> Project Management, Business Intelligence, Network & Infrastructure, Research in Information Technology</p>
                        </li>
                        <li className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <strong> Master of Business Administration </strong> - Asia e University, Kuala Lumpur, Malaysia (Graduated 2024)
                            <p className="text-sm italic text-cyan-400"><strong>Coursework:</strong> Entrepreneurship and Innovation, Managerial Economics, International Business, Strategic Management, Accounting and Finance for Managers, Marketing Management, Managing People in Organisations, International Marketing, Enterprise Risk Management, Supply Chain Management, Quality and Change Management</p>
                        </li>
                        <li className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <strong> Postgraduate Diploma in Professional Marketing </strong> - The Chartered Institute of Marketing, Berkshire, England (Graduated 2021)
                            <p className="text-sm italic text-cyan-400"><strong>Coursework:</strong> Analysis & Evaluation, Strategic Marketing Decisions, Corporate Digital Communications, Global Marketing Decisions, Creating Entrepreneurial Change</p>
                        </li>
                        <li className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <strong> Comprehensive Master Java Developer </strong> - The Institute of Software Engineering, Colombo, Sri Lanka (Graduated 2017)
                            <p className="text-sm italic text-cyan-400"><strong>Coursework:</strong> Programming Fundamentals & Designs, Object Oriented Programming (OOP), Exception & Error Handling, Collections and Framework, Multi-Threaded Programming, MySQL, UI Design & UX, Database Programming, Software Development, Data Analysing and Reporting, Network Programming, Java Design Patterns, Layered Architecture, Client-Server Application Development, Software Development Principles</p>
                        </li>
                        <li className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <strong> Executive Diploma in Accounting and Finance </strong> - The Institute of Chartered Accountants, Colombo, Sri Lanka (Graduated 2011)
                            <p className="text-sm italic text-cyan-400"><strong>Coursework:</strong> Financial Reporting, Quantitative Methods, Information Technology and Management Information Systems, Management Principles, Human Resources Management, Financial Analysis and Planing, Marketing Management, Company Law and Taxation</p>
                        </li>
                    </ul>
                </div>

                {/* Work Experience column */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">&#128104;&#8205;&#128187; Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <h4 className="font-semibold text-justify">IT Project Manager at Mai Globe Travels (Pvt) Ltd. - Colombo, Sri Lanka  (Mar 2015 - Jan 2025)</h4>
                            <ul className="text-sm italic list-disc list-inside text-cyan-400 space-y-2 text-justify">
                                <li>Successfully led multiple web and software development projects, balancing dual responsibilities as both Project Manager and Technical Lead due to a strong background in full-stack development</li>
                                <li>Facilitated Agile project delivery by organizing and leading daily stand-ups, sprint planning, retrospectives, and other Scrum ceremonies while proactively identifying and resolving project impediments to ensure team productivity</li>
                                <li>Collaborated closely with development teams to establish realistic project timelines, leveraging technical expertise to assess task complexity, mitigate risks, and troubleshoot development challenges</li>
                                <li>Actively contributed to development tasks during high-pressure periods to support timely project delivery and ensure alignment with project goals and client expectations</li>
                                <li>Conducted business analysis, market and competitor research reporting</li>
                                <li>Conducted staff training on the ERP system</li>
                                <li>Tracked customer inquiries & feedback using HubSpot CRM</li>
                            </ul>

                            <h4 className="font-semibold text-justify mt-4 mb-2">Key Projects & Achievements:</h4>
                            <ul className="text-sm italic list-disc list-inside text-cyan-400 space-y-2 text-justify">
                                <li><strong>MGT Corporate Website (Custom Built):</strong> Oversaw the end-to-end development and management of Mai Globe Travels' multilingual corporate website (English, French, German), hosted across three domains. Customized the Laravel-based CMS to support localized content and enhanced user engagement across regions</li>
                                <li><strong>Baleen ERP System (Custom Built):</strong> Led the development and implementation of an in-house ERP system tailored to the company's operations, significantly improving internal workflow efficiency and response time to customer inquiries</li>
                                <li><strong>WordPress Web Projects (Templates + Custom CSS):</strong> Managed and developed multiple WordPress-based websites, including Sayura House (boutique hotel), Poke 65, Latrattoria 65 (restaurants), and Authentic Lanka website, using advanced customization through plugins and custom CSS to meet branding and user experience requirements</li>
                                <li><strong>MGT Internet Payment Gateway (Custom Built):</strong> Managed the enhancement and ongoing maintenance of the company's internet payment gateway, ensuring secure and seamless online transactions through system-generated payment links</li>
                            </ul>
                        </div>
                        <div className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <h4 className="font-semibold text-justify">eMarketing Executive at Mai Globe Travels (Pvt) Ltd. - Colombo, Sri Lanka (Mar 2013 - Feb 2015)</h4>
                            <ul className="text-sm italic list-disc list-inside text-cyan-400 space-y-2 text-justify">
                                <li>Developed and maintained the corporate website of Mai Globe Travels and blog</li>
                                <li>Developed communication supports such as blog posts, social media posts, corporate website content, newsletters, articles, and press releases</li>
                                <li>Conducted market research and data analysis reports</li>
                                <li>Creative content writing</li>
                            </ul>
                        </div>
                        <div className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <h4 className="font-semibold text-justify">Marketing Executive at Hayleys Consumer Products Ltd. - Colombo, Sri Lanka (Dec 2011 - Jul 2012)</h4>
                            {/* <ul className="text-sm italic list-disc list-inside text-cyan-400 space-y-2 text-justify">
                                <li>Responsible for promoting and selling Fujifilm digital cameras in consumer electronic outlets and institutions</li>
                                <li>Conducted brand activations in consumer electronic outlets</li>
                                <li>Organized direct consumer promotions in institutions</li>
                                <li>Managed In-store merchandising</li>
                            </ul> */}
                        </div>
                        <div className="bg-blue-500/10 p-2 rounded-xl border-white/10 border hover:bg-blue-500/20 hover:shadow-[0_3px_8px_rgba(59,130,246,0.2)]">
                            <h4 className="font-semibold text-justify">Management Trainee at  Maliban Biscuit Manufactories (Pvt) Ltd. - Colombo, Sri Lanka (Mar 2010 - Aug 2011)</h4>
                            {/* <ul className="text-sm italic list-disc list-inside text-cyan-400 space-y-2 text-justify">
                                <li>Handled Brands and Marketing executions, Database management, and market surveys</li>
                                <li>Communicated with the advertising agencies concerning all media strategies</li>
                                <li>Assisted Marketing Manager in new product development</li>
                                <li>Monitored competitor activities and pricing</li>
                                <li>Developed in-store merchandising plans with the Merchandising Manager</li>
                                <li>Assisted Marketing Manager on product portfolio management</li>
                                <li>Monitored marketing budget and marketing expenditure</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>);
};