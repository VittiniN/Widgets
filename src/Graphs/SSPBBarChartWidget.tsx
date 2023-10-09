import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  DefaultTooltipContent,
} from "recharts";

interface SSPBBarChartWidgetProps {
  fontWeight?: string;
  fontSize?: number;
  fill?: string;
  data?: any[];
}

const DEFAULT_FONT_WEIGHT = "bold";
const DEFAULT_FONT_SIZE = "14px";
const DEFAULT_FILL = "black";
const SSPBBarChartWidget: React.FC<SSPBBarChartWidgetProps> = ({
  fontWeight = DEFAULT_FONT_WEIGHT,
  fontSize = DEFAULT_FONT_SIZE,
  fill = DEFAULT_FILL,
  data,
}) => {
  return (
    <div className="bar_chart_chart">
      <BarChart width={400} height={260} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontWeight, fontSize, fill }} />

        <YAxis tick={{ fontWeight, fill, fontSize }} />
        <DefaultTooltipContent />
        <Bar dataKey="ActiveMatters" fill="#DF6D04" />
        <Bar dataKey="PostedMatters" fill="#256eff" />
      </BarChart>
    </div>
  );
};

export default SSPBBarChartWidget;
