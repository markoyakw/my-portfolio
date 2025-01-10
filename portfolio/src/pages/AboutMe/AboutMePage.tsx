import MyCard from "@components/UI/MyCard/MyCard"
import classes from "./AboutMePage.module.css"
import { IoGlobeSharp, IoLogoReact } from "react-icons/io5"
import { MdWorkOutline } from "react-icons/md"
import { BsEmojiSunglassesFill } from "react-icons/bs"
import AnimatedElipsies from "@components/UI/animations/AnimatedElipsies/AnimatedElipsies"

const AboutMePage = () => {

  return (
    <div className={classes["container"]}>
      <div className={classes["about-me-text"]}>
        <p>
          I specialize in building
          <span className={classes["react-highligted-span"]}>
            &nbsp;React&nbsp;
            <IoLogoReact className={classes["react-inline-logo"]} />
          </span>
          &nbsp;applications, but I'm always
        </p>
        <p>down to use new technologies and grow as an engineer.</p>
      </div>
      <div className={classes["cards-flexbox"]}>
        <MyCard addedClassName={classes["card"]}>
          <h2><b><IoGlobeSharp /> Languages:</b></h2>
          <ul className={classes["list"]}>
            <li>English: C1</li>
            <li>German: In progress<AnimatedElipsies /></li>
            <li>Ukrainian: C2</li>
            <li>Russian: C2</li>
          </ul>
          <div className={classes["small"]}>
            I am seeking an English-speaking role while actively learning German.
          </div>
        </MyCard>
        <MyCard addedClassName={classes["card"]}>
          <h2><b><MdWorkOutline /> Professional qualities:</b></h2>
          <ul className={classes["list"]}>
            <li>Strong sense of responsibility</li>
            <li>Work ethic and dedication</li>
            <li>Consistently meet deadlines</li>
            <li>Problem-solving mindset</li>
          </ul>
          <div className={classes["small"]}>
            I never let my team down, even if it means sacrificing my personal time.
          </div>
        </MyCard>
        <MyCard addedClassName={classes["card"]}>
          <h2><b><BsEmojiSunglassesFill /> About me:</b></h2>
          <ul className={classes["list"]}>
            <li>Originally from Ukraine</li>
            <li>Recently relocated to Germany</li>
            <li>Dreaming to start a peaceful life here</li>
            <li>I'm a huge cat lover!</li>
          </ul>
          <div className={classes["small"]}>
            The chance to work at your company means the world to me!
          </div>
        </MyCard>

      </div>

    </div>
  )
}

export default AboutMePage