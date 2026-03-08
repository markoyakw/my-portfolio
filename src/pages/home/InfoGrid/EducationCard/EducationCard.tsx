import useAppearAnimationAttributes from '@hooks/useAppearAnimationProps/useAppearAnimationProps'
import MyCard from '../../../../components/UI/MyCard/MyCard'
import classes from "../ListCard.module.css"
import MyListWithTimeline from '@components/UI/MyListWithTimeline/MyListWithTimeline'
import { FC } from 'react'

const educationComponentArr = [
    <>
        <strong>Master's Degree with horons</strong>
        <br />Odessa / Sep 2022 – Dec 2023 / Odessa National University of Technology
    </>,
    <>
        <strong>Bachelor's Degree</strong>
        <br />Odessa / Sep 2020 – Jun 2022 / Odessa National University of Technology
    </>,
    <>
        <strong>Diploma of Junoir Specialist</strong>
        <br />Odessa / Sep 2016 – Jun 2020 / College of Industrial Automation and Information Technologies
    </>
]

const EducationCard: FC<{ isRevealAnimationReady: boolean }> = ({ isRevealAnimationReady }) => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "from-right",
        delay: "0.3s",
        show: isRevealAnimationReady
    })

    const containerClassName = `${classes["container"]} ${animationClassName}`

    return (
        <MyCard addedClassName={containerClassName} addedStyle={delayStyle}>
            <h2 className={classes["heading"]}>
                <span>Education</span>
            </h2>
            <span className={classes["list"]}>
                {<MyListWithTimeline listItemArr={educationComponentArr} />}
            </span>
        </MyCard>
    )
}

export default EducationCard