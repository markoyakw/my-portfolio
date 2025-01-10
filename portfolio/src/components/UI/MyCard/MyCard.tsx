import React, { CSSProperties, HTMLAttributes } from 'react'
import classes from "./MyCard.module.css"
import { TCssSizeVariable } from '@/types/cssVariables';

interface IMyCardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    padding?: TCssSizeVariable;
    addedClassName?: string;
    addedStyle?: CSSProperties;
}

const MyCard: React.FC<IMyCardProps> = ({
    addedClassName,
    children,
    padding = "m",
    addedStyle,
    ...props
}) => {

    const myCardStyle = {
        padding: `var(--spacing-${padding})`
    }

    const myCardClassName = `${classes["card"]} ${addedClassName}`

    return (
        <div className={myCardClassName} {...props} style={{ ...myCardStyle, ...addedStyle }}>
            {children}
        </div >
    )
}

export default MyCard