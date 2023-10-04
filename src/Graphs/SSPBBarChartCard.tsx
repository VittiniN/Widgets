import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  DefaultTooltipContent,
} from "recharts";
import { activeVsMattersData } from "../Entities/widgetDataUtils";


interface SSPBBarChartCardProps {

  fontWeight?: number;
  fontSize?: number;
  fill?: string;


}


const DEFAULT_FONT_WEIGHT="bold"
const DEFAULT_FONT_SIZE="14px"
const DEFAULT_FILL="black"
const SSPBBarChartCard: React.FC<SSPBBarChartCardProps> = ({
  fontWeight = DEFAULT_FONT_WEIGHT,
  fontSize = DEFAULT_FONT_SIZE,
  fill = DEFAULT_FILL,
}) => {



  return (
    <div className="bar_chart_chart">
      <BarChart width={400} height={260} data={activeVsMattersData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{fontWeight,fontSize,fill  }}
          />

        <YAxis tick={{ }} />
        <DefaultTooltipContent />

        <Bar dataKey="ActiveMatters" fill="#DF6D04" />
        <Bar dataKey="PostedMatters" fill="#256eff" />
      </BarChart>
    </div>
  );
};

export default SSPBBarChartCard;
