import MainLayout from './components/MainLayout/MainLayout'
import MyCard from './components/UI/MyCard/MyCard'
import MyContainer from './components/UI/MyContainer/MyContainer'
import MyGrid from './components/UI/MyGrid/MyGrid'
import MyGridItem from './components/UI/MyGrid/MyGridItem'
import resumePhoto from "./assets/resume-photo.jpg"
import MyImage from './components/UI/MyImage/MyImage'
import WavyHand from './components/UI/animations/WavyHand/WavyHand'
import AddMLGGlassesOnHover from './components/UI/animations/AddMLGGlassesOnHover/AddMLGGlassesOnHover'

function App() {
  return (
    <>
      <MainLayout>
        <MyGrid>
          <MyGridItem>
            <MyContainer>
              <MyCard>
                <MyContainer width='150px' height="150px">
                  <AddMLGGlassesOnHover>
                    <MyImage src={resumePhoto} rounded zoomLevel={1.2} paddingTop="8px" />
                  </AddMLGGlassesOnHover>
                </MyContainer>
                <h1>Hello<WavyHand />, <br />i'm Marko</h1>
              </MyCard>
            </MyContainer>
          </MyGridItem>
        </MyGrid>
      </MainLayout>
    </>
  )
}

export default App
