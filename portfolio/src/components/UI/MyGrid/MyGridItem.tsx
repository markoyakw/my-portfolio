import { CSSProperties, FC, ReactNode } from "react"
import classes from "./MyGrid.module.css"

export type TMyGridItemProps = {
    children: ReactNode,
    gridArea: CSSProperties["gridArea"]
}

const MyGridItem: FC<TMyGridItemProps> = ({
    children,
    gridArea,
}) => {

    const myGridItemStyle: CSSProperties = {
        gridArea
    }

    return (
        <div className={classes["grid-item"]} style={myGridItemStyle}>
            {children}
        </div>
    )
}

export default MyGridItem