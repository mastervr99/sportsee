import './scoreChart.scss'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
];
const COLORS = ['#FF0000'];

function ScoreChart(userdata){
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
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <text
                    x={130}
                    y={135}
                    style={{fontSize: '15px', fontWeight: '500', color: "#20253A"}}
                >
                    12%
                </text>
                <text
                    x={130}
                    y={155}
                    style={{fontSize: '15px', fontWeight: '500', color: "#20253A"}}
                >
                    de votre
                </text>
                <text
                    x={130}
                    y={175}
                    style={{fontSize: '15px', fontWeight: '500', color: "#20253A"}}
                >
                    objectif
                </text>
            </PieChart>
        </ResponsiveContainer>
    </div> 
}

export default ScoreChart