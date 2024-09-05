import './sidebar.scss';
import meditation from '../../assets/images/meditation.png'
import swimming from '../../assets/images/swimming.png'
import riding from '../../assets/images/riding.png'
import fitness from '../../assets/images/fitness.png'

function Sidebar() {
    return <div className='sidebar'>
                <ul className='sidebar_list'>
                    <li><img src={meditation} alt="meditation" /></li>
                    <li><img src={swimming} alt="swimming" /></li>
                    <li><img src={riding} alt="riding" /></li>
                    <li><img src={fitness} alt="fitness" /></li>
                </ul>
                <div className='copyright'>
                    <p>Copyright, Sportsee 2020</p>
                </div>
            </div>
}

export default Sidebar