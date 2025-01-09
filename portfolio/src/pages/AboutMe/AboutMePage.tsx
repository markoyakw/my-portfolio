import MyCard from "@components/UI/MyCard/MyCard"
import classes from "./AboutMePage.module.css"

const AboutMePage = () => {

  return (
    <div className={classes["container"]}>
      <div className={classes["about-me-text"]}>
        <p>I specialize in building performant React applications, but I'm</p>
        <p>always down to use new technologies and grow as an engineer.</p>
      </div>
      <div className={classes["cards-flexbox"]}>
        <MyCard addedClassName={classes["card"]}>
          <h2>Languages:</h2>
          <ul className={classes["list"]}>
            <li>English: C1</li>
            <li>German: in progress...</li>
            <li>Ukrainian: C2</li>
            <li>Russian: C2</li>
          </ul>
        </MyCard>
        <MyCard addedClassName={classes["card"]}>
          <h2>Professional qualities:</h2>
          <ul className={classes["list"]}>
            <li>Strong sense of responsibility</li>
            <li>Work ethic and dedication</li>
            <li>Consistently meet deadlines</li>
            <li>Problem-solving mindset</li>
          </ul>
        </MyCard>
        <MyCard addedClassName={classes["card"]}>
          <h2>Fun facts:</h2>
          <ul className={classes["list"]}>
            <li>Originally from Ukraine</li>
            <li>Recently relocated to Germany</li>
            <li>Dreaming to start a peaceful life here</li>
            <li>I'm a huge cat lover!</li>
          </ul>
        </MyCard>

      </div>

    </div>
  )
}

export default AboutMePage