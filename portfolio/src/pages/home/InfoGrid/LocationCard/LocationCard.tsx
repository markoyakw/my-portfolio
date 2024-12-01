import MyStack from '@components/UI/MyStack/MyStack'
import MyText from '@components/UI/MyText/MyText'
import { FaLocationDot } from 'react-icons/fa6'

const LocationCard = () => {
    return (
        <div>
            <div style={{ "height": "100%", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end" }}>

                <MyText size='m' color='primary'>
                    Based in:
                </MyText>

                <MyStack gapSize={"s"}>
                    <MyText size='m' color='primary'>
                        <FaLocationDot /> Germany, Düsseldorf - Duisburg
                    </MyText>
                </MyStack>
            </div>
        </div>
    )
}

export default LocationCard