import MyText from '../../../../components/UI/MyText/MyText'
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
        <MyCard backgroundColor='#edede9'>
            <div className={classes["container"]}>
                <h2>
                    <MyText size='l' color='secondary'>Education</MyText>
                </h2>
                <MyText color='secondary' size='m'>
                    {<MyListWithTimeline listItemArr={educationComponentArr} />}
                </MyText>
            </div>
        </MyCard>
    )
}

export default EducationCard