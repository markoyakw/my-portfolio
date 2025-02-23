import { FC, ReactNode } from "react"
import classes from "./AddMLGGlassesOnHover.module.css"
import MLGGlassesPicture from "../../../../assets/MLGGlasses.png"

type TAddMLGGlassesOnHoverProps = {
    children: ReactNode,
    isHovered: boolean
}

const AddMLGGlassesOnHover: FC<TAddMLGGlassesOnHoverProps> = ({ children, isHovered }) => {

    const MLGPictureGlassesClassName = `${classes["MLG-picture__glasses"]} ${isHovered ? classes["MLG-picture__glasses--hovered"] : ""}`

    return (
        <div className={classes["MLG-picture"]}>
            <img className={MLGPictureGlassesClassName} src={MLGGlassesPicture} alt="mlg sunglasses" />
            {children}
        </div>
    )
}

export default AddMLGGlassesOnHover