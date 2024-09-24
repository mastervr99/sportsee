import './profile.scss';
import Nutrition from '../../components/nutrition/nutrition';
import { userModel } from '../../services/models/userModel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActivityChart from '../../components/activityChart/activityChart';
import SessionChart from '../../components/sessionChart/sessionChart';
import PerformanceChart from '../../components/performanceChart/performanceChart';
import ScoreChart from '../../components/scoreChart/scoreChart';
import { getUserInfos } from '../../services/userService';
import hand_clapping from '../../assets/images/hand_clapping.png'


function Profile() {

    const { userId } = useParams();

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
        return <div className='error_loading'>Loading...</div>;
    }

    return <div className='profile'>
                <div className='profile-main'>
                    <div>
                        <h1>Bonjour <span>{userInfos.userInfos.firstName}</span></h1>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier<img src={hand_clapping} /></p>
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