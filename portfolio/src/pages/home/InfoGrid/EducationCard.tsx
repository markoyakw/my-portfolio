import MyText from '../../../components/UI/MyText/MyText'
import MyCard from '../../../components/UI/MyCard/MyCard'

const EducationCard = () => {
    return (
        <MyCard>
            <h2>
                <MyText size='l' color='secondary'>Education</MyText>
            </h2>
            <MyText size='m'>
                <ul>
                    <li>
                        <strong>• Master's Degree with horons</strong>  / Odesa / 2023
                        <p>
                            Odesa National University of Technology
                        </p>
                    </li>
                    <li>
                        <strong>• Bachelor's Degree</strong> / Odesa / 2022
                        <p>
                            Odesa National University of Technology
                        </p>
                    </li>
                    <li>
                        <strong>• Diploma of Junoir Specialist</strong> / Odesa / 2020
                        <p>
                            College of Industrial Automation and Information Technologies
                        </p>
                    </li>
                </ul>
            </MyText>
        </MyCard>
    )
}

export default EducationCard