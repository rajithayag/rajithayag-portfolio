import { Link } from "react-router-dom";
import { RevealOnScroll } from "../components/RevealOnScroll";

export const Home = () => {

    return (
    <>
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

        {/* Full-width background image */}
        <img
            src={`${import.meta.env.BASE_URL}/images/home-bg.jpeg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/0"></div>

        <div className="relative z-10 text-center px-4">

            <img
                className="w-60 h-60 rounded-full object-cover mx-auto mb-6 border-4 border-bg-alt shadow-md bg-white"
                src={`${import.meta.env.BASE_URL}/images/rj.png`}
                alt="Rajitha Gunasekara"
                title="Rajitha Gunasekara"
            />

            <h1 className="text-5xl md:text-5xl font-bold mt-2 md:mt-0 mb-2 text-accent">
                Hi I'm Rajitha Gunasekara
            </h1>

            <h2 className="text-muted text-lg font-bold max-w-lg mb-2 mx-auto">12+ Years Global IT Experience</h2>

            <h3 className="text-drk-muted text-lg font-bold max-w-lg mb-8 mx-auto">Business Analyst Intern @ Hamilton City Council | SDA @ Wintec | MAIT | MBA | CMJD | ERP</h3>

        </div>
    </section>

    {/* Buttons — reveal on scroll */}
    <section className="py-16 flex items-center justify-center">
        <RevealOnScroll>
            <div className="flex justify-center space-x-4">
                <Link to="/nzexp" className="bg-primary text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(60,103,158,0.4)]">
                   View My Experience</Link>

                <Link to="/contact" className="border border-accent text-accent py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/10">
                    Contact Me</Link>
            </div>
        </RevealOnScroll>
    </section>

    {/* Short Summary */}
    <section className="px-4 py-20 bg-bg-alt">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-accent mb-6">A Short Summary</h2>
                <p className="text-drk-muted text-lg leading-relaxed">
                I've been drawn to technology since I was a kid — not just using it,
                but understanding how it works, and staying curious about smarter, more efficient ways to get things done with tech.
                That curiosity took me from eMarketing (where I taught myself HTML and CSS just to keep a website running) to developer,
                to Business Analyst, to Project Manager, over 12+ years — marketer, developer, analyst, and PM, all in one career.
                But what I care about most isn't the technology itself — it's the people using it.
                I genuinely enjoy helping people adopt new systems and supporting the ones who struggle with tech,
                because change is a lot easier when someone's willing to walk through it with you.
                </p>
            </div>
        </RevealOnScroll>
    </section>

    {/* I'm a... identity blocks */}
    <section className="px-4 py-20 max-w-5xl mx-auto space-y-16">

        <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <img
                    src={`${import.meta.env.BASE_URL}/images/translator.png`}
                    alt="Rajitha presenting"
                    className="w-full h-72 object-cover rounded-lg shadow-md"
                />
                <div>
                    <h3 className="text-3xl font-bold text-accent mb-3">I'm a Translator...</h3>
                    <p className="text-oth-text text-lg">
                        I love turning "the system is confusing" into "oh, that's actually easy now." My favourite part of the job isn't the tech itself — it's watching someone go from frustrated to confident because a tool finally makes sense. If it saves someone an hour a day, that's a good day's work.
                    </p>
                </div>
            </div>
        </RevealOnScroll>

        <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-8 items-center md:[&>*:first-child]:order-2">
                <img
                    src={`${import.meta.env.BASE_URL}/images/travel.jpeg`}
                    alt="Rajitha traveling"
                    className="w-full h-72 object-cover rounded-lg shadow-md"
                />
                <div>
                    <h3 className="text-3xl font-bold text-accent mb-3">I'm an Explorer...</h3>
                    <p className="text-oth-text text-lg">
                        I turn free weekends into new adventures. New trails, quiet coastlines, and a growing list of places I've called home for a while — I'm just as curious off the clock as I am on it.
                    </p>
                </div>
            </div>
        </RevealOnScroll>

    </section>
    </>
    );
    
};