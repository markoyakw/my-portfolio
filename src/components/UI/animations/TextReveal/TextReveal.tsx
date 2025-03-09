import React, { useEffect, useRef, useState } from "react";
import classes from "./TextReveal.module.css";
import getNumberOfLinesInHTMLelement from "@utils/getNumberOfLinesInHTMLElement";
import useWindowSize from "@hooks/useWindowSize";
import useDelay from "@hooks/useDelay";

type TTextRevealProps = {
    children: string;
    delay?: number;
    delayBetweenLines?: number;
    className?: string;
    shouldAnimationStart?: boolean
    onAnimationFinish?: (params?: any) => any
};

const TextReveal: React.FC<TTextRevealProps> = ({ children, delay = 0, className = "", shouldAnimationStart = true, delayBetweenLines = 150, onAnimationFinish = function () { } }) => {

    const [lastRevealedLine, setLastRevealedLine] = useState(1);
    const [revealedWordsCount, setRevealedWordsCount] = useState(0)
    const skipLineCheckIteration = useRef<boolean>(false)
    const [isDelayFinished] = useDelay(delay, { shouldStart: shouldAnimationStart })

    const hiddenTextSizeCalcRef = useRef<HTMLDivElement>(null)
    const revealedTextRef = useRef<HTMLDivElement>(null)
    const windowSize = useWindowSize()

    useEffect(() => {
        if (!shouldAnimationStart) return
        if (!isDelayFinished) return

        if (skipLineCheckIteration.current === true) {
            skipLineCheckIteration.current = false
            return
        }

        if (!revealedTextRef.current) return
        const maxWords = children.split(" ").length

        const revealedLinesHTML = getNumberOfLinesInHTMLelement(revealedTextRef.current)
        if (revealedWordsCount > maxWords) {
            onAnimationFinish()
            return
        }

        if (revealedLinesHTML < lastRevealedLine) {
            setRevealedWordsCount(prevCount => prevCount + 1)
            return
        }

        setRevealedWordsCount(prevCount => prevCount - 1)
        skipLineCheckIteration.current = true

        setTimeout(() => {
            setLastRevealedLine(revealedLinesHTML + 1)
        }, delayBetweenLines)

    }, [revealedWordsCount, lastRevealedLine, shouldAnimationStart, isDelayFinished, windowSize])

    useEffect(() => {
        if (!shouldAnimationStart) {
            setLastRevealedLine(1)
            setRevealedWordsCount(0)
            skipLineCheckIteration.current = false
        }
    }, [shouldAnimationStart])

    return (
        <div className={`${classes["container"]} ${className}`}>
            <div className={classes["hidden-text-size-calculation-container"]} ref={hiddenTextSizeCalcRef}>
                {children.split(" ").map((hiddenWord, wordIndex) =>
                    <span key={wordIndex}>
                        {hiddenWord}&nbsp;
                    </span>
                )}
            </div>

            <div className={classes["revealed-text-container"]} ref={revealedTextRef}>
                {children.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className={classes["word__overflow-container"]}>
                        <span className={`${classes["word"]} ${wordIndex < revealedWordsCount ? classes["word--visible"] : ""}`}>
                            {word}&nbsp;
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TextReveal;

