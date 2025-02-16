import MyCard from '@components/UI/MyCard/MyCard'
import classes from "./AboutMePage.module.css"
import { CSSProperties, FC, ReactNode } from 'react'
import useAppearAnimationAttributes from '@hooks/useAppearAnimationProps/useAppearAnimationProps'

type TAboutMeCard = {
    title: ReactNode,
    listStringArr: (string | ReactNode)[],
    smallCaption: string,
    show?: boolean,
    showDelay?: CSSProperties["animationDelay"]
}

const AboutMeCard: FC<TAboutMeCard> = ({ title, listStringArr, smallCaption, show = true, showDelay }) => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "from-right",
        delay: showDelay,
        show
    })

    const cardClassName = `${classes["card"]} ${animationClassName}`

    return (
        <MyCard addedClassName={cardClassName} addedStyle={delayStyle}>
            <h2>
                <span>{title}</span>
            </h2>
            <ul className={classes["card__list"]}>
                {listStringArr.map((text, textId) => (
                    <li key={textId}>
                        {text}
                    </li>
                ))}
            </ul>
            <p className={classes["card__small-caption"]}>
                {smallCaption}
            </p>
        </MyCard>
    )
}

export default AboutMeCard