import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mt-25 md:mt-0 mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent leading-right">
                    Hi, I am Rajitha Gunasekara
                </h1>

                {/* Professional Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center relative">
                                 
                    <a href="https://www.credly.com/badges/a75ea632-ad62-44e1-9567-18f47b11f29c/public_url" target="_blank" rel="nofollow">
                    <img className="p-4 w-40 h-auto block mx-auto" src="https://rajithayag.github.io/rajithayag-portfolio/images/fundamentals-of-agile-project-management.png" alt="agile-project-management" title="Agile Project Management" />
                    </a>

                    <a href="https://www.credly.com/badges/5f81e7a5-39ef-43fe-b4bd-00bb129d0cfb/public_url" target="_blank" rel="nofollow">
                    <img className="p-4 w-40 h-auto block mx-auto" src="https://rajithayag.github.io/rajithayag-portfolio/images/corporate-digital-communications.png" alt="corporate-digital-communications" title="Corporate Digital Communications" />
                    </a>

                    <a href="https://www.credly.com/badges/a3dd4983-6252-4c1c-b992-decd328677f9/public_url" target="_blank" rel="nofollow">
                    <img className="p-4 w-40 h-auto block mx-auto" src="https://rajithayag.github.io/rajithayag-portfolio/images/fundamentals-of-predictive-project-management.png" alt="predictive-project-management" title="Predictive Project Management" />
                    </a>

                </div>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify"> 
                Experienced IT Project Manager with over 9 years of expertise in leading and implementing software and web projects, including management and development of an ERP system. 
                Additionally, I possess over 6 years of experience as a web and software developer, specializing in agile methodologies.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects</a>

                    <a href="#contact" className="border border-blue-500/50 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact Me</a>

                </div>
            </div>
        </RevealOnScroll>
    </section>
    );
};