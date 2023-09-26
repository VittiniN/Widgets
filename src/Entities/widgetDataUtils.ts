// import React from 'react';


// export const pieChartData = [
//   { name: 'Miami', value: 100 },
//   { name: 'Broward County', value: 300 },
//   { name: 'Sunrise', value: 250 },
//   { name: 'Medley', value: 200 },
// ];

// const RADIAN = Math.PI / 180;

// export const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }: {
//   cx: number;
//   cy: number;
//   midAngle: number;
//   innerRadius: number;
//   outerRadius: number;
//   percent: number;
//   index: number;
// }): React.ReactNode => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return React.createElement(
//     'text',
//     {
//       x,
//       y,
//       fill: 'white',
//       textAnchor: x > cx ? 'start' : 'end',
//       dominantBaseline: 'central',
//     },
//     `${(percent * 100).toFixed(0)}%`
//   );
// };


export const activeVsMatters_Widget = [
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
    // {
    //   name: "April",
    //  ActiveMatters: 30,
    //   PostedMatters: 85,
    // },
]
  
export const Topcatergories = [
  { name: "jan", Jan: 10, Feb: 2, Mar: 43 },
  { name: "Feb", Jan: 30, Feb: 10, Mar: 3 },
  { name: "Mar", Jan: 10, Feb: 32, Mar: 2 },
];

  

export const interestformssubmitted = [
  { name: "Jan", Jan: 20, Feb: 30, Mar: 60 },
  { name: "Feb", Jan: 20, Feb: 12, Mar: 10 },
  { name: "Mar", Jan: 30, Feb: 5, Mar: 3 },
  // // { name: "Apr", Jan: 1, Feb: 12, Mar: 13 },
];





  
  
  
  
  export {}