import { CSSProperties, FC } from 'react'
import MyIcon, { TMyIconProps } from './MyIcon'
import classes from "./MyIcon.module.css"

type TMyIconWithLabelProps = TMyIconProps & {
    label: string,
    iconStyle?: CSSProperties
}

const MyIconWithLabel: FC<TMyIconWithLabelProps> = ({
    label,
    style,
    iconStyle,
    addedClassName,
    ...props
}) => {

    return (
        <div className={`${classes["icon--with-label__container"]} ${addedClassName}`} style={style}>
            <MyIcon {...props} style={iconStyle} addedClassName={classes["icon--with-label"]} />
            <span className={classes["icon-with-label__label"]}>{label}</span>
        </div>
    )
}

export default MyIconWithLabel