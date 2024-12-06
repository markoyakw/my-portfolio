import { techStackIconNameArr } from '@components/UI/MyIcon/MyIcon'
import MyIconWithLabel from '@components/UI/MyIcon/MyIconWithLabel'
import classes from "./TechStackCard.module.css"

const TechStackCard = () => {

    const displayNameMap = {
        javascript: "Java\nScript",
        typescript: "Type\nScript",
        react: "React",
        nextJs: "NextJs",
        html: "HTML5",
        css: "CSS3",
        nodeJs: "NodeJs",
        git: "Git"
    }

    return (
        <div className={classes["container"]}>
            {techStackIconNameArr.map(name => <MyIconWithLabel key={name} addedClassName={classes["tech-stack-icon"]} name={name} label={displayNameMap[name] || name} />)}
        </div>
    )
}

export default TechStackCard