import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
DefaultTooltipContent,
} from "recharts";
import { activeVsMatters_Widget } from "../Entities/widgetDataUtils";


interface ActiveVsMattersBarChartProps {

}



const ActiveVsMattersBarChart = () => {
  return (
    <div className="bar_chart_chart">
      <BarChart width={400} height={260} data={activeVsMatters_Widget}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontWeight: "bold", fontSize: "14px", fill: "black" }}
        />

        <YAxis tick={{ fill: "black" }} />
        <DefaultTooltipContent />

        <Bar dataKey="ActiveMatters" fill="#DF6D04" />
        <Bar dataKey="PostedMatters" fill="#256eff" />
      </BarChart>
    </div>
  );
};

export default ActiveVsMattersBarChart;
