import { useState } from 'react'
import MyCard from '../../../components/UI/MyCard/MyCard'
import MyContainer from '../../../components/UI/MyContainer/MyContainer'
import AddMLGGlassesOnHover from '../../../components/UI/animations/AddMLGGlassesOnHover/AddMLGGlassesOnHover'
import MyImage from '../../../components/UI/MyImage/MyImage'
import WavyHand from '../../../components/UI/animations/WavyHand/WavyHand'
import resumePhoto from "../../../assets/resume-photo.jpg"


const HelloCard = () => {

    const [isHelloCardHovered, setIsHelloCardHovered] = useState(false)

    return (
        <MyCard onMouseEnter={() => setIsHelloCardHovered(true)} onMouseLeave={() => setIsHelloCardHovered(false)}>
            <MyContainer width='80%' aspectRatio="1/1">
                <AddMLGGlassesOnHover isHovered={isHelloCardHovered}>
                    <MyImage src={resumePhoto} rounded zoomLevel={1.2} paddingTop="8px" />
                </AddMLGGlassesOnHover>
            </MyContainer>
            <h1>Hello<WavyHand isHovered={isHelloCardHovered} />, <br />i'm Marko</h1>
        </MyCard>
    )
}

export default HelloCard