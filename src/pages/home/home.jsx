
import Card from '../../components/card/card';
import Sidebar from '../../layout/sidebar/sidebar';
import Profile from '../profile/profile';
import './home.scss';


function Home() {
    return <div className='home'>
                    {/* <Profile userId={12}/> */}
                    <ul>
                        <li>
                            <Card name='Karl Dovineau' id='12' />
                        </li>
                        <li>
                            <Card name='Cecilia Ratorez' id='18' />
                        </li>
                    </ul>
           </div>
}

export default Home