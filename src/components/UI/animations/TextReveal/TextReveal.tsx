import React, { useEffect, useState } from "react";
import classes from "./TextReveal.module.css";

type TextRevealProps = {
    children: string;
    delay?: number;
    className?: string;
};

const TextReveal: React.FC<TextRevealProps> = ({ children, delay = 0, className = "" }) => {
    const lines = children.split("\n");
    const [revealedLines, setRevealedLines] = useState(0);

    useEffect(() => {
        if (revealedLines >= lines.length) return;

        const interval = setInterval(() => {
            setRevealedLines((prev) => prev + 1);
        }, delay);

        return () => clearInterval(interval);
    }, [revealedLines]);

    return (
        <div className={`${classes["text-reveal-container"]} ${className}`}>
            {lines.map((line, index) => (
                <div
                    key={index}
                    className={`${classes["text-line"]} ${index < revealedLines ? classes["text-line--visible"] : ""
                        }`}
                >
                    {line}
                </div>
            ))}
        </div>
    );
};

export default TextReveal;

