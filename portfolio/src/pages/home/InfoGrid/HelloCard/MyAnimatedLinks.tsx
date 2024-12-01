import MyCursorLabel from "@components/UI/MyCustomCursor/MyCursorLabel"
import MyCustomCursor from "@components/UI/MyCustomCursor/MyCustomCursor"
import MyIcon, { myLinksIconNameArr } from "@components/UI/MyIcon/MyIcon"
import { HiExternalLink } from "react-icons/hi"

const linkDictionary = {
    github: "https://github.com/markoyakw",
    telegram: "https://t.me/markoyakw",
    linkedIn: "https://www.linkedin.com/in/marko-yakovenko/",
    gmail: "https://mailto:yakovenkomarko@gmail.com"
}

const MyAnimatedLinks = myLinksIconNameArr.map(name => {

    const linkLabelText = <>My {name} <HiExternalLink /></>
    return (
        <MyCustomCursor cursor={<MyCursorLabel>{linkLabelText}</MyCursorLabel>}>
            <a href={linkDictionary[name]} target="_blank">
                <MyIcon rounded withBorder name={name} size='50px' />
            </a>
        </MyCustomCursor >
    )
})

export default MyAnimatedLinks