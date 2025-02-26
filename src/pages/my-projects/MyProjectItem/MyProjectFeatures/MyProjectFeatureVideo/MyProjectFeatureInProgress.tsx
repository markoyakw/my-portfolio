import AnimatedLoaderText from '@components/UI/animations/AnimatedLoaderText/AnimatedLoaderText'
import MyCursorLabel from '@components/UI/MyCursor/MyCursorLabel'
import classes from './MyProjectFeatureVideo.module.css'

const MyProjectFeatureInProgress = () => (
    <MyCursorLabel>
        <h3 className={`${classes["card__feature-video-title"]} ${classes["card__feature-video-title--in-progress"]}`}>
            <AnimatedLoaderText>
                In development...
            </AnimatedLoaderText>
        </h3>
    </MyCursorLabel>
)

export default MyProjectFeatureInProgress