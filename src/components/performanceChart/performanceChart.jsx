import './performanceChart.scss';
import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { userPerformanceModel } from '../../services/models/userPerformanceModel';
import { getUserPerformance } from '../../services/userService';

function PerformanceChart({userId}){

  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {

      async function fetchData() {
        try {

            const userData = await getUserPerformance(userId);
            const performanceData = userPerformanceModel(userData.data);
            setUserDataArray(performanceData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    fetchData();
  }, [userId]);

  if (userDataArray.length === 0) {
      return <div>Loading...</div>;
  }

    return <div className='performanceChart' >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart  outerRadius="70%" data={userDataArray}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind"  tick={{fontSize: 12}} stroke="#ffffff" tickLine={false}/>
            <PolarRadiusAxis
						tickCount={6}
						tick={false}
						axisLine={false}
					/>
            <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
    </div>
}

export default PerformanceChart