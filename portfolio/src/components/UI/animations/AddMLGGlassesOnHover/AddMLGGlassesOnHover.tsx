import { FC, ReactNode } from "react"
import classes from "./AddMLGGlassesOnHover.module.css"

type TAddMLGGlassesOnHoverProps = {
    children: ReactNode
}

const AddMLGGlassesOnHover: FC<TAddMLGGlassesOnHoverProps> = ({ children }) => {
    return (
        <div className={classes["MLG-picture"]}>{children}</div>
    )
}

export default AddMLGGlassesOnHover