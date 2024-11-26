import { FC } from 'react'
import classes from "./MyImage.module.css"
import { TSizeProp } from '../../../types/cssVariables'

type TMyImageProps = {
    src: string,
    rounded?: boolean,
    zoomLevel?: number,
    paddingTop?: TSizeProp,
    paddingRight?: TSizeProp,
    paddingBottom?: TSizeProp,
    paddingLeft?: TSizeProp,
}

const MyImage: FC<TMyImageProps> = ({
    src,
    rounded,
    zoomLevel,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
}) => {

    const myImageClassName = classes["image"]
    const myImageContainerClassName = `${classes["image__container"]} ${rounded && classes["image-container--rounded"]}`
    const myImageStyles = {
        scale: zoomLevel?.toString(),
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
    }

    return (
        <div className={myImageContainerClassName}>
            <img src={src}
                className={myImageClassName}
                style={myImageStyles}>
            </img>
        </div>
    )
}

export default MyImage