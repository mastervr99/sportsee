import './activityChart.scss'
import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function ActivityChart(userData){
    return <div className="activityChart">
        <ResponsiveContainer width="100%" height="100%" className="responsiveContainer">
        <BarChart
          width={500}
          height={300}
          data={data}
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

          <XAxis dataKey="name" />
          <YAxis  tickMargin={10} tick={{fill: "#9B9EAC", strokeWidth: 0.5}} orientation="right" tickLine={false} stroke="transparent"/>
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
          <Bar dataKey="pv" fill="#FFFFF"  />
          <Bar dataKey="uv" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    
}

export default ActivityChart;