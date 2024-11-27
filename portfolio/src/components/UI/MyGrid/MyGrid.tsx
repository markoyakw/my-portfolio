import { CSSProperties, FC, ReactNode } from 'react'
import classes from "./MyGrid.module.css"
import { TCssSizeVariables } from '../../../types/cssVariables'

type TMyGridProps = {
    children: ReactNode,
    rowsCount: number,
    columnsCount: number,
    gap?: TCssSizeVariables
}

const MyGrid: FC<TMyGridProps> = ({
    children,
    rowsCount,
    columnsCount,
    gap
}) => {

    const myGridStyles: CSSProperties = {
        gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rowsCount}, minmax(0, 1fr))`,
        gap: gap ? `var(--spacing-${gap})` : "0px"
    }

    return (
        <div className={classes["grid"]} style={myGridStyles}>
            {children}
        </div>
    )
}

export default MyGrid