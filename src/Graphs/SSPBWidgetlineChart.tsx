import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import { Topcatergories } from "../Entities/widgetDataUtils";

interface LinechartProps {
  dataKeys: string[]; // Use an array of data keys
  colors: string[];
  data: any[];
}

const SSPBWidgetlineChart: React.FC<LinechartProps> = ({ dataKeys, colors, data }) => {
  return (
    <LineChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      {dataKeys.map((dataKey, index) => (
        <Line
          key={`line-${index}`}
          type="monotone"
          dataKey={dataKey}
          stroke={colors[index]}
          activeDot={{ r: 8 }}
        />
      ))}
    </LineChart>
  );
}


export default SSPBWidgetlineChart