import React, { HTMLAttributes } from 'react'
import classes from "./MyCard.module.css"
import { TCssSizeVariable } from '@/types/cssVariables';

interface IMyCardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    padding?: TCssSizeVariable;
    addedClassName?: string
}

const MyCard: React.FC<IMyCardProps> = ({
    addedClassName,
    children,
    backgroundColor = "var(--color-surface)",
    padding = "m",
    ...props }) => {

    const myCardStyle = {
        backgroundColor,
        padding: `var(--spacing-${padding})`
    }

    const myCardClassName = `${classes["card"]} ${addedClassName}`

    return (
        <div className={myCardClassName} {...props} style={myCardStyle}>
            {children}
        </div>
    )
}

export default MyCard