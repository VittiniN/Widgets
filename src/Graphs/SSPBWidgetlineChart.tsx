import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";

interface LinechartProps {
  dataKeys: string[]; 
  colors: string[];
  data?: any[]; 
  fontWeight?: string;
  fill?: string;
  fontSize?: number;
  
  // right now i am using data any because if i was to use the accutal dummy data 
  // fron the widgetUTLI it will make this into a widget 
}

const DEFAULT_FONTWEIGHT = "bold";
const DEFAULT_FILL = "black";
const DEFAULT_FONT_SIZE = "14px";


const SSPBWidgetlineChart: React.FC<LinechartProps> = ({ dataKeys, colors, data , fontWeight = DEFAULT_FONTWEIGHT, fill=DEFAULT_FILL}, fontSize=DEFAULT_FONT_SIZE) => {
  return (
    <LineChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  tick={{fontWeight, fill, fontSize}} />
      <YAxis tick={{fontWeight, fill, fontSize}} />
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