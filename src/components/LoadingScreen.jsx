import { useEffect } from "react";
import { useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Hi I'm Rajitha and this is my CV";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 2000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-white text-primary flex flex-col items-center justify-center">

            <div className="mb-6 p-4 text-3xl font-bold text-center whitespace-pre-line">
                {text}<span className="animate-blink ml-1 text-accent">|</span>
            </div>

            <div className="w-[200px] h-[2px] bg-bg-alt rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-accent shadow-[0_0_15px_#cb7055] animate-loading-bar"></div>
            </div>

        </div>
    ); 
}