import './activityChart.scss'
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userActivityModel } from '../../services/models/userActivityModel';
import { getUserActivity } from '../../services/userService';


function ActivityChart({userId}){
  
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {

      async function fetchData() {
        try {

            const userActivityData = await getUserActivity(userId);
            const activityData = userActivityModel(userActivityData.data);
            setUserDataArray(activityData);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    fetchData();
  }, [userId]);

  if (userDataArray.length === 0) {
      return <div>Loading...</div>;
  }

    return <div className="activityChart">
        <ResponsiveContainer width="100%" height="100%" className="responsiveContainer">
        <BarChart
          width={500}
          height={300}
          data={userDataArray}
          margin={{
            top: 30,
            right: 10,
            left: 30,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="1 2" vertical={false} stroke="#DEDEDE"/>
          <text x={30} y={45} style={{fontSize: '16px', fontWeight: 'bold', fill: "#20253A"}}>
                Activité quotidienne
            </text>

          <XAxis dataKey="day" />
          <YAxis  tickMargin={10} tick={{fill: "#9B9EAC", strokeWidth: 0.5}} orientation="right"  tickLine={false} stroke="transparent"/>
          <Legend verticalAlign="top" iconType="circle" align="right" iconSize={8} height={80} payload={
                        [{
                            value: 'Poids (kg)',
                            color: "#282D30",
                        }, {
                            value: 'Calories brûlées (kCal)',
                            color: "#FF0101",
                        }
                        ]}/>
          <Tooltip />
          <Bar dataKey="kilogram" fill="#FFFFF" barSize={5} radius={[5, 5, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" barSize={5} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    
}

export default ActivityChart;