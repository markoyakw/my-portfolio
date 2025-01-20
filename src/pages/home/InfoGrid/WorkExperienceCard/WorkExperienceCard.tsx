import MyCard from "@components/UI/MyCard/MyCard"
import MyListWithTimeline from "@components/UI/MyListWithTimeline/MyListWithTimeline"
import classes from "../ListCard.module.css"

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
        <MyCard addedClassName={classes["container"]}>
            <h2 className={classes["heading"]}>
                <span >Work experience</span>
            </h2>
            <span className={classes["list"]}>
                {<MyListWithTimeline listItemArr={workExperienceComponentArr} />}
            </span>
        </MyCard>
    )
}

export default WorkExperienceCard