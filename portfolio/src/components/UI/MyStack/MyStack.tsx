import { FC, ReactNode } from 'react'
import classes from "./MyStack.module.css"
import { TCssSizeVariable } from '../../../types/cssVariables'

type TMyStackProps = {
    children: ReactNode,
    direction?: "row" | "column",
    gapSize?: null | TCssSizeVariable,
    alignItems?: "center" | "flex-start" | "flex-end",
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between"
    flexWrap?: "wrap" | "wrap-reverse";
}

const MyStack: FC<TMyStackProps> = ({
    children,
    gapSize,
    direction = "row",
    alignItems = "flex-start",
    justifyContent = "flex-start",
    flexWrap
}) => {

    const directionClassname = classes[`stack--direction-${direction}`]
    const myStackClassName = `${classes["stack"]} ${directionClassname}`

    const gapSizeStyle = gapSize && { gap: `var(--spacing-${gapSize})` }

    return (
        <div className={myStackClassName} style={{ alignItems, justifyContent, flexWrap, ...gapSizeStyle }}>
            {children}
        </div>
    )
}

export default MyStack