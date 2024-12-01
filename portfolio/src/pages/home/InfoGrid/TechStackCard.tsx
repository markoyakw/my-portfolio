import MyIcon, { techStackIconNameArr } from '@components/UI/MyIcon/MyIcon'
import MyCard from '../../../components/UI/MyCard/MyCard'
import MyStack from '../../../components/UI/MyStack/MyStack'
import MyIconWithLabel from '@components/UI/MyIcon/MyIconWithLabel'
import MyGrid from '@components/UI/MyGrid/MyGrid'

const TechStackCard = () => {

    const displayNameMap = {
        javascript: "JavaScript",
        typescript: "TypeScript",
        react: "React",
        nextJs: "NextJs",
        html: "HTML5",
        css: "CSS3",
        nodeJs: "NodeJs",
        git: "Git"
    }

    return (
        <MyCard>
            <MyGrid gridAutoRows={"1fr"} gridTemplateColumns={"repeat(auto-fit, minmax(60px,1fr))"} gap={"s"}>
                {techStackIconNameArr.map(name => <MyIconWithLabel name={name} size='50px' label={displayNameMap[name] || name} />)}
            </MyGrid>
        </MyCard>
    )
}

export default TechStackCard