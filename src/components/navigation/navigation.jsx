import './navigation.scss';

function Navigation() {
    return <div className='navbar'>
                <ul className='navList'>
                    <li><a href="/">Accueil</a></li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </div>
}

export default Navigation