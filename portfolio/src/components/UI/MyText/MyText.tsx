import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react'
import { TCssSizeVariables } from '../../../types/cssVariables'

type TMyTextProps = {
    children: ReactNode,
    size: TCssSizeVariables,
    color?: keyof typeof textColorMap,
    bold?: boolean
} & HTMLAttributes<HTMLSpanElement>

const textColorMap = {
    primary: "var(--color-text-primary)",
    secondary: "var(--color-text-secondary)",
} as const

const MyText: FC<TMyTextProps> = ({ children, size, color = 'primary', bold, ...props }) => {

    const myTextStyle: CSSProperties = {
        fontSize: `var(--font-size-${size})`,
        color: textColorMap[color],
        fontWeight: bold ? "bold" : "normal"
    }

    return (
        <span style={myTextStyle} {...props}>
            {children}
        </span>
    )
}

export default MyText