import { FC, ReactNode } from "react"
import classes from "./AddMLGGlassesOnHover.module.css"
import MLGGlassesPicture from "../../../../assets/MLGGlasses.png"

type TAddMLGGlassesOnHoverProps = {
    children: ReactNode
}

const AddMLGGlassesOnHover: FC<TAddMLGGlassesOnHoverProps> = ({ children }) => {
    return (
        <div className={classes["MLG-picture"]}>
            <img className={classes["MLG-picture__glasses"]} src={MLGGlassesPicture} alt="mlg sunglasses" />
            <div className={classes["loading-cover"]}></div>
            {children}
        </div>
    )
}

export default AddMLGGlassesOnHover