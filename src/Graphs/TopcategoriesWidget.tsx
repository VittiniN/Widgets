import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Topcatergories } from "../Entities/widgetDataUtils";

interface LineChartProps {
  data?: any[];
  lines?: { dataKey: string }[];
  colors?: string[];
  fontWeight?: number | string;
  stroke?: number | string;
  fill?: string;
}

const Default_Font_Weight = "bold";
const Default_Stroke = "black";
const DEFAULT_FILL = "black";

const Linechart: React.FC<LineChartProps> = ({
  fontWeight = Default_Font_Weight,
  stroke = Default_Stroke,
  fill = DEFAULT_FILL,
  data = [],
  lines = [],
  colors = [],
}) => {
  return (
    <LineChart width={400} height={300} data={Topcatergories}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontWeight, fill }} />
      <YAxis tick={{ fontWeight, fill }} />

      {lines.map((line, index) => (
        <Line
          key={line.dataKey}
          type="monotone"
          dataKey={line.dataKey}
          stroke={colors[index] || "black"}
          activeDot={{ r: 8 }}
        />
      ))}
    </LineChart>
  );
};

export default Linechart;
