import React, { HTMLAttributes } from 'react'
import classes from "./MyCard.module.css"
import { TCssSizeVariable } from '@/types/cssVariables';

interface IMyCardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    padding?: TCssSizeVariable
}

const MyCard: React.FC<IMyCardProps> = ({ children,
    backgroundColor = "var(--color-surface)",
    padding = "m",
    ...props }) => {

    const myCardStyle = {
        backgroundColor,
        padding: `var(--spacing-${padding})`
    }

    return (
        <div className={classes["card"]} {...props} style={myCardStyle}>
            {children}
        </div>
    )
}

export default MyCard