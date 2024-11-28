import { FC } from "react"
import { TCssSizeProp } from "../../../types/cssVariables"
import MyContainer from "../MyContainer/MyContainer"
import MyStack from "../MyStack/MyStack"
import MyText from "../MyText/MyText"
import MyIcon, { TMyIconName } from "./MyIcon"

type TMyTechStackIconProps = {
    iconName: TMyIconName,
    displayName: string,
    size: TCssSizeProp,
}

const MyTechStackIcon: FC<TMyTechStackIconProps> = ({ iconName, displayName, size }) => {

    const logoSize = Number(size.slice(0, -2))
    const logoToContainerRatio = 1.1

    return (
        <MyContainer width={size}>
            <figure>
                <MyStack direction="column" alignItems="center">
                    <MyContainer width={`${logoSize * logoToContainerRatio}px`} aspectRatio="1/1">
                        <MyIcon name={iconName} />
                    </MyContainer>
                    <figcaption>
                        <MyText size="s" color="secondary">
                            {displayName}
                        </MyText>
                    </figcaption>
                </MyStack>
            </figure>
        </MyContainer>
    )
}

export default MyTechStackIcon