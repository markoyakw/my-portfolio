import { techStackIconNameArr } from '@components/UI/MyIcon/MyIcon'
import MyIconWithLabel from '@components/UI/MyIcon/MyIconWithLabel'
import classes from "./TechStackCard.module.css"
import MyCard from '@components/UI/MyCard/MyCard'

const TechStackCard = () => {

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

    return (
        <MyCard backgroundColor='#551117' addedClassName={classes["container"]}>
            {techStackIconNameArr.map(name =>
                <div className={classes["icon__container"]}>
                    <MyIconWithLabel key={name} addedClassName={classes["icon"]} name={name} label={displayNameMap[name] || name} />
                </div>
            )}
        </MyCard>
    )
}

export default TechStackCard