import MyCursorLabel from "@components/UI/MyCursor/MyCursorLabel"
import MyCustomCursor from "@components/UI/MyCursor/MyCursorHoverArea"
import MyIcon, { myLinksIconNameArr } from "@components/UI/MyIcon/MyIcon"
import { HiExternalLink } from "react-icons/hi"

const linkDictionary = {
    github: "https://github.com/markoyakw",
    telegram: "https://t.me/markoyakw",
    linkedIn: "https://www.linkedin.com/in/marko-yakovenko/",
    email: "mailto:yakovenkomarko@gmail.com"
}

const MyAnimatedLinks = myLinksIconNameArr.map(name => {

    const linkLabelText = <>My {name} <HiExternalLink /></>
    return (
        <MyCustomCursor cursor={<MyCursorLabel>{linkLabelText}</MyCursorLabel>}>
            <a href={linkDictionary[name]} target="_blank">
                <MyIcon rounded name={name} />
            </a>
        </MyCustomCursor >
    )
})

export default MyAnimatedLinks