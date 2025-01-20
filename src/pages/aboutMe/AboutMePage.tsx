import classes from "./AboutMePage.module.css"
import { IoGlobeSharp, IoLogoReact } from "react-icons/io5"
import { MdWorkOutline } from "react-icons/md"
import { BsEmojiSunglassesFill } from "react-icons/bs"
import AnimatedLoaderText from "@components/UI/animations/AnimatedLoaderText/AnimatedLoaderText"
import AboutMeCard from "./AboutMeCard"
import { forwardRef } from "react"

const AboutMePage = forwardRef<HTMLDivElement>((_, ref) => {

  return (
    <div className={classes["container"]} ref={ref}>

      <div className={classes["about-me-text"]}>
        <p>
          I specialize in building&nbsp;
          <span className={classes["react-highligted-span"]}>
            React&nbsp;
            <IoLogoReact className={classes["react-inline-logo"]} />
          </span>
          applications, but I'm always down to use new technologies and grow as an engineer.
        </p>
      </div>

      <div className={classes["cards-grid"]}>

        <AboutMeCard
          title={<><IoGlobeSharp /> Languages:</>}
          listStringArr={[
            "English: C1",
            <>German:&nbsp;<AnimatedLoaderText>In progress...</AnimatedLoaderText></>,
            "Ukrainian: C2",
            "Russian: C2",
          ]}
          smallCaption="I am seeking an English-speaking role while actively learning German."
        />

        <AboutMeCard
          title={<><MdWorkOutline /> Professional qualities:</>}
          listStringArr={[
            "Strong sense of responsibility",
            "Work ethic and dedication",
            "Consistently meet deadlines",
            "Problem-solving mindset",
          ]}
          smallCaption="I never let my team down, even if it means sacrificing my personal time."
        />

        <AboutMeCard
          title={<><BsEmojiSunglassesFill /> About me:</>}
          listStringArr={[
            "Originally from Ukraine",
            "Recently relocated to Germany",
            'Dreaming to start a peaceful life here',
            "I'm a huge cat lover!"
          ]}
          smallCaption="The chance to work at your company means the world to me!"
        />

      </div>

    </div >
  )
})

export default AboutMePage