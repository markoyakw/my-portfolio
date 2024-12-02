import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react'
import { TCssSizeVariable } from '../../../types/cssVariables'

type TMyTextProps = {
    children: ReactNode,
    size?: TCssSizeVariable,
    color?: keyof typeof textColorMap,
    bold?: boolean,
    textAlign?: CSSProperties["textAlign"]
} & HTMLAttributes<HTMLSpanElement>

const textColorMap = {
    primary: "var(--color-text-primary)",
    secondary: "var(--color-text-secondary)",
} as const

const MyText: FC<TMyTextProps> = ({ textAlign, children, size = "m", color = 'primary', ...props }) => {

    const myTextStyle: CSSProperties = {
        fontSize: `var(--font-size-${size})`,
        color: textColorMap[color],
        textAlign
    }

    return (
        <span style={myTextStyle} {...props}>
            {children}
        </span>
    )
}

export default MyText