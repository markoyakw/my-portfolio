import MyCard from "@components/UI/MyCard/MyCard"
import MyListWithTimeline from "@components/UI/MyListWithTimeline/MyListWithTimeline"
import MyText from "@components/UI/MyText/MyText"
import classes from "../ListCard.module.css"
import TechStackCard from "../TechStackCard/TechStackCard"

const workExperienceComponentArr = [
    <>
        <strong>Intern web developer (1 month)</strong>
        <br /> Odesa / 2023 / ONUT project semester
    </>,
    <>
        <strong>Junior web developer (3 month)</strong>
        <br /> Odesa / 2024 Web studio
    </>,
    <>
        <strong>Your company? :)</strong>
        <br /> I hope i can become part of your project/ company you are hiring for!
    </>
]

const WorkExperienceCard = () => {
    return (
        <MyCard>
            <div className={classes["container"]}>
                <h2>
                    <MyText size='l' color='secondary'>Work experience</MyText>
                </h2>
                <MyText color='secondary'>
                    {<MyListWithTimeline listItemArr={workExperienceComponentArr} />}
                </MyText>
            </div>
        </MyCard>
    )
}

export default WorkExperienceCard