import './performanceChart.scss';
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];


function PerformanceChart(userdata){
    return <div className='performanceChart' >
        <ResponsiveContainer width="80%" height="100%">
          <RadarChart cx="60%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis
						tickCount={6}
						tick={false}
						axisLine={false}
					/>
            <Radar name="Mike" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
    </div>
}

export default PerformanceChart