import { forwardRef, ReactNode } from 'react'
import classes from "./LinksToMyProject.module.css"
import MyIcon from '@components/UI/MyIcon/MyIcon'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import MyCustomCursor from '@components/UI/MyCursor/MyCustomCursor'
import MyCursorLabel from '@components/UI/MyCursor/MyCursorLabel'
import { HiExternalLink } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'

type TLinksToMyProjectProps = {
    githubUrl: string,
    appUrl: string
}

const LinkToProjectCursor = ({ url, children }: { url: string, children: ReactNode }) => {
    return (
        <MyCustomCursor translateXPercent={3} translateYPercent={-120} normalizeOverflowOutsideOfScreen cursor={
            <MyCursorLabel>
                <span className={classes["project-links__cursor"]}>{url} <HiExternalLink /></span>
            </MyCursorLabel>
        }>
            {children}
        </MyCustomCursor>
    )
}

const LinksToMyProject = forwardRef<HTMLDivElement, TLinksToMyProjectProps>(({ githubUrl, appUrl }, ref) => {
    return (
        <div className={classes["project-links"]} ref={ref}>
            <LinkToProjectCursor url={appUrl}>
                <a href={appUrl} target='_blank' className={classes["project-links__link"]}>
                    <CgWebsite className={`${classes["project-links__logo--app"]} ${classes["project-links__logo"]}`} />
                    Link to website
                    <IoIosArrowDroprightCircle className={classes["project-links__arrow-icon"]} />
                </a>
            </LinkToProjectCursor>
            <LinkToProjectCursor url={githubUrl}>
                <a href={githubUrl} target='_blank' className={classes["project-links__link"]}>
                    <MyIcon name='github' addedClassName={`${classes["project-links__logo"]} ${classes["project-links__logo--github"]}`} />
                    Check out source code on github
                    <IoIosArrowDroprightCircle className={classes["project-links__arrow-icon"]} />
                </a>
            </LinkToProjectCursor>
        </div>
    )
})

export default LinksToMyProject