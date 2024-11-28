import { cloneElement, FC } from "react"
import { TCssSizeProp } from "../../../types/cssVariables"
import { IoLocationSharp, IoLogoJavascript } from "react-icons/io5"
import { FaHtml5, FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi"
import { TbBrandNodejs } from "react-icons/tb"
import { SiCss3 } from "react-icons/si"

const iconDictionary = {
    // regular icons
    location: <IoLocationSharp />,

    // tech stack icons
    TStReact: <FaReact />,
    TStNext: <RiNextjsFill />,
    TStJavaScript: <IoLogoJavascript />,
    TStTypeScript: <BiLogoTypescript />,
    TStNodeJs: <TbBrandNodejs />,
    TStCss: <SiCss3 />,
    TStHtml: <FaHtml5 />
} as const

export type TMyIconName = keyof typeof iconDictionary

type TMyIconProps = {
    name: TMyIconName,
    size?: TCssSizeProp
}

const MyIcon: FC<TMyIconProps> = ({ name, size="100em" }) => {

    const iconWithProps = cloneElement(iconDictionary[name], {
        size
    })

    return (
        <span>
            {iconWithProps}
        </span>
    )
}

export default MyIcon