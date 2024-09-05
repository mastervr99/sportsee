
import Sidebar from '../../layout/sidebar/sidebar';
import './home.scss';
import Profile from '../../components/profile/profile';

function Home() {
    return <div className='home'>
                <Sidebar/>
                <main>
                    <Profile userId={12}/>
                </main>
           </div>
}

export default Home