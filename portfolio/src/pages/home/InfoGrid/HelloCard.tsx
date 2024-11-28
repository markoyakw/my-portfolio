import { useState } from 'react'
import MyCard from '../../../components/UI/MyCard/MyCard'
import MyContainer from '../../../components/UI/MyContainer/MyContainer'
import AddMLGGlassesOnHover from '../../../components/UI/animations/AddMLGGlassesOnHover/AddMLGGlassesOnHover'
import MyImage from '../../../components/UI/MyImage/MyImage'
import WavyHand from '../../../components/UI/animations/WavyHand/WavyHand'
import resumePhoto from "../../../assets/resume-photo.jpg"
import MyText from '../../../components/UI/MyText/MyText'
import MyStack from '../../../components/UI/MyStack/MyStack'
import MyIcon from '../../../components/UI/MyIcon/MyIcon'


const HelloCard = () => {

    const [isHelloCardHovered, setIsHelloCardHovered] = useState(false)

    return (
        <MyCard onMouseEnter={() => setIsHelloCardHovered(true)} onMouseLeave={() => setIsHelloCardHovered(false)}>
            <MyStack>
                <MyStack direction='column' gapSize={"m"}>
                    <MyContainer width='100%'>
                        <MyStack justifyContent='space-between'>
                            <MyText size='l' color='secondary'>
                                <h1>Hello<WavyHand isHovered={isHelloCardHovered} />, <br />I'm Marko</h1>
                            </MyText>
                            <MyContainer height='100%' aspectRatio="1/1">
                                <AddMLGGlassesOnHover isHovered={isHelloCardHovered}>
                                    <MyImage src={resumePhoto} rounded zoomLevel={1.2} paddingTop="8px" />
                                </AddMLGGlassesOnHover>
                            </MyContainer>
                        </MyStack>
                    </MyContainer>
                    <MyStack gapSize={"s"} direction='column'>
                        <MyText size='m' color='secondary'>
                            <strong> Frontend developer</strong> based in:
                        </MyText>

                        <MyStack gapSize={"s"}>
                            <MyText size='m' color='secondary'>
                                <MyIcon name='location' size="24px" />Germany, Dusseldorf - Duisburg
                            </MyText>
                        </MyStack>
                    </MyStack>
                </MyStack>
            </MyStack>
        </MyCard>
    )
}

export default HelloCard