import './profile.scss';
import React, { useEffect, useState } from 'react';

function Profile({userId}) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                const data = JSON.parse(text); 
                setUserData(data);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);
    
    console.log(userData);
    if (!userData) {
        return <div>Loading...</div>;
    }

    return <div className='profile'>
                <div>
                    <h1>Bonjour {userData.data.userInfos.firstName}</h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
                </div>
            </div>
}

export default Profile