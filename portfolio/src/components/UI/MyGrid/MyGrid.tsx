import { CSSProperties, FC, ReactNode } from 'react'
import classes from "./MyGrid.module.css"
import { TCssSizeVariable } from '../../../types/cssVariables'

type TMyGridProps = {
    children: ReactNode,
    gridTemplateRows?: CSSProperties["gridTemplateRows"],
    gridTemplateColumns?: CSSProperties["gridTemplateColumns"],
    gap?: TCssSizeVariable,
    gridAutoRows?: CSSProperties["gridAutoRows"],
    gridAutoColumns?: CSSProperties["gridAutoColumns"]
}

const MyGrid: FC<TMyGridProps> = ({
    children,
    gridTemplateRows,
    gridTemplateColumns,
    gridAutoColumns,
    gridAutoRows,
    gap
}) => {

    const myGridStyles: CSSProperties = {
        gridTemplateRows,
        gridTemplateColumns,
        gridAutoColumns,
        gridAutoRows,
        gap: gap ? `var(--spacing-${gap})` : "0px"
    }

    return (
        <div className={classes["grid"]} style={myGridStyles}>
            {children}
        </div>
    )
}

export default MyGrid