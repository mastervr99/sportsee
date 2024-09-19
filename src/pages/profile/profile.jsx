import './profile.scss';
import Nutrition from '../../components/nutrition/nutrition';
import { userModel } from '../../services/models/userModel';
import React, { useEffect, useState } from 'react';
// import { getUserInfos } from '../../services/userServiceMock';
import ActivityChart from '../../components/activityChart/activityChart';
import SessionChart from '../../components/sessionChart/sessionChart';
import PerformanceChart from '../../components/performanceChart/performanceChart';
import ScoreChart from '../../components/scoreChart/scoreChart';
import { getUserInfos } from '../../services/userService';


function Profile({userId}) {

    const [userInfos, setUserInfos] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userInfosData = await getUserInfos(userId);
                const user = userModel(userInfosData.data);
                setUserInfos(user);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchData();
    }, [userId]);
    
    if (!userInfos) {
        return <div>Loading...</div>;
    }

    return <div className='profile'>
                <div className='profile-main'>
                    <div>
                        <h1>Bonjour {userInfos.userInfos.firstName}</h1>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
                    </div>
                    <div className='profile_charts_nutrition'>
                        <div>
                        <ActivityChart userId={userId} />
                            <div className='square_charts'>
                                <SessionChart userId={userId}/>
                                <PerformanceChart userId={userId} />
                                <ScoreChart userId={userId} />
                            </div>
                        </div>
                        <Nutrition userData={userInfos}/>
                    </div>
                </div>
            </div>
}

export default Profile