import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import  {widgetDatas} from '../../Entities /widgetData'; 

const ActiveVsMattersBarChart = () => {
  return (
    <BarChart width={400} height={250} data={widgetDatas}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ActiveMatters" fill="#8884d8" />
      <Bar dataKey="PostedMatters" fill="#82ca9d" />
    </BarChart>
  );
};

export default ActiveVsMattersBarChart;
