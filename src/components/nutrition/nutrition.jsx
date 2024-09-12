import './nutrition.scss';
import Calories from '../../assets/images/calories-icon.png'
import Protein from '../../assets/images/protein-icon.png'
import Glucides from '../../assets/images/carbs-icon.png'
import Lipides from '../../assets/images/fat-icon.png'


function Nutrition({userData}) {

    return <div className='nutrition'>
        <ul className='nutrition-list'>
            <li className='nutrition-element'>
                <div className='nutrition-sub-element'>
                    <img src={Calories} alt="" />
                    <div className='nutrition-infos'>
                        <h3>{userData.keyData.calorieCount}</h3>
                        <p>Calories</p>
                    </div>
                </div>
            </li>
            <li className='nutrition-element'>
                <div className='nutrition-sub-element'>
                    <img src={Protein} alt="" />
                    <div className='nutrition-infos'>
                    <h3>{userData.keyData.proteinCount}</h3>
                        <p>Protéines</p>
                    </div>
                </div>
            </li>
            <li className='nutrition-element'>
                <div className='nutrition-sub-element'>
                    <img src={Glucides} alt="" />
                    <div className='nutrition-infos'>
                    <h3>{userData.keyData.carbohydrateCount}</h3>
                        <p>Glucides</p>
                    </div>
                </div>
            </li>
            <li className='nutrition-element'>
                <div className='nutrition-sub-element'>
                    <img src={Lipides} alt="" />
                    <div className='nutrition-infos'>
                    <h3>{userData.keyData.lipidCount}</h3>
                        <p>Lipides</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>

}

export default Nutrition