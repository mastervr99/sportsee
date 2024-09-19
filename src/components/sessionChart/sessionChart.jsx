import './sessionChart.scss'
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userAverageSessionsModel } from '../../services/models/userAverageSessionsModel';
import { getUserAverageSessions } from '../../services/userService';
import SessionTooltip from './sessionToolTip';


function SessionChart({userId}){
    
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {

      async function fetchData() {
        try {

            const userData = await getUserAverageSessions(userId);
            const sessionsData = userAverageSessionsModel(userData.data);
            setUserDataArray(sessionsData);
            console.log(sessionsData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    fetchData();
  }, [userId]);

  if (userDataArray.length === 0) {
      return <div>Loading...</div>;
  }

    return <div className='sessionChart'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={200}
            height={200}
            data={userDataArray}
            margin={{
              top: 70,
              right: 10,
              left: 10,
              bottom: 20,
            }}
            className='linechart'
          >
            <text
              x={30}
              y={30}
              style={{fontSize: '14px', fill: "#FBFBFB80"}}
            >
              Durée moyenne des
            </text>
            <text
              x={30}
              y={50}
              style={{fontSize: '14px', fill: "#FBFBFB80"}}
            >
              session
            </text>                
            <XAxis dataKey="day" tickLine={false} tick={{fill: "#FBFBFB80"}} stroke={'#FF0101'} tickMargin={10} fontSize={12} />
            <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
            <Tooltip content={<SessionTooltip />}  cursor={false} />
            <Line type="natural" dataKey="sessionLength" stroke="white" activeDot={{ r: 3, strokeWidth: 2, stroke: 'white' }} strokeWidth={2}  dot={false} />
          </LineChart>
        </ResponsiveContainer>
    </div>
    
}

export default SessionChart