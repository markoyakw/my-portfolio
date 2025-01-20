import MyCard from '../../../../components/UI/MyCard/MyCard'
import classes from "../ListCard.module.css"
import MyListWithTimeline from '@components/UI/MyListWithTimeline/MyListWithTimeline'

const educationComponentArr = [
    <>
        <strong>Master's Degree with horons</strong>
        <br />Odesa / 2023 / Odesa National University of Technology
    </>,
    <>
        <strong>Bachelor's Degree</strong>
        <br />Odesa / 2022 / Odesa National University of Technology
    </>,
    <>
        <strong>Diploma of Junoir Specialist</strong>
        <br />Odesa / 2020 / College of Industrial Automation and Information Technologies
    </>
]

const EducationCard = () => {
    return (
        <MyCard addedClassName={classes["container"]}>
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