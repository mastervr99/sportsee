import './scoreChart.scss'
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { userModel } from '../../services/models/userModel';
import { getUserInfos } from '../../services/userService';


const COLORS = ['#FF0000'];

function ScoreChart({userId}){
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
    
    const data = [ {name:'Score', value: 0}];

    if (!userInfos) {
        return <div>Loading...</div>;
    } else {
        data[0].value = userInfos.score;
    }

    return <div className='scoreChart'>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={200} height={200}>
                <text
                    x={50}
                    y={45}
                    style={{fontSize: '15px', fontWeight: '500', color: "#20253A"}}
                >
                    Score
                </text>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    startAngle={220}
                    endAngle={75}
                    innerRadius={70}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    cornerRadius={5}
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <text
                    x={130}
                    y={135}
                    style={{fontSize: '26px', fontWeight: '700', color: "#20253A"}}
                >
                    {userInfos.score}%
                </text>
                <text
                    x={130}
                    y={155}
                    style={{fontSize: '16px', fontWeight: '500', color: "#74798C"}}
                >
                    de votre
                </text>
                <text
                    x={130}
                    y={175}
                    style={{fontSize: '16px', fontWeight: '500', color: "#74798C"}}
                >
                    objectif
                </text>
            </PieChart>
        </ResponsiveContainer>
    </div> 
}

export default ScoreChart