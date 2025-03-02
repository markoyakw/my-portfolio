import { techStackIconNameArr } from '@components/UI/MyIcon/MyIcon'
import MyIconWithLabel from '@components/UI/MyIcon/MyIconWithLabel'
import classes from "./TechStackCard.module.css"
import MyCard from '@components/UI/MyCard/MyCard'
import useAppearAnimationAttributes from '@hooks/useAppearAnimationProps/useAppearAnimationProps'
import { FC } from 'react'

const TechStackCard: FC<{ isRevealAnimationReady: boolean }> = ({ isRevealAnimationReady }) => {

    const displayNameMap = {
        javascript: "JavaScript",
        typescript: "TypeScript",
        react: "React",
        nextJs: "NextJs",
        html: "HTML5",
        css: "CSS3",
        nodeJs: "NodeJs",
        git: "Git",
        redux: "Redux",
        api: "APIs"
    }

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "from-left",
        delay: "0.3s",
        show: isRevealAnimationReady
    })

    const containerClassName = `${classes["container"]} ${animationClassName}`

    return (
        <MyCard addedClassName={containerClassName} addedStyle={delayStyle}>
            {techStackIconNameArr.map(name =>
                <div key={name} className={classes["icon__container"]}>
                    <MyIconWithLabel key={name} addedClassName={classes["icon"]} name={name} label={displayNameMap[name] || name} />
                </div>
            )}
        </MyCard>
    )
}

export default TechStackCard