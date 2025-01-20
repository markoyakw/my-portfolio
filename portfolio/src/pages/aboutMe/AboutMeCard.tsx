import MyCard from '@components/UI/MyCard/MyCard'
import classes from "./AboutMePage.module.css"
import { FC, ReactNode } from 'react'

type TAboutMeCard = {
    title: ReactNode,
    listStringArr: (string | ReactNode)[],
    smallCaption: string
}

const AboutMeCard: FC<TAboutMeCard> = ({ title, listStringArr, smallCaption }) => {
    return (
        <MyCard addedClassName={classes["card"]}>
            <h2>
                <b>{title}</b>
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