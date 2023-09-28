import React from "react";

import { PieChart, Pie, Sector, Cell, } from 'recharts';
import { PieChartData } from "../Entities/widgetDataUtils";


interface SSPBWidgetPieChartProps {
    // COLORS?: (string | number)[]; 
    entry?: (string | number)[]; 
  }


  const SSPBWidgetPieChart: React.FC<SSPBWidgetPieChartProps> = ({ entry }) => {
    return (
      <PieChart width={400} height={250}>
        <Pie
          cx={200}
          cy={100}
          labelLine={false}
          label={(entry: any) => renderCustomizedLabel(entry)} // You need to define renderCustomizedLabel
          outerRadius={80}
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
  
  
  
  
  
  


