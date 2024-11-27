import MyCard from '../../../components/UI/MyCard/MyCard'
import MyStack from '../../../components/UI/MyStack/MyStack'
import MyContainer from '../../../components/UI/MyContainer/MyContainer'

const WorkPositionCard = () => {
    return (
        <MyCard>
            <MyStack alignItems='center' justifyContent='center'>
                <h1>
                    <MyContainer width='100%'>
                        Junior Frontend Developer
                    </MyContainer>
                </h1>
            </MyStack>
        </MyCard>
    )
}

export default WorkPositionCard