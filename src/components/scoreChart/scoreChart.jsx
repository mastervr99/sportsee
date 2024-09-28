import './scoreChart.scss'
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { userModel } from '../../services/models/userModel';
import { getUserInfos } from '../../services/userService';


const COLORS = ['#FF0000'];

function ScoreChart({userId}){
    const [userInfos, setUserInfos] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userInfosData = await getUserInfos(userId);

                if (typeof userInfosData === 'string') {
                    setError(userInfosData);
                } else {
                    const user = userModel(userInfosData.data);
                    setUserInfos(user);
                }

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchData();
    }, [userId]);
    
    const data = [ {name:'Score', value: 0}];

    if (error) {
        return <div className='error_message'>{error}</div>;
    }
    

    if (!userInfos) {
        return <div>Loading...</div>;
    } else {
        data[0].value = userInfos.score;
    }

    return <div className='scoreChart'>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={200} height={200}>
                <text
                    x={30}
                    y={40}
                    style={{fontSize: '15px', fontWeight: '500', color: "#20253A"}}
                >
                    Score
                </text>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    startAngle={215}
                    endAngle={80}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    cornerRadius={5}
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie fill="white" dataKey="bg" startAngle={0} endAngle={360} data={[{bg: 360}]} outerRadius={80}/>
                <text
                    x={102}
                    y={125}
                    dominantBaseline='middle'
                    style={{fontSize: '26px', fontWeight: '700', fill: "#20253A"}}
                >
                    {userInfos.score}%
                </text>
                <text
                    x={100}
                    y={160}
                    style={{fontSize: '16px', fontWeight: '500', fill: "#74798C"}}
                >
                    de votre
                </text>
                <text
                    x={100}
                    y={190}
                    style={{fontSize: '16px', fontWeight: '500', fill: "#74798C"}}
                >
                    objectif
                </text>
            </PieChart>
        </ResponsiveContainer>
    </div> 
}

export default ScoreChart