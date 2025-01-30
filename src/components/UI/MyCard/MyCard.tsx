import React, { CSSProperties, forwardRef, HTMLAttributes } from 'react'
import classes from "./MyCard.module.css"

interface IMyCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    children: React.ReactNode;
    addedClassName?: string;
    addedStyle?: CSSProperties;
}

const MyCard = forwardRef<HTMLDivElement, IMyCardProps>(({
    addedClassName,
    children,
    addedStyle,
    ...props
}, ref) => {

    const myCardClassName = `${classes["card"]} ${addedClassName}`

    return (
        <div ref={ref} className={myCardClassName} {...props} style={{ ...addedStyle }}>
            {children}
        </div >
    )
})

export default MyCard