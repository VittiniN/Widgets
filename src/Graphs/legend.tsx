
import React from 'react';
import { Legend } from 'recharts';

interface BarChartLegendProps {
  values: string[];
  colors: string[];
  type?: string;
}


interface RechartsPayload {
  value: string;
  type: 'line' | 'square' | 'circle'; 
  color: string;
}

const BarChartLegend: React.FC<BarChartLegendProps> = ({ values, colors, type }) => {
  const payLoad: RechartsPayload[] = values.map((value, index) => ({
    value,
    type: 'square' || 'circle', 
    color: colors[index] || "#000000",
  }));

  return (

        <Legend
      wrapperStyle={{ marginTop: "14px" }}
      payload={payLoad}
    />
  );
}

export default BarChartLegend;