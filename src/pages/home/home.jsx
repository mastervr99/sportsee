
import Sidebar from '../../layout/sidebar/sidebar';
import Profile from '../profile/profile';
import './home.scss';


function Home() {
    return <div className='home'>
                <Sidebar/>
                <main>
                    <Profile userId={12}/>
                </main>
           </div>
}

export default Home