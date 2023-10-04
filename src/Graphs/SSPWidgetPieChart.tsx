import React from "react";

import { PieChart, Pie,  Cell, } from 'recharts';


interface SSPBWidgetPieChartProps {
  COLORS?: string[]; 
  dataKey?: { dataKey: string }[];
  type?: string;
  // WIDTH?: number;
  // HEIGHT?: number;
  }

export const PieChartData = [
  { name: "FL", value: 30 },
  { name: "RI", value: 40 },

  { name: "Ma", value: 40 },
  { name: "CA", value: 40 },
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
  
  const DEFAULT_FONTSIZE = "13px"; 
  const DEFAULT_FILL = "white";

  return (
    <text x={x} y={y} fill={DEFAULT_FILL}textAnchor="middle" dominantBaseline="middle" fontSize={DEFAULT_FONTSIZE}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};








 const DEFAULT_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
//  const DEFAULT_WIDTH = 400;
//  const DEFAULT_HEIGHT = 250;
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