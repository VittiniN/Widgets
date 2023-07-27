import React from 'react';
import MetricCard from '../Components/Metric';


export const pieChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const RADIAN = Math.PI / 180;

export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}): React.ReactNode => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return React.createElement(
    'text',
    {
      x,
      y,
      fill: 'white',
      textAnchor: x > cx ? 'start' : 'end',
      dominantBaseline: 'central',
    },
    `${(percent * 100).toFixed(0)}%`
  );
};


export const widgetDatas = [
    {
      name: "Jan",
      ActiveMatters: 20,
      PostedMatters: 2,
       },
    {
      name: "Feb",
      ActiveMatters: 30,
      PostedMatters: 40,
    },
    {
      name: "March",
      ActiveMatters: 70,
      PostedMatters: 20,
    },
    {
      name: "April",
     ActiveMatters: 30,
      PostedMatters: 85,
    },
]
  
  
  export const lineChart = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },



  ]
  
  // export const MetricCards = [
  //   {
  //     "title": String,
  //     "value": Number
  //   }
  // ];
  
  
  
  
  
  
  