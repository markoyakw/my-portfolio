import MyCard from '../../../components/UI/MyCard/MyCard'
import MyStack from '../../../components/UI/MyStack/MyStack'
import MyTechStackIcon from '../../../components/UI/MyIcon/MyTechStackIcon'
import { TMyIconName } from '../../../components/UI/MyIcon/MyIcon'

const myTechStackIconArr: { iconName: TMyIconName, displayName: string }[] = [
    { iconName: "TStNext", displayName: "Next.js" },
    { iconName: "TStReact", displayName: "React" },
    { iconName: "TStNodeJs", displayName: "Node.js" },
    { iconName: "TStTypeScript", displayName: "TypeScript" },
    { iconName: "TStJavaScript", displayName: "JavaScript" },
    { iconName: "TStHtml", displayName: "HTML5" },
    { iconName: "TStCss", displayName: "CSS3" }
]

const TechStackCard = () => {
    return (
        <MyCard>
            <MyStack justifyContent='space-between' alignItems='center'>
                {myTechStackIconArr.map((tech, id) =>
                    <MyTechStackIcon
                        key={tech.iconName + id}
                        iconName={tech.iconName}
                        displayName={tech.displayName}
                        size='45px'
                    />)
                }
            </MyStack>
        </MyCard>
    )
}

export default TechStackCard