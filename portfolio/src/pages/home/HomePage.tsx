import MainLayout from '@components/MainLayout/MainLayout'
import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import classes from "./Home.module.css"
import LocationCard from './InfoGrid/LocationCard/LocationCard'
import WorkPositionCard from './InfoGrid/WorkPositionCard/WorkPositionCard'
import WorkExperienceCard from './InfoGrid/WorkExperienceCard/WorkExperienceCard'
import TechStackCard from './InfoGrid/TechStackCard/TechStackCard'
import MyButton from '@components/UI/MyButton/MyButton'

const HomePage = () => {
  return (
    <MainLayout>
      <div className={classes["container"]}>
        <div className={classes["grid"]}>

          <div style={{ "gridRow": "1/span 3", "gridColumn": "1/span 4" }}>
            <HelloCard />
          </div>

          <div style={{ "gridArea": "4/1/span 1/span 4" }}>
            <LocationCard />
          </div>

          <div style={{ gridArea: "5/1/span 3/ span 8" }}>
            <WorkPositionCard />
          </div>

          <div style={{ "gridArea": "1/5/5/span 4" }}>
            <WorkExperienceCard />
          </div>

          <div style={{ "gridArea": "5/5/span 1/span 4" }}>
          </div>

          {/* <div style={{ "gridArea": "1/9/6/span 4" }}>
            <EducationCard /
          </div> */}

          <div style={{ "gridArea": "8/1/span 1/span 8" }}>
            <TechStackCard />
          </div>

          <div style={{ "gridArea": "6/5/span 1/span 4" }}>
            <MyButton>Contact me</MyButton>
          </div>

        </div>
      </div>
    </MainLayout >
  )
}

export default HomePage