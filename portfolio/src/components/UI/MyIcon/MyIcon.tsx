import { MdOutlineLocationOn } from "react-icons/md"
import { cloneElement, FC } from "react"
import { TCssSizeProp } from "../../../types/cssVariables"

const iconDictionary = {
    location: <MdOutlineLocationOn size={100} />,
} as const

type TMyIconProps = {
    type: keyof typeof iconDictionary,
    size: TCssSizeProp
}

const MyIcon: FC<TMyIconProps> = ({ type, size }) => {

    const iconWithProps = cloneElement(iconDictionary[type], {
        size
    })

    return (
        <>
            {iconWithProps}
        </>
    )
}

export default MyIcon