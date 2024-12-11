import { CSSProperties, FC } from 'react'
import classes from "./MyIcon.module.css"

import htmlIcon from "@/assets/icons/techStack/html-5.png"
import cssIcon from "@/assets/icons/techStack/css-3.png"
import javascriptIcon from "@/assets/icons/techStack/javascript.png"
import nextJsIcon from "@/assets/icons/techStack/nextjs.svg"
import reactIcon from "@/assets/icons/techStack/react.png"
import typescriptIcon from "@/assets/icons/techStack/typescript.png"
import nodeJsIcon from "@/assets/icons/techStack/nodejs.png"
import gitIcon from "@/assets/icons/techStack/git.png"
import reduxIcon from "@/assets/icons/techStack/redux.png"
import apiIcon from "@/assets/icons/techStack/api.png"

import githubIcon from "@/assets/icons/myLinks/github.png"
import gmailIcon from "@/assets/icons/myLinks/gmail.png"
import linkedInIcon from "@/assets/icons/myLinks/linkedin.svg"
import telegramIcon from "@/assets/icons/myLinks/telegram.png"

const techStackIconDictionary = {
    nextJs: nextJsIcon,
    react: reactIcon,
    typescript: typescriptIcon,
    javascript: javascriptIcon,
    html: htmlIcon,
    css: cssIcon,
    nodeJs: nodeJsIcon,
    git: gitIcon,
    redux: reduxIcon,
    api: apiIcon
}

export const techStackIconNameArr = Object.keys(techStackIconDictionary) as (keyof typeof techStackIconDictionary)[];
export type TTechStackIcon = typeof techStackIconNameArr

const myLinksIconDictionary = {
    github: githubIcon,
    telegram: telegramIcon,
    linkedIn: linkedInIcon,
    email: gmailIcon
}

export const myLinksIconNameArr = Object.keys(myLinksIconDictionary) as (keyof typeof myLinksIconDictionary)[];

const IconNameDictionary = {
    ...myLinksIconDictionary,
    ...techStackIconDictionary
} as const

export type TMyIconName = keyof typeof IconNameDictionary

export type TMyIconProps = {
    name: TMyIconName,
    addedClassName?: string,
    rounded?: boolean,
    style?: CSSProperties
}

const MyIcon: FC<TMyIconProps> = ({
    name,
    addedClassName,
    rounded,
    style
}) => {

    const сlassName = `${classes["icon"]} 
    ${addedClassName ? addedClassName : ""}
    ${rounded ? classes["icon--rounded"] : ""}`

    return (
        <div className={сlassName} style={style}>
            <img src={IconNameDictionary[name]} alt={`icon - ${name} `} />
        </div>
    )
}

export default MyIcon