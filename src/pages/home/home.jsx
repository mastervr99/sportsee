
import Card from '../../components/card/card';
import Sidebar from '../../layout/sidebar/sidebar';
import Profile from '../profile/profile';
import './home.scss';


function Home() {
    return <div className='home'>
                    <ul>
                        <li>
                            <Card name='Karl Dovineau' userId={12} />
                        </li>
                        <li>
                            <Card name='Cecilia Ratorez' userId={18} />
                        </li>
                    </ul>
           </div>
}

export default Home