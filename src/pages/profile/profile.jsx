import Nutrition from '../../components/nutrition/nutrition';
import { userModel } from '../../models/userModel';
import './profile.scss';
import React, { useEffect, useState } from 'react';
import { getUserInfos } from '../../services/service'; // Assure-toi que le chemin est correct
import ActivityChart from '../../components/activityChart/activityChart';
import SessionChart from '../../components/sessionChart/sessionChart';
import PerformanceChart from '../../components/performanceChart/performanceChart';
import ScoreChart from '../../components/scoreChart/scoreChart';


function Profile({userId}) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUserInfos(userId);
                const user = userModel(data.data);
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchData();
    }, [userId]);
    
    console.log(userData);
    if (!userData) {
        return <div>Loading...</div>;
    }

    return <div className='profile'>
                <div className='profile-main'>
                    <div>
                        <h1>Bonjour {userData.userInfos.firstName}</h1>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
                    </div>
                    <div className='profile_charts_nutrition'>
                        <div>
                            <ActivityChart />
                            <div className='square_charts'>
                                <SessionChart/>
                                <PerformanceChart />
                                <ScoreChart/>
                            </div>
                        </div>
                        <Nutrition userData={userData}/>
                    </div>
                </div>
            </div>
}

export default Profile