import React from "react";

import { PieChart, Pie,  Cell, } from 'recharts';
// 

interface SSPBWidgetPieChartProps {
  COLORS?: string[]; 
  dataKey?: { dataKey: string }[];
  type?: string;

}

export const PieChartData = [
  { name: "apple", value: 30 },
  { name: "banana", value: 40 },

  { name: "banana", value: 40 },
  { name: "banana", value: 40 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  const percentage = `${(percent * 50).toFixed(0)}%`;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
      {percentage}
    </text>
  );
};








 const DEFAULT_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const SSPBWidgetPieChart: React.FC<SSPBWidgetPieChartProps> = ({ COLORS = DEFAULT_COLORS}) => {
  return (
    <PieChart width={400} height={250}>
      <Pie
        cx={200}
        cy={100}
        labelLine={false}
        outerRadius={80}
        label={renderCustomizedLabel}

        fill="#8884d8"
        dataKey="value"
        data={PieChartData}
      >
        {PieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default SSPBWidgetPieChart;