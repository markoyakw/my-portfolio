import React, { useEffect, useRef, useState } from "react";
import classes from "./TextReveal.module.css";
import getNumberOfLinesInHTMLelement from "@utils/getNumberOfLinesInHTMLElement";
import useWindowSize from "@hooks/useWindowSize";

type TTextRevealProps = {
    children: string;
    delayBetweenLines?: number;
    className?: string;
    shouldAnimationStart?: boolean
    onAnimationFinish?: (params?: any) => any
};

const TextReveal: React.FC<TTextRevealProps> = ({ children, className = "", shouldAnimationStart = true, delayBetweenLines = 150, onAnimationFinish = function () { } }) => {

    const [lastRevealedLineCalculated, setLastRevealedLineCalculated] = useState(1);
    const [revealedWordsCountCalculated, setRevealedWordsCountCalculated] = useState(0)
    const [isCalculationsFinished, setIsCalculationsFinished] = useState(false)
    const lastWordInLineIndexArr = useRef<number[]>([])

    const windowSize = useWindowSize()

    const hiddenTextSizeCalcRef = useRef<HTMLDivElement>(null)
    const revealedTextRef = useRef<HTMLDivElement>(null)

    const getindividualLineDelay = (wordIndex: number) => {
        const delayMultiplier = lastWordInLineIndexArr.current.findIndex(lastWordInLineIndex => lastWordInLineIndex > wordIndex)
        const maxDelayMultiplier = lastWordInLineIndexArr.current.length

        const normalizedDelayMultiplier = delayMultiplier === -1
            ? maxDelayMultiplier
            : delayMultiplier

        if (shouldAnimationStart) {
            console.log(normalizedDelayMultiplier * delayBetweenLines / 1000 + "s")
            return normalizedDelayMultiplier * delayBetweenLines / 1000 + "s"
        }
        else {
            console.log(normalizedDelayMultiplier * delayBetweenLines / 1000 + "s")

            return (maxDelayMultiplier - normalizedDelayMultiplier) * delayBetweenLines / 1000 + "s"
        }
    }

    useEffect(() => {
        if (!shouldAnimationStart) return
        if (!hiddenTextSizeCalcRef.current) return

        const maxWords = children.split(" ").length
        const revealedLinesHTML = getNumberOfLinesInHTMLelement(hiddenTextSizeCalcRef.current)

        if (revealedWordsCountCalculated >= maxWords) {
            onAnimationFinish()
            setIsCalculationsFinished(true)
            return
        }

        if (revealedLinesHTML === lastRevealedLineCalculated) {
            setRevealedWordsCountCalculated(prevCount => prevCount + 1)
            return
        }

        lastWordInLineIndexArr.current.push(revealedWordsCountCalculated)
        setLastRevealedLineCalculated(revealedLinesHTML)

    }, [revealedWordsCountCalculated, lastRevealedLineCalculated, shouldAnimationStart])

    useEffect(() => {
        setRevealedWordsCountCalculated(0)
        setLastRevealedLineCalculated(0)
        lastWordInLineIndexArr.current = []
        setIsCalculationsFinished(false)
    }, [windowSize])

    return (
        <div className={`${classes["container"]} ${className}`}>

            <div className={classes["hidden-text-size-calculation-container"]} ref={hiddenTextSizeCalcRef}>
                {children.split(" ").map((hiddenWord, wordIndex) =>
                    <span key={wordIndex} className={`${classes["hidden-word"]} ${revealedWordsCountCalculated >= wordIndex ? classes["hidden-word--size-taken-into-account"] : ""}`}>
                        {hiddenWord}&nbsp;
                    </span>
                )}
            </div>

            <div className={classes["revealed-text-container"]} ref={revealedTextRef}>
                {children.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className={classes["word__overflow-container"]}>
                        <span
                            className={`${classes["word"]} ${isCalculationsFinished && shouldAnimationStart ? classes["word--visible"] : ""}`}
                            style={{ "--reveal-delay": getindividualLineDelay(wordIndex) } as React.CSSProperties}
                        >
                            {word}&nbsp;
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TextReveal;

