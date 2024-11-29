import { FC } from 'react'
import classes from "./MyIcon.module.css"
import { TCssSizeProp } from '@/types/cssVariables'

import htmlIcon from "@/assets/icons/techStack/html-5.svg"
import cssIcon from "@/assets/icons/techStack/css-3.svg"
import javascriptIcon from "@/assets/icons/techStack/javascript.svg"
import nextJsIcon from "@/assets/icons/techStack/nextjs.svg"
import reactIcon from "@/assets/icons/techStack/react.svg"
import typescriptIcon from "@/assets/icons/techStack/typescript.svg"
import nodeJsIcon from "@/assets/icons/techStack/nodejs.svg"
import gitIcon from "@/assets/icons/techStack/git.svg"

import githubIcon from "@/assets/icons/myLinks/github.png"
import gmailIcon from "@/assets/icons/myLinks/gmail.svg"
import linkedInIcon from "@/assets/icons/myLinks/linkedin.svg"
import telegramIcon from "@/assets/icons/myLinks/telegram.svg"

const techStackIconDictionary = {
    nextJs: nextJsIcon,
    react: reactIcon,
    typescript: typescriptIcon,
    javascript: javascriptIcon,
    html: htmlIcon,
    css: cssIcon,
    nodeJs: nodeJsIcon,
    git: gitIcon
}

export const techStackIconNameArr = Object.keys(techStackIconDictionary) as (keyof typeof techStackIconDictionary)[];

const myLinksIconDictionary = {
    github: githubIcon,
    telegram: telegramIcon,
    linkedIn: linkedInIcon,
    gmail: gmailIcon
}

export const myLinksIconNameArr = Object.keys(myLinksIconDictionary) as (keyof typeof myLinksIconDictionary)[];

const SVGIconDictionary = {
    ...myLinksIconDictionary,
    ...techStackIconDictionary
} as const

export type TMyIconName = keyof typeof SVGIconDictionary

type TMyIconProps = {
    name: TMyIconName,
    size?: TCssSizeProp,
    addedClassName?: string,
}

const MyIcon: FC<TMyIconProps> = ({ name, size, addedClassName }) => {

    const className = `${classes["svg-icon__container"]} ${addedClassName ? addedClassName : ""}`

    return (
        <div className={className}>
            <img src={SVGIconDictionary[name]} alt={`icon-${name}`} style={{ width: size, height: size }} />
        </div>
    )
}

export default MyIcon