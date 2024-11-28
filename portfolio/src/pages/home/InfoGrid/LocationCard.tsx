import MyStack from '../../../components/UI/MyStack/MyStack'
import MyIcon from '../../../components/UI/MyIcon/MyIcon'
import MyCard from '../../../components/UI/MyCard/MyCard'

const LocationCard = () => {
    return (
        <MyCard>
            <MyStack direction='column' alignItems='center'>
                <MyIcon type='location' size="100px" />
                <h2>Germany, Duisburg/ Düsseldorf</h2>
            </MyStack>
        </MyCard>
    )
}

export default LocationCard