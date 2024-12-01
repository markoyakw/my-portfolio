import { FC, ReactNode } from 'react'
import MyIcon, { TMyIconProps } from './MyIcon'
import MyStack from '../MyStack/MyStack'
import MyContainer from '../MyContainer/MyContainer'
import MyText from '../MyText/MyText'

type TMyIconWithLabelProps = TMyIconProps & {
    label: string
}

const MyIconWithLabel: FC<TMyIconWithLabelProps> = ({
    name,
    size = "1em",
    addedClassName,
    rounded,
    withBorder,
    label
}) => {
    return (
        <MyContainer>
            < MyStack direction='column' justifyContent='center' alignItems='center' gapSize={"xs"}>
                <MyIcon
                    name={name}
                    size={size}
                    addedClassName={addedClassName}
                    rounded={rounded}
                    withBorder={withBorder}
                />
                <MyText size='xs' textAlign='center' bold color='secondary'>
                    {label}
                </MyText>
            </MyStack >
        </MyContainer >
    )
}

export default MyIconWithLabel