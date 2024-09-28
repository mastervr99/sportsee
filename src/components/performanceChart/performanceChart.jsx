import './performanceChart.scss';
import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { userPerformanceModel } from '../../services/models/userPerformanceModel';
import { getUserPerformance } from '../../services/userService';

function PerformanceChart({userId}){

  let [userDataArray, setUserDataArray] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

      async function fetchData() {
        try {

            const userData = await getUserPerformance(userId);


          if (typeof userData === 'string') {
              setError(userData);
          } else {
            const performanceData = userPerformanceModel(userData.data);
            setUserDataArray(performanceData);
          }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    fetchData();
  }, [userId]);

  if (error) {
    return <div className='error_message'>{error}</div>;
  }

  if (userDataArray.length === 0) {
      return <div>Loading...</div>;
  }

  const translater = (kind) => {
    const translations = {
      'cardio': 'Cardio',
      'energy': 'Energie',
      'endurance': 'Endurance',
      'strength': 'Force',
      'speed': 'Vitesse',
      'intensity': 'Intensité'
    };
    return translations[kind] || 'Inconnu';
  };

  userDataArray = userDataArray
  .map(item => ({
    value: item.value,
    kind: translater(item.kind),
  }))
  .reverse();

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