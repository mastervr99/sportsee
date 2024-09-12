import './sessionChart.scss'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

function SessionChart(userData){
    return <div className='sessionChart'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={200}
            height={200}
            data={data}
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
            <XAxis dataKey="day" tickLine={false} tick={{fill: "#FBFBFB80"}} stroke={'#FF0101'} tickMargin={10} fontSize={12}/>
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="pv" stroke="#8884d8" activeDot={{ r: 3, strokeWidth: 2, stroke: 'white' }} strokeWidth={2}  dot={false} />
          </LineChart>
        </ResponsiveContainer>
    </div>
    
}

export default SessionChart